import { numbers } from '../numbers.js';

import { readNumber, display } from '../lib/dom-io.js';

import { listItems } from './utils/list-items.js';
import { teammates } from './choose_solution.js';

const removeNumber = () => {
  const mate = teammates();
  if (mate === 'Maria') {
    // read the user's number
    const number = readNumber('the-num');
    // remove the user's number from the array
    const removed = numbers.filter((num) => num !== number);
    numbers.splice(0, numbers.length, ...removed);
    // display the new list of numbers (use the util function!)
    display('your-output', 'Maria soulution\n' + listItems(numbers));
  } else if (mate === 'Haneefa'){
    const newNumber = readNumber('the-num');
    // remove the user's number from the array
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === newNumber) {
        numbers.splice(i, 1);
      --i;
      }
    }
    // display the new list of numbers (use the util function!)
    display('your-output', 'Haneefa solution\n' + listItems(numbers));
  }
};

// !! fill in this blank with the correct DOM ID
document.getElementById('remove-it').addEventListener('click', removeNumber);
