const askButton = document.getElementById('ask-button');
const askInput = document.getElementById('ask-input');
const askResponse = document.getElementById('ask-response');

askButton.addEventListener('click', () => {
  const question = askInput.value.trim();
  if (question) {
    // Replace the following with your AI response logic.
    askResponse.textContent = `You asked: ${question}`;
  }
});
