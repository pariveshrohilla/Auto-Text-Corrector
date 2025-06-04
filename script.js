document.addEventListener("DOMContentLoaded", () => {
  const sentenceInput = document.getElementById("sentenceInput");
  const output = document.getElementById("suggestions");

  sentenceInput.addEventListener("input", async () => {
    const fullText = sentenceInput.value;
    const words = fullText.trim().split(/\s+/);
    const lastWord = words[words.length - 1].toLowerCase();

    if (!lastWord) {
      output.innerHTML = "";
      return;
    }

    try {
      const response = await fetch(`/suggest?prefix=${encodeURIComponent(lastWord)}`);
      const suggestions = await response.json();

      output.innerHTML = suggestions.length === 0
        ? "<div>No suggestions found.</div>"
        : suggestions.map(s => {
            const highlight = `<strong>${s.slice(0, lastWord.length)}</strong>${s.slice(lastWord.length)}`;
            return `<div class="suggestion" onclick="completeWord('${s}')">${highlight}</div>`;
          }).join("");
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      output.innerHTML = "<div>Error fetching suggestions.</div>";
    }
  });
});

function completeWord(word) {
  const input = document.getElementById("sentenceInput");
  const parts = input.value.trim().split(/\s+/);
  parts[parts.length - 1] = word;
  input.value = parts.join(" ") + " ";
  input.focus();
  document.getElementById("suggestions").innerHTML = "";
}

function addNewWord() {
  const newWord = document.getElementById("newWordInput").value.trim();
  const statusBox = document.getElementById("addWordStatus");

  if (!newWord) {
    statusBox.textContent = "Please enter a word.";
    return;
  }

  fetch("/add-word", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ word: newWord }),
  })
    .then(res => res.json())
    .then(data => {
      statusBox.textContent = data.message;
      document.getElementById("newWordInput").value = "";
    })
    .catch(err => {
      statusBox.textContent = "Error adding word.";
      console.error(err);
    });
}

async function correctSentence() {
  const inputBox = document.getElementById("sentenceInput");
  const input = inputBox.value;
  try {
    const response = await fetch("http://localhost:5000/correct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input })
    });
    const data = await response.json();
    alert("Corrected Sentence:\n" + data.corrected);
    inputBox.value = data.corrected;  // <- replace original input
  } catch (err) {
    alert("Failed to get correction.");
    console.error(err);
  }
}
