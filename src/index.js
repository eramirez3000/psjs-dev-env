

import './index.css';
import numeral from  'numeral';
/*eslint no-debugger: "error"*/
debugger; //eslint-disable-line no-debugger
 const courseValue = numeral(1000).format('C$0,0.00');
 console.log(`I would pay ${courseValue} for this awesome course !`); // eslint-disable-line no-console
