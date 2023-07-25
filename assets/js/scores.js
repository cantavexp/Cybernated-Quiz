const printHighScores = () => {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.sort((a, b) => b.score - a.score);
    highScores.forEach((score) => {
        const li = document.createElement("li");
        li.innerText = `${score.name} - ${score.score}`;
        highScoresList.appendChild(li);
    });
}

const clearHighScores = () => {
    localStorage.removeItem("highScores");
    window.location.reload();
}

clearHighScoresButton.addEventListener("click", clearHighScores);




printHighScores();

