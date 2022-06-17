/**
 * Calculates the average of a list of numbers.
 *
 * @param {number[]} [nums=[]] - The numbers to average.
 * @returns {number} The average of all numbers.
 */
export const average = (nums = []) => {
    let averageFinale = 0;
  for (const num of nums) {
    averageFinale += num / nums.length;
  }

  return `average: ${averageFinale}`;
};
