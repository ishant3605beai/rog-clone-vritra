
const users = [
    { id: 1, email: "user1@example.com", password: "pass1234" },
    { id: 2, email: "user2@example.com", password: "qwerty567" },
    { id: 3, email: "user3@example.com", password: "abc12345" },
    { id: 4, email: "user4@example.com", password: "letmein789" },
    { id: 5, email: "user5@example.com", password: "secure111" },
    { id: 6, email: "user6@example.com", password: "mypassword22" },
    { id: 7, email: "user7@example.com", password: "helloWorld33" },
    { id: 8, email: "user8@example.com", password: "testpass444" },
    { id: 9, email: "user9@example.com", password: "devuser555" },
    { id: 10, email: "user10@example.com", password: "finaluser666" }
];




function login() {
    const emailInput = document.getElementById("email-address").value;
    const passwordInput = document.getElementById("password").value;

    const user = users.find(
        (u) => u.email === emailInput && u.password === passwordInput
    );

    const result = document.getElementById("result");

    if (user) {
        const username = user.email.split('@')[0];
        localStorage.setItem('loggedInUser', username);
        
        result.style.color = "#00ffcc";
        result.style.textShadow = "0 0 10px rgba(0, 255, 204, 0.5)";
        result.textContent = `Login successful! Welcome User ID: ${user.id}`;
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        result.style.color = "#ff0033";
        result.style.textShadow = "0 0 10px rgba(255, 0, 51, 0.5)";
        result.textContent = "Invalid email or password";
    }
}