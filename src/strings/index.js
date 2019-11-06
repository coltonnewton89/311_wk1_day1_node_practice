const split = (str, delim) => {
  return str.split(delim);
}

const pairs = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str[i] + str[i + 1]);
  } return arr;


}

const reverse = (str) => {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

reverse('hello');

module.exports = {
  split,
  pairs,
  reverse
}