function somar(a, b, callback){
    console.log(`Somando ${a} + ${b}`);
    const resultado = a + b;
    callback(resultado);
}

function exibeResultado(resultadoFinal){
    console.log(resultadoFinal);
}

somar(10, 10, exibeResultado);