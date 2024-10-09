document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    const mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.innerHTML = "Formulário válido: o valor de B é maior que o valor de A.";
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML= "Formulário inválido: o valor de B deve ser maior que o valor de A.";
        mensagem.style.color = "red";
    }
});