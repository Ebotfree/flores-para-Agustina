// Función para crear una flor en una posición aleatoria con límite de tiempo
function crearFlor() {
    const flower = document.createElement('div');
    flower.className = 'flower';
  
    // Estilos y posición aleatoria
    const posX = Math.floor(Math.random() * window.innerWidth);
    const posY = Math.floor(Math.random() * window.innerHeight);
  
    flower.textContent = '🌸'; // Emoji de flor
    flower.style.fontSize = '48px'; // Tamaño más grande
    flower.style.position = 'absolute';
    flower.style.top = `${posY}px`;
    flower.style.left = `${posX}px`;
    flower.style.color = 'pink'; // Color del emoji de flor
    flower.style.zIndex = '9999'; // Asegura que esté por encima de otros elementos
    flower.style.visibility = 'visible'; // Asegura que esté visible
  
    document.body.appendChild(flower);
  
    // Eliminar la flor después de 120 segundos
    setTimeout(() => {
      if (document.contains(flower)) {
        document.body.removeChild(flower);
      }
    }, 120000); // 120 segundos
  
    // Evento de clic en una flor
    flower.addEventListener('click', function(event) {
      const loveMessage = document.createElement('div');
      loveMessage.textContent = 'Agustina te amo mucho ❤️'; // Mensaje de amor
      loveMessage.style.position = 'absolute';
      loveMessage.style.top = `${event.clientY}px`;
      loveMessage.style.left = `${event.clientX}px`;
      loveMessage.style.fontWeight = 'bold';
      loveMessage.style.color = 'red';
      loveMessage.style.fontSize = '24px';
      document.body.appendChild(loveMessage);
  
      setTimeout(() => {
        document.body.removeChild(loveMessage);
      }, 3000); // Mensaje desaparece después de 3 segundos
    });
  }
  
  // Función para mostrar el mensaje "❤️ A+E ❤️" al hacer clic en cualquier parte del cuerpo, excepto en la flor
  document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('flower')) {
      const heartMessage = document.createElement('div');
      heartMessage.textContent = '❤️ A+E ❤️'; // Mensaje A+E
      heartMessage.style.position = 'absolute';
      heartMessage.style.top = `${event.clientY}px`;
      heartMessage.style.left = `${event.clientX}px`;
      heartMessage.style.fontWeight = 'bold';
      heartMessage.style.color = 'red';
      heartMessage.style.fontSize = '24px';
      document.body.appendChild(heartMessage);
  
      setTimeout(() => {
        document.body.removeChild(heartMessage);
      }, 3000); // Mensaje desaparece después de 3 segundos
    }
  });
  
  // Función para crear una flor cada 5 segundos
  setInterval(crearFlor, 5000);
  