document.addEventListener("mousemove", function (event) {
    createParticle(event.clientX, event.clientY);
  });
  
  function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = x + "px";
    particle.style.top = y + "px";
  
    const particlesContainer = document.querySelector(".particles-container");
    particlesContainer.appendChild(particle);
  
    particle.addEventListener("animationend", function () {
      particlesContainer.removeChild(particle);
    });
  }
  