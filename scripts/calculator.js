let key0 = document.getElementById('key0');
let key1 = document.getElementById('key1');
let key2 = document.getElementById('key2');
let key3 = document.getElementById('key3');
let key4 = document.getElementById('key4');
let key5 = document.getElementById('key5');
let key6 = document.getElementById('key6');
let key7 = document.getElementById('key7');
let key8 = document.getElementById('key8');
let key9 = document.getElementById('key9');
let keyPlus = document.getElementById('keyPlus');
let keyMinus = document.getElementById('keyMinus');
let keyMultiply = document.getElementById('keyMultiply');
let keyDivide = document.getElementById('keyDivide');
let keyEqual = document.getElementById('keyEqual');
let keyClear = document.getElementById('keyClear');

let display = document.getElementById('display');

let number1 = 0;
let number2 = 0;
let operator = '';


keyClear.addEventListener('click', function() {
    display.innerText = '';
});

key0.addEventListener('click', function() {
    display.innerText += '0';
});
key1.addEventListener('click', function() {
    display.innerText += '1';
});
key2.addEventListener('click', function() {
    display.innerText += '2';
});
key3.addEventListener('click', function() {
    display.innerText += '3';
});
key4.addEventListener('click', function() {
    display.innerText += '4';
});
key5.addEventListener('click', function() {
    display.innerText += '5';
});
key6.addEventListener('click', function() {
    display.innerText += '6';
});
key7.addEventListener('click', function() {
    display.innerText += '7';
});
key8.addEventListener('click', function() {
    display.innerText += '8';
});
key9.addEventListener('click', function() {
    display.innerText += '9';
});
keyPoint.addEventListener('click', function() {
    display.innerText += '.';
})

keyPlus.addEventListener('click', function() {
    number1 = parseFloat(display.innerText);
    operator = '+';
    display.innerText = '';
});

keyMinus.addEventListener('click', function() {
    number1 = parseFloat(display.innerText);
    operator = '-';
    display.innerText = '';
});
keyMultiply.addEventListener('click', function() {
    number1 = parseFloat(display.innerText);
    operator = '*';
    display.innerText = '';
});
keyDivide.addEventListener('click', function() {
    number1 = parseFloat(display.innerText);
    operator = '/';
    display.innerText = '';
});
keyEqual.addEventListener('click', function() {
    number2 = parseFloat(display.innerText);
    if(operator == '+') {
        display.innerText = 'Answer: ' + ( number1 + number2 );
    }
    if(operator == '-') {
        display.innerText = 'Answer: ' + ( number1 + number2 );
    }
    if(operator == '*') {
        display.innerText = 'Answer: ' + ( number1 * number2 );
    }
    if(operator == '/') {
        display.innerText = 'Answer: ' + ( number1 / number2 );
    }
});

