var historialAcciones = [];
function calcularPerimetro() {
    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoC = parseFloat(document.getElementById("ladoC").value);
    var perimetro = ladoA + ladoB + ladoC;
    var resultados = document.getElementById("resultados");
    resultados.innerHTML = "";
    resultados.innerHTML += "Perímetro: " + perimetro;
    var historialMensaje = "Perímetro: " + perimetro;
    agregarHistorial(historialMensaje);
}

function calcularArea() {
    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoC = parseFloat(document.getElementById("ladoC").value);
    var s = (ladoA + ladoB + ladoC) / 2;
    var area = Math.sqrt(s * (s - ladoA) * (s - ladoB) * (s - ladoC));
    var resultados = document.getElementById("resultados");
    resultados.innerHTML = "";
    resultados.innerHTML += "Área: " + area;
    var historialMensaje ="Área: " + area;
    agregarHistorial(historialMensaje);
}

function determinarTipo() {
    var ladoA = parseFloat(document.getElementById("ladoA").value);
    var ladoB = parseFloat(document.getElementById("ladoB").value);
    var ladoC = parseFloat(document.getElementById("ladoC").value);
    var tipo;
    if (ladoA === ladoB && ladoB === ladoC) {
        tipo = "Equilátero";
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        tipo = "Isósceles";
    } else {
        tipo = "Escaleno";
    }
    var resultados = document.getElementById("resultados");
    resultados.innerHTML = "";
    resultados.innerHTML += "Tipo: " + tipo;

    var historialMensaje ="Tipo: " + tipo;
    agregarHistorial(historialMensaje);
}

function agregarHistorial(mensaje) {
    historialAcciones.push(mensaje);
    actualizarHistorial();
}

function actualizarHistorial() {
    var historial = document.getElementById("historial");
    historial.innerHTML = "";
    for (var i = 0; i < historialAcciones.length; i++) {
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = historialAcciones[i];
        historial.appendChild(nuevoElemento);
    }
}

function retroceso() {
    if (historialAcciones.length > 0) {
        historialAcciones.pop();
        actualizarHistorial();
    }
}
document.getElementById("retroceso").addEventListener("click", function () {
    retroceso();
});
