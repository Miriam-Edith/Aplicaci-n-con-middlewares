var FechaHora = (req, res, next)=>{
    console.log("Fecha y hora de entrada:", $,{new:Date()});
    next();
};
var saludo = (req, res, next)=>{
    console.log("Bienvenido, estás en la ruta:");
    next();
};

console.log("Estas en la ruta")

module.exports ={FechaHora, saludo}