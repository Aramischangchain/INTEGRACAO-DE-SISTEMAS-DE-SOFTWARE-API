//alert("Vai funcionar?");

// var n1 = '15';
// var n2 = 5;
// var r = n1 - n2;

// public int resultado(){
//     return 0;
// }

// function resultado(){
//     return 0;
// }

//console.log("Resultado: " + resultado());

// function somar(a, b){
//     return a + b;
// }
// const arrowFunc = (a, b) => a + b;
// var resultado = arrowFunc(20, 5);

// console.log("Resultado: " + resultado);

// const { area, perimetro } = require("./quadrado");

// var areaDeUmQuadrado = area(23);
// console.log("Área do quadrado: " + areaDeUmQuadrado);

// var perimetroQuadrado = perimetro(23);
// console.log("Perímetro do quadrado: " + perimetroQuadrado);


const calc = require("./calculadora");

var resultado = calc.somar(10, 5);
console.log("Resultado da soma: " + resultado);

resultado = calc.subtrair(10, 5);
console.log("Resultado da subtração: " + resultado);

resultado = calc.multiplicar(10, 5);
console.log("Resultado da multiplicação: " + resultado);

resultado = calc.dividir(10, 5);
console.log("Resultado da divisão: " + resultado);