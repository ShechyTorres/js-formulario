function calcular(){
    var p1 = document.formulario.parcial1.value;
    var p2 = document.formulario.parcial2.value;
    var p3 = document.formulario.parcial3.value;
    var p4 = document.formulario.parcial4.value;
    suma = (parseInt(p1) + parseInt(p2) + parseInt(p3) + parseInt(p4));
    promedio = (parseFloat(p1*0.25) + parseFloat(p2*0.20) + parseFloat(p3*0.25) + parseFloat(p4*0.30));
    document.getElementById("resultadoSuma").innerHTML = suma;
    document.getElementById("resultadoPromedio").innerHTML = promedio;
}
function limpiar(){
    document.formulario.parcial1.value = "";
    document.formulario.parcial2.value = "";
    document.formulario.parcial3.value = "";
    document.formulario.parcial4.value = "";
    document.getElementById("resultadoSuma").innerHTML = suma = "";
    document.getElementById("resultadoPromedio").innerHTML = promedio = "";
}