const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  }

}
//yay;
const sum = (arr) => {
  if (!Array.isArray(arr)) return;
  let totalNumber = 0;
  for (let i = 0, l = arr.length; i < l; i++) {
    totalNumber += arr[i];
  }
  return totalNumber;


}

const comboSum = (arr, sum) => {
  for (i = 0; i < arr.length; i++) {
    for (n = 0; n < arr.length; n++) {
      if ((arr[i] + arr[n] == sum) && (i != n)) {
        return true
      }
    }
  }
}



module.exports = {
  isEven,
  sum,
  comboSum
}


let arr = [1, 2, 3, 8, 21]
console.log(comboSum(arr, 10));