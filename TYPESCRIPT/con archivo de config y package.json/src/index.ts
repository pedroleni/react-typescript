
//! -------------------------- genericos----------------------------
const example = ( arg: any)=>{
  console.log(arg)
}

example([1,2])



function exampleGnerico<T>(arg: T): T {
  return arg
}

const exampleFunctionArrow = <T>(arg: T)=>{
  return arg
}

console.log(exampleFunctionArrow<string>("Hola soy el valor del tipo generico"))
 

exampleFunctionArrow<number>(123)



 //! ------ generico en una interface

 interface Diccionario<K, V>{
  clave: K,
  valor: V,
 }


 let definicion: Diccionario<string, number>


 definicion = {
  clave: "numero de piso de la vivienda",
  valor: 34
 }

 let alumno: Diccionario<string, string>= {
  clave: "Rodolfo",
  valor: "primer curso"
 }


//  alumno = {
//   clave: 1244
//  } -------> error bloqueado por el tipo string 



let alumnoAny : any ={
  clave: "Alfredo",
  valor: "segundo año"
}


alumnoAny = {
  clave: 2335234
}


let alumnoInferenciaDeTipo = {
  clave: "Eva",
  valor: " segundo año"
}

// alumnoInferenciaDeTipo ={
//   clave: 1283898956789
// } -------> da errror


//! ------------------ interface con un extends y un generico


interface Animal {
  nombre: string 
}


interface CajaDeAnimales< T extends Animal>{
  contenido: T
}

let cajaRaton: CajaDeAnimales<{nombre: string, vidas: number, adress: {
  calle: string, number: number 
}}> ={
  contenido: {nombre: "Lucrecia", vidas: 20, adress: {
    calle: "Rios", number: 221423
  } }
}
console.log("🚀 ~ file: index.ts:90 ~ cajaRaton:", cajaRaton)


// cajaRaton = {
//   contenido: {nombre: "Rodolfo", vidas: 2000}
// } ....> os da error porque falta adress 


//! -------------------------- tuplas--------


const definicionDiccionario : [string, number]=["casas", 3465346]

type Tupla = [string, number]

const definitionYear = ["enero", 1]
definitionYear.push(124124)
console.log("🚀 ~ file: index.ts:110 ~ definitionYear:", definitionYear)



let  arrayTuplas : Tupla[]