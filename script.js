// Wait for the page to load
window.onload = function() {
  // Simulate a delay of 5 seconds (5000 milliseconds)
  setTimeout(function() {
    // Hide the loader
    document.querySelector('.loader-container').style.display = 'none';
    // Show the main content
    document.querySelector('#snowContainer').style.display = 'flex';
  }, 8000);
};

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
  function createFireworks() {
    const fireworks = document.createElement('div');
    const cardContainer = document.getElementById('card-container');
    fireworks.classList.add('fireworks');

    // Inserisci snowflake all'interno del nuovo contenitore
    cardContainer.appendChild(fireworks);
  }

  function openGift() {
    var greeting = document.getElementById('greeting');
    var greetingMessage = document.getElementById('greetingMessage');
    var christmasMusic = document.getElementById('christmasMusic');
  
    if (nameInput.value.trim() !== '') {
      greetingMessage.textContent = `Buon Natale ${nameInput.value}! da Jerome`;
      greeting.classList.remove('hidden');
      document.getElementById('mickey').classList.remove('hidden');
      // Select all elements with the 'firework' class
      var fireworks = document.querySelectorAll('.firework');

      // Loop through each selected element and remove the 'hidden' class
      fireworks.forEach(function(firework) {
        firework.classList.remove('hidden');
      });

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

  