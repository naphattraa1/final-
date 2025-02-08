document.addEventListener("DOMContentLoaded", function () {
    // 🎀 Set relationship start date (YYYY, MM - 1, DD)
    const startDate = new Date(2024, 10, 17); // Corrected: Months in JS are 0-indexed (November is 10)

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        // Convert difference to days, hours, minutes, seconds
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update HTML elements (ensure elements exist before updating)
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        // 💖 Special Messages for Milestones
        const message = document.getElementById("specialMessage");
        if (days === 100) {
            message.textContent = "🎉 100 Days Together! 💕";
        } else if (days === 365) {
            message.textContent = "🎂 Happy 1 Year Anniversary! 🎀";
        } else {
            message.textContent = ""; // Hide message if no milestone
        }
    }

    // Update timer every second
    setInterval(updateTimer, 1000);

    // Initial call to display timer immediately
    updateTimer();
});