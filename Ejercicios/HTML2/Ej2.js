//Hacer en html css y js un pequeño programa el donde tenga un boton por cada uno de los repasos pero le tiene que pasar los parametros
// por medio de un input, al precionar el boton debe colocar el valor abajo y pintarlo de azul

//Repasos
/*
1. Factorial
2. Numero Mayor
3. Ordenar Array
4. Filtrar
5. Sumar todos los numeros
*/


//Repaso #1 Factorial
//   function factorial(n) {
//     let result = n; 
//     for(let i= n - 1; i > 0; i--) {
//         result *= 1; 
//     }
//     return result; 
//   }

//Repaso #2 Numero Mayor
// function encontrarMayor(arr) { 
//     let mayor = arr[0];
//     for(let numero of arr ) {
//         if(numero > mayor) {
//             mayor = numero;
//         }
//     }
//     return mayor;
// }

//REPASO #3 Ordenar un array
// function ordenararray(arr){
//     return arr.sort(function(a,b){
//         return a-b;
//     })
// }

//REPASO #4 Filtrar
// function filtrarnum(arr, val) {
//     let numfil = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > val) {
//             numfil.push(arr[i]);
//         } 
//     }
//     return numfil;
// }

//REPASO #5 Sumar todos los numeros
// function sumararry(arr) {
//     return arr.reduce((sum, valo ) => sum + valo, 0);
// }

// let num = [1,2,3,-40,99];
// let res = sumararry(num);
// console.log(res);

// Intento fallido
function calcularFactorial() {
    const input = document.getElementById('factorialInput');
    const resultado = document.getElementById('resultadoContainer');
    if (!isNaN(input.value) && input.value !== "" && input.value >= 0) {
        const n = parseInt(input.value);
        let result = 1;
        for (let i = n; i > 1; i--) {
            result *= i;
        }
        resultado.textContent = `El factorial de ${n} es ${result}.`;
    } else {
        resultado.textContent = 'Por favor, ingresa un número válido y positivo.';
    }
}

function encontrarMayor() {
    const input = document.getElementById('numeroMayorInput');
    const resultado = document.getElementById('resultadoContainer');
    const arr = input.value.split(',').map(Number);
    if (arr.length > 0 && arr.every(val => !isNaN(val))) {
        let mayor = arr[0];
        for (let numero of arr) {
            if (numero > mayor) {
                mayor = numero;
            }
        }
        resultado.textContent = `El número mayor es ${mayor}.`;
    } else {
        resultado.textContent = 'Por favor, ingresa números válidos separados por comas.';
    }
}

function ordenarArray() {
    const input = document.getElementById('ordenarArrayInput');
    const resultado = document.getElementById('resultadoContainer');
    const arr = input.value.split(',').map(Number);
    if (arr.length > 0 && arr.every(val => !isNaN(val))) {
        arr.sort((a, b) => a - b);
        resultado.textContent = `El arreglo ordenado es: ${arr.join(', ')}.`;
    } else {
        resultado.textContent = 'Por favor, ingresa números válidos separados por comas.';
    }
}

function filtrarNumeros() {
    const inputValores = document.getElementById('filtrarNumerosValor');
    const inputArreglo = document.getElementById('filtrarNumerosArreglo');
    const resultado = document.getElementById('resultadoContainer');
    const val = Number(inputValores.value);
    const arr = inputArreglo.value.split(',').map(Number);
    if (!isNaN(val) && arr.length > 0 && arr.every(num => !isNaN(num))) {
        const numFil = arr.filter(numero => numero > val);
        resultado.textContent = `Números mayores que ${val}: ${numFil.join(', ')}.`;
    } else {
        resultado.textContent = 'Por favor, ingresa un valor y números válidos separados por comas.';
    }
}

function sumarTodosLosNumeros() {
    const input = document.getElementById('sumarNumerosInput');
    const resultado = document.getElementById('resultadoContainer');
    const arr = input.value.split(',').map(Number);
    if (arr.length > 0 && arr.every(val => !isNaN(val))) {
        const sum = arr.reduce((acc, val) => acc + val, 0);
        resultado.textContent = `La suma de los números es ${sum}.`;
    } else {
        resultado.textContent = 'Por favor, ingresa números válidos separados por comas.';
    }
}