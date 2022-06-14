/**
 * Sums all the numbers in a list.
 *
 * @param {number[]} [nums=[]] - The numbers to sum.
 * @returns {number} The sum of all numbers in the list.
 */
 export const sum = (nums = []) => {
    let result = 0;
  for (const num of nums) {
    result += num;
  }
  return result;
};
