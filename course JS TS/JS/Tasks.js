// Find Count of Most Frequent Item in an Array
function mostFrequentItemCount(collection) {
  // Do your magic. :)

  if (!collection) {
    return 0;
  }

  let obj = {};
  return collection
    .sort((a, b) => a - b)
    .reduce((acc, curr) => {
      if (!obj[curr]) {
        obj[curr] = 1;
      } else {
        obj[curr] += 1;
      }
      acc = Math.max(...Object.values(obj));
      return acc;
    }, 0);
}

console.log(mostFrequentItemCount([1, 1, -11, -1, 23, -1]));
