async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const message = inputField.value;
  chatBox.innerHTML += `<div class='user-msg'>${message}</div>`;
  
  inputField.value = "";

  const response = await fetch('https://api.texaschikkita.com/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
  });

  const data = await response.json();
  chatBox.innerHTML += `<div class='bot-msg'>${data.response}</div>`;
}





