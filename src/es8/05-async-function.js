<<<<<<< HEAD
const fnAsinc = () => {
    return new Promise((resolve, reject)=>{
        (true) 
            ? setTimeout(()=> resolve('asinc'), 2000)
            : reject(new Error('ERROR'));
    });
}

const anotherFn = async () => {
    const somethig = await  fnAsinc();
    console.log(somethig);
    console.log('hola');
}

console.log('before');
anotherFn();
console.log("afther");
=======
const fnAsyn = () => {
    return new Promise ((resolve, reject)=>{
        (true)
            ? setTimeout(( )=> resolve('Async !! '), 2000)
            : reject(new Error('Error!!'));
    });
}

// async y await 

const anotherFn = async () => {
    const somethig = await fnAsyn(); 
    console.log(somethig);
    console.log('Hello');
}



console.log('before');
anotherFn();
console.log('afther');
>>>>>>> ef9d96b3c3a526d3cb9bc77c69d33890055e88ba
