const Onglet = document.querySelectorAll('.Onglet')

Onglet.forEach((i) => {
    i.addEventListener('click', (e) => {
        var index = 0, length = Onglet.length;
        for ( ; index < length; index++) {
            Onglet[index].classList.remove('OngletActive')
        }
        switch (e.target.className) {
            default:
                i.classList.add('OngletActive')
                break;
        }
    })
});

Onglet.forEach((i) => {
    i.addEventListener('click', (e) => {
        let scroll = this.scrollY;
        switch (e.target.className) {
            case 'Acceuil':
                window.scroll(500)
                break;
            
            case 'Info':

                break;

            case 'Online':

                break;

            case 'Instore':

                break;
        }
    })
})