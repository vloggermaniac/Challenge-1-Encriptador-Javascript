
var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};
/* Las llaves de encriptacion solicitadas son las siguientes:

- La letra "**a**" es convertida a "**ai**".
- La letra "**e**" es convertida a "**enter**".
- La letra "**i**" es convertida a "**imes**".
- La letra "**o**" es convertida a "**ober**"
- La letra "**u**" es convertida a "**ufat**"
 */
function encriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto"); //captura lo escrito en el area de texto
    const texto = textarea.value; // para que se borre el contenido del input despues
    var area_default = document.querySelector("#default"); //DIV de la imagen con descripcion  SALIDA
    var area_result = document.querySelector("#result"); //<!--DIV Area de Texto de Salida con el boton-->
    var texto_out = document.querySelector("#texto_out");//<!--DIV Area de Texto de Salida-->
    if (texto != ""){
        var out = ""
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            //le estoy dicendo que al agregar el texto
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible"); // desaparezca DIV de la imagen con descripcion  SALIDA
                area_result.classList.add("invisible");// y aparezca DIV Area de Texto de Salida con el boton
                return;
            }// se indica que de acuerdo a las letras agregadas se le asigna el valor "traduccion" a la variable out
            if(texto[i] == 'a'){ // si en el texto i es igual a "a" entonces a la variable "out" le asigna el valor "ai"
                out += traduccion["a"] ;// y asi en cada caso correspondiente
            }
            else if(texto[i] == 'e'){
                out += traduccion["e"];
            }
            else if(texto[i] == 'i'){
                out += traduccion["i"]; 
            }
            else if(texto[i] == 'o'){
                out += traduccion["o"]; 
            }
            else if(texto[i] == 'u'){
                out += traduccion["u"]; 
            }
            else{
                out += texto[i];
            }
        }

        area_default.classList.add("invisible"); // se lo establce como visible a: DIV de la imagen con descripcion  SALIDA
        area_result.classList.remove("invisible"); //e invisible a:  DIV Area de Texto de Salida con el boton
        texto_out.innerHTML = out;
    }

    return;

}

function desencriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        //remplazo o vuelvo en el texto encriptado dado
        // las encripatciones/ traducciones dadas a => su valor original de "ai"= a "enter"= e 
        // "g" es busqueda global 
        /* en el texto(texto).reemplaza(replace)(nueva expresion regular "busqueda"
         en "cadena de caracteres" de las 
        coincidencias que encuentres de:
        (las enciptaciones"traduccion ["a"]",busqueda global "g"), reemplazo = "a")
          */
        texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
        texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
        texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
        texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
        texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
        //el texto descritado se lo escribe al campo de salida tex_out : DIV Area de Texto de Salida
        texto_out.innerHTML = texto;
    }
    return;
}
//funcion copiar
function clipboard(){
    const texto_out = document.querySelector("#texto_out");
    //se copia el valor al portapapeles
    navigator.clipboard.writeText(texto_out.value);
}
//asigno los ID de los botones a las variables que posteriormente uno a las funciones
const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');


//uno las funciones con el hacel click en los botones
//es decir al hacer click llama la funcion correspndiente
enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard();} );