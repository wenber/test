
$('#img-input')
    .on('change', function() {
        var file = this.files[0];

        // 相关条件过滤
        if (canProcess.apply(this, [file])) {
            // 开始处理
            var orientation;
            EXIF.getData(file, function() {
                orientation = EXIF.getTag(this, 'Orientation');
            });
            var reader = new FileReader();
            reader.onload = function(e) {
                getImgData(e.target.result, orientation, function(data) {
                    //这里可以使用校正后的图片data了
                    var $image = $('#image');
                    $image.attr('src', data);
                    $('.img-container').css('height', $(window).height())
                        .removeClass('hide');

                    if (cropper && cropper.destroy) {
                        cropper.clear();
                        cropper.destroy();
                        $('.img-show').attr('src', '#').css('display', 'none');
                    }
                    cropper = new Cropper(
                        $image[0], {
                            aspectRatio: 75 / 120,
                            viewMode: 3,
                            dragMode: 'move',
                            minCropBoxWidth: 200,
                            scalable: false,
                            zoomable: false,
                            zoomOnTouch: false,
                            zoomOnWheel: false,
                            autoCropArea: 0.9,
                            built: function() {
                                this.cropper.rotate(degree);
                            },
                            cropend: function() {}
                        }
                    );
                });
            }
            reader.readAsDataURL(file);
        }
    })
    .on('tap', function() {
        // 如果已经生成了一次，则此时要先清除
        this.value = '';
    })

/**
 * 判断是否可以进行裁剪处理
 * @param {File} file 文件对象
 * @return {boolean}
 */

function canProcess(file) {
    if (!file.type.match(/image\/.*/i)) {
        alertErr('图片格式无效');
        return false;
    }
    fileName = file.name;
    imageType = file.type;
    var size = file.size / 1024;
    if (size > 4000) {
        this.value = '';
        alertErr('图片已超过4M,请重新选择');
        return false;
    }
    if (!window.FileReader) {
        var url = getObjectURL(file);
        $('#img-show').attr('src', url).show();
        return false;
    }
    return true;
}



// @param {string} img 图片的base64
// @param {int} dir exif获取的方向信息
// @param {function} next 回调方法，返回校正方向后的base64
function getImgData(img, dir, next) {
    var image = new Image();
    image.onload = function() {
        var degree = 0,
            drawWidth, drawHeight, width, height;
        drawWidth = this.naturalWidth;
        drawHeight = this.naturalHeight;
        //以下改变一下图片大小
        var maxSide = Math.max(drawWidth, drawHeight);
        if (maxSide > 1024) {
            var minSide = Math.min(drawWidth, drawHeight);
            minSide = minSide / maxSide * 1024;
            maxSide = 1024;
            if (drawWidth > drawHeight) {
                drawWidth = maxSide;
                drawHeight = minSide;
            } else {
                drawWidth = minSide;
                drawHeight = maxSide;
            }
        }
        var canvas = document.createElement('canvas');
        canvas.width = width = drawWidth;
        canvas.height = height = drawHeight;
        var context = canvas.getContext('2d');
        //判断图片方向，重置canvas大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
        switch (dir) {
            //iphone横屏拍摄，此时home键在左侧
            case 3:
                degree = 180;
                drawWidth = -width;
                drawHeight = -height;
                break;
            //iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
            case 6:
                canvas.width = height;
                canvas.height = width;
                degree = 90;
                drawWidth = width;
                drawHeight = -height;
                break;
            //iphone竖屏拍摄，此时home键在上方
            case 8:
                canvas.width = height;
                canvas.height = width;
                degree = 270;
                drawWidth = -width;
                drawHeight = height;
                break;
        }
        //使用canvas旋转校正
        context.rotate(degree * Math.PI / 180);
        context.drawImage(this, 0, 0, drawWidth, drawHeight);
        //返回校正图片
        next(canvas.toDataURL("image/jpeg", .8));
    }
    image.src = img;
}


// 确定裁剪图片事件
$('#image-ok').on('tap', function() {
    // 防止用户多次点击
    if ($(this).hasClass('gray')) {
        return false;
    }
    $(this).addClass('gray');
    if (degree) {
        cropper.rotate(-1 * degree);
    }
    // base64的大小和剪切的图片大小以及质量正相关
    base64URL = cropper.getCroppedCanvas({
        width: 480,
        height: 768
    }).toDataURL(imageType, 0.6);
    $('#img-show').attr('src', base64URL).show();
    $('.img-container').addClass('hide');
    $(this).removeClass('gray');
});
