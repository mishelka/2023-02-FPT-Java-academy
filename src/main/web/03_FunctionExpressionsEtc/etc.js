// 'use strict';
//
// const sum1 = function (x, y) {
// 	return x + y;
// }
// const sum2 = (x, y) => {
// 	return x + y;
// }
//
// console.log(sum3(1, 2));
// console.log(sum1(1));
// console.log(sum2(1, 2));
//
// function sum3(x, y) {
// 	return x + y;
// }
//
// const a = (x, y) => x + y;
// a();

// function run() {
// 	var foo = "Foo";
// 	let bar = "Bar";
// 	console.log(foo, bar); // Foo Bar
// 	{
// 		var moo = "Mooo"
// 		let baz = "Bazz";
// 		console.log(moo, baz); // Mooo Bazz
// 	}
// 	console.log(moo); // Mooo
// 	console.log(baz); // ReferenceError
// }
// run();

// var hocico;			//undefined
// var hocico = undefined //undefined
// var nieco = null;	//null
// var tuBudeBoolean = false;

// var velmiDlheCislo = 12345678901234567;

// document.write('Hello World! ' + velmiDlheCislo);

// hocico = 'text';

// //document.write('Second line' + hocico);

// console.log('Toto ide na konzolu');

// //console.log(undefined == null);
// //console.log(undefined === null);

// var cislo = 010;
// var retazec = '10';

// console.log(cislo === retazec);
// console.log('010 + 10 = ' + (cislo + 10));
// console.log('\'10\' + 10 = ' + (retazec + 10));
// console.log(Number.MAX_VALUE);

// cislo = cislo + 10; //totozne
// cislo += 10;		//totozne

// cislo = cislo + 100;
// console.log("Cislo ma hodnotu: " + cislo);
// if (cislo < 100) {
// 	console.log("Cislo je mensie ako 100");
// } else {
// 	console.log("Cislo je vacsie alebo rovne 100");
// }

// do {
// 	console.log("Som v cykle");
// 	cislo = cislo + 2;
// } while(cislo < 200)

//5 * 1 = 5
//5 * 2 = 10
//..
//5 * 10 = 50

// var nasobitel = 7;
// for(var i=1;i<=10;i++) { // i++ je totozne i = i + 1
// 	var vysledok = nasobitel * i;
// 	// if (vysledok % 10 == 0) {
// 	// 	continue;
// 	// }
// 	console.log(nasobitel + ' * ' + i + ' = ' + vysledok);
// }


// var nasobitel = 5;
// var i=1;
// while (i<=10) {
// 	var vysledok = nasobitel * i;
// 	console.log(nasobitel + ' * ' + i + ' = ' + vysledok);
// 	i++;
// }

let num = 5;
 try {
 	//throw "Mnou vytvorena chyba";
 } catch (error) {
 	console.log("Vznikla chyba");
 	console.log(error);
 } finally {
 	console.log("Toto vykonam stale");
 }

 console.log("som za chybou");

//alert("Sprava pre pouzivatela");

 //const result = confirm("Je javascript fajn jazyk?");
 //console.log(result);

function drawLine(length = 5, character = '*') {
	if (typeof character === 'undefined') {
		character = '*';
	}
	if (typeof character !== 'string') {
		console.log("ERROR: not valid parameter for drawLine");
		return;
	}
	//character = character || '*';
	var riadok = "";
	for (let j=0;j<length;j++) { // po stlpcoch
		riadok = riadok + character;
	}
	console.log(riadok);
}

function drawSquare(length) {
	for (let i=0;i<length;i++) { //po riadkoch
		drawLine(length);
	}
}

const drawTriangle = function(length) {
	console.log(arguments[2]);
	for (let i = 0; i < length; i++) {
		// const hocico = "text";
		drawLine(i + 1, '^');
	}
	console.log(i);
	// console.log(hocico);
};

 // function drawTriangle(length) {
 // 	for (let i=0; i<length; i++) {
 // 		drawLine(i+1,'^');
 // 	}
 // }

function promptTriangle() {
	let opakovania = prompt("Aku velkost trojuholnika chces?", "5");

	opakovania = parseInt(opakovania); //parsuje aj ak je za cislom blbost
	// opakovania = Number(opakovania); // nesparsuje ak je za cislom blbost

	if (!isNaN(opakovania)) {
		//je to cislo
		console.log(opakovania);
		drawTriangle(opakovania, 'text', true, 9432432);
		//console.log('Hodnota i:' + i);
	}
}

function promptNumber() {
	let cislo = prompt("Ake cislo ti mam povedat?", "4");

	// cislo = Number(cislo); //NaN
	cislo = parseInt(cislo);

	if (!isNaN(cislo)) {
		console.log(cislo);
		digitName(cislo);
		//console.log('Hodnota i:' + i);
	}
}

