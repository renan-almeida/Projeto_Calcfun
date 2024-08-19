function calcular () {
    var valor1 = parseFloat (document.getElementById("valor1").value);
    var valor2 = parseFloat (document.getElementById("valor2").value);
    var resultadoElement = (document.getElementById("resultado"));
    if (valor1 == 0 || valor2 == 0) {
        resultadoElement.innerHTML = 'Resultado indeterminado.'
    }
    else {
        
        var resultado = valor1 / valor2;
        (resultadoElement.innerHTML = 'O resultado da divisão é: ' + resultado);
    }
}