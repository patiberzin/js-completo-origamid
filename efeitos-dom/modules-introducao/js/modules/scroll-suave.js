export default function initSrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); //1º

    function scrollToSection(event) { //3º
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        /* forma alternativa
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: "smooth",
        });*/
    }


    linksInternos.forEach((link) => { //2º
        link.addEventListener('click', scrollToSection);
    });
}

