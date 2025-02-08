function toggleFAQ(num) {
    let answer = document.getElementById(`faq${num}`);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const answers = document.querySelectorAll(".answer");
    const multiAnswers = document.querySelectorAll(".multi-answer");

    // Function to handle single-choice answers
    answers.forEach(button => {
        button.addEventListener("click", function() {
            const isCorrect = this.getAttribute("data-correct") === "true";
            const feedback = this.parentNode.nextElementSibling;

            if (isCorrect) {
                feedback.textContent = "✅ Correct! You're amazing!";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "❌ Oops! Try again!";
                feedback.style.color = "red";
            }
        });
    });

    // Function to handle multiple correct answers (Question 4)
    multiAnswers.forEach(button => {
        button.addEventListener("click", function() {
            const isCorrect = this.getAttribute("data-correct") === "true";
            const feedback = this.parentNode.nextElementSibling;

            if (isCorrect) {
                feedback.textContent = "✅ Correct! All of them were interested!";
                feedback.style.color = "green";
            }
        });
    });
});