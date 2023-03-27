window.onload = function () {
    defaultValues();
    _eval();
    _parseInt();
    _parseFloat();
    _decodeUri();
    arrays();
    testArgs(1, 2, 3, "arg4", "arg5");
    strings();
    regex();
    etc();
}

function Person(name, age, plat) {
    this.name = name;
    this.age = age;
    this.plat = plat;
}
person1 = new Person("Janko Hrasko", 21, 15000);
person2 = new Person("Jano Hrach", 28, 8000);

function defaultValues() {
    var a = "a = " + NaN + "<br>";
    var b = "b = " + Infinity + "<br>";
    var c = "c = " + undefined + "<br>";
    var x = "d = " + 10 + "<br>";
    var _a = NaN;
    var _b = Infinity;
    var _c = undefined;
    var _x = 10;
    var res = a + b + c + x +
        " isNaN(a): " + isNaN(_a) +
        "<br> isFinite(b): " + isFinite(_b) +
        "<br> isNan(c): " + isNaN(_c) +
        "<br> isFinite(x): " + isFinite(_x);
    document.getElementById("defaultValues").innerHTML = res;
}
function _eval() {
    var x = 10;
    var y = 20;
    var a = eval("x * y") + "<br>";
    var b = eval("2 + 2") + "<br>";
    var c = eval("x + 17") + "<br>";

    var res = a + b + c;
    document.getElementById("eval").innerHTML = res;
}
function _parseInt() {
    var array = [];
    array['a'] = parseInt("10") + "<br>";
    array['b'] = parseInt("10.00") + "<br>";
    array['c'] = parseInt("10.33") + "<br>";
    array['d'] = parseInt("34 45 66") + "<br>";
    array['e'] = parseInt(" 60 ") + "<br>";
    array['f'] = parseInt("40 years") + "<br>";
    array['g'] = parseInt("He was 40") + "<br>";

    array['h'] = parseInt("10", 10) + "<br>";
    array['i'] = parseInt("010") + "<br>";
    array['j'] = parseInt("10", 8) + "<br>";
    array['k'] = parseInt("0x10") + "<br>";
    array['l'] = parseInt("10", 16) + "<br>";

    for (i in array) {
        document.getElementById("parseInt").innerHTML
            += i + " = " + array[i];
    }
}
function _parseFloat() {
    var array = [];
    array['a'] = parseFloat("10") + "<br>";
    array['b'] = parseFloat("10.00") + "<br>";
    array['c'] = parseFloat("10.33") + "<br>";
    array['d'] = parseFloat("34 45 66") + "<br>";
    array['e'] = parseFloat(" 60 ") + "<br>";
    array['f'] = parseFloat("40 years") + "<br>";
    array['g'] = parseFloat("He was 40") + "<br>";

    for (i in array) {
        document.getElementById("parseFloat").innerHTML
            += i + " = " + array[i];
    }
}
function _decodeUri() {
    var uri = "my test.asp?name=ståle&car=saab";
    var enc = encodeURI(uri) + " //encodedUri";
    var dec = decodeURI(enc) + " //decodedUri";
    var res = enc + "<br>" + dec;
    document.getElementById("decodeUri").innerHTML
        = res;
}

