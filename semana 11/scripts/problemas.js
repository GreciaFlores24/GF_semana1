function calcularAgua(){
    const metros = parseFloat(document.getElementById("metros").value);
    const costoMetro = parseFloat(document.getElementById("costoMetro").value);
    const total = metros * costoMetro;
    document.getElementById("resultado").innerHTML =
    `Total a pagar: $${total}`;
}

function calcularLuz(){
    const kw = parseFloat(document.getElementById("kw").value);
    const costoKw = parseFloat(document.getElementById("costoKw").value);
    const total = kw * costoKw;
    document.getElementById("resultado").innerHTML =
    `Pago de luz: $${total}`;
}

function calcularArticulo(){
    const precio = parseFloat(document.getElementById("precio").value);
    const descuento = precio * 0.20;
    const precioDescuento = precio - descuento;
    const iva = precioDescuento * 0.15;
    const precioFinal = precioDescuento + iva;
    document.getElementById("resultado").innerHTML =
    `
    Precio con descuento: $${precioDescuento}<br>
    Precio final: $${precioFinal}
    `;
}

function calcularAhorro(){
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    const ahorroSemanal = sueldo * 0.15;
    const ahorroMensual = ahorroSemanal * 4;
    const ahorroAnual = ahorroMensual * 12;
    document.getElementById("resultado").innerHTML =
    `Ahorro anual: $${ahorroAnual}`;
}

function calcularCheque(){
    const dias = parseFloat(document.getElementById("dias").value);
    const hotel = parseFloat(document.getElementById("hotel").value);
    const comida = parseFloat(document.getElementById("comida").value);
    const otros = dias * 100;
    const total = hotel + comida + otros;
    document.getElementById("resultado").innerHTML =
    `
    Hotel: $${hotel}<br>
    Comida: $${comida}<br>
    Otros gastos: $${otros}<br>
    Total cheque: $${total}
    `;
}

function calcularPotencia(){
    const resistencia = parseFloat(document.getElementById("resistencia").value);
    const corriente = parseFloat(document.getElementById("corriente").value);
    const voltaje = resistencia * corriente;
    const potencia = voltaje * corriente;
    document.getElementById("resultado").innerHTML =
    `
    Voltaje: ${voltaje} V<br>
    Potencia: ${potencia} W
    `;
}

function calcularArea(){
    const lado = parseFloat(document.getElementById("lado").value);
    const area = lado * lado;
    document.getElementById("resultado").innerHTML =
    `Área del cuadrado: ${area}`;
}

function calcularPromedio(){
    const examen1 = parseFloat(document.getElementById("examen1").value);
    const examen2 = parseFloat(document.getElementById("examen2").value);
    const examen3 = parseFloat(document.getElementById("examen3").value);
    const promedio =
    (examen1 * 0.25) +
    (examen2 * 0.25) +
    (examen3 * 0.50);
    document.getElementById("resultado").innerHTML =
    `Promedio final: ${promedio}`;
}

function calcularVida(){
    const edad = parseFloat(document.getElementById("edad").value);
    const meses = edad * 12;
    const semanas = edad * 52;
    const dias = edad * 365;
    const horas = dias * 24;
    document.getElementById("resultado").innerHTML =
    `
    Meses: ${meses}<br>
    Semanas: ${semanas}<br>
    Días: ${dias}<br>
    Horas: ${horas}
    `;
}

function calcularLlamada(){
    const minutos = parseFloat(document.getElementById("minutos").value);
    const costoMinuto = parseFloat(document.getElementById("costoMinuto").value);
    const total = minutos * costoMinuto;
    document.getElementById("resultado").innerHTML =
    `Costo llamada: $${total}`;
}

function calcularHotel(){
    const dias = parseFloat(document.getElementById("dias").value);
    const costoDia = parseFloat(document.getElementById("costoDia").value);
    const total = dias * costoDia;
    document.getElementById("resultado").innerHTML =
    `Total hospedaje: $${total}`;
}

function calcularTriangulo(){
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const area = (base * altura) / 2;
    document.getElementById("resultado").innerHTML =
    `Área del triángulo: ${area}`;
}

function calcularDolares(){
    const pesos = parseFloat(document.getElementById("pesos").value);
    const tipoCambio = parseFloat(document.getElementById("tipoCambio").value);
    const dolares = pesos / tipoCambio;
    document.getElementById("resultado").innerHTML =
    `Dólares obtenidos: $${dolares}`;
}

function calcularEdad(){
    const nacimiento = parseFloat(document.getElementById("nacimiento").value);
    const actual = parseFloat(document.getElementById("actual").value);
    const edad = actual - nacimiento;
    document.getElementById("resultado").innerHTML =
    `Edad aproximada: ${edad} años`;
}

function calcularEstacionamiento(){
    const horas = parseFloat(document.getElementById("horas").value);
    const costoHora = parseFloat(document.getElementById("costoHora").value);
    const total = Math.ceil(horas) * costoHora;
    document.getElementById("resultado").innerHTML =
    `Total a pagar: $${total}`;
}

function calcularPintura(){
    const metros = parseFloat(document.getElementById("metros").value);
    const costoMetro = parseFloat(document.getElementById("costoMetro").value);
    const total = metros * costoMetro;
    document.getElementById("resultado").innerHTML =
    `Costo de pintura: $${total}`;
}

function calcularHipotenusa(){
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const hipotenusa = Math.sqrt((a*a) + (b*b));
    document.getElementById("resultado").innerHTML =
    `Hipotenusa: ${hipotenusa}`;
}

function calcularAutobus(){
    const kilometros = parseFloat(document.getElementById("kilometros").value);
    const costoKm = parseFloat(document.getElementById("costoKm").value);
    const total = kilometros * costoKm;
    document.getElementById("resultado").innerHTML =
    `Costo del boleto: $${total}`;
}

function calcularTiempo(){
    const distancia = parseFloat(document.getElementById("distancia").value);
    const velocidad = parseFloat(document.getElementById("velocidad").value);
    const tiempo = distancia / velocidad;
    document.getElementById("resultado").innerHTML =
    `Tiempo estimado: ${tiempo} horas`;
}

function calcularLlamada2(){
    const minutos = parseFloat(document.getElementById("minutos").value);
    const costoMinuto = parseFloat(document.getElementById("costoMinuto").value);
    const total = minutos * costoMinuto;
    document.getElementById("resultado").innerHTML =
    `Costo llamada: $${total}`;
}