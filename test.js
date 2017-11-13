'use strict';

/*alert( 'Первый кролик!' );
alert( 'Второй кролик!' );
alert( 'Третий кролик!' );
*/
// var massage = 'Hello!', user = 'Oleh', age = 18;
// massage = 'Hello!';

// var $ = 4, _ = 1;
// var massage = 'Hello';
// kek = massage;

// name = user;

/*alert($);
alert(_);
alert(q);*/

// console.log(name);

/*console.log(massage);
console.log(kek);
*/

/*var admin, name;
name = 'Ваилий';
admin = name;

alert(admin);*/

// var planet = 'Земля';
// var Petya = 'Петя';


/*console.log(typeof NaN);
typeof a;
typeof 123;
typeof {};*/
// typeof null;
// typeof funcrion(){};

// var a = "моя " + "строка";
// alert( a );

// var apples = '2';
// var oranges = '3';

// alert(+apples + +oranges);

/*for (a = 2, b = 2, c = a*b; b < 10; ++b) {
	console.log(c);
}???*/

/*for (a = 1, b = 3, c = a*b; a < 10; a++) {
	console.log(a);
}*/


/*var a = (2 - 1 == 1) && (q == 1);

var q = 1;

console.log(a);*/

// var userName = prompt('Enter your name.', '');

// alert('You entered as ' + userName);

// var question = prompt('Какое "официальное" название JS?', '');

// if (question === 'ECMAScript') {
// 	alert('Верно!');
// } else {
// 	alert('Не знаете? "ECMAScript"!');
// }

// var num = prompt('Введите число', '');

// if (num > 0) {
// 	alert('1');
// } else if (num < 0) {
// 	alert('-1');
// } else {
// 	alert('0');
// }

/*var home = prompt('Кто вы?', '');

if (home === 'админ') {
	var parol = prompt('Пароль?', '');

	if (parol === 'Черный властелин') {
		alert('Добро пожаловать домой, мой господин!');
	} else if (parol === null) {
		alert('Вход отменен');
	} else {
		alert('Вы не мой повелитель! Убирайтесь отсюда!');
	}
} else if (home === null) {
	alert('Вход отменен');
} else {
	alert('Убирайтесь отсюда! Я вас не знаю!');
}*/


/*var a = 2, b = 2;

var sum = (a + b < 4)? alert('Мало'): alert('Много');
*/

/*var login = prompt('enter your name', '');

var name = (login === 'Oleh')? alert('Oleh'):
(login === 'Sofiya')? alert('Sofiya'):
(login === '')? alert('noName'): alert('404!');

*/

/*let age = 12;

if (!(14 <= age&&age <= 90)) {
	alert('good');
} else {
	alert('bad');
}*/

/*var i;

for (i = 0; i < 3; i++) {
  alert( i );
}*/


/*Mark:
for (let x = 2; x <= 10; x++) {
	for ( let y = 2; y < x; y++) {
		if (x % y === 0) continue Mark;
	}
	alert(x);
}
*/

// let browser = prompt('Какой у вас браузер?', '')

/*if (browser === 'IE') {
	alert('О, да у вас есть IE');
} if (browser === 'Chrome') {
	alert('Да, и эти браузеры мы поддерживаем');
} if (browser === 'Firefox') {
	alert('Да, и эти браузеры мы поддерживаем');
} if (browser === 'Safari') {
	alert('Да, и эти браузеры мы поддерживаем');
} if (browser === 'Opera') {
	alert('Да, и эти браузеры мы поддерживаем');
} else {
	alert('Мы надеемся, что с вашим браузером всё ок!');
}*/

/*let num = +prompt('Введите 0, 1, 2 или 3', '');

switch (num) {

	case 0:
		alert(0);
		break;

	case 1:
		alert(1);
		break;

	case 2:
	case 3:
		alert('2, 3');
		break;

	default:
		alert('default');
}*/

/*function checkAge(age) {
  return (age > 18)||confirm('Родители разрешили?');
}

let age = prompt('Ваш возраст?', '');

if (checkAge(age)) {
  alert( 'Доступ разрешен' );
} else {
  alert( 'В доступе отказано' );
}
*/
/*
function min(a, b) {
  if (a < b) {
    return alert(a);
  } else {
    return alert(b);
  }
}

min(-1, 3);*/


/*function pow(a, b) {

	let c = a;

	for(let z = 1; z < b; z++) {
		c *= a;
	}
	return c;
}

let a = prompt('a?', '');
let b = prompt('b?', '');

if ((b > 1)&&!(b % 1)) {
  alert(pow(a, b));
} else {
  alert('Степень ' + b + ' не поддерживается, введите целую степень, большую 1');
}*/


/*function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}*/

/*function fib(n) {
	if (n > 1) {
		return fib(n - 1) + fib(n - 2);
	} else {
		return n;
	}
}

alert(fib(77));*/

