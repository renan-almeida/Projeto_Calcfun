function calcular () {
    var valor1 = parseFloat (document.getElementById("valor1").value);
    var valor2 = parseFloat (document.getElementById("valor2").value);
    var resultadoElement = (document.getElementById("resultado"));
    var resultado = valor1 - valor2;
    (resultadoElement.innerHTML = 'O resultado da subtração é: ' + resultado);
}