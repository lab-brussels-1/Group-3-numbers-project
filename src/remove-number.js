import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

const removeNumber = () => {
  debugger;

  // read the user's number
  const newNumber = readNumber('the-num');
  // remove the user's number from the array
  // Using splice() to remove arbitrary item .It takes an index and 
  // amount of items to delete starting from that index.
  // display the new list of numbers (use the util function!)
  display('your-output',"The new list is" + listItems(numbers));
};

// !! fill in this blank with the correct DOM ID
document.getElementById('__').addEventListener('click', removeNumber);
