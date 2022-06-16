import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

const removeNumber = () => {
  // read the user's number
  const newNumber = readNumber('the-num');
  // remove the user's number from the array

  // Using splice() to remove arbitrary item .It takes an index and
  // amount of items to delete starting from that index.
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === newNumber) {
      numbers.splice(i, 1);
    }
  }
  // display the new list of numbers (use the util function!)
  display('your-output','The new list is'+ listItems(numbers));
};

// !! fill in this blank with the correct DOM ID
document.getElementById('remove-it').addEventListener('click', removeNumber);
