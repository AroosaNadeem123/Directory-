document.querySelector("#searchInput").addEventListener("input", function() {
    const input = this.value.toLowerCase();
    const userCards = document.querySelectorAll(".user-card");
    
    userCards.forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();
        const email = card.querySelector("p").innerText.toLowerCase();
        
        if (name.includes(input) || email.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Add other functionalities like Edit and Delete buttons as needed
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModal");
const avatarInput = document.getElementById("avatar");
const avatarPreview = document.getElementById("avatarPreview");

openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Avatar preview
avatarInput.onchange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      avatarPreview.src = reader.result;
      avatarPreview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
};

// Form submit
document.getElementById("userForm").onsubmit = function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const avatar = avatarInput.files[0];

  if (!avatar) {
    alert("Please upload an avatar!");
    return;
  }

  // Normally here you would send to backend
  alert(`User Added:\nName: ${name}\nEmail: ${email}`);

  // Reset form
  this.reset();
  avatarPreview.style.display = "none";
  modal.style.display = "none";
};
