//primeiro: selecionar tudo

const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

//segundo: criar função que vai verificar mudanças

controles.addEventListener('change', handleChange); //quando tiver alguma mudança, ativa o handleChange

//quando eu mexo lá dispara o evento. Eu preciso saber qual o nome do evento está sendo disparado.

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value; //this faz referência a element
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    texto(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'px';
    },
}

function handleChange(event) {
    const nome = event.target.name;
    const valor = event.target.value;

    handleStyle[nome](valor);
    saveValues(nome, valor);
    showCss();
}

function saveValues(nome, valor) {
    localStorage[nome] = valor;
}

//abaixo uma função para setar os valores salvos

function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach(propertie => {
        handleStyle[propertie](localStorage[propertie]);
        controles.elements[propertie].value = localStorage[propertie]; //erro
    });
    showCss(); //sempre que tiver setValues ativa o showCss
}

setValues();

//fazer as propriedades adicionadas aparecerem na tela

function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join('; </span><span>');
    
}

