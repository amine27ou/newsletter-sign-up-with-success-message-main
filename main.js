let newsletter = document.querySelector(".newsletter");
let email = document.querySelector("#email");
let errorMessage = document.querySelector(".error-msg");
let thanksMessage = document.querySelector(".thanks-message");
let submitBtn = document.querySelector("#submit");
let dismissBtn = document.querySelector("#dismiss");

submitBtn.addEventListener("click", function () {
    let emailValue = email.value.trim(); // Trim whitespace from the input value
    if (!emailValue.match(/^\S+@\S+\.[A-Za-z]{2,4}$/)) {
        email.classList.add("error");
        errorMessage.classList.add("error");
    } else {
        document.querySelector(".email").textContent = emailValue;
        email.classList.remove("error");
        errorMessage.classList.remove("error");
        newsletter.classList.add("hide");
        thanksMessage.classList.add("show");
    }
});

dismissBtn.addEventListener("click", function () {
    newsletter.classList.remove("hide"); 
    thanksMessage.classList.remove("show");
});
