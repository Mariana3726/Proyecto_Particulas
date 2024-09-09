//Creación de Arrays o arreglos
//let autos = new Array('Ferrari', 'Renault', 'BMW');  esta es la sintaxis vieja
const autos =['Ferrari', 'Renault', 'BMW'];
console.log(autos);

//Reacorremos los elementos de un arreglo
console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i+ ':' +autos[i]);
}

//Modificamos los elementos del arreglo

autos[1] = 'Volvo';
console.log(autos[1]);

//Agregamos nuevos valores al arreglo
autos.push('Audi'); //agregamos el elemento al final del arreglo
console.log(autos);

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porsche';
console.log(autos);

//Tercera forma de agregar elementos teniendo cuidado!
autos[8] = 'Renault';
console.log(autos); //ese espacio vacío ocupa el lugar 'undefined',porque no existe

//Cómo preguntar si es un array(arreglo)? con la clase array
console.log(Array.isArray(autos)); //devuelve un booleano,true o false

console.log(autos instanceof Array); //preguntamos si la variable es una instancia de la clase Array,tmb devuelve booleano

