//main.js 
import '../css/style.css';
import Data from './data.xml';

var greeter = require('./greeter.js');
document.getElementById('root').appendChild(greeter());
console.log("test");
