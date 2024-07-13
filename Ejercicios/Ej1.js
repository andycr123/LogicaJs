//Ejercicio #1
// Realzar una funcion que saluda a una persona despues de un tiempo determinado utlilizando setTimeout
// Definición de la función que saluda
/*
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

// Función que programa el saludo después de un tiempo determinado
function saludarDespuesDe(nombre, tiempo) {
    setTimeout(() => {
        saludar(nombre);
    }, tiempo);
}

// Ejemplo de uso
saludarDespuesDe("Juan", 3000);
*/

// Ejercio #1 v2
/*
const saludar = nombre => console.log(`Hola, ${nombre}!`);
const saludarDespuesDe = (nombre, tiempo) => setTimeout(() => saludar(nombre), tiempo);

saludarDespuesDe("Juan", 3000);
*/

//Ejercicio #2
// const boton = document.getElementById('miBoton');

// // Añade un EventListener al botón para el evento "click"
// boton.addEventListener('click', function() {
//     console.log('El botón ha sido clickeado.');
// });

//Ejercicio #3 
//Utilizar el metodo map para crear un array donde cada elemento es el doble del valor original 
// utlizar array y cada array con cada multiplicado por 2 
// mostrar el nuevo array por consola

// Array original
// const originalArray = [1, 2, 3, 4, 5];

// // Usar map para crear un nuevo array con cada elemento duplicado
// const doubledArray = originalArray.map(num => num * 2);

// // Mostrar el nuevo array por consola
// console.log(doubledArray);

//Ejercicio #4 
/*
Utilizar el metodo filter para crear un nuevo array con las edades que sean mayores o iguales a 18
Definir el array de edades
Utilizar filter para iterar la edad del array y crear un nuevo array con las edades mayores o iguales a 18
mostrar el nuevo array en consola
*/

// Definir el array de edades
// const edades = [15, 22, 34, 12, 18, 25, 30];

// // Utilizar filter para crear un nuevo array con las edades mayores o iguales a 18
// const mayoresDeEdad = edades.filter(edad => edad >= 18);

// // Mostrar el nuevo array en consola
// console.log(mayoresDeEdad);

// Ejercicio #5

/* 
Implementar una funcon async que obtiene datos de un retardo simulado utlzando setTimeout 
y un callback 
Crear una function llamada obtener datos que toma un callback como un argumento 
Dentro de obtener datos usar setTimeout para simular la obtencon de datos despues de 2 segundos 
para los datos obtenidos al callback proporcionado 

llamar los datos y pasar una funcon que reciba los datos y los muestre en consola 
*/

// // Definir la función asíncrona obtenerDatos que toma un callback como argumento
// async function obtenerDatos(callback) {
//     // Simular la obtención de datos después de 2 segundos usando setTimeout
//     setTimeout(() => {
//         // Datos simulados (puedes reemplazar esto con datos reales)
//         const datos = {
//             id: 1,
//             nombre: 'Ejemplo',
//             descripcion: 'Datos simulados obtenidos'
//         };
        
//         // Llamar al callback con los datos obtenidos
//         callback(datos);
//     }, 2000); // 2000 milisegundos = 2 segundos
// }

// // Definir una función de callback para mostrar los datos en la consola
// function mostrarDatosEnConsola(datos) {
//     console.log('Datos obtenidos:', datos);
// }

// // Llamar a obtenerDatos y pasar la función de callback como argumento
// obtenerDatos(mostrarDatosEnConsola);

//Ejercio #6 

/* 
Imprimir los datos de la api en una tabla con html css y js 
Tiene que tener una tabla separando cada uno de los campos de estas api 
Api =  fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/posts')
*/

// document.addEventListener('DOMContentLoaded', function() {
//     fetchData();
// });

// async function fetchData() {
//     try {
//         const [usersResponse, postsResponse] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/users'),
//             fetch('https://jsonplaceholder.typicode.com/posts')
//         ]);

//         if (!usersResponse.ok || !postsResponse.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const users = await usersResponse.json();
//         const posts = await postsResponse.json();

