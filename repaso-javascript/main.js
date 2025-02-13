//------------------------- Bassics -----------------------------
var name = 'Kaladin Stormblessed';
var heigh = 210;

/*
var concatenate = name + " " + heigh;


var data = document.getElementById("data");
data.innerHTML = `

    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${name}</h2>
    <h3>Mido: ${heigh} cm</h3>

`;

if(heigh >= 210){
    data.innerHTML += `
    
        <h1>Eres ALTO</h1>

    `
}else{
    data.innerHTML += '<h1>Eres una persona BAJITA</h1>'
}


for(var i = 1997; i <= 2025; i ++){
    
    data.innerHTML += '<h2>Estamos en el año:' + i;
    
}
*/
function MustraMiNombre(name, heigh){

    
    var myData = `

        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${name}</h2>
        <h3>Mido: ${heigh} cm</h3>

`;

return myData;
}

function imprimir(){
    var data = document.getElementById("data");
    data.innerHTML = MustraMiNombre(name,heigh);
}

imprimir();

var names = ['Syl', 'Rock', 'Shallan', 'Lift'];


document.write('<h1>Name List</h1>');
/*
for( var i = 0; i < names.length; i++ ){

    document.write(names[i] + '<br>');

}
*/
names.forEach((name) => {
    document.write(name + '<br>');
});

// -------------------- Objects ----------------------

var car = {
    model: 'Audi Class A',
    maximVel: 500,
    year: 2025,

    showInfo(){
        console.log(this.model, this.maximVel,this.year);
    },
    exampleProperty: "random value",
};

document.write("<h1>"+car.model+"</h1>");
car.showInfo();
console.log(car);

// --------------------------- Promises --------------------


var sayHi = new Promise((resolve, reject) => {

    setTimeout(() => {
        let hi = 'Hello everyone!!';
      
        if(hi){
            resolve(hi);
        }else{
            reject("There's no one to say hello.");
        }
    }, 2000);

});

sayHi.then(result => {
    alert(result)
})
.catch(err =>{
    alert(err);
});
