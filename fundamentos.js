// JS - Lado del cliente
// NODE + V8 = JS Lado del servidor

// Variables = Contenedor de informacion

// Tipos Simples

let data = 12;              // Entero
let data2 = 23.6;           // Float
let data3 = 'Hola';         // String
let data4 = '@';            // Char  
let data5 = false;          // Boolean
let data6 = undefined;      // Undefined

// Tipos Compuestas

let data7 = ['hola', 54, true]      // Array

let user = {                        // Objeto
    name: 'Byron',
    activo: true
}

// No usar var - hoisting :,C
// Let y const :D

// ---------------------------------------------------

// Strings - cadena de caracteres

let password = "12345miku"

// Propiedades - Metodos 

// Propiedades

console.log(password.length);

// Metodos

console.log(password.trim());
console.log(password.includes('8'));
console.log(password.toLocaleUpperCase());
console.log(password.toLocaleLowerCase());

// ES6 - Nuevas Caracteristicas

// Template strings

console.log(`El password es: ${password}`);

// ---------------------------------------------------

let gamePrice1 = "500.35"
let gamePrice2 = 500.35

// Casting - ES6

console.log( + gamePrice1 + gamePrice2);

// Orden de ejecucion de los operadores (() ** * / + -)

// ---------------------------------------------------

let userCardBalance = 500
let CardBalance = 1000

// ES6 Operador ternario

let result = CardBalance <= userCardBalance ? "Pay" : "Consuming"
console.log(result);

// Valores Verdaderos - truthy
// Valores Falsos - falsy

let email
!email ? console.log("Provie an email") : console.log("Registre")

// Comparacion estricta ===

let userID = 123
userID === 123 ? console.log("User found") : console ("User doesn't exist")

// ---------------------------------------------------

// Loops

const goals = ['Learn', 'Play SF6', 'Watching Netflix', 'Enjoy holiday']

goals.forEach((goal) => {console.log(goal);})

const newGoals = goals.map((goal) => goal.toUpperCase())

// Summarty

console.log(goals);
console.log(newGoals);

//------------------------------------------------

//FUNCIÓN ANONIMA Y AUTOEJECUTADA

(function () { 
    console.log("Ejecución de una función");
})()

//FUNCIÓN DECLARADA
function getAvatar(){
    console.log('/photo/user.png');
}
getAvatar();

//FUNCIÓN EXPRESADA
const conectionBDD = function(){
    console.log("conexión exitosa"); //se alamacena una variable
}
conectionBDD();

// ARGUMENTOS
const validarEmailAndToken = function(email, token = '555'){
    console.log(`El token es ${token} y su email es ${email}`);
}

validarEmailAndToken('juan@gmail.com')

//RETORNO
function tiposRetorno (){
    //logica

    //return "Usuarios premium"
    //return 89
    //return true
    //return 88.4
    //return ['user1', 'user2']
    /*return{
        name:"Josué" ,
        id: 854
    }*/
}
tiposRetorno();

// ES6
//ARROW FUNCTION
const conectionBDDMongo = () => {
    console.log("conexión exitosa"); //se alamacena una variable
}
conectionBDDMongo();

const registerUser = (email) => { console.log("user registred")}
registerUser('eduard@gmail.com')


const datosBananeritoGood = {
    name: "Bananerito",
    age:1,
    address:{
        city:"Machala",
        telephone: 12345
    },
    friends: ['Ccodrigol', 'Torero'],
    status:true
}

//hila que hace 
