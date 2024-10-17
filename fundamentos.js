//Internet
    //TCP/IP
    //ISP = IP - Dispositivo (Modem) y (Router)
    //WEB
    //CLIENTE - SERVIDOR (ARQUITECTURA WEB)
    //HTTP (segura y no segura)
    //Dominio y subdominio
    // Hosting y Dominio 
// JS - Multiplataforma
// JS - Lado del cliente + V8
// ECMA International ===w3c 
// ECMA Script
// NODE + V8 = JS Lado del servidor

// Variables 
//Contenedor de informacion
// Tipos Simples - compuestos

// Strings
// Numbers
// Connditionals
// Functions
// Objects

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

// Summary

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

//------------------------------------------------

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

//-------------------------------------------

//Objetos

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

console.log(datosBananeritoGood.name)
console.log(datosBananeritoGood.friends)
console.log(datosBananeritoGood.status)

//FORMA LARGA
const nameB = datosBananeritoGood.name
const friendsb = datosBananeritoGood.friends

//ES6
//DESESTRUCTURACIÓN

const {name, address, friends, status:estado} = datosBananeritoGood //FORMA CORTA => Alamacenar variables en diferentes 
console.log(estado)

//Propiedades
datosBananeritoGood.photo = 'bananerito.png'
console.log(datosBananeritoGood);

delete datosBananeritoGood.age
console.log(datosBananeritoGood);

Object.values(datosBananeritoGood).includes("") ? console.log("Error") : console.log("Ok")

const lunch = {
    nameL: "Pollo Boraster",
    price:5
}

const drinks = {
    nameD: "Jugo de cooco",
    sweet: false
}

const odeUser={...lunch,...drinks} //propagación 

console.log(odeUser); //Se usa un perador spread para este ejemplo

//----------------------------------------------------------------

//ES6
//Nombres abreviados de propiedades 
const nameVideoGame = "MarioKart"
const priceVideoGame = 89

const VideoGame = {
    nameVideoGame, //Si se tiene el mismo nombre en clave y en el valor se lo puede omitir  nameVideoGame:nameVideoGame
    priceVideoGame
    //nVG:nameVideoGame,
    //pVG:priceVideoGame
}

console.log(VideoGame)

//----------------------------------------------------------------

//Arrays
const boys = ["Peter", "Juan","Luisa","Anahi", "Mateus" ]

const customers = [
    {
        name:"Luis",
        order:45,
        place:"Floresta"
    },
    {
        name:"Janeth",
        order:4,
        place:"Villaflora"
    }
]

boys.forEach((b,i) => {console.log(`${i+1} - ${b}`)})

customers.forEach((c,i)=> console.log(`${i+1} ${c.order} ${c.name}`)) //solo iterar el arreglo pero no modificar (ForEach)

const services = [
    {
        name: " Basic",
        mount: 5,
        image:"photo/service1.png",
        details: ["Ateción familiar", "Grupo Social"]
    },
    {
        name: "Plus",
        mount: 25,
        image:"photo/service2.png",
        details: ["Ateción diaria", "Seguro Médico    "]
    },   
]

const newServices = services.map((s)=>{ //map permite modificar el arreglo o la información 

    return{ 
        name:s.name,
        image:s.image,
    }
})
console.log(newServices);

const newServices1 = services.map((s)=>( //map permite modificar el arreglo o la información 

    { //para evitar la palabra return en vez de llaves se coloca parentesis 
        name:s.name,
        image:s.image,
    }
))
console.log(newServices1);

//----------------------------------------------
const equipments = ["Tubo de Oxígeno", "Camilla", "Termometros", "Medidores de P."]

//ES6
//Desestructuración
const [equipment1, equipment2,equipment3,equipment4] = equipments
console.log(equipment1);
console.log(equipment2);

//Sistema de desarrollo...

const categories = ["Camas", "Balanceados",  "Juguetes", "Accesorios", "Ropa", "Postres"]

categories.length <= 5 ? console.log("Registrar Categoría") : console.log("No se puede registrar")

categories.push("Medicamentos")
categories.unshift("Adopciones")

categories.pop() //Eliminar metodo del array
categories.shift() //Elimina el primer elemento del arreglo 

console.log(categories);

resultCategories = categories.find((c)=>( c === "Camas")) //Cada que se use el .find necesitara un return o solo () del mismo modo si es una función necesitara un Return 
resultCategories ? console.log("Mostrar Sub categorías") : console.log("No existe esa categoría");

