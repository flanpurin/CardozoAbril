//---------------------------------------Ejercicio 1---------------------------------------

/*
let botonSaludo = document.getElementById("saludo");

botonSaludo.addEventListener("click", function saludar() {
  alert("Hola Mundo!");
});

//---------------------------------------Ejercicio 2---------------------------------------

let botonNombre = document.getElementById("saludoNombre");
let resultado = document.getElementById("resultado");

botonNombre.addEventListener("click", function saludarNombre() {
  let nombre = document.getElementById("nombre").value;
  resultado.textContent = "Hola, " + nombre + "!";
});

//---------------------------------------Ejercicio 3---------------------------------------

let botonAnalizar = document.getElementById("analizar");

botonAnalizar.addEventListener("click", function analizarValor() {
  let dato = document.getElementById("valor").value;
  let resultado = document.getElementById("resultado");

  let mensaje;
  if (isNaN(dato)) {
    mensaje = "No es un número.";
  } else {
    mensaje = "Es un número valido.";
  }

  resultado.innerHTML = "Tipo: " + typeof dato + " - " + mensaje;
});

//---------------------------------------Ejercicio 4---------------------------------------

let botonCalculo = document.getElementById("calculo");
let resultado = document.getElementById("resultado");

botonCalculo.addEventListener("click", function operacion() {
  console.log(25 * 4 - 10);
  resultado.textContent = 25 * 4 - 10;
});

//---------------------------------------Ejercicio 5---------------------------------------

let botonSuma = document.getElementById("suma");
let resultado = document.getElementById("resultado");

botonSuma.addEventListener("click", function sumar() {
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;

  if (num1 === "" || num2 === "") {
    resultado.textContent = "Error. No puede haber campos vacios.";
  } else {
    let n1 = Number(num1);
    let n2 = Number(num2);

    resultado.textContent = n1 + n2;
  }
});

//---------------------------------------Ejercicio 6---------------------------------------

let botonResta = document.getElementById("resta");
let resultado = document.getElementById("resultado");

botonResta.addEventListener("click", function restar() {
  let num1 = parseFloat(document.getElementById("n1").value);
  let num2 = parseFloat(document.getElementById("n2").value);

  let resta = num1 - num2;
  let mensaje;
  if (resta > 0) {
    mensaje = "(positivo)";
  } else if (resta < 0) {
    mensaje = "(negativo)";
  } else {
    mensaje = "(cero)";
  }
  resultado.textContent = `Resultado: ${resta} ${mensaje}`;
});

//---------------------------------------Ejercicio 7---------------------------------------

let botonMultiplica = document.getElementById("multiplica");
let resultado = document.getElementById("resultado");

botonMultiplica.addEventListener("click", function multiplicar() {
  let num1 = Number(document.getElementById("n1").value);
  let num2 = Number(document.getElementById("n2").value);

  resultado.textContent = num1 * num2;

  console.log(`${num1} x 1 = ${num1 * 1}`);
  console.log(`${num1} x 2 = ${num1 * 2}`);
  console.log(`${num1} x 3 = ${num1 * 3}`);
  console.log(`${num1} x 4 = ${num1 * 4}`);
  console.log(`${num1} x 5 = ${num1 * 5}`);
});

//---------------------------------------Ejercicio 8---------------------------------------

let botonDivide = document.getElementById("divide");
let resultado = document.getElementById("resultado");

botonDivide.addEventListener("click", function dividir() {
  let num1 = Number(document.getElementById("n1").value);
  let num2 = Number(document.getElementById("n2").value);

  if (num2 === 0) {
    resultado.textContent = "Error: no se puede dividir por cero.";
  } else {
    resultado.textContent = (num1 / num2).toFixed(2);
  }
});

//---------------------------------------Ejercicio 9---------------------------------------

let botonClasifica = document.getElementById("clasifica");
let resultado = document.getElementById("resultado");

botonClasifica.addEventListener("click", function clasificar() {
  let num = Number(document.getElementById("num").value);

  if (num > 0) {
    resultado.textContent = "El numero ingresado es Positivo.";
  } else if (num < 0) {
    resultado.textContent = "El numero ingresado es Negativo.";
  } else {
    resultado.textContent = "El numero ingresado es Cero.";
  }
});

//---------------------------------------Ejercicio 10---------------------------------------

let botonVerifica = document.getElementById("verifica");
let resultado = document.getElementById("resultado");

botonVerifica.addEventListener("click", function verificar() {
  let num = Number(document.getElementById("num").value);

  if (num !== Math.floor(num)) {
    resultado.textContent = "Ingresá un número entero.";
  } else if (num % 2 === 0) {
    resultado.textContent = "El número ingresado es par";
  } else {
    resultado.textContent = "El número ingresado es impar.";
  }
});

//---------------------------------------Ejercicio 11---------------------------------------

let botonEdad = document.getElementById("verificaEdad");
let resultado = document.getElementById("resultado");

botonEdad.addEventListener("click", function verificarEdad() {
  let nombre = document.getElementById("nombre").value;
  let edad = Number(document.getElementById("edad").value);

  if (edad < 0 || edad > 120) {
    resultado.textContent = "Error. La edad ingresada es incorrecta.";
  } else if (edad >= 18) {
    resultado.textContent = `${nombre} es mayor de edad.`;
  } else {
    let diferencia = Number(18 - edad);
    resultado.textContent = `${nombre} es menor de edad. Le faltan ${diferencia} años.`;
  }
});

//---------------------------------------Ejercicio 12---------------------------------------

let botonCompara = document.getElementById("compara");
let resultado = document.getElementById("resultado");

botonCompara.addEventListener("click", function compararNumeros() {
  let num1 = Number(document.getElementById("n1").value);
  let num2 = Number(document.getElementById("n2").value);

  if (num1 > num2) {
    resultado.textContent = `El mayor es: ${num1}`;
  } else if (num2 > num1) {
    resultado.textContent = `El mayor es: ${num2}`;
  } else {
    resultado.textContent = `Los dos números son iguales.`;
  }
});

//---------------------------------------Ejercicio 13---------------------------------------

let botonAreaPerimetro = document.getElementById("areaPerimetro");
let resultado = document.getElementById("resultado");

botonAreaPerimetro.addEventListener("click", function calcularAreaPerimetro() {
  let b = Number(document.getElementById("base").value);
  let h = Number(document.getElementById("altura").value);

  if (b <= 0 || h <= 0) {
    resultado.textContent =
      "Error. No puede haber valores menores o iguales a 0.";
  } else {
    resultado.textContent = "Area: " + b * h + " - Perimetro: " + 2 * (b + h);
  }
});

//---------------------------------------Ejercicio 14---------------------------------------

let botonConvierte = document.getElementById("convierte");
let resultado = document.getElementById("resultado");

botonConvierte.addEventListener("click", function convertirCelsius() {
  let C = Number(document.getElementById("celsius").value);

  if (C < -273.15) {
    resultado.textContent = "Error. La temperatura debe ser mayor a -273.15°C.";
  } else {
    let fahrenheit = C * (9 / 5) + 32;
    let kelvin = C + 273.15;
    resultado.textContent = `Conversion: ${fahrenheit.toFixed(2)}°F y ${kelvin.toFixed(2)}°K`;
  }
});

//---------------------------------------Ejercicio 15---------------------------------------

let botonMontoPropina = document.getElementById("montoPropina");

botonMontoPropina.addEventListener("click", function calcularMontoPropina() {
  let resultado = document.getElementById("resultado");
  let monto = Number(document.getElementById("monto").value);
  let porc = Number(document.getElementById("porcentaje").value);

  if (porc < 0 || porc > 100) {
    resultado.textContent = "Error. El procentaje debe ser entre 0 y 100.";
  } else {
    let propina = monto * (porc / 100);
    let total = monto + propina;
    resultado.textContent = `Propina: $${propina.toFixed(2)} - Total a pagar: $${total.toFixed(2)}`;
  }
});

//---------------------------------------Ejercicio 16---------------------------------------
let botonMinMax = document.getElementById("minMax");

botonMinMax.addEventListener("click", function verificarMinMax() {
  let resultado = document.getElementById("resultado");
  let minimo = Number(document.getElementById("min").value);
  let maximo = Number(document.getElementById("max").value);
  let num = Number(document.getElementById("num").value);

  if (minimo < maximo) {
    if (num <= maximo && num >= minimo) {
      resultado.textContent = `El numero ${num} esta dentro del rango ${minimo} - ${maximo}.`;
    } else if (num < minimo) {
      resultado.textContent = `El numero ${num} es menor al minimo.`;
    } else if (num > maximo) {
      resultado.textContent = `El numero ${num} es mayor al maximo.`;
    }
  } else {
    resultado.textContent = "Error. El minimo debe ser menor al maximo.";
  }
});

//---------------------------------------Ejercicio 17---------------------------------------

let botonIgual = document.getElementById("igual");

botonIgual.addEventListener("click", function operaciones() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let op = document.getElementById("operacion").value;
  let res = document.getElementById("resultado");
  let calculo;

  if (op == "suma") {
    calculo = n1 + n2;
  }
  if (op == "resta") {
    calculo = n1 - n2;
  }
  if (op == "multi") {
    calculo = n1 * n2;
  }
  if (op == "div") {
    if (n2 == 0) {
      calculo = "No se puede dividir por cero";
    } else {
      calculo = n1 / n2;
    }
  }

  res.textContent = calculo;
});

//---------------------------------------Ejercicio 18---------------------------------------

let botonAplicar = document.getElementById("aplicaDesc");

botonAplicar.addEventListener("click", function aplicaDescuento() {
  let p = parseFloat(document.getElementById("precio").value);
  let d = parseFloat(document.getElementById("descuento").value);
  let res = document.getElementById("resultado");

  let ahorro = p * (d / 100);
  let precioFinal = p - ahorro;
  let etiqueta = "";

  if (d == 0) {
    etiqueta = "Sin descuento";
  }
  if (d > 0 && d <= 30) {
    etiqueta = "Oferta";
  }
  if (d > 30) {
    etiqueta = "¡Mega oferta!";
  }

  res.textContent =
    "Precio final: $" +
    precioFinal +
    " - " +
    "Ahorro: $" +
    ahorro +
    " - " +
    "Etiqueta: " +
    etiqueta;
});

//---------------------------------------Ejercicio 19---------------------------------------

let botonVerif = document.getElementById("verif");

botonVerif.addEventListener("click", function verificaBisiesto() {
  let anio = parseFloat(document.getElementById("anio").value);
  let res = document.getElementById("resultado");

  if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
    res.textContent = "El año " + anio + " es bisiesto.";
  } else {
    res.textContent = "El año " + anio + " no es bisiesto.";
  }
});

//---------------------------------------Ejercicio 20---------------------------------------

let botonIVA = document.getElementById("calculaIVA");

botonIVA.addEventListener("click", function calcularPrecioIVA() {
  let p = parseFloat(document.getElementById("precio").value);
  let check = document.getElementById("conIva").checked;
  let res = document.getElementById("resultado");
  let final;

  if (check == true) {
    final = p * 1.21;
    res.textContent = "Precio con IVA aplicado: $" + final;
  } else {
    final = p;
    res.textContent = "Precio sin IVA: $" + final;
  }
});

//---------------------------------------Ejercicio 21---------------------------------------

let botonSeg = document.getElementById("convierteSeg");

botonSeg.addEventListener("click", function convertirSegundos() {
  let seg = parseFloat(document.getElementById("segundos").value);
  let res = document.getElementById("resultado");

  if (seg < 0) {
    res.textContent = "Error: El número no puede ser negativo";
  } else {
    let horas = Math.floor(seg / 3600);
    let minutos = Math.floor((seg % 3600) / 60);
    let segundosRestantes = seg % 60;

    res.textContent = horas + "h " + minutos + "m " + segundosRestantes + "s";
  }
});

//---------------------------------------Ejercicio 22---------------------------------------

let botonValidar = document.getElementById("valida");

botonValidar.addEventListener("click", function validarContrasenia() {
  let p1 = document.getElementById("pass1").value;
  let p2 = document.getElementById("pass2").value;
  let res = document.getElementById("resultado");

  if (p1.length < 6) {
    res.textContent = "Error: La contraseña debe tener al menos 6 caracteres.";
  } else if (p1 != p2) {
    res.textContent = "Error: Las contraseñas no coinciden.";
  } else {
    res.textContent = "Contraseña válida y confirmada con éxito.";
  }
});

//---------------------------------------Ejercicio 23---------------------------------------

let botonEvaluar = document.getElementById("evalua");

botonEvaluar.addEventListener("click", function evaluarNota() {
  let nota = parseFloat(document.getElementById("nota").value);
  let res = document.getElementById("resultado");
  let condicion = "";

  if (nota < 0 || nota > 10 || isNaN(nota)) {
    res.textContent = "Error: Ingresa una nota válida entre 0 y 10";
  } else {
    // Rangos de notas
    if (nota >= 0 && nota <= 3) {
      condicion = "Desaprobado";
    }
    if (nota >= 4 && nota <= 5) {
      condicion = "Recuperatorio";
    }
    if (nota >= 6 && nota <= 7) {
      condicion = "Aprobado";
    }
    if (nota >= 8 && nota <= 9) {
      condicion = "Muy bueno";
    }
    if (nota == 10) {
      condicion = "Sobresaliente";
    }

    res.textContent = "Condición: " + condicion;
  }
});

//---------------------------------------Ejercicio 24---------------------------------------

let botonVuelto = document.getElementById("vuelto");

botonVuelto.addEventListener("click", function calcularVuelto() {
  let precio = parseFloat(document.getElementById("precio").value);
  let entregado = parseFloat(document.getElementById("entregado").value);
  let res = document.getElementById("resultado");

  if (entregado < precio) {
    let falta = precio - entregado;
    res.textContent = "Monto insuficiente. Faltan: $" + falta.toFixed(2);
  }
  if (entregado == precio) {
    res.textContent = "Monto exacto, sin vuelto.";
  }
  if (entregado > precio) {
    let vuelto = entregado - precio;
    res.textContent = "El vuelto es: $" + vuelto.toFixed(2);
  }
});

//---------------------------------------Ejercicio 25---------------------------------------

let botonIgual = document.getElementById("igual");
let botonLimpiar = document.getElementById("limpia");

botonIgual.addEventListener("click", function calcularOperaciones() {
  let v1 = document.getElementById("n1").value;
  let v2 = document.getElementById("n2").value;
  let operacion = document.getElementById("op").value;
  let res = document.getElementById("resultado");
  let calculo;

  if (v1 == "" || v2 == "") {
    res.textContent = "Error: Completa ambos números.";
    return;
  }

  let num1 = parseFloat(v1);
  let num2 = parseFloat(v2);

  if (operacion == "suma") {
    calculo = num1 + num2;
  }
  if (operacion == "resta") {
    calculo = num1 - num2;
  }
  if (operacion == "multi") {
    calculo = num1 * num2;
  }
  if (operacion == "div") {
    if (num2 == 0) {
      calculo = "No se puede dividir por cero.";
    } else {
      calculo = num1 / num2;
    }
  }
  if (operacion == "pot") {
    calculo = Math.pow(num1, num2);
  }

  if (typeof calculo == "number") {
    calculo = calculo.toFixed(2);
  }

  res.textContent = "Resultado: " + calculo;
  console.log("El resultado es: " + calculo);
});

botonLimpiar.addEventListener("click", function limpiarCampos() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("resultado").textContent = "";
  console.log("Campos limpiados");
});
*/
