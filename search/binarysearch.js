function BinarySearch(srcArray, des) {
    var low = 0;　　
    var high = srcArray.length - 1;　　
    while (low <= high) {　　
        var middle = Math.floor((low + high) / 2);　　
        if (des == srcArray[middle]) {　　
            return middle;　　
        } else if (des < srcArray[middle]) {　　
            high = middle - 1;　　
        } else {　　
            low = middle + 1;　　
        }　　
    }　　
    return -1;
}