//         populateTable(users, posts);
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//     }
// }

// function populateTable(users, posts) {
//     const tableBody = document.getElementById('table-body');

//     posts.forEach(post => {
//         const user = users.find(user => user.id === post.userId);

//         const row = `
//             <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${post.id}</td>
//                 <td>${post.title}</td>
//                 <td>${post.body}</td>
//             </tr>
//         `;

//         tableBody.innerHTML += row;
//     });
// }


//Ejercicio de bucles for y array 
//Ejercio #1

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// //Ejercicio #2
// for (let i = 1; i <= 20; i += 1) {
//     console.log(i);
// }

//Ejercicio #3 
// let suma = 0;

// for (let i = 1; i <= 100; i++) {
//     suma += i;
// }

// console.log("La suma de los números del 1 al 100 es:", suma);

//Ejercicio #3 variante 
// let suma = 0;

// for (let i = 1; suma < 100; i++) {
//     suma += i;
//     console.log("Número:", i, "Suma acumulada:", suma);
// }

// console.log("La suma alcanzó o superó 100. Suma final:", suma);


//Ejercio #4
// function factorial(n) {
//     if (n < 0) {
//         return "El factorial no está definido para números negativos";
//     }
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// let numero = 7;
// console.log(`El factorial de ${numero} es ${factorial(numero)}`);

//Ejercio #5 
// let numeros = [10, 50, 30, 70, 20];
// let numeroMayor = Math.max(...numeros);
// console.log("El número mayor es: " + numeroMayor);

//Ejercio #6 
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const maxNumber = Math.max(...array);
// console.log(maxNumber);

