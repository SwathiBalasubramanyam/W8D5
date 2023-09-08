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
    // console.log(this.type)
    // this.type = type
}

Ship.inherits(MovingObject);

Ship.prototype.sails = function () {
    console.log(`I can Sail`)
}


let ship = new Ship("Ship")
let obj = new MovingObject("mo")
// console.log(ship.type)
// console.log(ship.__proto__.printType)
ship.printType()
obj.printType()
ship.sails()
obj.sails()


function Asteroid () {}
Asteroid.inherits(MovingObject);
