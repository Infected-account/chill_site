function go(page) {
  window.location.href = page;
}

// 🎵 music system
const songs = [
  "music/song1.mp3",
  "music/song2.mp3",
  "music/song3.mp3"
];

function shuffle() {
  const player = document.getElementById("player");
  let random = songs[Math.floor(Math.random() * songs.length)];
  player.src = random;
  player.volume = 0.3;
  player.play();
}

// 🎧 ambient music
let bgMusic = new Audio("music/ambient.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.2;

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}

// 🌠 particles
function createParticles() {
  for (let i = 0; i < 40; i++) {
    let p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (5 + Math.random() * 10) + "s";
    document.body.appendChild(p);
  }
}
createParticles();

// 💬 support system
function openSupport() {
  const box = document.getElementById("supportBox");

  box.innerHTML = `
    <p>how are you feeling?</p>
    <button onclick="stressed()">stressed</button>
    <button onclick="sad()">sad</button>
    <button onclick="empty()">empty</button>
  `;
}

function stressed() {
  const box = document.getElementById("supportBox");

  box.innerHTML = `
    <p>you can let it out here.</p>
    <textarea rows="5" cols="30" placeholder="type anything..."></textarea>
    <p>this space is just for you.</p>
  `;
}

function sad() {
  const box = document.getElementById("supportBox");

  box.innerHTML = `
    <p>play something soft.</p>
    <button onclick="shuffle()">play music</button>
    <p id="afterMsg"></p>
  `;

  setTimeout(() => {
    document.getElementById("afterMsg").innerText =
      "this feeling won't last forever. you're stronger than you think.";
  }, 5000);
}

function empty() {
  const box = document.getElementById("supportBox");

  box.innerHTML = `
    <p>empty doesn't mean nothing.</p>
    <p>it means there's room for something new.</p>
    <p>stay a little longer.</p>
  `;
}
