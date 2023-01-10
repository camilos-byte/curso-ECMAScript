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
