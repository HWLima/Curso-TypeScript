// Tipos de dados (Enum e Tuple) #02
// tsc --watch aula2
// tupla
// let a: [string, any, number] [] = [
//     ['url', 1515151, 54545],
//     ['port', 8080, 545445]
// ];
// function funcao(){
//     a.forEach(element => {
//         console.log(element[2]);
//     });
// }
// funcao()
// ############################################
// enum
var frutas;
(function (frutas) {
    frutas[frutas["banana"] = 0] = "banana";
    frutas[frutas["maca"] = 1] = "maca";
    frutas[frutas["pera"] = 2] = "pera";
    frutas[frutas["uva"] = 3] = "uva";
})(frutas || (frutas = {}));
function funcao() {
    var x = 0;
    if (x === frutas.banana) {
        alert("True");
    }
    else {
        alert("False");
    }
    console.log(frutas.banana);
}
funcao();
