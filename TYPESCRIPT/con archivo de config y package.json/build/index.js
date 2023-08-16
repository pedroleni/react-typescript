"use strict";
//! ---------------------------------------------------
//? -------------- TIPOS Y SUBTIPOS -------------------
//! ---------------------------------------------------
//! BOOLEAN
let ok = true;
let noOK = false;
//! STRING
let nameProfe = "Pedro ";
let apellido = "Lerida";
let saludo = `Buenos dias ${nameProfe}`;
console.log("🚀 ~ file: index.ts:18 ~ saludo:", saludo);
//! VOID
const exampleArrow = () => {
    console.log("hola");
    return "Hola";
};
//! null
let emplyJob = null;
//! undefined
let noDefinido = undefined;
//! enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2 
})(Color || (Color = {}));
let semaforo = Color.Green;
console.log("🚀 ~ file: index.ts:45 ~ semaforo::", semaforo);
var ColorByValue;
(function (ColorByValue) {
    ColorByValue["Red"] = "no pasar";
    ColorByValue["Green"] = "puede pasar";
    ColorByValue["Blue"] = "vete al oceano";
})(ColorByValue || (ColorByValue = {}));
let semaforoTwo = ColorByValue["Red"];
let semaforooo = ColorByValue.Red;
console.log("🚀 ~ file: index.ts:58 ~ semaforooo:", semaforooo);
console.log("🚀 ~ file: index.ts:57 ~ semaforoTwo:", semaforoTwo);
//! Any yy unknown
let dog = "Rodolfo";
dog = 20;
dog = true;
let cat = dog;
console.log("🚀 ~ file: index.ts:68 ~ cat:", cat);
cat = 34;
console.log("🚀 ~ file: index.ts:70 ~ cat:", cat);
let noValue;
noValue = true;
noValue = 23532.34;
noValue = "";
noValue = true;
noValue = { name: "Pedro", apellido: "Lerida" };
/// let novalueExample : boolean = novalue -----------> error no se puede asignar cuando es un unKnown 
let valueTwo = noValue;
console.log("🚀 ~ file: index.ts:78 ~ valueTwo:", valueTwo);
let valueExample = { noValue };
const StringValue = JSON.stringify(valueExample);
const parseObject = JSON.parse(StringValue);
console.log("🚀 ~ file: index.ts:93 ~ parseObject:", parseObject.noValue);
