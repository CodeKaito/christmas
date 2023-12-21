function openGift() {
    var nameInput = document.getElementById('nameInput');
    var greeting = document.getElementById('greeting');
    var greetingMessage = document.getElementById('greetingMessage');
  
    if (nameInput.value.trim() !== '') {
      greetingMessage.textContent = `Merry Christmas, ${nameInput.value}!`;
      greeting.classList.remove('hidden');
    }
  }
  