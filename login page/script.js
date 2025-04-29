document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        document.getElementById("message").textContent = "You are signed in!";
    } else {
        document.getElementById("message").textContent = "Please enter valid credentials.";
    }
});