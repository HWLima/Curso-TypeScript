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
enum frutas {banana, maca, pera, uva}

function funcao(){
    let x = 0;
    if (x === frutas.banana){
        alert("True");
    } else {
        alert("False")
    }
    console.log(frutas.banana)
}
funcao()
