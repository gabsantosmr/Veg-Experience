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

function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        
        document.querySelector('.icon').src = "img/menu_yellow_36dp.webp"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_yellow_36dp.webp"
    }
}

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (event) => {
    const value = event.target.value;
    const items = document.querySelectorAll('.outros .card');
    const noResults = document.getElementById('no-results');
    let hasResults = false;

    items.forEach(card => {
        if(formatString(card.textContent).indexOf(value) !== -1) {
            card.style.display = 'flex';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    })

    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
});

function formatString(value) {
    return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}