// Handling sending a message in the chat
const sendChatButton = document.getElementById('sendChatButton');
const chatInput = document.getElementById('chatInput');
const chatBox = document.getElementById('chatBox');

// Simulating the ChatGPT response for now
const simulateChatGPTResponse = (message) => {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message');
  chatMessage.classList.add('user-message');
  chatMessage.textContent = message;
  chatBox.appendChild(chatMessage);

  // Simulated bot response
  const botResponse = document.createElement('div');
  botResponse.classList.add('chat-message');
  botResponse.classList.add('bot-message');
  botResponse.textContent = "ChatGPT says: " + message;
  chatBox.appendChild(botResponse);

  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
};

sendChatButton.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    simulateChatGPTResponse(message);
    chatInput.value = ''; // Clear input field after sending
  }
});

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendChatButton.click();
  }
});