let digitName = function(cislo) {
	let names = ['zero', 'one', 'two', 'three', 'four', 'five'];

	let computeResult = (digit) => names[digit];

	console.log(computeResult(cislo));
	return computeResult;
};
//digitName = digitName();
/*
console.log("DIGIT NAME:");
 console.log(digitName(0));
 console.log(digitName(4));
*/







































//znenie ulohy: http://goo.gl/TNrCrC
//prvotna kostra:
//var registerItems = {
//    "milka":1.19,
//    "egg": 0.13,
//    "milk": 0.76,
//    "ham":5.82
//};
//var cashRegisterCount = 0;
//
//var CashRegister = function() {
//    cashRegisterCount++;
//    var functions = {};
//    functions['addAmount'] = function(amount) {
//        this.amount = this.amount + amount;
//    };
//    functions['getTotal'] = function() {
//        return this.amount;
//    };
//
//    functions['scan'] = function(name,count) {
//        var itemPrice = this.items[name];
//        if (itemPrice === undefined) {
//            throw "Item "+name+" not registered";
//        }
//        var countPrice = itemPrice * count;
//        this.addAmount(countPrice);
//    };
//
//    return function(items) {
//        this.items = items;
//
//        this.amount = 0;
//
//        for(var i in functions) {
//            this[i] = functions[i];
//            //this['scan'] = functions['scan'];
//        }
//    }
//}();

// console.log(cashRegisterCount);
// var register = new CashRegister(registerItems);
// console.log(cashRegisterCount);
// register = new CashRegister(registerItems);
// console.log(cashRegisterCount);

// register.scan('milka',1);
// register.scan('egg',10);
// register.scan('ham',1);

// //register.scan('tea',1);

// console.log(register.getTotal());

// registerItems['tea']= 0.50;

// register.scan('tea',1);
// console.log(register.getTotal());

// var clickedOnHeader = function() {
// 	console.log('you clicked on header');
// };

// var nameInputBlur = function(arg1,arg2) {
// 	//var nameInputElement = document.getElementById('nameInput');
// 	// console.log(arg1);
// 	// console.log(this);
// 	var nameInputElement = this;
// 	nameInputElement.value = nameInputElement.value.toUpperCase();
// 	nameInputElement.innerHTML = '<h2>tu bolo vstupne pole</h2>';
// 	//console.log(nameInputElement.value);
// };

// var nameInputElement = document.getElementById('nameInput');
// nameInputElement.onblur = nameInputBlur;

// var odstavecTextElement = document.getElementById('odstavecText');

// var newStrongElement = document.createElement('strong');
// var newTextNode = document.createTextNode('toto je tucny text');
// newStrongElement.appendChild(newTextNode);

// odstavecTextElement.onclick = function() {

// 	this.appendChild(newStrongElement);
// };

// document.getElementById('mainHeader').onclick= odstavecTextElement.onclick;

// var textElements = document.getElementsByClassName('text');
// //console.log(textElements);
// for(var i=0;i<textElements.length;i++) {
// 	console.log(textElements[i]);
// 	textElements[i].innerHTML = "zmenena hodnota";
// }


// $(document).ready(function(){
// 	//toto sa spusti, ked document bude ready
// 	var $p = $('p .text');

// 	$p.click(function(event){
// 		console.log('click on p');
// 		event.stopPropagation();
// 		//$(this).fadeOut('slow');
// 		//vytvorenie noveho elementu
// 		var $newP = $('<p>text pridaneho odstavca</p>');
// 		var $body = $('body');
// 		$body.append($newP);

// 		//$(this).toggleClass('red');
// 	});

// 	$p.click(function(){
// 		console.log('second handler');
// 	});

// 	$('body').on('click','p',function(){
// 		$(this).toggleClass('red');
// 	});

// 	$('#nameInput').on('input',function(){
// 		var $this = $(this);
// 		var value = $this.val();
// 		$this.val(value.toUpperCase());

// 		//console.log(value);
// 	});

// 	$('#createTask').click(function(){
// 		var hodnota = $('#todoInput').val();

// 		var $template = $('#taskTemplate').clone();
// 		$('.text',$template).html(hodnota);
// 		$template.removeAttr('id');

// 		$('#todoList').append($template);
// 	});

// 	$('#todoList').on('click','.delete',function(){
// 		$(this).parents('.taskItem').remove();
// 	});

// });


//$(document).ready(function(){
//	//toto sa spusti, ked document bude ready
//	$('#todoList').sortable();
//
//	//po kliknuti na tlacidlo
//	$('#createTask').click(function(){
//		var hodnota = $('#todoInput').val();
//		$('#todoList').append($('<li>'+hodnota+'</li>'));
//	});
//
//	//spojazdnenie odstranenia
//	$('#todoList').on('click','li',function(){
//		$(this).remove();
//	});
//});
//
//
////totozne zapisy pre document ready
//$(document).ready(function(){
//
//});
//$(document).on('ready',function(){
//
//});
//$(function(){
//
//});