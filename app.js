const dolar = 18.07;

let dolares = prompt('Ingresa la cantidad en dólares');

function pesosADolares(pesosMexicanos) {
    let dolares = pesosMexicanos / dolar;
    return dolares;
}

function dolaresAPesos(dolares) {
    let pesos = dolares * dolar;
    return pesos;
}

let pesosMexicanos = dolaresAPesos(dolares);

alert(dolares + ' dólares son ' + pesosMexicanos.toFixed(2) + " pesos mexicanos");

let dolaresConvertidos = pesosADolares(pesosMexicanos);
console.log(pesosMexicanos.toFixed(2) + " pesos mexicanos son " + dolaresConvertidos.toFixed(2) + " dólares");
