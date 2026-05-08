function DecimalParaBinario(){
    let entrada = document.getElementById("numeroDecimal").value;
    let entradaInvalida = entrada === "";

    if(entradaInvalida){
        document.getElementById("entradaVazia").classList.remove("d-none");
        document.getElementById("entradaVazia").textContent = "Entrada vazia! Digite um decimal válido";
        return;
    }

    let numeroDecimal = Number(entrada);
    let numeroBinario = "";

    if(numeroDecimal === 0){
    numeroBinario = "0";
    }

    while(numeroDecimal > 0){
        let resto = numeroDecimal % 2;
        numeroBinario = resto + numeroBinario;
        numeroDecimal = Math.floor(numeroDecimal / 2);
    }

    document.getElementById("resultado").textContent = "Binário: " + numeroBinario;
    document.getElementById("numeroDigitado").textContent = "Número digitado: " + Number(entrada);
    document.getElementById("cardResultado").classList.remove("d-none");
    document.getElementById("botaoRepetir").classList.remove("d-none");
}

function Repetir(){
    document.getElementById("numeroDecimal").value = "";
    document.getElementById("cardResultado").classList.add("d-none");
    document.getElementById("botaoRepetir").classList.add("d-none");

}


