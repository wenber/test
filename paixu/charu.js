function insert(Arr) {
    // 临时变量
    var temp = 0;
    var j = 0;
    var len = Arr.length;

    // 主体
    for (var i = 1; i < len; i++) {
        // i - 1 =0;初始是认为第0个点已经排好序，从第1个点开始插入排序
        if (Arr[i - 1] > Arr[i]) {
            // 保存当前值和下标值, 大数移动
            temp = Arr[i];
            j = i;
            // 移动数组内部元素，从后往前插入
            while (j >= 1 && Arr[j - 1] > temp) {
                Arr[j] = Arr[j - 1];
                j--;
            }
            // 插入目标元素
            Arr[j] = temp;
        }
    }
}
