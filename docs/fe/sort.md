---
title: JavaScript常用排序
customerLayoutList: true
---

> 没有为啥，就是为了记录一下。

### 冒泡排序
  原理是：
  1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
  2. 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
  3. 针对所有的元素重复以上的步骤，除了最后一个。
  4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

``` js
  const arr = [1, 4, 3, 5, 2, 6, 8, 7];

  function bubbleSort(arr) {
    const len = arr.length;

    if(len === 0) return;

    for(let i = 0; i < len; i++) {
      for(let j = 0; j < len-i-1; j++) {
        if (arr[j] > arr[j+1]) {
          let tmp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = tmp;
        }
      }
    }
    return arr;
  }

  bubbleSort(arr)
```

### 插入排序
  原理是：
  1. 从第一个元素开始，该元素可以认为已经被排序
  2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
  3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
  4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
  5. 将新元素插入到下一位置中
  6. 重复步骤2~5

``` js
  const arr = [1, 4, 3, 5, 2, 6, 8, 7];

  function insertSort(arr) {
    const len = arr.length;

    if(len === 0) return;

    for(let i=0;i<len;i++) {
      let preIndex = i-1;
      let current = arr[i];

      while(preIndex >=0 && arr[preIndex] > current) {
        arr[preIndex+1] = arr[preIndex];
        preIndex--;
      }

      arr[preIndex+1] = current;
    }
  }

  insertSort(arr)
```

### 选择排序
  原理是：
  1. 每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置。
  2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
  3. 以此类推，直到全部待排序的数据元素排完。
  4. 选择排序是不稳定的排序方法。

``` js
  const arr = [1, 4, 3, 5, 2, 6, 8, 7];

  function selectSort(arr) {
    const len = arr.length;

    if(len === 0) return;

    for (let i=0;i<len;i++) {
      for(let j=i+1;j<len;j++) {
        if(arr[j] < arr[i]) {
          let tmp = arr[j];
          arr[j] = arr[i];
          arr[i] = tmp;
        }
      }
    }

    return arr;
  }

  selectSort(arr);
```

### 快速排序
  原理是:
  1. 通过一趟排序将要排序的数据分割成独立的两部分；
  2. 中一部分的所有数据都比另外一部分的所有数据都要小；
  3. 然后再按此方法对这两部分数据分别进行快速排序；
  4. 整个排序过程可以递归进行，以此达到整个数据变成有序序列。

``` js
  const arr = [1, 4, 3, 5, 2, 6, 8, 7];

  function quickSort(arr) {
    const len = arr.length;

    if(len <= 1) return arr;

    const middleIndex = Math.floor(arr.length / 2);
    const middleNum = arr[middleIndex];
    const leftArr = [];
    const rightArr = [];

    for (let i=0;i<len;i++) {
      if(arr[i] > middleNum) {
        rightArr.push(arr[i])
      } else if (arr[i] < middleNum) {
        leftArr.push(arr[i])
      }
    }

    return quickSort(leftArr).concat(middleNum, quickSort(rightArr));
  }

  quickSort(arr)
```