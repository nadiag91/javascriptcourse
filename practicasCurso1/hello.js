// in-line comment
/* multiple
lines 
comment */

console.log("hello f");

var suma = 3 + 3;
suma++ //para agregar 1
suma += 10 //para sumar 10
console.log(suma)

function prueba() {
    console.log("esto es una prueba")
}

prueba()

// Si una variable empieza con var y esta dentro de una funcion, es una variable local.
// Si una varibale NO empieza con var y esta dentro de una funcion, es una varible global.

// usar == es para comparar valores, independientemente del tipo de variable, ej 3 == '3' daria True
// usar es para comparar valores y tipo de variable, ej 3 === '3' daria False

// creacion de un objecto
var myObject1 = {
    "name": "Hugo",
    "age": 4,
    "eyes colour": "blue"
}

obj1Name = myObject1.name
console.log(obj1Name)
console.log(myObject1["eyes colour"]) //cuando el atributo esta escrito separado, se escribe entre corchetes
