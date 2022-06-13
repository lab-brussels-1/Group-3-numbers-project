import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { sum } from './utils/sum.js';

const findSum = () => {
  // add together all the saved numbers (use your util function!)
  display('your-output', sum(numbers));
  // display the sum of all numbers in the DOM
};

// !! fill in this blank with the correct DOM ID
document.getElementById('sum-them').addEventListener('click', findSum);