let resultCategoriesFilter = categories.filter((c)=>(c.startsWith('C')))
console.log(resultCategoriesFilter);

//---------------------------------------------------------
//ES6
 const servicesCharge = ["Grúa","Material", "Herramientas"]
 const servicesMachines = ["Volquetas", "Trailer", "Tractores", "Excavadoras"]

 //...REST (Agrupar valores restantes)
 // - El RESt operator es una sintaxis que oermite agrupar multiples elementos en un objeto iterable 
const [machine1, , ...machines] = servicesMachines
console.log(machines)

 //...SPREAD (Expandir) - Fuciona
 //LET reasigna un valor 

 let allServices = []
 allServices =[...servicesCharge,...servicesMachines]
 console.log(allServices)

//-------------------------------------------------------------------------------------------------
//Sistema de plantillas clinicas para la atención odontologica en la EPN 
//-------------------------------------------------------------------------------------------------

//----------------------------------------------------
// INTERMEDIO                                        |
//----------------------------------------------------

//TRES estados
// -PENDIENTE
// -REALIZADO
// -

// DOOM - API que permite manipular los elementos de un HTML 
// HTML se puede llegar a formar como lenguaje de programción con el motor  de plantillas 
//      solo así se puede convertir el HTML como lenguaje de rogamación. 

// PROGRAMACIÓN 
// Imperativa - Declarar cada paso por  // JS PURO - VANILLA - JS 
// Declarativa - Solicitar que se necesita  // REACT

//----------------------------------------------------
// PROGRAMACIÓN ASINCRONA                            |
//----------------------------------------------------

//CALLBACK
const getUserBDD = () => {console.log({id:123, name: "Eduard", rol:"Admin"})}
setTimeout(getUserBDD, 5000) 

//CALBACK - HELL
// PROMESAS
const conectionBDDExterna = (dataConnection) => {
    return new Promise ((resolve,  reject)=>{
        setTimeout(()=>{
            dataConnection ? resolve("Conecction-OK") : reject ("Conecction-bad")
        }, 3000);
    })
}

// Then y Catch
conectionBDDExterna(false)
    .then((response) => {console.log(response)})
    .catch((error) => {console.log(error)})

// Async / Await

const verifyConnection =async () => {
    try {
        console.log(await conectionBDDExterna(true))
    } catch (error) {
        console.log(error);
    }
}
verifyConnection()

//Consumo de APIS
fetch("https://dog.ceo/api/breeds/image/")
    .then ((request) => (request.json()))
    .then((data) =>{console.log(data)} )
    .catch((error) => {console.log(error)})

const getDog = async () =>{
    try{
        let request = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await request.json()
    console.log(data)
    } catch (error){
        console.log(error)
    }
}
getDog()

//Token: lerx9FDWD5PH78M207Cj95ac4KTt8G3v
//Url: api.giphy.com/v1/stickers/trending

const url = 'httpS://api.giphy.com/v1/stickers/trending'
const token = 'lerx9FDWD5PH78M207Cj95ac4KTt8G3v'

const ghipy = async () =>{
    try{
        let request = await fetch("https://api.giphy.com/v1/stickers/trending?apikey=lerx9FDWD5PH78M207Cj95ac4KTt8G3v")
        let data = await request.json()
    console.log(data)
    } catch (error){
        console.log(error)
    }
}
ghipy()

//----------------------------------------------------
// ADVANCED                                          |
//----------------------------------------------------
//                                                   |
 //LOCAL STORAGE                                     |
 //MODULES                                           |
 //COMMMONJS = require                               |
 // ESMODULES = import o From                        |
 //                                                  |
//----------------------------------------------------
// GRADUADOS                                         |
//----------------------------------------------------

// BACKEND DEVELOPERS

//----------------------------------------------------//---------------------------------------------------
//FRAMEWORK: Resolver un problema más complejo en desarrollo                                               | 
// Librerias: Solventan una sola necesidad                                                                 |
//----------------------------------------------------//---------------------------------------------------

// El código se adapta al framework
// la librería se adapta a tu código 


// STAGE 1 = FUNDAMENTOS AGNOSTICOS

// STAGE 2 = PROYECTO 100% BACKEND

// STAGE = PROYECTO FULLSTACK

// 10 SEMANAS
