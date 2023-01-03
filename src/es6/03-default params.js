// Los parámetros por defecto (default params) consisten en establecer un valor por 
// defecto a los parámetros de una función, para asegurar que el código se ejecute 
// correctamente en el caso de que no se establezcan los argumentos correspondientes 
// en la invocación de la función.


function newuser(name, age, country) {
    var name = name || 'Andres';
    var age = age || 26;
    var country = country || 'CO';
    console.log(name, age, country);
}

newuser();


// 


function newAdmin(name ='andres', age = 25, country = "col") {
    console.log(name, age, country);
}

newAdmin();
newAdmin("camilo", 26, "mex")

const newAdmin2 = (name ='andres', age = 25, country = "col") => console.log(name, age, country);

newAdmin2();