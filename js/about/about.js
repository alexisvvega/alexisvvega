document.addEventListener("DOMContentLoaded", () => {
  const text = "Alexis Vega <3";
  const p = document.getElementById("name");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      p.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 150); // typing speed (ms)
    }
  }

  typeWriter();
});
