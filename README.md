# Permutation Finder
Find all the distinct permutations of the integer in the provided string in descending order. If the string had non-integer characters and white spaces, an extraction of integers will be first made to obtain the correct solution.

## Assumptions
* Any number in the string are integers
* 0 is valid as in 0123 (doesn't need to be abbreviated to 123)

## Libraries/Tools used
* Written in JS for node with some ES6 syntax. Tested on Node v14.4.0
* Uses Mocha for testing

## Get Started
Run the following commands to setup, given `node` and `npm` is available:
1. Change to current directory - `cd permutation-finder`
2. Install Mocha - `npm install`
3. Run test - `npm test`

## About the Solution
I realized that to solve this problem I can use recursion.

I know that as the number of input numbers increases, the number of calculations rapidly increases

Specifically:

Input([1]) -> 1 calculation

Input([1,2]) -> 2 calculations

Input([1,2,3]) -> 6 calculations

Input([1,2,3,4]) -> 24 calculations

This pattern shows that the number of calculations (time complexity) depends in the worst case on the factorial of the count of numbers in the input.

There may be some inefficiencies in e.g. [1,1,1,1,1,1,1] - there is only one permutation, but many recursions would be explored.

There could be other edge cases like [1,1,1,1,2] which only has 5 permutations but a lot of recursions.