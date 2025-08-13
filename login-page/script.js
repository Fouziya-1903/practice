document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("signupForm")) {
        document.getElementById("signupForm").addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("signupFullName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            alert("Signup successful");

            window.location.href = "index.html";
        });
    }

    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", function(e) {
            e.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email === storedEmail && password === storedPassword) {
                window.location.href = "welcome.html";
            } else {
                alert("Invalid email or password");
            }
        });
    }

    if (document.getElementById("welcomeMsg")) {
        const name = localStorage.getItem("userName");
        if (name) {
            document.getElementById("welcomeMsg").textContent = `Welcome ${name}`;
        } else {
            window.location.href = "index.html";
        }
    }
});
