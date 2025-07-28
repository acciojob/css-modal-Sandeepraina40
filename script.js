//your JS code here. If required.
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal on button click
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside modal-content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

