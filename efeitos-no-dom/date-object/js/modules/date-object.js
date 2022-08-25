export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number); //split transforma string em array
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours(); 
  
  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1; //se for diferente de -1 é verdadeiro
  
  
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
  
  if(semanaAberta && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}


