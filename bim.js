
let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubar.onclick =() =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
}

const sr = ScrollReveal({
    distance : '45px',
    duration : '2700',
    reset : 'true',
})

sr.reveal('.about-inner-content',{ delay:350, origin:'left' })
sr.reveal('.about-text-content',{ delay:350, origin:'right' })