/*function formul(n) {
	return n * (1 + n) / 2;
	
}

alert(formul(58));*/

/*function newFib(n) {
	let a = 1, b = 1;
	for(let i = 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}

alert(newFib(77));
*/


/*function er(n) {
	let c = (n >= 0)? n % 1: -(n % 1);
	return +c.toFixed(10);
}

let n = prompt('enter the num', '');

alert( er(n) );*/


/*let min = 5, max = 10;

function randomInteger(min, max) {
	n = min + Math.random() * (max - min);
	return Math.round(n);
}

alert (randomInteger(min, max));*/

/*let ucFirst = "sal,lacacalkcmackmaclkamckmaclamc vdv";

function t() {
	return ucFirst.charAt(0).toUpperCase() + ucFirst.slice(1);
}

alert( t() );
*/

/*function checkSpam(str) {
	if (str.toLowerCase().indexOf('viagra') + 1 || str.toLowerCase().indexOf('xxx') + 1) {
		return true;
	} return false;
}

alert(checkSpam('buy Viagra'));

*/

/*function truncate(str, maxlength) {
  return (str.length > maxlength) ? str.slice(0, maxlength - 3) + '...' : str;
}

alert( truncate('Создайте функцию, которая проверяет длину строки str, и если она', 20) );
*/

/*function extractCurrencyValue(str) { return +str.slice(1) }

alert( extractCurrencyValue('$230') );
*/

/*function round(n) {
	return ( (n ^ 0) === n )? true : false;
}

alert( round(123) );*/



/*function isEmpty(obj) {
	for (let key in obj1) {
		return true;
	} return false;
}

let obj1 = {}
obj1.file = 21;

alert( isEmpty(obj1) );
*/

/*function sum(obj) {
	let a = 0;
	let c;
	for (let name in obj) {
		if (a < obj[name]) {
			a = obj[name];
			c = name;
		}
	}
	return c;
}

let salaries = {
  "Вася": 100,
  "Петя": 30,
  "Даша": 20
}

alert( sum(salaries) );
*/


/*function multiplyNumeric(obj) {
	for (let num in obj) {
		if ( isNumeric( obj[num] ) ) {
			obj[num] *= 2;
		}
	}
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

for (let num in menu) {
	alert(num + ': ' + menu[num]);	
}
*//*let lastL = goods.length - 1;
alert( goods[lastL] );*/

/*let styles = ['Jaz', 'Bluz'];
styles.push('Rock&Roll');
styles[styles.length - 2] = 'Classic';
alert( styles.shift() );
styles.unshift('Rep', 'Reggi');


for (i = 0; i < styles.length; i++) {
	alert( styles[i] );
}*/

/*function isNumeric(n) {
  return !isNaN( parseFloat(n) ) && isFinite(n);
}

let ans = prompt('enter a namber', '');
let mass = [];
let sum = 0;

while (isNumeric(ans)) {	
	mass.push(ans);
	sum += +ans;
	ans = prompt('enter a namber', '');
}

alert( sum );*/
/*
arr = ["test", 2, 1.5, false];

alert( arr.indexOf() );*/

/*let cloneM = [];
let massiv = [5, 4, 3, 8, 0];

for (i = 0; i < massiv.length; i++) {
	cloneM.push( massiv[i] );
	alert( cloneM[i] );
	if ( massiv[i] < massiv[i + 1] ) break;
}
*/


/*let numbers = [];

for (let n = 1; n < 101; n++) {
	numbers.push(n);
}

for (let p = 1; p < numbers.length; p++) {
	let simple = numbers[p];
	for (let k = p + 1; k < numbers.length; k++) {
		if ( numbers[k] % simple === 0 ) {
			numbers.splice(k, 1);
			k -= 1;
		} 
	}
}
let sum = 0;

for (let d = 0; d < numbers.length; d++) {
	sum += numbers[d];
}

alert(sum);*/

/*function camelize(str) {
	let mastr = str.split('-');	

	for (let e = 0; e < mastr.length; e++) {
		mastr[e] = mastr[e].charAt(0).toUpperCase() + mastr[e].slice(1);
	}

	let newStr = mastr.join('');
	return newStr;
}

alert( camelize('list-style-image') );*/
/*
function removeClass(obj, cls) {
	let mass = obj.className.split(' ');


	for(let el = 0; el < mass.length; el++) {
		if ( mass[el] === cls ) {
			mass.splice(el, 1);
			el--;
		}
	}

	obj.className = mass.join(' ');
}

let obj = {
  className: 'open menu open'
}

removeClass(obj, 'menu');
alert(obj.className);
*/
/*
function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++){
		if ( a > arr[i] || b < arr[i]) {
			arr.splice(i--, 1);
		}
	}
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert( arr )*/

/*let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

for (let i = 0; i < strings.length; i++) {
	if ( ~strings.indexOf(strings[i], i + 1) ) strings.splice(i--, 1);
}

alert(strings);*/

