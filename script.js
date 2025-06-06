const lyricsElement = document.getElementById("lyrics");
const audio = document.getElementById("song");
const button = document.getElementById("playButton");

const lines = [
  ["So I'ma love you every night like it's the last night", 0.07, 0.2],
  ["Like it's the last night", 0.10, 0.7],
  ["If the world was ending", 0.10, 0.8],
  ["I'd wanna be next to you", 0.08, 3.1],
  ["If the party was over", 0.10, 1.0],
  ["And our time on Earth was through", 0.10, 3.2],
  ["I'd wanna hold you just for a while", 0.08, 0.8],
  ["And die with a smile", 0.10, 2.0],
  ["If the world was ending", 0.10, 0.9],
  ["I'd wanna be next to you", 0.10, 1.6],
  ["Right next to you", 0.10, 0.5],
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayLyrics() {
  for (const [line, charDelay, delayAfter] of lines) {
    for (const char of line) {
      lyricsElement.innerHTML += char;
      await sleep(charDelay * 1000);
    }
    lyricsElement.innerHTML += "\n";
    await sleep(delayAfter * 1000);
  }
}

button.addEventListener("click", async () => {
  lyricsElement.innerHTML = ""; // Reset
  await audio.play();
  displayLyrics();
});
