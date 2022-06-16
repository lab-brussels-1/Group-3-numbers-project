/**
 * Sums all the numbers in a list.
 *
 * @param {number[]} [nums=[]] - The numbers to sum.
 * @returns {number} The sum of all numbers in the list.
 */
export const sum = (nums = []) => {
  let allnum = 0;
  for (const num of nums) {
    allnum += num;
  }
  return `sum: ${allnum}`;
};
