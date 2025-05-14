
const btn = document.getElementById('btnMostrarHorarios');
const lista = document.getElementById('listaHorarios');

btn.addEventListener('click', () => {
  if (lista.style.display === 'none' || lista.style.display === '') {
    lista.innerHTML = ''; // limpa

    for (let hora = 8; hora <= 21; hora++) {
      const item = document.createElement('div');
      item.className = 'horario';
      const horarioTexto = `${hora.toString().padStart(2, '0')}:00`;
      item.textContent = horarioTexto;
      lista.appendChild(item);

      item.addEventListener('click', () => {
        const mensagem = `Olá, gostaria de agendar um horário na Barbearia do João às ${horarioTexto}.`;
        const numero = "5511989358783";
        const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(urlWhatsApp, '_blank');
      });
    }

    lista.style.display = 'flex';
  } else {
    lista.style.display = 'none';
  }
});
