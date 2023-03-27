
function Car(type, owner) {
    this.owner = owner;
    var type = type;
    this.toString = function() {
        return type + ", owner: " + owner.toString();
    }
}

//console.log(">>>> student cez konstruktor <<<<<");
function Student(name, age) {
    this.name = "TOTO JE DEFAULT";
    this.age = age;
    this.display = function display1() {
        var result = "";
        result += this.name + " - " + this.age;
        result += "<BR>";
        //document.write(result);
    }

    this.toString = function() {
        return this.name + " - " + this.age;
    }
}

var student1 = new Student("Jano", 16);
console.log("Student original: " + student1);
console.log(student1);
var c = new Car("TOYOTA", student1);
console.log("MOJE AUTO " + c);

//real inheritance with class:
function DumbStudent(name) {
    this.name = name;
    this.dumb = function() {};
    this.toString = function() {
        return this.name + ", " + this.age;
    }
}
DumbStudent.prototype = student1;
var dumb = new DumbStudent("HRASKO");
dumb.prototype = new DumbStudent;

console.log(">>>> INHERITANCE <<<<");
console.log(dumb);
console.log(dumb.toString());

console.log(">>>> GET CLASS NAME <<<<");
console.log(dumb.constructor.name);
var ovocie = {jahoda: "fajna", "malina": "uplne ze fajna"};
console.log(ovocie);
console.log(ovocie.constructor.name);

function display1() {
    return "display function";
}

var display = display1();

console.log(">>>> FUNCTION LITERALS <<<<");
console.log(display);
console.log(display1());
console.log(typeof display);


console.log(">>>> TYPE vs INSTANCEOF <<<<");
console.log((typeof student1) == "object");
console.log(typeof dumb);
console.log(student1 instanceof Student);
console.log(student1 instanceof DumbStudent);
console.log(dumb instanceof DumbStudent);
console.log(dumb instanceof Student);


//object create:
var student2 = Object.create(student1);
student1["nick"] = "janci";
console.log("Student object.create:")
console.log(student2);
//console.log(student2.toString());
//student2.constructor.toString = function() {
//    return this.name + "; " + this.age;
//}
//console.log(student2);

//JS6 introduced "class" but more on that later

//new array
var doors = [];
//array index reference
doors[0] = 1; doors[1] = 3; doors[2] = 6;
//dynamic array size
doors[100] = 100;
//array associative reference
doors["help"] = "help";
doors["leftfront"] = "front door";
//removing array element
delete doors[100];
delete doors["leftfront"];

console.log(doors);
console.log(doors[2]);
console.log(doors["help"]);
console.log(doors.length);
console.log(doors.indexOf("help"));

for(var e in doors) {
    console.log(e + ": " + doors[e]);
}



//console.log(student1.name
//    + " " + student1.age);
//console.log(student1.display());

/*

console.log(">>>>>>>>>>>>>>>>>>");

console.log(">>>> auto <<<<");
var auto = {owner: student1};

//delete auto.owner;
console.log(auto);

console.log(">>>> osoba cez klasicke priradenie <<<<<");
var osoba = {name: "Michal"}; // new Object();
 //var osoba = new Object();
 //osoba.name = "Janko";
 osoba.age = 22;
 //osoba.bestBook = "Harry Potter";
 //osoba.vypocet = function(){
 //	console.log(this);
 //	return this.age + 10;
 //};

 console.log(osoba);

//var auto = {
//    age: 1,
//    name:"Golf"
//	//vypocet: osoba.vypocet
//};
//auto.age = 1;
//auto.vypocet = osoba.vypocet;
//
//var typ = 'age';
//
//for (var i in osoba) {
//    console.log(i +': '+osoba[i]);
//}
//
//console.log(auto);
//console.log(osoba.vypocet());
//console.log(auto.vypocet());
//
// var getAddress = function() {
// 	return "Hlavna "+Math.floor(Math.random()*10+1) + " tu byva "+this.school;
// }
//
// function showObjectProperties(object) {
// 	 console.log("Vsetky vlastnosti");
// 	 for (var i in object) {
// 	 	console.log(i +': '+object[i]);
// 	 }
// 	 console.log("Len priamo vlastnene vlastnosti");
// 	 for (var i in object) {
// 	 	if (object.hasOwnProperty(i)) {
// 	 		console.log(i +': '+object[i]);
// 	 	}
// 	 }
// }


// function Person(name) {
// 	this.name = name;
// 	this.getAddress = getAddress;
// }

// function Student(name,school) {
// 	this.school = school;
// 	this.name = name;
// }
// var personPrototype = new Person("prototypovy janko");
// Student.prototype = personPrototype;

// var student = new Student("Pavol","SPSE");
// console.log(personPrototype.getAddress());
// console.log(student.getAddress());
// console.log(student);
// //showObjectProperties(student);



//function Vehicle() {
//    this.name = "Golf";
//    this.manufacturer = "VW";
//    this.toString = function() {
//        return this.manufacturer + " " + this.name;
//    }
//}
//
//function Car(seatCount,color) {
//    this.seatCount = seatCount;
//    this.color = color;
//}
//Car.prototype = new Vehicle();

//var type = prompt("Zadaj typ vozidla, ktory chces vytvorit","car");

// switch(type) {
// 	case "car":
// 	var manufacturer = "Fiat";//od pouzivatela
// 	var name = "500";
// //	var vehicle = new Vehicle();
// //	vehicle.manufacturer = manufacturer;
// //	vehicle.name = name;
// //	Car.prototype = vehicle;
// 	var car = new Car(5,"red");
// 	car.manufacturer = manufacturer;
// 	car.name = name;

// 	break;
//}


// var myArray = []; // vytvaram prazdne pole
// myArray.push("hello world"); // pridavam polozku do pola na posledne miesto
// console.log(myArray[0]); // zobrazim polozku na 0 indexe
// console.log(myArray.length); // zobrazim dlzku pola
// myArray[100] = 88; // pridanie hodnoty na miesto v poli s indexom 100
// console.log(myArray[100]);
// console.log(myArray.length);

//var parne = function(cislo) {
//    console.log(cislo);
//    return (cislo % 2) === 0;
//};
//
//var makeDouble = function(cislo,index,pole) {
//    var doubleNumber = cislo*2;
//    console.log(index+": "+doubleNumber);
//    //pole[index] = doubleNumber;
//    return doubleNumber;
//
//    //console.log(doubleNumber);
//};
//
//var sum = function (cislo1,cislo2) {
//    console.log(cislo1 + " + "+ cislo2);
//    return cislo1 + cislo2;
//}
//
//var concat = function (item1,item2) {
//    return ""+item1+item2;
//}

var sumaPlatov = function(person1,person2) {
    return person1.plat + person2.plat;
}

var poleCisel = [1,2,4,7,8,10,16];

//console.log(poleCisel.every(parne));
//console.log(poleCisel.some(parne));
//poleCisel.forEach(makeDouble);
//console.log(poleCisel.filter(parne));
//console.log(poleCisel.map(makeDouble));
//console.log(poleCisel.reduceRight(concat));

// var vstup = "jozko, janko, marienka, peter";
// var poleVstupov = vstup.split(',',2);
// console.log(poleVstupov);

// var text = "abc52gfd5642gk103po";
// console.log(text);
// var regexNumber = /[0-9]+/;
// console.log(text.match(regexNumber));

// var showActualTime = function(){
// 	console.log(new Date().toLocaleTimeString());
// };

// var intervalId = setInterval(showActualTime,1000);
// console.log("interval ID: "+intervalId);


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
*/