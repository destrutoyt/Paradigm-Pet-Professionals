function sendSuccessWebPage(event) {
    event.preventDefault(); // Stop the form from submitting the default way

    const form = document.querySelector(".user-form");
    if (!form.checkValidity()) {
        console.error("Form is not valid");
        form.reportValidity();
    } else {
        console.log("Form is valid");
        window.location.href = "success.html";
    }
}