function crearNodoGenerico(nodo) {
    var nodo = document.createElement(nodo);
    return nodo;
    //return document.createElement(nodo);
}


function crearNodoTexto(nodo, texto) {
    var nodo = crearNodoGenerico(nodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo;
}

function crearNodoImagen(url,alt){
    var nodo = crearNodoGenerico("img");
    nodo.src =url;
    nodo.alt = alt;
    return nodo;
}

function adicionarBodyNodo(nodo) {
    document.body.appendChild(nodo);
}