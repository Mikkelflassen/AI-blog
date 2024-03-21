document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("subscribe-button");
  const message = document.getElementById("message");

  button.addEventListener("click", function () {
    // Example validation: Check if the email is empty
    const email = document.getElementById("email").value;
    if (!email) {
      showMessage("Please enter your email to subscribe", "red");
      return;
    }

    setTimeout(function () {
      document.getElementById("subscribe-form").reset();

      showMessage("Thank you for subscribing!", "green");
    }, 1000);
  });

  function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
    message.style.display = "block";
  }
});
