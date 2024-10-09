document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const selected = document.querySelector('input[name="fav_language"]:checked');
    const feedbackDiv = document.getElementById('feedback');

    if (!selected) {
        feedbackDiv.textContent = 'Please select an answer!';
        feedbackDiv.style.color = 'red';
    } else if (selected.value === 'JavaScript') {
        feedbackDiv.textContent = 'Correct! JavaScript is the right answer.';
        feedbackDiv.style.color = 'green';
    } else {
        feedbackDiv.textContent = 'Wrong answer! The correct answer is JavaScript.';
        feedbackDiv.style.color = 'red';
    }
});
