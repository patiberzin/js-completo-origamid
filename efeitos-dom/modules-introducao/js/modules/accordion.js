export default function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt'); //1º
    const activeClass = 'ativo';


    if (accordionList.length) { //5º

        accordionList[0].classList.add(activeClass); //4º 
        accordionList[0].nextElementSibling.classList.add(activeClass); //4º seleciona o dd

        function activeAccordion() { //3º
            this.classList.toggle(activeClass); //5º

            this.nextElementSibling.classList.toggle(activeClass); //4° 

        }

        accordionList.forEach((item) => { //2º
            item.addEventListener('click', activeAccordion);
        });
    }

}

