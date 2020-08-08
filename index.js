function mapToNegativize(arr) {
  const result = [];
  for (let el of arr) {
    result.push(el * -1);
  }
  return result;
}

function mapToNoChange(arr) {
  return arr;
}

function mapToDouble(arr) {
  const result = [];
  for (let el of arr) {
    result.push(el * 2);
  }
  return result;
}

function mapToSquare(arr) {
  const result = [];
  for (let el of arr) {
    result.push(el ** 2);
  }
  return result;
}

function reduceToTotal(arr, start=0) {
  let result = start;
  for (let el of arr) {
    result += el;
  }
  return result;
}

function reduceToAllTrue(arr) {
  for (let el of arr) {
    if (!el) return false;
  }
  return true;
}

function reduceToAnyTrue(arr) {
  for (let el of arr) {
    if (el) return true;
  }
  return false;
}