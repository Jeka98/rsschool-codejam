module.exports = function sumOfOther(count = []) {
  const result = [];

  for (let i = 0, len = count.length; i < len; i++) {
    let counter = 0;

    for (let j = 0, len = count.length; j < len; j++) {
      if (j !== i) {
        counter += count[j];
      }
    }
    result.push(counter);
  }
  return result;
};