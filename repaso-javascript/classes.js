class Car{
    constructor(model, speed, year){
        this.model = model;
        this.speed = speed;
        this.year = year;
    }

    increaseSpeed(){
        this.speed += 1;
    }

    decreseSpeed(){
        this.speed -= 1;
    }
}


class Bus extends Car{
    constructor(model, speed, year){
        super(model, speed, year);
        this.heigh = 5;
    }

    showHigh(){
        return "The bus heigh is: " + this.heigh;
    }
}


var bus1 = new Bus('Pegasus', 200, 2017);

console.log(bus1.showHigh());

var car1 = new Car('BMW', 200, 2025);
var car2 = new Car('Audi', 500, 2024);
var car3 = new Car('Porche', 300, 2024);

document.write("<h1>Speed:" + car1.speed + " </h1>")
console.log(car1, car2, car3)
car1.increaseSpeed();
car1.increaseSpeed();
car1.increaseSpeed();

document.write("<h1>Speed:" + car1.speed + " </h1>")

console.log(car1);