function go(page) {
  document.body.classList.add("fade");
  setTimeout(() => {
    window.location.href = page;
  }, 200);
}

// floating dots
for (let i = 0; i < 40; i++) {
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = Math.random() * 100 + "vw";
  dot.style.animationDuration = (10 + Math.random() * 20) + "s";
  document.body.appendChild(dot);
}

// 🎵 music shuffle
const songs = ["song1.mp3", "song2.mp3", "song3.mp3"];

function shuffle() {
  const player = document.getElementById("player");
  let random = songs[Math.floor(Math.random() * songs.length)];
  player.src = random;
  player.volume = 0.3;
  player.play();
}

// 💬 support system
function openSupport() {
  const box = document.getElementById("supportBox");

  box.innerHTML = `
    <div class="card fade">
      <p>how are you feeling?</p>
      <button onclick="stressed()">stressed</button>
      <button onclick="sad()">sad</button>
      <button onclick="empty()">empty</button>
    </div>
  `;
}

function stressed() {
  const box = document.getElementById("supportBox");

  box.innerHTML = `
    <div class="card fade">
      <p>you can let it out here.</p>
      <textarea rows="5" placeholder="type anything..."></textarea>
      <p>it’s okay. you’re allowed to feel this.</p>
    </div>
  `;
}

function sad() {
  const box = document.getElementById("supportBox");

  box.innerHTML = `
    <div class="card fade">
      <p>take your time. maybe this helps.</p>
      <button onclick="shuffle()">play something soft</button>
      <p id="afterMsg"></p>
    </div>
  `;

  setTimeout(() => {
    document.getElementById("afterMsg").innerText =
      "you made it through every hard day so far. that means something.";
  }, 5000);
}

function empty() {
  const box = document.getElementById("supportBox");

  box.innerHTML = `
    <div class="card fade">
      <p>empty doesn’t mean nothing.</p>
      <p>it means there’s space.</p>
      <p>and space can be filled with something good.</p>
    </div>
  `;
}
