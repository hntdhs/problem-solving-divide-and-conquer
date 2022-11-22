function countZeroes(arr) {
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;
  
    return arr.length - firstZero
  }
//   everything after the first position of a zero will be a zero, so an array of [0, 0, 0, 0], first position is [0] and length is 4. 4-0 means four 0's.[1,1,1,1,0,0] - first position of a 0 is [4], length is 6. 6-4 = 2 0's.
  
  function findFirst(arr, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = low + Math.floor((high - low) / 2)
      if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        return mid;
      } else if (arr[mid] === 1) {
        return findFirst(arr, mid + 1, high)
      }
      return findFirst(arr, low, mid - 1)
    }
    return -1;
  }
  
// Is a time complexity of O(log N) because it cuts the data in half every time through