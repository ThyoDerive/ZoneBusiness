const Onglet = document.querySelectorAll('.Onglet')
const ResauxInstagram = document.getElementById('InstagramContent')
const ResauxDiscord = document.getElementById('DiscordContent')
const ResauxTwitter = document.getElementById('TwitterContent')

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

ResauxInstagram.addEventListener('mouseover', (e) => {
    ResauxInstagram.classList.add('ResauxActive')
})

ResauxInstagram.addEventListener('mouseleave', (e) => {
    ResauxInstagram.classList.remove('ResauxActive')
})

ResauxDiscord.addEventListener('mouseover', (e) => {
    ResauxDiscord.classList.add('ResauxActive')
})

ResauxDiscord.addEventListener('mouseleave', (e) => {
    ResauxDiscord.classList.remove('ResauxActive')
})

ResauxTwitter.addEventListener('mouseover', (e) => {
    ResauxTwitter.classList.add('ResauxActive')
})

ResauxTwitter.addEventListener('mouseleave', (e) => {
    ResauxTwitter.classList.remove('ResauxActive')
})