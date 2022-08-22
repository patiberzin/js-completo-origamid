export default function initDropdownMenu() {
  
}

const dropdownMenus = document.querySelectorAll('[data-dropdown]');


dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
    }) 
})

function handleClick(event) {
    event.preventDefault();
    this.classList.add('active'); //o this se refere ao menu
    outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('active');
    });//toda vez que o handleClick ocorrer essa função será ativada
}

function outsideClick(element, events, callback) {
    const html = document.documentElement; //está selecionando o html
    const outside = 'data-outside';

    if(element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOutsideClick);
        })
        element.setAttribute(outside, '');
    }
    
    function handleOutsideClick(event) { //só quero que esta função seja criada quando o outsideClick for ativado.
        if(!element.contains(event.target)) {
            element.removeAttribute(outside);
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            })
            callback();
        }
    }
}





  