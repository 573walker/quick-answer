function answerQuestion() {
    const question = document.getElementById("question").value.toLowerCase();
    const answerBox = document.getElementById("answer");

    if (question.includes("hello")) {
        answerBox.innerText = "Hello! How can I assist you today?";
    } else if (question.includes("your name")) {
        answerBox.innerText = "I am your friendly assistant!";
    } else {
        answerBox.innerText = "I don't know the answer to that. Try asking something else!";
    }
}

// Add functionality for the keyboard shortcut Ctrl+Shift+S
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "S") {
        event.preventDefault(); // Prevent default behavior of the browser
        const question = document.getElementById("question").value;
        if (question) {
            answerQuestion();
        } else {
            alert("Please type a question first.");
        }
    }
});
