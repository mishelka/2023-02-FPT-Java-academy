"use strict";

//-------------- var --> let/const ------------------
var a = 5;
var b = 10;
const c = 10;
//c = 20; // can't do, const is "final"

function letTest() {
    if (a === 5) {
        let a = 4; // !!! The scope is inside the if-block //ES6
        var b = 1; // The scope is inside the function     //ES5

        console.log("a = " + a + ", b = " + b);  // 4, 1
    }
    console.log("c = " + c);
}

letTest();

console.log("a = " + a + ", b = " + b);  // 5, 10


//------------------- string literals -----------------
function printCoordES5(x, y) {
    console.log("(" + x + ", " + y + ")");
}
function printCoordES6(x, y) {
    console.log(`(${x}, ${y})`); //ina uvodzovka!!
}

printCoordES5('ES', 5);
printCoordES6('ES', 6);

function createNumberRegExp(english) {
    const PERIOD = english ? String.raw`\.` : ` `; // (A)
    return new RegExp(`[0-9]+(${PERIOD}[0-9]+)?`);
}
console.log(createNumberRegExp(true));


//------------- function params -----------------------
//a) default values
function default5(x, y) {
    x = x || 0;
    y = y || 0;
    console.log(`${x}, ${y}`);
}
function default6(x = 0, y = -1) {
    console.log(`${x}, ${y}`);
}
default5();
default6();

//b) named params
function selectEntries5(options) {
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
    console.log(`[${start}, ${end}]; step: ${step}`);
}
function selectEntries6({ start=0, end=-1, step=1 }) {
    console.log(`[${start}, ${end}]; step: ${step}`);
}
selectEntries5({start: 10, end: 11});
selectEntries6({start: 10, end: 11});

//c) optional params
function optional5(options) { //making options optional
    options = options || {}; // (A)
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;
    console.log(options);
}
function optional6({ start=0, end=-1, step=1 } = {}) {
    console.log(arguments[0]);
}
optional5();
optional6({start:0});

//------------------- args -------------------
function logAllArguments5() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
function logAllArguments6(...args) {
    for(const arg of args) {
        console.log(arg);
    }
}
function trailingParams(pattern, ...args) {
    for(const arg of args) {
        console.log(`${pattern} ${arg}!`);
    }
}
function trailingParams_clumsyES5Version() {
    var pattern = arguments[0];
    var args = [].slice.call(arguments, 1);
    //...
}
logAllArguments5(1, 2, 3, 4, 5);
logAllArguments6('a', 'b', 'c', 'd', 'e');
trailingParams("Hello", "Janka", "Matus", "Dominik");


//---------------- destructors ------------------
function destructuring5() {
    var matchObj = /^(\d\d\d\d)-(\d\d)-(\d\d)$/
        .exec("2999-12-31");
    var year = matchObj[1];
    var month = matchObj[2];
    var day = matchObj[3];
    console.log("year: " + year + ", month: " + month + ", day: " + day);
}
function destructuring6() {
    let [, year, month, day] =
        /^(\d\d\d\d)-(\d\d)-(\d\d)$/
            .exec("2999-12-31");
    console.log(`year: ${year}, month: ${month}, day: ${day}`);
}
destructuring5();
destructuring6();
//also variable destructuring, see last array example

//--------------------- for ... of ----------------------
function arrays() {
    var arr = ['a', 'b', 'c'];
    console.log("ES5 - traditional for loop can break, but work with index instead of element");
    console.log("speed 906,773 Ops/sec");
    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        console.log(elem);
    }
    console.log("ES5 - beter readability, but can't break");
    console.log("speed 15,651 Ops/sec");
    arr.forEach(function (elem) {
        console.log(elem);
    });

    console.log("ES5 - for in, but works with index");
    console.log("speed 15,759 Ops/sec");
    for(var i in arr) {
        console.log(arr[i]);
    }

    console.log("ES6 - returns element, can break");
    console.log("speed 35,993 Ops/sec");
    for (const elem of arr) {
        console.log(elem);
    }

    console.log("ES6 - both index and value via the new Array method entries() and destructuring");
    for (const [index, elem] of arr.entries()) {
        console.log(index + '. ' + elem);
    }
}
arrays();

