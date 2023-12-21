function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
    snowflake.style.animationDelay = `${Math.random()}s`;
    // Crea un contenitore aggiuntivo per gli snowflakes
    const snowContainer = document.getElementById('snowContainer');

    // Inserisci snowflake all'interno del nuovo contenitore
    snowContainer.appendChild(snowflake);
  }
  
  function openGift() {
    var greeting = document.getElementById('greeting');
    var greetingMessage = document.getElementById('greetingMessage');
    var christmasMusic = document.getElementById('christmasMusic');
  
    if (nameInput.value.trim() !== '') {
      greetingMessage.textContent = `Jerome ti augura un Buon Natale, ${nameInput.value}!`;
      greeting.classList.remove('hidden');
      nameInput.classList.add('hidden');
      document.querySelector('label').classList.add('hidden');
      document.querySelector('button').classList.add('hidden');
      
      christmasMusic.play(); // Play the Christmas music
  
      // Aggiungi la classe per far scendere la neve
      document.body.classList.add('snowfall-active');
  
      // Crea 50 fiocchi di neve
      for (let i = 0; i < 50; i++) {
        createSnowflake();
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.snow-container');
  
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;
      snowflake.style.animationDelay = `${Math.random()}s`;
      container.appendChild(snowflake);
    }
  });
  