document.addEventListener("DOMContentLoaded", function () {
    // 🎀 Set relationship start date (YYYY, MM - 1, DD)
    const startDate = new Date(2024, 10, 17); // เดือน 10 = พฤศจิกายน

    function updateTimerOnce() {
        const now = new Date(); 
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Update UI
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        // 💖 Special milestone message
        const message = document.getElementById("specialMessage");
        if (days === 100) {
            message.textContent = "🎉 100 Days Together! 💕";
        } else if (days === 365) {
            message.textContent = "🎂 Happy 1 Year Anniversary! 🎀";
        } else {
            message.textContent = "";
        }
    }

    // ❌ ลบ setInterval ออก → เวลาไม่เดินแล้ว
    // setInterval(updateTimer, 1000);

    // ✔️ เรียกครั้งเดียวให้แสดงผลแบบค้าง
    updateTimerOnce();
});