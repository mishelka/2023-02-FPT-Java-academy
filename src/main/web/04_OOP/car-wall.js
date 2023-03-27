// JavaScript source code

function Car(type, color, numberOfDoors, doors) {
    this.color = color;
    this.type = type;
    this.started = false;

    this.numberOfDoors = numberOfDoors;

    this.doors = [];

    this.openDoor = function (doorIndex) {
        if (this.doors[doorIndex] === undefined) {
            console.log("Mount the door first");
        }
        else {
            if (this.doors[doorIndex].opened === false) {
                this.doors[doorIndex].open();
                console.log(this.doors[doorIndex].toString());
            }
            else {
                console.log("The door is already opened.");
            }
        }
    };

    this.closeDoor = function (doorIndex) {
        this.doors[doorIndex].close();
    };
    this.turnOn = function () {
        if (this.started === false) {
            this.started = true;
            console.log("Engine has been turned on.");
        }
        else {
            console.log("Engine is already running.");
        }

    };
    this.turnOff = function () {
        if (this.started === true) {
            this.started = false;
            console.log("Engine has been turned off.");
        }
        else {
            console.log("Engine is not running.");
        }
    };
    this.toString = function () {
        return "Type:" + this.type + " Color:" + this.color + " Engine running:" + this.started
    };
    this.mountDoor = function (door) {
        if (this.doors.length < this.numberOfDoors) {
            this.doors.push(door);
        }
    };
    this.unMountDoor = function (door) {
        if (this.doors.length > 0) {
            for (var e in this.doors) {
                if (e === door) {
                    delete this.doors[e];
                }
            }
        }
    };
    this.mountAll = function () {
        for (var i = 0; i < doors.length; i++) {
            this.mountDoor(doors[i])
        }
        console.log("All the doors have been mounted.");
    };
    this.showCar = function () {
        console.log(this.toString());
    }

}

function Door(type, side) {
    this.opened = false;
    this.type = type;
    this.side = side;

    this.open = function () {
        this.opened = true;
    }
    this.close = function () {
        this.opened = false;
    }
    this.toString = function () {
        return this.type + " " + this.side + " opened:" + this.opened
    };
}

var door1 = new Door("front", "left");
var door2 = new Door("front", "right");
var door3 = new Door("rear", "left");
var door4 = new Door("rear", "right");
var doors1 = [door1, door2, door3, door4];

var car1 = new Car("sedan", "white", 4, doors1);
