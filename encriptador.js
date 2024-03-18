/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar() {
    let txt1 = document.getElementById("txt1").value;

    let criptoTxt = txt1
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (txt1.lenght != 0) {
        document.getElementById("out1").value = criptoTxt;
    } else {
        alert("Debes ingresar algun texto...");
    }
}
btn1.addEventListener('click', encriptar);


function desencriptar () {
    let txt1 = document.getElementById("txt1").value;

    let criptoTxt = txt1
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (txt1.lenght != 0) {
        document.getElementById("out1").value = criptoTxt;
    } else {
        alert("Debes ingresar algun texto...");
    }
}

btn2.addEventListener('click', desencriptar);

