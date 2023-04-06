const arr = [1, 4, 6, 7, 3, 3, 8, 9, -1, 10];

const merge = (arr1, arr2, acc = []) => {
  if (arr1.length === 0) return [...acc, ...arr2];
  if (arr2.length === 0) return [...acc, ...arr1];

  if (arr1[0] < arr2[0]) {
    return merge(arr1.slice(1), arr2, [...acc, arr1[0]]);
  } else {
    return merge(arr1, arr2.slice(1), [...acc, arr2[0]]);
  }
};

console.log('-> input', arr);

const sort = (arr) => {
  if (arr.length === 1) return arr;

  const middleIdx = Math.ceil((arr.length - 1) / 2);

  const part1 = sort(arr.slice(0, middleIdx));
  const part2 = sort(arr.slice(middleIdx));

  return merge(part1, part2);
};

const result = sort(arr);
console.log('-> result', result);
