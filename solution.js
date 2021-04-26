function solution(input) {
  const numberPattern = /\d/g;
  if (!numberPattern.test(input))
    throw new Error("Oops, no integer in your input");

  const numbers = input.match(numberPattern)
                       .sort((a, b) => b - a);

  if (numbers.length === 1) {
    return numbers[0];
  } else {
    let permutations = [];

    for (let i = 0; i < numbers.length; i++) {
      const frontDigit = numbers[i];

      const restDigits = [...numbers];
      restDigits.splice(i, 1);

      let restResults = solution(restDigits.join("")).split(",");
      let finalResults = restResults.map((restResult) => frontDigit + restResult);
      permutations = permutations.concat(finalResults);
    }

     permutations = Array.from(new Set(permutations)).join(',');

    return permutations;
  }
}

module.exports = solution;

// 👉 Head to ./test/solution.test.js to see test