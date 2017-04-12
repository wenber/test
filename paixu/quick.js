function quickSort(Arr, left, right) {
    if (left >= right) {
        return;
    }

    // 选取第一个作为比较点
    int temp = Arr[left];
    int i = left;
    int j = right;

    // 交换左右点
    while (i < j) {
        // 必须从右侧先开始，否则会出错
        while(temp <= Arr[j] && i < j) {
            j--;
        }
        while(temp >= Arr[i] && i < j) {
            i++;
        }

        if (i < j) {
            Arr[j] = Arr[i] ^ Arr[j];
            Arr[i] = Arr[i] ^ Arr[j];
            Arr[j] = Arr[i] ^ Arr[j];
        }
    }

    // 交换基点
    Arr[left] = Arr[i];
    Arr[i] = temp;

    // 递归调用
    quicksort(Arr, left, i - 1);
    quicksort(Arr, i + 1, right);
};
