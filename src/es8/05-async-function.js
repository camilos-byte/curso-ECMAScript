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
