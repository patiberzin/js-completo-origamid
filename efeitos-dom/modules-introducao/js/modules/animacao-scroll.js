export default function initAnimaScroll() {

    const sections = document.querySelectorAll('.js-scroll'); //1º

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() { //2º
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }


        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}