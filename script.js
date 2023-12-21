function openGift() {
    var nameInput = document.getElementById('nameInput');
    var greeting = document.getElementById('greeting');
    var greetingMessage = document.getElementById('greetingMessage');
    var christmasMusic = document.getElementById('christmasMusic');
  
    if (nameInput.value.trim() !== '') {
      greetingMessage.textContent = `Merry Christmas, ${nameInput.value}!`;
      greeting.classList.remove('hidden');
      christmasMusic.play(); // Play the Christmas music
    }
  }