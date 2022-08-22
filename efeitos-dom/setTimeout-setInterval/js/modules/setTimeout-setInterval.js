//EXERCICIOS

export default function setTimeout() {
  
}

// Mude a cor da tela para azul e depois para vermelho a cada 2s.

/*const body = document.querySelector('body');
const red = body.style.backgroundColor = '#f00';
const blue = body.style.backgroundColor = '#00f';

function mudaCor(event) {
    this.setInterval(()=> {
        body.style.backgroundColor.toggle(red, blue);
    }, 2000)   
}

body.addEventListener('load', mudaCor); Tentei assim e não deu certo*/

//colocar o bg no css azul e vermelho
//selecionar azul e vermelho
//a cada 2s vermelho fica ativo


/*function mudarCor() {
    document.body.classList.toggle('active');
}

setInterval(mudarCor, 2000);*/


// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const tempo = document.querySelector('.tempo');

  iniciar.addEventListener('click', initTempo);
  pausar.addEventListener('click', breakTempo);
  pausar.addEventListener('dblclick', resetTempo);

  let i = 0; 
  let timer; 

  function initTempo() {
    timer = setInterval(()=>{
        tempo.innerText = i++;
    }, 100);
    iniciar.setAttribute('disabled', '');
  }

  function breakTempo() {
    clearInterval(timer);
  }

  function resetTempo() {
    tempo.innerText = 0;
    i = 0;
  }