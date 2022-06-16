import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

debugger;

const addNumber = () => {
  debugger;

  // read the user's number
const newNumbers= readNumber('the-num');
  // add it to the array of numbers
numbers.push(newNumbers);
  // generate and display a string listing all numbers

display('your-output', listItems(numbers));
};

// !! fill in this blank with the correct DOM ID
document.getElementById('add-it').addEventListener('click', addNumber);
