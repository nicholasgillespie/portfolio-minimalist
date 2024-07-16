const formValidation = {
  // DOM ELEMENTS
  form: document.querySelector("form"),

  // FUNCTIONS
  validateForm() {
    if (!this.form) return;
    let isValid = true;

    // Clear previous error messages and input states
    const errorElements = this.form.querySelectorAll(".error");
    errorElements.forEach((el) => el.remove());
    const inputElements = this.form.querySelectorAll("input, textarea");
    inputElements.forEach((input) => {
      input.classList.remove("input-error", "input-valid");
      input.parentElement.style.position = "relative"; // Ensure parent is positioned relatively
    });

    // Validate name
    const nameInput = this.form.querySelector("#name");
    if (nameInput.value.trim() === "") {
      this.showError(nameInput, "This field is required");
      isValid = false;
    } else {
      nameInput.classList.add("input-valid");
    }

    // Validate email
    const emailInput = this.form.querySelector("#email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      this.showError(emailInput, "This field is required");
      isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
      this.showError(emailInput, "Please use a valid email address");
      isValid = false;
    } else {
      emailInput.classList.add("input-valid");
    }

    // Validate message
    const messageInput = this.form.querySelector("#message");
    if (messageInput.value.trim() === "") {
      this.showError(messageInput, "This field is required");
      isValid = false;
    } else {
      messageInput.classList.add("input-valid");
    }

    return isValid;
  },

  showError(input, message) {
    const errorElement = document.createElement("div");
    errorElement.className = "error";
    errorElement.textContent = message;
    input.classList.add("input-error"); // Add the input-error class to the input
    input.parentElement.style.position = "relative"; // Ensure parent is positioned relatively
    input.parentElement.appendChild(errorElement);
  },

  // EVENT LISTENERS
  eventListeners() {
    if (!this.form) return;

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (this.validateForm()) {
        // Form is valid, proceed with form submission
        console.log("Form submitted successfully.");
      } else {
        // Form is invalid, display errors
        console.log("Form contains errors.");
      }
    });
  },

  // ACTIVATE
  activate() {
    this.eventListeners();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  formValidation.activate();
});

export default formValidation;
