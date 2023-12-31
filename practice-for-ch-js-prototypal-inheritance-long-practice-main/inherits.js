Function.prototype.inherits = function(SuperClass) {
    function Surrogate() {}
    Surrogate.prototype = SuperClass.prototype
    this.prototype = new Surrogate()
    this.prototype.constructor = this
}

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

Ship.inherits(MovingObject);

Ship.prototype.sails = function () {
    console.log(`I can Sail`)
}

function Asteroid () {}
Asteroid.inherits(MovingObject);



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
