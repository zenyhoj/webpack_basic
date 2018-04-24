
export var add = function add(a,b){
  return a + b;
};

export var subtract = function subtract(a,b){
  return a - b;
};

export var multiply = function multiply(a,b){
  return a * b;
};

export var divide = function divide(a,b){
  return a / b;
};

export var employeeName = function(name){
  return "Hello " + name;
};

// NOTE: export them before use: named exports, could be done by function statement or with the below syntax
// syntax:
//export { add, subtract, multiply, divide };
