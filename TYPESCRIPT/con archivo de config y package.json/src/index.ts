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


///!!! -----------------------> objetos grandes de las apis!!

let dataType = data 