function arrays() {
    var res = "";
    res+=arraysBasics() + "<br><br>";
    res+=arraysBulk();
    document.getElementById("arrays").innerHTML = res;
}
function arraysBasics() {
    var res = "";
    var myArray = []; // vytvaram prazdne pole
    myArray.push("hello world"); // pridavam polozku do pola na posledne miesto

    res += "Pole: " + myArray + "<br>";
    res += "myArray[0] =  " + myArray[0] + "<br>";
    res += "Dlzka pola: " + myArray.length + "<br><br>";
    console.log(myArray);

    myArray[30] = 88; // pridanie hodnoty na miesto v poli s indexom 100

    res += "Pole znova: " + myArray + "<br>";
    res += "myArray[30] = " + myArray[30] + "<br>";
    res += "Dlzka pola: " + myArray.length + "<br>";
    console.log(myArray);
    console.log(myArray.toString());

    myArray.pop();

    res += "Popnute pole: " + myArray + "<br>";
    console.log(myArray);
    return res;
}
function arraysBulk() {
    var poleDouble = [];
    var res = "";
    var parne = function (cislo) {
        console.log(cislo);
        return (cislo % 2) === 0;
    };
    var makeDouble = function (cislo, index, pole) {
        var doubleNumber = cislo * 2;
        console.log(index + ": " + doubleNumber);
        poleDouble[index] = doubleNumber;
        //pole[index] = doubleNumber;
        return doubleNumber;
        //console.log(doubleNumber);
    };
    var sum = function (cislo1, cislo2) {
        console.log(cislo1 + " + " + cislo2);
        return cislo1 + cislo2;
    }
    var _concat = function (item1, item2) {
        return "" + item1 + item2;
    }
    var concat2 = function(item1, item2) {
        return item1.toString().concat(item2);
    }
    var sumaPlatov = function (person1, person2) {
        return person1.plat + person2.plat;
    }

    var poleCisel = [1, 2, 4, 7, 8, 10, 16];

    res+= "Every number is even: " +
        poleCisel.every(parne) + "<br>";
    res+= "At least one number is even: " +
        poleCisel.some(parne) + "<br>";

    poleCisel.forEach(makeDouble);

    res+= "forEach(makeDouble): " + poleDouble + "<br>";
    res+= "filter(parne): " + poleCisel.filter(parne) + "<br>";
    res+= "map(makeDouble): " + poleCisel.map(makeDouble) + "<br>";

    res+= "<br>pole:" + poleCisel + "<br>";
    res+= "reduceRight(concat): " + poleCisel.reduceRight(_concat) + "<br>";
    res+= "reduceRight(concat): " + poleCisel.reduce(_concat) + "<br>";
    res+= "reverse(): " + poleCisel.reverse() + "<br><br>";
    poleCisel.reverse(); //reverse again
    poleCisel.shift();
    res+= "shift(): " + poleCisel + "<br>";
    poleCisel.unshift(134, 10);
    res+= "unshift(134, 10): " + poleCisel + "<br><br>";

    res+= "slice(2, 5): " + poleCisel.slice(2, 5) + "<br>";
    res+= "indexOf(8): " + poleCisel.indexOf(8) + "<br>";
    res+= "indexOf(10): " + poleCisel.indexOf(10) + "<br>";
    res+= "indexOf(3): " + poleCisel.indexOf(3) + "<br>";
    res+= "lastIndexOf(10): " + poleCisel.lastIndexOf(10) + "<br>";

    return res;
}

function testArgs() {
    var res = "testArgs(1,2,3,\"arg4\",\"arg5\")': <br>";
    res+= "len = " + arguments.length + "<br>";

    for(var i = 0; i < arguments.length; i++) {
        res+= "i = " + arguments[i] + ((i == arguments.length - 1) ? " " : ", ");
    }
    document.getElementById("args").innerHTML = res;
}
function strings() {
    var res = "";
    var str = "Toto je jeden pekny dlhy string";

    res+= "str: " + str + "<br>";
    res+= "str.charAt(10): " + str.charAt(10) + "<br>";
    res+= "str.indexOf(\"ny\"): " + str.indexOf("ny") + "<br>";
    res+= "str.lastIndexOf('n'): " + str.lastIndexOf('n') + "<br>";
    res+= "str.concat(\", ktory je fakt dlhy\"):<br>" + str.concat(", ktory je fakt dlhy") + "<br>";
    res+= "str.substring(5,25): " + str.substring(5,25) + "<br>";
    res+= "str.toUpperCase(): " + str.toUpperCase() + "<br>";
    res+= "str.toLowerCase(): " + str.toLowerCase() + "<br><br>";

    var vstup = "jozko, janko, marienka, peter";
    var poleVstupov = vstup.split(',', 2);

    res+= "vstup: " + vstup + "<br>";
    res+= "vstup.split(): " + vstup.split(',', 2) + "<br><br>";

    document.getElementById("strings").innerHTML = res;
}
function regex() {
    var res = "";
    var vstup = "michaela.bacikova@tuke.sk";
    var regex = /([a-zA-Z]+)\.(?:([a-zA-Z]+)@([a-zA-Z\.]+))/g;

    var groups = regex.exec(vstup);
    //alert(groups[0] + ", " + groups[1] + ", " +
    //    groups[2] + ", " + groups[3]+ ", " + groups[4]);

    res+= "vstup: " + vstup + "<br>";
    res+= "regex: /[0-9]+/ <br>";
    res+= "vstup.match(regex): " + vstup.match(regex) + "<br>";

    res+= "<h4>test + lastIndex + while:</h4>";
    while (regex.test(vstup)==true) {
        res+= "- number found. Index now at: "
            + regex.lastIndex + " <br>";
    }

    document.getElementById("regex").innerHTML = res;
}

function etc() {
    var showActualTime = function () {
        console.log(new Date().toLocaleTimeString());
        document.getElementById("timer").innerHTML
            = new Date().toLocaleTimeString() + "<br>";
    };

    //interval ID
    var intervalId = setInterval(showActualTime, 1000);
    //var intervalId = setTimeout(showActualTime, 1000);

    document.getElementById("timer").innerHTML
        = new Date(Date.parse("Jul 8, 2005")).toLocaleDateString();

    console.log("interval ID: " + intervalId);
}
