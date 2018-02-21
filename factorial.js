var fs = require('fs');

var text = Number(fs.readFileSync('input.txt', 'utf8'));
console.log(text);
//проверка на отрицательное и дробное число
(text <0 || Number.isInteger(text)===false || text === null) ? console.log('Введено не натуральное число или ничего.') : console.log(factorial(text));

function factorial(n) {
    //n! = n * (n - 1) * (n - 2) * ...*1
    //n1 = n * (n-1)!

    return n ? n * factorial(n - 1) : 1;
}



