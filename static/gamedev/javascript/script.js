document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="fav_language"]:checked');
    const feedbackDiv = document.getElementById('feedback');
    
    const correctSound = document.getElementById('correctSound');
    const incorrectSound = document.getElementById('incorrectSound');

    if (!selected) {
        feedbackDiv.textContent = 'Selecteer een antwoord!';
        feedbackDiv.style.color = 'red';
        incorrectSound.play();  // Geluid voor geen antwoord
    } else if (selected.value === 'JavaScript') {
        feedbackDiv.textContent = 'Correct! Dat is het juiste antwoord.';
        feedbackDiv.style.color = 'green';
        correctSound.play();  // Geluid voor correct antwoord
    } else {
        feedbackDiv.textContent = 'Fout! Ongelofelijke droeftoeter!';
        feedbackDiv.style.color = 'red';
        incorrectSound.play();  // Geluid voor fout antwoord
    }
});