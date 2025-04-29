document.addEventListener("DOMContentLoaded", function () {
  
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const formTitle = document.getElementById("form-title");
    const showSignup = document.getElementById("show-signup");
    const showLogin = document.getElementById("show-login");

    showSignup.addEventListener("click", function () {
        loginForm.style.display = "none";  
        signupForm.style.display = "block"; 
        formTitle.textContent = "Sign Up";
    });

   
    showLogin.addEventListener("click", function () {
        signupForm.style.display = "none";  
        loginForm.style.display = "block"; 
        formTitle.textContent = "Login";
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        
        if (email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }


        alert("Login successful!");
        console.log(`User Logged In: ${email}`);
    });


    signupForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;


        if (name === "" || email === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        alert("Signup successful!");
        console.log(`New User: ${name}, Email: ${email}`);

        signupForm.style.display = "none";
        loginForm.style.display = "block";
        formTitle.textContent = "Login";
    });
});