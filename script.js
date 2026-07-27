function go(page) {
  window.location.href = page;
}

/* MOOD SYSTEM */

function openMood() {
  document.getElementById("moodBox").classList.toggle("hidden");
}

function handleMood(mood) {
  const box = document.getElementById("moodResponse");

  if (mood === "stressed") {
    box.innerHTML = `
      <p>let it out.</p>
      <textarea id="vent"></textarea>
      <br>
      <button onclick="saveVent()">save</button>
    `;
  }

  if (mood === "sad") {
    box.innerHTML = `
      <p>it's okay to feel this way.</p>
      <p>stay for a moment.</p>
      <p>you've made it through hard days before.</p>
    `;
  }

  if (mood === "empty") {
    box.innerHTML = `
      <p>you may feel empty right now.</p>
      <p>but that doesn't mean there's nothing inside you.</p>
      <p>small things will fill that space again.</p>
    `;
  }
}

/* JOURNAL */

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
};

/* VENT SAVE */

function saveVent() {
  const text = document.getElementById("vent").value;
  localStorage.setItem("vent", text);
}
