document.addEventListener("DOMContentLoaded", () => {
    const background = document.body;
    const passwordInput = document.getElementById("password-input");
    const submitButton = document.getElementById("submit-button");
    const unlockSound = document.getElementById("unlock-sound");
    const wrongSound = document.getElementById("wrong-sound");

    submitButton.addEventListener("click", () => {
      const enteredPassword = passwordInput.value;
      const correctPassword = "unlock"; // Set the correct password here

      if (enteredPassword === correctPassword) {
        unlockSound.play(); // Play the unlock sound
        background.style.transition = "background-color 0.5s";
        background.style.backgroundColor = "green";
        setTimeout(() => {
          background.style.backgroundColor = "#000";
        }, 2000); // Reset background color after 0.5 seconds
      } else {
        wrongSound.play();
        background.style.transition = "background-color 0.25s";
        background.style.backgroundColor = "red";
        setTimeout(() => {
          background.style.backgroundColor = "#000";
        }, 250); // Reset background color after 0.5 seconds
      }
    });

    document.addEventListener("mousemove", (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const logoX = (mouseX / window.innerWidth - 0.5) * 120;
      const logoY = (mouseY / window.innerHeight - 0.5) * 120;

      logo.style.transform = `translate(-50%, -50%) translate(${logoX}px, ${logoY}px)`;
    });
  });