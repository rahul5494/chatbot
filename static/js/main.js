document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';
        fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
            addMessage(data, 'bot-message');
        });
    }
});

function addMessage(message, className) {
    const messageElem = document.createElement('div');
    messageElem.className = `message ${className}`;
    messageElem.innerText = message;
    document.getElementById('messages').appendChild(messageElem);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}
