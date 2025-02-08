const display = document.querySelector('#display');
const preResult = document.querySelector('#pre-result');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try{
  display.value = eval(display.value);}
  catch(err){
    display.value = "Error";
  }
}

