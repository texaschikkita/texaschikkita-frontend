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


async function sendMessage() {
  let userMessage = document.getElementById("userInput").value;
  document.getElementById("messages").innerHTML += `<p><b>You:</b> ${userMessage}</p>`;
  
  let response = await fetch("https://api.texaschikkita.com/chat", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userMessage })
  });

  let data = await response.json();
  document.getElementById("messages").innerHTML += `<p><b>GPT:</b> ${data.response}</p>`;
  document.getElementById("userInput").value = "";
}

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

