/*
HACER TODO ESTO ANTES DE CONTINUAR

variables                       +
funciones                       +
alcance de las funciones        +
objetos                         +
destruir  objetos               +
parametros                      +
comparaciones en  js            +
condicionales                   +
funciones con retorno           +
arrow function                  +
for                             +
while                           +
do while                        +
switch                          +
arrays                          +
filtrar un array                +
transformar un array            +
reducir eun array  a  un valor  -
como  funcionan las clases  en  js 
modificando un prototipo        +
como usar  el this              +
clases                          +
como heredar  de una clase      +
funciones con  parametros       +
*/
var nombre = 'kraiptol'

var consultarNombre = nombre => console.log(nombre)

function  mostrarNombre(callback) {
    callback(window.nombre)
}

mostrarNombre(consultarNombre)