let score = 0;

function updateScore() {
  document.getElementById("score").innerText = score + " stars";
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
    star.remove();
  };

  area.appendChild(star);

  setTimeout(() => {
    if (star.parentNode) star.remove();
  }, 6000);
}

setInterval(createStar, 800);
updateScore();
