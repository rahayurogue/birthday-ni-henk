document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("birthdayCard");
    const openButton = document.getElementById("openButton");
    const audio = document.getElementById("audio");  // Get the audio element
  
    // Add an event listener to flip the card and reveal the images
    openButton.addEventListener("click", () => {
      card.classList.add("flipped"); // Flip the card immediately
  
      // Add a delay to reveal the floating images after the flip animation completes
      setTimeout(() => {
        const floatingImages = document.querySelectorAll(".floating-img");
        floatingImages.forEach((image) => {
          image.style.opacity = '1';  // Reveal the image
          image.style.transform = 'scale(1)';  // Scale to normal size
        });
  
        // Play the audio when the card is flipped
        audio.play(); // This will play the "In Da Club" audio
      }, 1000); // 1 second delay to allow the flip animation to complete
    });
  });
  