//Do not change any of the function names

function multiplyByTen(num) {
  var value = num * 10;
  return value;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
  var value = num -5;
  return value;
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
  var s1Length = str1.length;
  var s2Length = str2.length;
  if(s1Length == s2Length){
    return true;
  }
  return false;
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
  if(x == y){
    return true;
  }
  return false;
  //return true if x and y are the same
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
  if(num < 90){
    return true;
  }
  return false;
  //return true if num is less than ninety
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
  if(num > 50){
    return true;
  }
  return false;
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}

function add(x, y) {
  var total = x + y;
  return total;
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
  var minus = x - y;
  return minus;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
  var d = x / y;
  return d;
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
  var m = x * y;
  return m;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
  var gR = x % y;
  return gR;
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
  if(num%2 == 0){
    return true;
  }
  return false;
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
  if(num%2 != 0){
    return true;
  }
  return false;
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
  var s = Math.pow(num, 2);
  return s;
  //square num and return the new value
  //code here
}

function cube(num) {
  var c = Math.pow(num, 3);
  return c;
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
  var rtP = Math.pow(num, exponent);
  return rtP;
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
  var rN = Math.round(num);
  return rN;
  //round num and return it
  //code here
}

function roundUp(num) {
  var rU = Math.ceil(num);
  return rU;
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
  var addEP = str + '!';
  return addEP;
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
  var cN = firstName + ' ' + lastName;
  return cN;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
  var gG = 'Hello' + ' ' + name + '!';
  return gG;
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}


//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  var gRA = width * length;
  return gRA;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
  var gTA = (base * height)/2;
  return gTA;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
  
  var gCA = Math.round(Math.PI * Math.pow(radius,2));
  return gCA;
  //return the rounded area of the circle given the radius
  //code here
}


function getRectangularPrismVolume(length, width, height) {
    var PV = length * width * height;
    return PV;
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
