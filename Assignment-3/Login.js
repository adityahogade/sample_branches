let isRegister = false;

function toggleForm() {
    const title = document.getElementById("title");
    const nameBox = document.getElementById("nameBox");
    const phone = document.querySelector(".phone");
    const button = document.querySelector("button");
    const toggleText = document.getElementById("toggleText");
    const link=document.getElementById("link");

    isRegister = !isRegister

    if (isRegister) {
        title.innerText = "Register";
        nameBox.style.display = "block";
        phone.style.display = "block";
        button.innerText = "Register";
        toggleText.innerText = "Already have an Account?";
        link.innerText="Loing";
    }
    else {
        title.innerText = "Login";
        nameBox.style.display = "none";
        phone.style.display = "none";
        button.innerText = "Login";
        toggleText.innerText = "Don't have Account";
        link.innerText="Register";
    }
}

document.getElementById("form").addEventListener("submit", function (e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (email === "" || password === "") {
        alert("Email And Password are Required");
        return;
    }

    if (password.length <= 6) {
        alert("Password must be more than 6 Characters");
        return;
    }

    if (isRegister) {
        if (name === "") {
            alert("Name is Required");
            return;
        }
        if (phone === "") {
            alert("Phone number is Required");
            return;
        }
        if (phone.length !== 10) {
            alert("Phone number must be 10 digits");
            return;
        }

        alert("Registration Successful...");

    }
    else{
        alert("Login Successful...")
    }
});