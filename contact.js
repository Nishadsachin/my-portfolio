
    // Get the elements
    const contactLink = document.getElementById("contact-link");
    const alertBox = document.getElementById("alert-box");
    const cancelBtn = document.getElementById("cancel-btn");
    const okBtn = document.getElementById("ok-btn");

    // Show the alert box when the Contact link is clicked
    contactLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action (navigation)
        alertBox.style.display = "block"; // Display the alert
    });

    // Hide the alert box when the Cancel button is clicked
    cancelBtn.addEventListener("click", function() {
        alertBox.style.display = "none"; // Hide the alert
    });

    // Proceed to the Contact page when OK button is clicked
    okBtn.addEventListener("click", function() {
        window.location.href = "contact.html"; // Navigate to the Contact page
    });

