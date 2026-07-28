const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

// Load saved state
window.addEventListener("load", () => {
    const isPlaying = localStorage.getItem("musicPlaying");

    if (isPlaying === "true") {
        music.volume = 0.4;
        music.play().catch(() => {});
        btn.textContent = "Music On";
    } else {
        btn.textContent = "Music Off";
    }
});

// Toggle function
function toggleMusic() {
    if (music.paused) {
        music.volume = 0.4;
        music.play();
        localStorage.setItem("musicPlaying", "true");
        btn.textContent = "Music On";
    } else {
        music.pause();
        localStorage.setItem("musicPlaying", "false");
        btn.textContent = "Music Off";
    }
}
