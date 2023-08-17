import { data } from "./data/data"


  
  //! ---------------------------------------------------
  //? -------------- TIPOS Y SUBTIPOS -------------------
  //! ---------------------------------------------------

  //! BOOLEAN

  let ok: boolean = true
  let noOK = false

  //! STRING

  let nameProfe = "Pedro "
  let apellido: string = "Lerida"

  let saludo : string = `Buenos dias ${nameProfe}`  
  console.log("🚀 ~ file: index.ts:18 ~ saludo:", saludo)

//! VOID

const exampleArrow =(): void  | string=> {
  console.log("hola")
  return "Hola" 
}

//! null

let emplyJob : null = null


//! undefined

let noDefinido : undefined = undefined


//! enum

enum Color {
  Red, // 0
  Green, // 1 
  Blue // 2 
}

let semaforo: Color = Color.Green
console.log("🚀 ~ file: index.ts:45 ~ semaforo::", semaforo)



enum ColorByValue {
  Red = "no pasar",
  Green = "puede pasar",
  Blue = "vete al oceano"

}

let semaforoTwo = ColorByValue["Red"]
let semaforooo = ColorByValue.Red
console.log("🚀 ~ file: index.ts:58 ~ semaforooo:", semaforooo)
console.log("🚀 ~ file: index.ts:57 ~ semaforoTwo:", semaforoTwo)

//! Any yy unknown

let dog : any = "Rodolfo"
dog = 20 
dog = true 


/// si nos permite asignar su valor a otra variable porque el any es nada pero a la vez es todo
let cat : number = dog
console.log("🚀 ~ file: index.ts:68 ~ cat:", cat)

cat = 34
console.log("🚀 ~ file: index.ts:70 ~ cat:", cat)


let noValue : unknown


noValue = true
noValue = 23532.34
noValue = ""
noValue = true
noValue = {name: "Pedro", apellido: "Lerida"}
/// let novalueExample : boolean = novalue -----------> error no se puede asignar cuando es un unKnown 
let valueTwo :unknown =  noValue
console.log("🚀 ~ file: index.ts:78 ~ valueTwo:", valueTwo)

let valueExample: object= {noValue}


const StringValue = JSON.stringify(valueExample)
const parseObject = JSON.parse(StringValue)
console.log("🚀 ~ file: index.ts:93 ~ parseObject:", parseObject.noValue)



//! tipo objeto 

// -----------> clases, interface, array, literal
interface Profesor{
  name: String,
  apellido: String,
  edad: number
}

let Profesor : Profesor = {
  name: "Pedro",
  apellido: "Lerida",
  edad: 30
}
console.log("🚀 ~ file: index.ts:89 ~ Profersor:", Profesor)


///!!! -----------------------> interface y extends


interface Person {
  nombre : string 

}

interface Superhero {
  power: string 
}


interface Hero extends Person, Superhero{
  city: string
}

const hulk: Hero = {
  nombre: "Hulk",
  power: "Fuerte de narices",
  city: "NY"



}


//! ---------TYPES  -------------


type SuperHeroType = {
  name: string,
  city: string,
  age: number

}

type gender = {
  gender: "hombre"| "mujer"
}

const superman : SuperHeroType & Person= {
  nombre: "lucas",
  name:"Suprman",
  city: "GOthan",
  age: 2500
}


const avengers : SuperHeroType[]=[
  {
  name:"Suprman",
  city: "GOthan",
  age: 2500
},
{
  name:"Suprman",
  city: "GOthan",
  age: 2500
},{
  name:"Suprman",
  city: "GOthan",
  age: 2500
}
]


//! -----types intersection 

type alumn ={
  name: string,
  age: number
}
type adress={
  calle: string,
  numero: number
}

type alumnComplete = alumn & adress

const PeterAlumn : alumnComplete = {
  name: "Pedro",
  age: 30,
  calle: "guindos",
  numero: 44

}

//! ------------------literal 

type Tech = "Javascript" | "Typescript" | "Node"
const myTech : Tech = "Node"


//! --------------------- literal numero

const selectUnDia = (dia: 1| 2|3|4|5|6|7)=>{

}
// -----> error esto no es asignable --> selectUnDia("hola")
//! ----------------- funcioones
const gamer = "Pedro"
let personGamer = "Raul"


const printHello = (name = "Pedro" )=>{
  console.log("Hola que tal "+name)
  return name

}

printHello()


// //! ------------------- clases abstractas 

// abstract class Animal {
//   name : string
//   constructor(name: string){
//     this.name = name

//   }
//   abstract hacerSonido(): void
// }

// abstract class Perro extends Animal{
//   hacerRuido(){
//     console.log("guau")

//   }
// }

//  let miPerro : Perro  = new  Perro("dalton")

//! tipos condicionales 
//TODO -----------------------> MIRAR EJEMPLO APLICACION NASA CALCULAR MARS ONE
type EsNumero<T> = T extends number ? boolean : number



let resultado: EsNumero<456547> 
resultado = true



//! TIPO OPCIONAL ----------------------

const saludar = (nombre?: string)=>{

}

interface Dog {
  age? :number,
  nombre: string
}

const miPerro : Dog= {
nombre: "Currito"
}

//! ------ tipo de parametro de la funcion restante (operador rest)


const printElement= (primerParametro: string, ...restElemntParametre: string[])=>{
  console.log(primerParametro)
  console.log(restElemntParametre)

}

printElement("Lucas", "lorena", "RAUL", "KIKE")


//! -------- sobrecarga de funciones en typescript

function calcularArea(base:number, altura: number): number;
function calcularArea(lado: number): number;
function calcularArea(arg1:number, arg2?:number): number{

  if(arg2){
    return arg1 * arg2
  }else{
    return arg1* arg1
  }

}

let areRectangulo = calcularArea(5,10)
console.log("🚀 ~ file: index.ts:304 ~ areRectangulo:", areRectangulo)
let areaCuadrado = calcularArea(5)
console.log("🚀 ~ file: index.ts:306 ~ areaCuadrado:", areaCuadrado)



 //! ------tipo date

let fechaActual : Date = new Date()
console.log("🚀 ~ file: index.ts:313 ~ fechaActual:", fechaActual)



 