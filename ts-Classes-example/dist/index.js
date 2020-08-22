"use strict";
class Rebot {
    constructor(_name) {
        this._name = _name;
    }
    static isColorAvailable(color) {
        return Rebot.availableColor.includes(color);
    }
    askName() {
        console.log(`my name is ${this.name}`);
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters`);
        this.name;
    }
    set color(color) {
        if (!Rebot.isColorAvailable(color)) {
            throw new Error(`color ${color} is not available`);
        }
        this._color = color;
    }
    set name(value) {
        this._name = 'PREFIX' + value;
    }
    get name() {
        return this._name + 'SUFFIX';
    }
}
Rebot.availableColor = ['yellow', 'green'];
class FlyingRobot extends Rebot {
    constructor(name, jetpackSize) {
        super(name);
        this.jetpackSize = jetpackSize;
        this.jetpackSize;
        this.name;
    }
    move(distance) {
        console.log(`${this.name} is flying `);
        super.move(distance);
    }
}
const robot = new Rebot('Ambili');
robot.askName();
const flyingRobot = new FlyingRobot('ambili', 5);
flyingRobot.move(20);
console.log(`flying  robot's jetpack Size is`, flyingRobot.name);
flyingRobot.name = 'joseph';
console.log(`My name is ${flyingRobot.name}`);
//Rebot.availableColor