//Ejercicio #7
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numerosPares = [];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 === 0) {
//         numerosPares.push(numeros[i]);
//     }
// }

// console.log(`Números pares en el array: ${numerosPares}`);

//Ejercicio #8
// function esPrimo(numero) {
//     if (numero <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(numero); i++) {
//         if (numero % i === 0) return false;
//     }
//     return true;
// }

// console.log(esPrimo(7)); 
// console.log(esPrimo(14)); 
// console.log(esPrimo(23)); 
// console.log(esPrimo(1)); 
// console.log(esPrimo(0)); 

//Ejercicio #9
// function revertirCadena(cadena) {
//     let resultado = '';
//     for (let i = cadena.length - 1; i >= 0; i--) {
//         resultado += cadena[i];
//     }
//     return resultado;
// }

// let texto = "Hola mundo!";
// let textoRevertido = revertirCadena(texto);
// console.log(textoRevertido); 

//Ejercicio 10
// for (let i = 1; i <= 20; i++) {
//     let output = "";
    
//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
    
//     console.log(output || i);
// }

//Ejercicio #11
// let numeros = [5, 2, 9, 1, 5, 6];
// numeros.sort((a, b) => b - a);
// console.log(numeros);

//Ejercicio #12
// function filtrarNumerosMayores(array, valor) {
//     let numerosFiltrados = array.filter(numero => numero > valor);
//     return numerosFiltrados;
// }

// let numeros = [10, 5, 25, 3, 15, 7];
// let valorDado = 10;

// let numerosMayores = filtrarNumerosMayores(numeros, valorDado);
// console.log(numerosMayores); 


//Ejercicio #13
// function sumarElementosArray(array) {
//     return array.reduce((total, current) => total + current, 0);
// }

// const miArray = [1, 2, 3, 4, 5];
// console.log(sumarElementosArray(miArray)); 



//Ejercicio #14
// function esPalindromo(cadena) {
//     cadena = cadena.toLowerCase().replace(/ /g, '');
//     return cadena === cadena.split('').reverse().join('');
// }

// console.log(esPalindromo("Anita lava la tina"));
// console.log(esPalindromo("Amor a roma")); 
// console.log(esPalindromo("Hola mundo")); 

//Ejercicio #15
// function contarVocales(cadena) {
//     return cadena.toLowerCase().split('').filter(c => 'aeiou'.includes(c)).length;
// }

// let texto = "aeiou";
// let cantidadVocales = contarVocales(texto);
// console.log(`El texto "${texto}" tiene ${cantidadVocales} vocales.`);

//Ejercicio #16
// function matrizIdentidad(n) {
//     let matriz = [];
//     for (let i = 0; i < n; i++) {
//         let fila = [];
//         for (let j = 0; j < n; j++) {
//             fila.push(i === j ? 1 : 0);
//         }
//         matriz.push(fila);
//     }
//     return matriz;
// }

// const n = 4;
// const matriz = matrizIdentidad(n);
// console.log(matriz);

//Ejerciicio #17
// let num = [3,6,67,6,23,11,100,8,93,0,1]; 

// let min = num[0];

// for(i=0; i<num.length; i++) {
//     if(min < num[i++]){
//         (min = num[i++]);
//     } else if (min >num[i++]){
//         (min = num[i++]);
//     } else {
//         console.log(min)
//     }
// }

//Ejercicio #18
// function crearArrayAleatorio(n) {
//     let array = [];
//     for (let i = 0; i < n; i++) {
//       array.push(Math.floor(Math.random() * 100));
//     }
//     return array;
//   }
  
//   let numerosAleatorios = crearArrayAleatorio(10);
//   console.log(numerosAleatorios);

//Ejercicio #19
// function sonTodosPositivos(arr) {
//     return arr.every(num => num > 0);
//   }
  
//   const array = [1, 2, 3, 4, 5];
//   console.log(sonTodosPositivos(array));
 
 //Ejercicio #20
//  function encontrarIndice(arr, elemento) {
//     return arr.indexOf(elemento);
//   }
  
//   console.log(encontrarIndice([1, 2, 3, 4, 5], 3));
//   console.log(encontrarIndice([1, 2, 3, 4, 5], 6));
   

//Practica #1
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
//   }

//Practica #2
// const segundoMayor = arr => arr.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => b - a)[1];

//Practca matriz #1
// let matriz = [];

// for (let i = 0; i < 4; i++) {
//   let fila = [];
//   for (let j = 0; j < 4; j++) {
//     fila.push(0);
//   }
//   matriz.push(fila);
// }

// console.log(matriz);

//Practca matriz #2
// let matriz = Array(4).fill().map(() => Array(4).fill(0));
// console.log(matriz);

//Practica Fibonnacci 
// function fibonacciHastaN(n) {
//     let fibo = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fibo.push(fibo[i - 1] + fibo[i - 2]);
//     }
//     return fibo.slice(0, n);
// }

// let serieFibonacci = fibonacciHastaN(10);
// console.log(serieFibonacci);

//Repaso #1 FACTORIAL
// function factorial(n) {
//     let result = n;
//     for (let i = n - 1; i > 0; i--) {
//       result *= i;
//     }
//     return result;
//   }
  
//   let numero = 5;
//   console.log(`El factorial de ${numero} es ${factorial(numero)}`);

  //Repaso segundo intento

//   function factorial(n) {
//     let result = n; 
//     for(let i= n - 1; i > 0; i--) {
//         result *= 1; 
//     }
//     return result; 
//   }

//   let num = 10;
//   console.log(`El factorial de ${num} es ${factorial(num)}`)

//Repaso #2Mostrar el numero mayor en un arreglo 
// function encontrarMayor(arr) {
//     let mayor = arr[0];
//     for (let numero of arr) {
//         if (numero > mayor) {
//             mayor = numero;
//         }
//     }
//     return mayor;
// }

// // Ejemplo de uso
// const numeros = [3, 41, 12, 9, 74, 15];
// console.log("El mayor número es:", encontrarMayor(numeros));


//Version 2 
// function encontrarMayor(arr) { 
//     let mayor = arr[0];
//     for(let numero of arr ) {
//         if(numero > mayor) {
//             mayor = numero;
//         }
//     }
//     return mayor;
// }

// const nummeros = [ 3, 41, 12 , 9, 74, 15 ];
// console.log(encontrarMayor(nummeros))

//REPASO #3 Ordenar un array
// function ordenarArray(array) {
//     return array.sort(function(a, b) {
//       return a - b;
//     });
//   }
  

//   let numeros = [5, 3, 8, 1, 2, 7, 4, 6];
//   let numerosOrdenados = ordenarArray(numeros);
  
//   console.log(numerosOrdenados);

//Version 2 
// function ordenararray(arr){
//     return arr.sort(function(a,b){
//         return a-b;
//     })
// }

// let numeros = [5,7,8,9,10,1,-2,2]
// let numerosOrdenados = ordenararray(numeros);
// console.log(numerosOrdenados);

//REPASO #4 Filtrar numeros mayores con un valor dado
// function filtrarNumerosMayores(array, valor) {
//     let numerosFiltrados = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > valor) {
//             numerosFiltrados.push(array[i]);
//         }
//     }
//     return numerosFiltrados;
// }

// const numeros = [1, 3, 5, 7, 9];
// const valor = 4;
// const numerosFiltrados = filtrarNumerosMayores(numeros, valor);

// console.log(numerosFiltrados);

//Version 2 
// function filtrarnum(arr, val) {
//     let numfil = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > val) {
//             numfil.push(arr[i]);
//         } 
//     }
//     return numfil;
// }

// const num = [2,4,5,6,7,1];
// const valo = 4;
// const numfil = filtrarnum(num, valo);

// console.log(numfil);

//REPASO #5 Sumar todos los elementos de un array
// function sumarArray(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//         suma += arr[i];
//     }
//     return suma;
// }

// let numeros = [1, 2, 3, 4, 5];
// let resultado = sumarArray(numeros);
// console.log("La suma de los elementos del array es:", resultado);

//Forma 2
// function sumarArray(arr) {
//     return arr.reduce((suma, valor) => suma + valor, 0);
// }


// let numeros = [1, 2, 3, 4, 5];
// let resultado = sumarArray(numeros);
// console.log("La suma de los elementos del array es:", resultado);

//Version 2 
// function sumararry(arr) {
//     return arr.reduce((sum, valo ) => sum + valo, 0);
// }

// let num = [1,2,3,-40,99];
// let res = sumararry(num);
// console.log(res);
//REPASO #6 Sumar todos los elementos de un array
// function sumarArray(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//         suma += arr[i];
//     }
//     return suma;
// }
// let numeros = [1, 2, 3, 4, 5];
// let resultado = sumarArray(numeros);
// console.log("La suma de los elementos del array es:", resultado);
//Forma 2
// function sumarArray(arr) {
//     return arr.reduce((suma, valor) => suma + valor, 0);
// }
// let numeros = [1, 2, 3, 4, 5];
// let resultado = sumarArray(numeros);
// console.log("La suma de los elementos del array es:", resultado);


// Ejercicios adicional #1 Contar los numeros pares en un array con el metodo filter:**
// function contarPares(arr) {
//     return arr.filter((valor) => valor % 2 === 0);
// }
// let numeros = [1, 2, 3, 4, 5,];
// let resultado = contarPares(numeros);
// console.log("Los numeros pares del array son:", resultado);

//version2 
// function sumararr(arr) {
//     return arr.filter((val)=> val %2  === 0);
// }

// let num = [1,2,3,7,5];
// let res = sumararr(num);
// console.log(res);

//Ejercicio adicional #2 Calcular el promedio de un array de nuermos con el mertodo reduce
// function promedioArray(arr) {
//     return arr.reduce((suma, valor) => suma + valor, 0)
//     .length;
// }
// let numeros = [1, 2, 3, 4, 5];
// let resultado = promedioArray(numeros);
// console.log("El promedio de los numeros del array es:", resultado);

//version2
// function promarr(arr) {
//     return arr.reduce((suma, valor) => suma + valor, 0) 
// }

// let num = [1,2,3,7,5];
// let res = promarr(num);
// console.log(res);