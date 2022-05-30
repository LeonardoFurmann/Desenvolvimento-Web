function ex_01(){
    var nome = document.getElementById("nome").value;
    document.getElementById("info").innerText = `Seu nome é ${nome}.`;
}

function ex_02(){
    var valor = document.getElementById("volume").value;
    document.getElementById("info").innerText = valor;
}

function ex_03(){
    var texto = document.getElementById("comentarios").value;
    var resto = 150 - texto.length;
    document.getElementById("info").innerText = `Restam ${resto} caracteres.`
}

function form(){
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    if(document.getElementById("feminino").checked){
        var genero = "feminino";
    }
    if(document.getElementById("masculino").checked){
        var genero = "masculino";
    }
    
    var genero = document.getElementById("").value;
    var nome = document.getElementById("nome").value;
    var nome = document.getElementById("nome").value;
}