var campoDeTexto;
var campoSalida;
var panel_ini;
var panel_fin;

window.onload = function (){
    campoDeTexto = document.getElementById("mensaje"); 
    campoSalida = document.getElementById("resultado");
    panel_ini = document.getElementById("resul-ini");
    panel_fin =document.getElementById("resul-final");
    ocultar(panel_fin);
}

function ocultar(nodo){
    nodo.setAttribute("style","display:none");
}

function mostrar(nodo){
    nodo.setAttribute("style","display:flex");
}

function validar(cadenaValidar){
    let texto = cadenaValidar;
    let validar = new RegExp("[^a-z ]+");
    if(validar.test(texto)){
        return false;
    }else{
        return true;
    }
}

function cifrar(){
    let cadenaACifrar = campoDeTexto.value;
    if (!validar(cadenaACifrar)){
        alert("caracteres invalidos");
        return
    }
    let salida = "";
    for(char of cadenaACifrar){
        if(cifrado.has(char)){
            salida += cifrado.get(char);
        }else{
            salida += char;
        }
    }
    campoSalida.textContent = salida;
    ocultar(panel_ini);
    mostrar(panel_fin);
}

function descifrar(){
    let cadenaADescifrar = campoDeTexto.value
    let salida = cadenaADescifrar
    if (!validar(salida)){
        alert("caracteres invalidos");
        return
    }else{
    for( llave of descifrado){
        salida = salida.replaceAll(llave[0],llave[1]);
    }
    campoSalida.textContent = salida;
    ocultar(panel_ini);
    mostrar(panel_fin);
    }
}

function copiar(){
    navigator.clipboard.writeText(campoSalida.textContent)
    alert("texto copiado");
}

cifrado = new Map([
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
]);

descifrado = new Map([
    ["enter","e"],
    ["imes","i"],
    ["ai","a",],
    ["ober","o"],
    ["ufat","u",]
]);