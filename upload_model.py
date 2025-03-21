from transformers import pipeline

chat_model = pipeline("text-generation", model="texaschikkita/gpt-capstone")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")

    response = chat_model(user_message, max_length=200)[0]["generated_text"]
    return jsonify({"response": response})
