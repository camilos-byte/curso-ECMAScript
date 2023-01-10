const primise1 = new Promise ((resolve, reject)=> reject('reject'));
const primise2 = new Promise ((resolve, reject)=> resolve('resolve '));
const primise3 = new Promise ((resolve, reject)=> resolve('resolve 2'));


Promise.allSettled([primise1, primise2, primise3])
    .then(response => console.log(response));

