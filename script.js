


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

Vehicle.prototype.insert = function(type, color, maxPoints) {
    console.log("step 3");
    this.div = document.createElement("div");
    this.div.className = type;
    this.div.id = "animate";
    this.div.style.borderColor = color;
    this.x = Math.floor(Math.random() * 700);
    this.y = Math.floor(Math.random() * 700);
    this.div.style.top = this.y + "px";
    this.div.style.left = this.x + "px";
    this.points = 0;
    this.maxPoints = maxPoints;
    document.getElementById('vehicle-container').appendChild(this.div);
    this.move(type);
    this.damage();
    
}

Vehicle.prototype.move = function(type) {
    console.log("step 4");
     switch (type) {
        case "car":
                        var samediv = this.div;
                        (function loop() {
                            $(samediv).animate({left: "700px"}, 4000);
                            $(samediv).animate({left: "0px"}, 4000, loop);
                        })();

                    
        break;
        case "copcar":
                       var samediv = this.div;
                        (function loop() {
                            $(samediv).animate({top: "700px"}, 4000);
                            $(samediv).animate({top: "0px"}, 4000, loop);
                        })();
                        
        
        break;
        case "tank":
                        var samediv = this.div;
                        (function loop() {
                            $(samediv).animate({left: "700px", top: "700px"}, 8000);
                            $(samediv).animate({left: "0px", top: "0px"}, 8000, loop);
                        })();
                        
        break;
        case "motorcycle":
                            var samediv = this.div;
                        (function loop() {
                            $(samediv).animate({left: "700px", top: "0px"}, 2000);
                            $(samediv).animate({left: "0px", top: "700px"}, 2000, loop);
                        })();
        
        break;    
    }
    
}

Vehicle.prototype.damage = function() {
    var points = this.points;
    var maxPoints = this.maxPoints;
    console.log(maxPoints);
    var damageDiv = this.div;
    var damagePoints = function() {
        points = points + 1;
        if (points >= maxPoints) {
            document.getElementById("vehicle-container").removeChild(damageDiv);
        }
        damageDiv.innerHTML = points;
    }
    damageDiv.addEventListener("click", damagePoints);
    
   
    
}

var Car = function() {
    Vehicle.call(this);
    console.log("step 2");
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; 

var addCar = function() {
    var newCar = new Car();
    newCar.insert("car", "red", 2);
    
}

var Copcar = function() {
    Vehicle.call(this);
    console.log("step 2");
}
Copcar.prototype = Object.create(Vehicle.prototype);
Copcar.prototype.constructor = Copcar; 

var addCopcar = function() {
    var newCopcar = new Copcar();
    newCopcar.insert("copcar", "blue", 3);
    
}

var Tank = function() {
    Vehicle.call(this);
    console.log("step 2");
}
Tank.prototype = Object.create(Vehicle.prototype);
Tank.prototype.constructor = Tank; 

var addTank = function() {
    var newTank = new Tank();
    newTank.insert("tank", "green", 10);
    
}

var Motorcycle = function() {
    Vehicle.call(this);
    console.log("step 2");
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle; 

var addBike = function() {
    var newBike = new Motorcycle();
    newBike.insert("motorcycle", "yellow", 1);
    
}

