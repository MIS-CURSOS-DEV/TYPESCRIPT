
// Función anonima autoinvocada
(() => {
    const a:number = 10;
    let b:string;
    
    // Se debe poner el tipo de datos en los parametros de una función
    function sayHello(msg:string) {
        console.log(`${msg} Fernando`);
    }
})()