// Los objetos literales consiste en crear objetos a partir de 
// variables sin repetir el nombre. Antes de ES6, para crear un 
// objeto a partir de variables consistía en la siguiente manera:
// Cómo utilizar objetos literales
// Con los parámetros de objeto puedes obviar la repetición de nombres, 
// JavaScript creará la propiedad a partir del nombre de la variable con 
// su respectivo valor.
function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser("asalgadop",26,"col", 1))