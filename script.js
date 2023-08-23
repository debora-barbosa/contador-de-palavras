function Calcular(){
    //Para obter texto digitado
    var textodigitado = document.getElementById("texto").value;
    //Criando variável que vai guardar a quantidade de palavras
    var quantidade = 0;
    //Para separar as palavras em vetores
    var separar = textodigitado.split(' ');
    //Para verificar a quantidade de palavras
    for(var i = 0; i<separar.length; i++){
        if(separar[i] != ""){
            quantidade += 1;
        }
    }
    //Para exibir a quantidade de palavras digitadas
    if(quantidade<2){
        document.querySelector('#quantidade').innerHTML = ("Possui "+quantidade+" palavra");
    } else{
        document.querySelector('#quantidade').innerHTML = ("Possui "+quantidade+" palavras");
    }

}