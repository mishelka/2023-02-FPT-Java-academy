function helloworld() {
    let x = 0;
    console.log(x === false);
    let str = "ahoj, ja som 'Miska'";

    let a = 12345678901234567;
    console.log(a);

    const obj = {
        firstName: "Michaela",
        lastName: "Bacikova",
        age: 30
    };
    const array = [1, 2, 3, 4];
    const arrayobj = {
        0: 1,
        1: 2,
        2: 3,
        3: 4
    };
    console.log(obj, array);
    array[100] = "ahoj";
    console.log(array);

    obj.gender = "female";
    console.log(obj);
    console.log(obj["firstName"]);
    delete obj.gender;
    console.log(obj);

    console.log(typeof a);
    if (typeof a === "number") {
        console.log(" a is a number. ");
    }

    console.log("IDEM VYPISAT PROPERTIES Z OBJEKTU:");
    for (const prop in obj) {
        console.log(obj[prop]); //obj.prop
    }

    console.log("IDEM VYPISAT HODNOTY Z POLA:");
    for (const index in array) {
        console.log("array[" + index + "]: " + array[index]);
    }

    for (const value of array) {
        console.log("array value: " + value);
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}