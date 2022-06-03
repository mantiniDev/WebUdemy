// par nom/valor

const saudacao = 'opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falla'
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 39,
    endereço: {
        rua: 'aquela',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)