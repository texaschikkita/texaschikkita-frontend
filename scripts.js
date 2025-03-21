async function sendMessage() {
    let userMessage = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;

    let response = await fetch("https://api.texaschikkita.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
    });

    let data = await response.json();
    chatbox.innerHTML += `<p><strong>AI:</strong> ${data.response}</p>`;
    document.getElementById("userInput").value = "";
}
