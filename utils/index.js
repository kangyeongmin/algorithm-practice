// 조합
function combination(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((item, idx) => {
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const attached = combinationArr.map((v) => [item, ...v]);
    result.push(...attached);
  });
  return result;
}

// 중복조합
function combinationDup(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((item, idx) => {
    const restArr = arr.slice(idx);
    const combinationArr = combination(restArr, selectNum - 1);
    const attached = combinationArr.map((v) => [item, ...v]);
    result.push(...attached);
  });
  return result;
}

// 순열
function permutation(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((item, idx) => {
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const attached = permuationArr.map((v) => [item, ...v]);
    result.push(...attached);
  });
  return result;
}

// 중복순열
function permutationDup(arr, selectNum) {
  if (selectNum === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((item) => {
    const permutationArr = permutation(arr, selectNum - 1);
    const attached = permutationArr.map((v) => [item, ...v]);
    result.push(...attached);
  });
  return result;
}
