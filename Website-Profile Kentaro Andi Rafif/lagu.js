console.log("JS berhasil ke-load");

const audio = document.querySelector(".bg-music");
const btn = document.querySelector(".music-btn");

btn.addEventListener("click", () => {
  console.log("Button diklik!");

  if (audio.paused) {
    audio.play()
      .then(() => console.log("lagu di jeda"))
      .catch(err => console.error("Gagal play:", err));
  } else {
    audio.pause();
    console.log("lagu d pause");
  }
});

// Animasi nav menu saat load
const navItems = document.querySelectorAll(".nav-links li");
navItems.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add("show");
  }, 500 + index * 200); // jeda antar item
});
