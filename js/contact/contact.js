document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        thankYou.style.display = "block";

        // Hide thank-you message after 5 seconds
        setTimeout(() => {
          thankYou.style.display = "none";
        }, 5000);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission failed", error);
      alert("There was an error submitting the form.");
    }
  });
});