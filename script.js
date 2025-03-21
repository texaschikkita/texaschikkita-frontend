function sendMessage() {
  const input = document.getElementById("userInput").value;

  fetch("https://api.texaschikkita.com/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message: input})
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("response").innerText = data.response;
  })
  .catch(error => {
    document.getElementById("response").innerText = "Error: " + error;
  });
}
