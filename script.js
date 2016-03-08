


document.addEventListener("DOMContentLoaded", function() {
    var carButton = document.createElement("button");
    document.body.appendChild(carButton);
    carButton.className = "button";
    carButton.id = "car";
    carButton.innerHTML = "Add Car";
    carButton.addEventListener("click", addCar);
    
    var copButton = document.createElement("button");
    document.body.appendChild(copButton);
    copButton.className = "button";
    copButton.id = "cop";
    copButton.innerHTML = "Add Cop";
    copButton.addEventListener("click", addCopcar);
    
     var motorcycleButton = document.createElement("button");
    document.body.appendChild(motorcycleButton);
    motorcycleButton.className = "button";
    motorcycleButton.id = "motorcycle";
    motorcycleButton.innerHTML = "Add Bike";
    motorcycleButton.addEventListener("click", addBike);
    
     var tankButton = document.createElement("button");
    document.body.appendChild(tankButton);
    tankButton.className = "button";
    tankButton.id = "tank";
    tankButton.innerHTML = "Add Tank";
    tankButton.addEventListener("click", addTank);
});

var Vehicle = function(name) {
    
    console.log("step 1");
    
}

Vehicle.prototype.insert = function(type, color) {
    console.log("step 3");
    this.div = document.createElement("div");
    this.div.className = type;
    this.div.style.borderColor = color;
    this.x = Math.floor(Math.random() * 700);
    this.y = Math.floor(Math.random() * 700);
    this.div.style.top = this.y + "px";
    this.div.style.left = this.x + "px";
    document.getElementById('vehicle-container').appendChild(this.div);
}

Vehicle.prototype.move = function(locate) {
    
    
}

Vehicle.prototype.damage = function() {
    
}

Vehicle.prototype.remove = function() {
    if (points == pointNum) {
        document.removeChild();
    }
}

var Car = function() {
    Vehicle.call(this);
    console.log("step 2");
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; 

var addCar = function() {
    var newCar = new Car();
    newCar.insert("car", "red");
    
}

var Copcar = function() {
    Vehicle.call(this);
    console.log("step 2");
}
Copcar.prototype = Object.create(Vehicle.prototype);
Copcar.prototype.constructor = Copcar; 

var addCopcar = function() {
    var newCopcar = new Copcar();
    newCopcar.insert("copcar", "blue");
    
}

var Tank = function() {
    Vehicle.call(this);
    console.log("step 2");
}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank; 

var addTank = function() {
    var newTank = new Tank();
    newTank.insert("tank", "green");
    
}

var Motorcycle = function() {
    Vehicle.call(this);
    console.log("step 2");
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle; 

var addBike = function() {
    var newBike = new Motorcycle();
    newBike.insert("motorcycle", "yellow");
    
}

