export const updateScore = (scoreEl) => {
  let score = JSON.parse(localStorage.getItem("score"));

  if (!score) {
    score = 0;
  }
  scoreEl.innerText = `score: ${score}`;
};
