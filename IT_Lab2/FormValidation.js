document.getElementById("registrationForm").addEventListener("submit", function(event) 
{
    event.preventDefault();
    validateForm();
});

function validateForm() 
{
    let isValid = true;

    let name = document.getElementById("name").value;
    let nameError = document.getElementById("nameError");
    if (!/^[A-Za-z ]+$/.test(name)) 
        {
        nameError.innerText = "Only alphabets allowed!";
        isValid = false;
    } 
    else 
    {
        nameError.innerText = "";
    }

    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    if (!/^\S+@\S+\.\S+$/.test(email)) 
    {
        emailError.innerText = "Invalid email format!";
        isValid = false;
    }
    else 
    {
        emailError.innerText = "";
    }

    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    let passwordStrength = document.getElementById("passwordStrength");
    if (/^[A-Za-z]{8,}$/.test(password)) 
    {
        passwordError.innerText = "";    
    }
    else 
    {
        passwordError.innerText = "Password must have 8 chars   ";
        isValid = false;
    }

    let strength = "Weak";
    let score = Math.min(password.length, 12);
    if (score >= 7 ) strength = "Medium";
    if (score >= 10) strength = "Strong";
    passwordStrength.innerText = "Password Strength: " + strength;

    let dob = document.getElementById("dob").value;
    let dobError = document.getElementById("dobError");
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (age < 18) 
        {
        dobError.innerText = "You must be at least 18 years old!";
        isValid = false;
    }
    else 
    {
        dobError.innerText = "";
    }

    let phone = document.getElementById("phone").value;
    let phoneError = document.getElementById("phoneError");
    if (!/^\d{10}$/.test(phone)) 
    {
        phoneError.innerText = "Must be exactly 10 digits!";
        isValid = false;
    } 
    else 
    {
        phoneError.innerText = "";
    }

    if (isValid)
    {
        alert("Form submitted successfully!");
    }
}
