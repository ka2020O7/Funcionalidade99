
const modal = document.getElementById('modalAgendamento');
const btnAbrir = document.getElementById('btnAbrirAgendamento');
const btnFechar = document.querySelector('.close');


btnAbrir.addEventListener('click', function() {
    modal.style.display = 'flex';
});


btnFechar.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    
    const agendamento = {
        origem,
        destino,
        data,
        hora
    };

   
    console.log('Agendamento:', agendamento);

  
    alert('Corrida agendada com sucesso!');
    
    
    this.reset();
    modal.style.display = 'none';
}); 