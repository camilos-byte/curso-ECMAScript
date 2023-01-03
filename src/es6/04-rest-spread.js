// asignación de desestructuración
// La desestructuración (destructuring) consiste en extraer los valores de 
// arrays o propiedades de objetos en distintas variables.



// Desestructuración de arrays
// La desestructuración de arrays consiste en extraer los valores 
// de un array en variables, utilizando la misma posición del array
//  con una sintaxis similar a la desestructuración de objetos.

let fruits = ['Apple', 'Banana', 'Orange'];
let [a,b] =fruits;

console.log(a,b); /*arroja "Orange"*/

// Desestructuración de objetos
// La desestructuración de objetos implica extraer las propiedades de un 
// objeto en variables. Mediante el mismo nombre de la propiedad del 
// objeto con la siguiente sintaxis:

let user = { username: "camilo", age: 26 };

let {username, age} = user;

console.log(username, age);

const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith',
      },
      age: 35,
    },
];
  
for (const { name: n, family: { father: f,sister:s } } of people) {
    console.log(`Name: ${n}, Father: ${f} , Sister: ${s}`);
}


// El operador de propagación (spread operator), como su nombre lo dice, 
// consiste en propagar los elementos de un iterable, ya sea un array o 
// string utilizando tres puntos (...) dentro de un array.

let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

// Spread Operator
let person = { name: "Andres", age: 25 };
let country = "COL"

let data = { ...person, country};
console.log(data);


//parameters rest 


function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum (1, 1, 2, 3);