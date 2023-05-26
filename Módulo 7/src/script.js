function validarFormulario() {
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);
    var mensagemElement = document.getElementById("mensagem");

    if (campoB > campoA) {
    mensagemElement.innerHTML = "Formulário válido! B é maior que A.";
    mensagemElement.classList.remove("mensagem-invalido");
    mensagemElement.classList.add("mensagem-valido");
    } else {
    mensagemElement.innerHTML = "Formulário inválido! B deve ser maior que A.";
    mensagemElement.classList.remove("mensagem-valido");
    mensagemElement.classList.add("mensagem-invalido");
    }
    
    return false; // Impede o envio do formulário
}