import { numbers } from '../numbers.js';

import { display } from '../lib/dom-io.js';

import { average } from './utils/average.js';
import { listItems } from './utils/list-items.js';

const findAverage = () => {
  debugger;
  // calculate the average of all saved numbers  (use your util function!)

  display('your-output', "average: "+ average(numbers));
  };

  // display the average in the UI


// !! fill in this blank with the correct DOM ID
document.getElementById('average-them').addEventListener('click', findAverage);
