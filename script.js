
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (name === "" || email === "" || password === "") {
            alert("All fields are required!");
            return;
        }

        // Basic email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address!");
            return;
        }

        alert("Login Successful!");
        form.reset(); // Clear form
    });
