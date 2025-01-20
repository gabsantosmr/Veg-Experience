function CadastrarEvento() {
    var nome = document.getElementById('nomeevento').value;
    var imagem = document.getElementById('campoimagem').value;
    var inicio = document.getElementById('datainicio').value;
    var fim = document.getElementById('datafinal').value;
    document.getElementById('cards') = 
    "<div class='card'><img src='" + imagem + "' alt=''><div class='descricao2'><h3>" + nome + "</h3><p>" + inicio + " - " + fim + "</p></div></div>";

}

window.addEventListener("scroll", function() {
    let menu = this.document.querySelector('#nav-index')
    menu.classList.toggle('rolagem',window.scrollY > 650)
})