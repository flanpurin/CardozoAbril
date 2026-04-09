//---------------------------------------Ejercicio 1---------------------------------------

/*let botonSaludo = document.getElementById("saludo");

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

Dos inputs numéricos y un <select> con cuatro opciones: suma, resta, multiplicación, división. Al hacer click, ejecutar la
operación seleccionada. Controlar la división por cero.*/
