let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = "Vui lòng nhập một số hợp lệ từ 1 đến 10!";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = "Chúc mừng! Bạn đã đoán đúng số!";
    } else {
        message.textContent = "Sai rồi! Hãy thử lại.";
    }
}
