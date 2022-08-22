export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText; //o + transforma a string em numero
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start; //para alterar os números do navegador
        if (start > total) { //quando for maior que o número estipulado, ele limpa o intervalo
          numero.innerText = total; //ele passa do número estipulado, e volta para o total.
          clearInterval(timer);
        }
      }, 25 * Math.random()) //assim cada vez vai ocorrer de uma forma diferente. Assim fica mais orgânico.
    });
  }


  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) { //procuro no target, se contém a class ativo
      observer.disconnect(); //para ele parar de observar quando chegar aqui, observa só 1 vez
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, {
    attributes: true
  }); //aqui a configuração é através de um objeto
}