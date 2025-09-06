document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Software Engineer", "Web Developer", "UI/UX Designer", "Problem Solver"];
  const typingTextElement = document.getElementById("typing-text");
  const cursorElement = document.getElementById("cursor");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      // Remove characters
      typingTextElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Faster when deleting
    } else {
      // Add characters
      typingTextElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Normal speed when typing
    }

    // Determine next action
    if (!isDeleting && charIndex === currentText.length) {
      // Pause at end of text
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next text after deleting
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  // Start the typing effect
  setTimeout(type, 1000);

  // Add blinking animation to cursor
  cursorElement.style.animation = "blink 1s infinite";
});
