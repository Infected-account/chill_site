let score = 0;

const quotes = [
  "you’re still going, and that’s enough.",
  "small steps still move you forward.",
  "you don’t have to rush healing.",
  "even now, you’re doing better than you think.",
  "you’re allowed to take up space.",
  "you made it through another moment."
];

function updateScore() {
  document.getElementById("score").innerText = score + " stars";
}

function showQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];

  const popup = document.createElement("div");
  popup.className = "quotePopup";
  popup.innerText = q;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);
}

function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.innerText = "✨";

  const area = document.getElementById("gameArea");

  star.style.left = Math.random() * area.clientWidth + "px";
  star.style.top = area.clientHeight + "px";

  star.onclick = () => {
    score++;
    updateScore();

    if (score % 10 === 0) {
      showQuote();
    }

    star.remove();
  };

  area.appendChild(star);

  setTimeout(() => {
    if (star.parentNode) star.remove();
  }, 6000);
}

setInterval(createStar, 800);
updateScore();

<audio id="bgMusic" loop>
    <source src="audio/ambient.mp3" type="audio/mpeg">
</audio>

<button onclick="toggleMusic()" id="musicBtn"> Music</button>
