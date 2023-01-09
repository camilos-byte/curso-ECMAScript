const anotherFuncion = () =>{
    return new Promise ((reject, resolve) =>{
        if (false) {
            resolve('hey!!');
        }
        else{
            reject('opppssss !!!');
        }
    });
}


anotherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=> console.log('Finally'))