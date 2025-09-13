const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active classes
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabPanels.forEach(panel => panel.classList.remove("active"));

    // Add active class to clicked button and corresponding panel
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");

    // Play sound effect
    const tabSound = document.getElementById("clickSound");
    tabSound.play();
  });
});
