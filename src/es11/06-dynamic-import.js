const boton = document.querySelector("#btn");


boton.addEventListener('click',  async ()=>{
    const module = await import('./module.js');
    console.log(module);
    module.hello();
})


