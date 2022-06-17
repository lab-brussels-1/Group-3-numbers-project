import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';

const removeNumber = () => {
  
  const newNumber = readNumber('the-num');
  // read the user's number
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === newNumber) {
      numbers.splice(i, 1);
      i--;
    }
  }
  // remove the user's number from the array
  display('your-output', listItems(numbers));
  // display the new list of numbers (use the util function!)
};

// !! fill in this blank with the correct DOM ID
document.getElementById('remove-it').addEventListener('click', removeNumber);
