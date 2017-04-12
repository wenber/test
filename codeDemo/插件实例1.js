(function($) {
    // 在我们插件容器内，创造一个公共变量来构建一个私有方法
    var privateFunction = function() {
        // code here
    }
    // 通过字面量创造一个对象，存储我们需要的共有方法
    var methods = {
        // 在字面量对象中定义每个单独的方法
        init: function(options) {

            // 在每个元素上执行方法
            return this.each(function() {
                var $this = $(this);

                // 尝试去获取settings，如果不存在，则返回“undefined”
                var settings = $this.data('pluginName');

                // 如果获取settings失败，则根据options和default创建它
                if (typeof(settings) == 'undefined') {

                    var defaults = {
                        propertyName: 'value',
                        onSomeEvent: function() {}
                    }

                    settings = $.extend({}, defaults, options);

                    // 保存我们新创建的settings,实现数据持久化
                    $this.data('pluginName', settings);
                } else {
                    // 如果我们获取了settings，则将它和options进行合并（这不是必须的，你可以选择不这样做）
                    settings = $.extend({}, settings, options);

                    // 如果你想每次都保存options，可以添加下面代码：
                    // $this.data('pluginName', settings);
                }

                // 执行代码

            });
        },
        destroy: function(options) {
            // 在每个元素中执行代码
            return $(this).each(function() {
                var $this = $(this);

                // 执行代码

                // 删除元素对应的数据
                $this.removeData('pluginName');
            });
        },
        val: function(options) {
            // 这里的代码通过.eq(0)来获取选择器中的第一个元素的，我们或获取它的HTML内容作为我们的返回值
            var someValue = this.eq(0).html();

            // 返回值
            return someValue;
        }
    };

    $.fn.pluginName = function() {
        // 获取我们的方法，遗憾的是，如果我们用function(method){}来实现，这样会毁掉一切的
        var method = arguments[0];
        // 检验方法是否存在
        if (methods[method]) {
            // 如果方法存在，存储起来以便使用
            // 注意：我这样做是为了等下更方便地使用each（）
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);
            // 如果方法不存在，检验对象是否为一个对象（JSON对象）或者method方法没有被传入
        } else if (typeof(method) == 'object' || !method) {
            // 如果我们传入的是一个对象参数，或者根本没有参数，init方法会被调用
            method = methods.init;
        } else {
            // 如果方法不存在或者参数没传入，则报出错误。需要调用的方法没有被正确调用
            $.error('Method ' + method + ' does not exist on jQuery.pluginName');
            return this;
        }
        // 调用我们选中的方法
        // 再一次注意我们是如何将each（）从这里转移到每个单独的方法上的
        return method.apply(this, arguments);

    }

})(jQuery);