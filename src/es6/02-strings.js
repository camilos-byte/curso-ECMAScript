// Las plantillas literales (template literals) consisten en crear cadenas de caracteres que puedan contener 
// variables sin utilizar la concatenación. Esto mejora la legibilidad y la mantenibilidad del código.

// Concatenación de caracteres
// Antes de ES6, si querías crear una cadena larga o un mensaje elaborado, debías utilizar la concatenación. 
// La concatenación de caracteres consiste en unir uno o varios caracteres, como si fuera una suma.

// Las plantillas literales añadidas en ES6, se emplea el caracter acento grave ( ` ), que no es una comilla simple ( ’ ), 
// para envolver el mensaje. Para incluir las variables se utiliza la sintaxis ${variable}.

let hello = "Hello";
let world ="World";

// template literals 

let epicPhrase = `${hello} ${world} !`;

// milti-line strings 

let lorem = ' esto es un string';
let lorem2 = `esta es una frase epica
continuacion de la frase`;

console.log (lorem2);