/*let m = [ 1, 2, -3, -4, 5 ];

function getSums(arr) {
	let massS = [];

	arr.reduce(function (sum, cur) {
		sum += cur;
		massS.push(sum);
		return sum;
	}, 0);

	return massS;
}

alert( getSums(m) );*/

/*var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
  for (var key in arr) arr[key]++;
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
  for (var i = 0; i < 10000; i++) f(arr);
}

console.time("All Benchmarks");

console.time("walkIn");
bench(walkIn);
console.timeEnd("walkIn");

console.time("walkLength");
bench(walkLength);
console.timeEnd("walkLength");

console.timeEnd("All Benchmarks");
*/

/*var now = new Date();
alert( now.getFullYear() );
*/

/*function filterThis(arr, func) {
  const newMas = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (func(value)) newMas.push(value);
  }

  return newMas;  
}

function Between(a, b) {
  return (x) => (x >= a)&&(x <= b);
}

function inArray(mas) {
  return (x) => ~mas.indexOf(x);
}

const mas = [1, 2, 3, 4, 5, 6, 7];

console.log(filterThis(mas, Between(2, 6)));
console.log(filterThis( mas, inArray([2, 6, 10]) ) );
*/

/*let shooter = ( x => () => console.log( x ) )(8);

shooter();*/

/*const calculator = {
	read: function() {
		this.value1 = +prompt('Введите первое значение', '');
		this.value2 = +prompt('Введите второе значение', '');
	},
	sum: function() {
		alert(this.value1 + this.value2);
	},
	mul: function() {
		alert(this.value1 * this.value2);
	}
}

calculator.read();
calculator.sum();
calculator.mul();*/

/*function sum(a) {

	let value = a;

	function fn(b) {
		value += b;
		return fn;
	}

	fn.toString = function() {
		return value;
	}

	return fn;
}

console.log(sum(1)(2)(3) == 6);*/

/*function Object(name, age, city) {
	this.name = name;
	this.age = age;
	this.city = city;
}

const Person = new Object('Oleh', 18, 'Kiev');

console.log(Person);*/

/*function Calculator() {
	this.read = function() {
		this.value1 = +prompt('Введите первое значение', '');
		this.value2 = +prompt('Введите второе значение', '');
	}
	this.sum = function() {
		alert(this.value1 + this.value2);
	}
	this.mul = function() {
		alert(this.value1 * this.value2);
	}
}

const calculate = new Calculator();

calculate.read();
calculate.sum();
calculate.mul();*/

/*function Accumulator(startValue) {
	this.value = startValue;
	this.read = function() {
		this.value += +prompt('Введите первое значение', 0);
	}
}

const acc = new Accumulator(1);
acc.read();
acc.read();
alert(acc.value);*/

/*function Calc() {
	const operations = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b 
	}

	this.calculate = function(str) {
		const n = str.split(' ');
		let a = +n[0];
		let op = n[1];
		let b = +n[2];

		if (!operations[op] || isNaN(a) || isNaN(b)) return NaN;

		return operations[op](a, b);
	}

	this.addMetod = function(name, func) {
		operations[name] = func;
	}
}

const calc = new Calc();

alert( calc.calculate('3 + 7') );

calc.addMetod('*', (a, b) => a * b);

alert( calc.calculate('3 * 2'));*/

/*
function User(fullName) {
  	this.fullName = fullName;

  	Object.defineProperties(this, {
  		firstName: {

  			get: function() {
  				return this.fullName.split(' ')[0];
  			},

  			set: function(value) {
  				this.fullName = value + ' ' + this.lastName;
  			}
  		},

  		lastName: {
  			get: function() {
  				return this.fullName.split(' ')[1];
  			},

  			set: function(value) {
  				this.fullName = this.firstName + ' ' + value;
  			}
  		}
  	});
}

const vasya = new User("Василий Попкин");

console.log( vasya.firstName ); // Василий
*/

/*function Article() {
  	this.created = new Date();
  	Article.counter++;
  	Article.lastDate = this.created;
}

Article.counter = 0;

Article.showStats = function() {
	alert('Всего: ' + Article.counter + ', Последняя: ' + Article.lastDate);
}

new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();*/

/*function sum() {
	return [].reduce.call(arguments, (a, b) => a + b);
}

function mul() {
	return [].reduce.call(arguments, (a, b) => a * b);
}

function applyAll(func, ...args) {
	return func(...args);
}

function applyAll(func) {
	return func.apply(this, [].slice.call(arguments, 1));
}

console.log(applyAll(sum, 1, 2, 3, 4, 5));*/

const mas = {
	firstName: 'Вася',
	talk: function(someW) {
		console.log(this.firstName + ', ' + someW);
	}
}

const dialog = mas.talk.bind(mas);

setTimeout(dialog('верни мои деньги'), 1000);