//------------------ rest, spread operators: ... -------------
// ES5 - apply, push, concat ---> ...
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9, 10];
var m = Math.max.apply(null, [-1, 5, 11, 3]); //aplikacia funkcie na parametre
var n = arr1.push.apply(arr1, arr2); //aplikacia push do pola na viacero parametrov
var o = arr1.concat(arr2, arr3); //zretazenie poli
// ES6
let p = Math.max(...[-1, 5, 11, 3]);
let q = arr1.push(...arr2);
let r = [...arr1, ...arr2, ...arr3];


//------------------- method definitions --------------------
//ES5
var obj1 = {
    foo: function () {
    },
    bar: function () {
        this.foo();
    },
    myMethod: function(x, y) {}
};
//ES6
let obj2 = {
    foo() {
    },
    bar() {
        this.foo();
    },
    myMethod(x, y) {}
};
//Getters and setters continue to work as they did
const obj3 = {
    get foo() {
        console.log('GET foo');
        return 123;
    },
    set bar(value) {
        console.log('SET bar to ' + value);
    }
}
console.log(obj3.foo);
console.log(obj3.bar = true);

//---------------class, constructor----------------------
//ES5
function Person5(name) {
    this.name = name;
}
Person5.prototype.describe = function () {
    return 'Person called '+this.name;
};
//ES6
class Person6 {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return 'Person called '+this.name;
    }
}

//------------------- extends ----------------------------
// ES5 - extending classes using prototype
function Employee5(name, title) {
    Person5.call(this, name); // super(name)
    this.title = title;
}
Employee5.prototype = Object.create(Person5.prototype);
Employee5.prototype.constructor = Employee5;
Employee5.prototype.describe = function () {
    return Person5.prototype.describe.call(this) // super.describe()
        + ' (' + this.title + ')';
};

//ES6 - using extends and super
class Employee6 extends Person6 {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    describe() {
        return super.describe() + ' (' + this.title + ')';
    }
}


//--------------------- arrow functions ----------------
// ES5
const evens = [2, 4, 6, 8, 10];
var odds5 = evens.map(function(v) {
    return v + 1;
});
var nums5 = evens.map(function(v, i) {
    return v + i;
});
function UiComponent5() {
    var _this = this; //(A)
    $("#myButton1").click(function() {
            _this.handleClick(); //(B)
        });
}
console.log(odds5);
console.log(nums5);
UiComponent5.prototype.handleClick = function() {console.log(">>> click 5")};

// ES6
let odds6 = evens.map(v => v + 1);      //like lambda functions in Java
let nums6 = evens.map((v, i) => v + i); //like lambda functions in Java
class UiComponent6 {
    constructor() {
        $("#myButton2").click(() => {
            this.handleClick(); //(A)
        });
    }
    handleClick() {console.log(">>> click 6")}
}
console.log(odds6);
console.log(nums6);


//------------Map, Set, WeakMap, WeakSet------------
//ES5
var find = 3;
var data = ['a', 'b', 'c'];
function isIn5(data, find) {
    for(var i in data) {
        if(i == find) {
            return true;
        }
    }
    return false;
}
console.log(isIn5(data, find)); // false

//ES6
let data6 = new Map();
data6.set(0, 'a');
data6.set(1, 'b');
data6.set(2, 'c');
//or
data6 = new Map([
   [0, 'one'], [1, 'two'], [2, 'three'],
]);
function isIn6(data, find) {
    return data.has(find);
}
console.log(isIn6(data6, find)); // false

var myMap = new Map([["key1", "value1"], ["key2", "value2"]]); // Use the regular Map constructor to transform a 2D key-value Array into a map
myMap.get("key1"); // returns "value1"

//ES5
function MyList() {
    // Use Map as a function
    var superInstance = Map.apply(null, arguments);
    //copyOwnPropertiesFrom(this, superInstance);
}
MyList.prototype = Object.create(Map.prototype);
MyList.prototype.constructor = MyList;
//ES6
class MyList2 extends Map {
}

//-------------------- include other js files ------------
//not supported in any browser yet
//import * as lib from 'lib';
//console.log(lib.square(11)); // 121
//console.log(lib.diag(4, 3)); // 5