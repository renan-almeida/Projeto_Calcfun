function calcular() {
    var coeficienteA = parseFloat(document.getElementById("coeficienteA").value);
    var coeficienteB = parseFloat(document.getElementById("coeficienteB").value);
    var coeficienteC = parseFloat(document.getElementById("coeficienteC").value);
    var resultadoElement = document.getElementById("resultado");

    var delta = coeficienteB * coeficienteB - 4 * coeficienteA * coeficienteC;
    if (delta > 0) {
        var x1 = (-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA);
        var x2 = (-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA);
        resultadoElement.innerHTML = 'As raízes da equação são: x1 = ' + x1.toFixed(2) + ' e x2 = ' + x2.toFixed(2);
    } else if (delta === 0) {
        var raizdupla = -coeficienteB / (2 * coeficienteA);
        resultadoElement.innerHTML = 'A equação possui uma raiz dupla no valor de:' + raizdupla;
    } else {
        resultadoElement.innerHTML = 'A equação não possui raízes reais.';
    }
}
