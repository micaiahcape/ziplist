function zipList (arr1, arr2) {
  const resultantArr = [];
  for (let i = 0; i < arr1.length; i++) {
    resultantArr.push(arr1[i]);
    resultantArr.push(arr2[i]);
  }
  return resultantArr;
}

function zipListTheSimpleWay (arr1, arr2) {
  const zipped = _.zip(arr1, arr2)
  return _.flatten(zipped)
}

console.log(zipList(["a", "b", "c"], [1, 2, 3]))
console.log(zipListTheSimpleWay(["a", "b", "c"], [1, 2, 3]))