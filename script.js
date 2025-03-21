
async function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");
  
  const userMessage = input.value;
  chatBox.innerHTML += `<div>You: ${userMessage}</div>`;

  const response = await fetch("https://api.texaschikkita.com/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: userMessage }),
  });

  const data = await response.json();
  chatBox.innerHTML += `<div>Bot: ${data.response}</div>`;

  input.value = "";
}
