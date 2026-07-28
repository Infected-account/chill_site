function go(page) {
  window.location.href = page;
}

// 🌙 mood toggle
function openMood() {
  const box = document.getElementById("moodBox");
  box.classList.toggle("hidden");
}

// 💭 mood responses
function handleMood(mood) {
  const response = document.getElementById("moodResponse");

  const messages = {
    stressed: [
      "take a breath. nothing needs to be solved right now.",
      "you don’t have to carry everything at once.",
      "pause. unclench your shoulders for a second."
    ],

    sad: [
      "it’s okay to feel this way.",
      "you’re allowed to take your time healing.",
      "this feeling won’t last forever, even if it feels like it will."
    ],

    empty: [
      "even feeling nothing is still something.",
      "you’re still here. that matters.",
      "you don’t need to force yourself to feel anything right now."
    ],

    tired: [
      "rest isn’t wasted time.",
      "you don’t have to push right now.",
      "your body is asking for a break, and that’s okay."
    ],

    lonely: [
      "you’re not as alone as it feels right now.",
      "someone, somewhere, would be glad you exist.",
      "connection takes time, and you’re still worthy of it."
    ],

    overwhelmed: [
      "focus on just one small thing.",
      "you don’t have to solve everything today.",
      "slow it down. one step is enough."
    ]
  };

  const pool = messages[mood];
  const random = pool[Math.floor(Math.random() * pool.length)];

  // ✨ SPECIAL: vent box for stressed
  if (mood === "stressed") {
    response.innerHTML = `
      <p>${random}</p>
      <textarea id="vent" placeholder="let it out..." rows="4"></textarea>
      <br>
      <button onclick="saveVent()">save</button>
    `;
  } else {
    response.innerText = random;
  }
}

/* 📓 JOURNAL */

function saveJournal() {
  const text = document.getElementById("journalInput").value;
  localStorage.setItem("journal", text);
}

function clearJournal() {
  localStorage.removeItem("journal");
  document.getElementById("journalInput").value = "";
}

window.onload = () => {
  const saved = localStorage.getItem("journal");
  if (saved) {
    document.getElementById("journalInput").value = saved;
  }

  // 🎧 restore music state
  const music = document.getElementById("bgMusic");
  const isPlaying = localStorage.getItem("musicPlaying");

  if (music && isPlaying === "true") {
    music.volume = 0.4;
    music.play().catch(() => {});
  }
};

/* 💾 VENT SAVE */

function saveVent() {
  const text = document.getElementById("vent").value;
  localStorage.setItem("vent", text);
}

/* 🎧 MUSIC */

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  if (music.paused) {
    music.volume = 0.4;
    music.play();
    localStorage.setItem("musicPlaying", "true");
    btn.textContent = "🔊 Music On";
  } else {
    music.pause();
    localStorage.setItem("musicPlaying", "false");
    btn.textContent = "🔇 Music Off";
  }
}
