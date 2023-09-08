function MovingObject (type) {
    this.type = type
}

MovingObject.prototype.printType = function () { console.log(`I am a ${this.type}`) }

function Ship (type) {
    MovingObject.call(this, type)
    this.size = 10
    // console.log(this.type)
    // this.type = type
}

Ship.prototype = Object.create(MovingObject.prototype)
Ship.prototype.constructor = Ship

Ship.prototype.sails = function () {
    console.log(`I can Sail`)
}

function Asteroid () {}

Asteroid.prototype = Object.create(MovingObject.prototype)
Asteroid.prototype.constructor = Asteroid


let ship = new Ship("Ship")
let obj = new MovingObject("mo")
// console.log(ship.type)
// console.log(ship.__proto__.printType)
ship.printType()
obj.printType()
ship.sails()
console.log(ship.size)
console.log(ship.constructor.name)

let aster = new Asteroid
// aster.sails()
