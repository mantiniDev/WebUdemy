console.log(typeof Object);

class Produto {}
console.log(typeof Produto);


//funcao 01
//sem retorno

function imprimirSoma(a, b) {
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2)

//com retorno
function soma(a, b=1) {
    return a+b
}
console.log(soma(2,6));
console.log(soma(2));

//funcao 02
//funcao em uma variavel

const imprimir = function (a, b) {
    console.log(a+b);
}
imprimir(2,10)

//armazenando uma funcao arrow em uma variavel
const somar = (a,b) =>{
    return a+b
}
console.log(somar(2,20));

//retorno implicito
const subtracao = (a,b) => a -b
console.log(subtracao(1,1));

const imprimir2 = a => console.log(a);
imprimir2('Legallll')