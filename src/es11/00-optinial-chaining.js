// podemos tener un objeto que tenga la representacion llave valor 
// pero podemos tener errores y romper el aplicativo 

// podremos validar sin romper el flujo de la app 

const user = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}


console.log(user?.bebeloper?.country);