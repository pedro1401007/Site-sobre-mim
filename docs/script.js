function mostrarInfo() {
    const informacoes = document.getElementById("informacoes");

    if (informacoes.style.display === "none" || informacoes.style.display === "") {
        informacoes.style.display = "block";
    } else {
        informacoes.style.display = "none";
    }
}
