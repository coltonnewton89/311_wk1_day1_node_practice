const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  }

}

const sum = (arr) => {
  if (!Array.isArray(arr)) return;
  let totalNumber = 0;
  for (let i = 0, l = arr.length; i < l; i++) {
    totalNumber += arr[i];
  }
  return totalNumber;


}

const comboSum = (arr, sum) => {
  let newNumber = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i !== j) {
        newNum = arr[i] + arr[j]
      }
      if (newNumber === sum) {
        return true;
      } else return false;
    }
  }
}



module.exports = {
  isEven,
  sum,
  comboSum
}