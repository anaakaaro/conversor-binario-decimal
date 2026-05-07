function BinarioParaDecimal(number){
    let entrada = document.getElementById("numeroBinario").value;
    let entradaInvalida = entrada === "";

    if(entradaInvalida){
        document.getElementById("entradaVazia").classList.remove("d-none");
        document.getElementById("entradaVazia").textContent = "Entrada vazia! Digite um binário válido";
        return;
    }

    const binario = entrada.split('');
    binario.reverse();

    let numeroDecimal = 0;

    for(let i = 0; i < binario.length; i++){
        if(binario[i] == 1){
            numeroDecimal += Math.pow(2, i);
        }
    }
    
    if(!entradaInvalida){
        document.getElementById("entradaVazia").classList.add("d-none");
    }

    document.getElementById("resultado").textContent = "Decimal: " + numeroDecimal;
    document.getElementById("numeroDigitado").textContent = "Número digitado: " + entrada;
    document.getElementById("card").classList.remove("d-none");
    document.getElementById("botaoRepetir").classList.remove("d-none");
}

function Repetir(){
    document.getElementById("numeroBinario").value = "";
    document.getElementById("card").classList.add("d-none");
    document.getElementById("botaoRepetir").classList.add("d-none");

}