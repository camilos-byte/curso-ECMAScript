// La sintaxis de los generadores comprende lo siguiente:

// La palabra reservada function* (con el asterisco al final).
function* iterate(array){
    for (let value of array) {
        // La palabra reservada yield que hace referencia al valor retornado 
        // cada vez que se invoque, recordando el valor anterior.
        yield value    
    }
}


const it = iterate(['Angel','Juan','Víctor','Marcos','Angela', 'Juana', 'Víctoria', 'María']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
