document.getElementById("demo").innerHTML = "Ingresando texto en un p con innerHTML" ;

function myFunction() {
    document.getElementById("demo1").innerHTML = "El texto ha sido cambiado con innerHTML";
}
function writee(){
    document.write("<br> <br>"+ "esto es un document.write");
}
function alerta(){
window.alert("Esto es un window.alert");
}

console.log("Esto es un console.log")

function imprimir(){
    window.print();
    }

// ---------------------------------

/* declarar variables

 let a, b, c; */

//----------------------------------

// strings
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator
// \'	'	
// \"	"	
// \\	\
//------------------------------------------------------------------------
function string_length (text=document.getElementById("input_string").value){   
    let tex_length = text.length;
    window.alert(`La longitud es de ${tex_length}`) 
}
//------------------------------------------------------------------------
function string_slice (text=document.getElementById("input_string").value){   
    let tex_slice =  text.slice(1, 4);
    window.alert(`se extrajo ${tex_slice}`) 
}
//------------------------------------------------------------------------
function reemplazar (text=document.getElementById("input_string").value){   
    let reemplazo =  text.replaceAll("a", "4");
    reemplazo = reemplazo.replaceAll("e","3")
    reemplazo = reemplazo.replaceAll("i","1")
    reemplazo = reemplazo.replaceAll("o","0")
    reemplazo = reemplazo.replaceAll("u","^")
    window.alert(`se han cambiado las vocales minusculas ${reemplazo}`)
}
//------------------------------------------------------------------------
function concatenar (
        text1 = document.getElementById("text_1").value,
        text2 = document.getElementById("text_2").value 
        ){
        let text3 = text1.concat(" ",text2);
        window.alert(text3)
}
//------------------------------------------------------------------------
function mostrar_ocultar(iden, boton){

    let elemento = document.getElementById(iden);
    let estilo = window.getComputedStyle(elemento).display;

    if (estilo === "none") {     
        elemento.style.display = "inline";
        estilo = window.getComputedStyle(elemento).display;
        document.getElementById(boton).innerHTML = "Ocultar";
    }else{
        elemento.style.display = "none";
        estilo = window.getComputedStyle(elemento).display;
        document.getElementById(boton).innerHTML = "Mostrar";
    }
}

//------------------------------------------------------------------------

function fechas (fecha){

    this.fecha = fecha;
    this.toDateString = fecha.toDateString()
    this.getFullYear = fecha.getFullYear()
}

let fecha = new Date();
let dates = new fechas(fecha);
//------------------------------------------------------------------------

function aleatorio_entre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//------------------------------------------------------------------------




