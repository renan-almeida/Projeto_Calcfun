function calcular() {
    var coeficienteA = parseFloat(document.getElementById("coeficienteA").value);
    var coeficienteB = parseFloat(document.getElementById("coeficienteB").value);
    var coeficienteC = parseFloat(document.getElementById("coeficienteC").value);
    var resultadoElement = document.getElementById("resultado");

    var solution = (coeficienteC - coeficienteB) / coeficienteA;
    resultadoElement.innerHTML = 'O valor de X é: ' + solution.toFixed(2);


}
