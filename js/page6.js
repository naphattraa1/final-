document.addEventListener("DOMContentLoaded", function () {
    updateUnlockStatus(); // Ensure letters unlock only on time

    // 🎀 Click event for revealing letters
    document.querySelectorAll(".click-reveal").forEach(box => {
        box.addEventListener("click", function () {
            let targetId = this.getAttribute("data-target");
            let targetElement = document.getElementById(targetId);

            // Check if the letter is unlocked before allowing reveal
            if (!this.classList.contains("locked")) {
                targetElement.classList.toggle("hidden"); // Toggle visibility
                targetElement.style.opacity = targetElement.classList.contains("hidden") ? "0" : "1";
                targetElement.style.transform = targetElement.classList.contains("hidden") ? "translateY(10px)" : "translateY(0px)";
            }
        });
    });

    // 🎂 Go Back Button - Redirect to Home
    document.getElementById("goBackButton").addEventListener("click", function () {
        window.location.href = "index.html"; // Redirect to home page
    });
});

// 📅 Function to update countdown and unlock letters on the correct date
function updateUnlockStatus() {
    let today = new Date();
    today.setHours(0, 0, 0, 0); // Ensure we're comparing only the date part

    let birthdayDate = new Date("2025-08-09T00:00:00");  // 🎂 Birthday Surprise (9 August 2025)
    let valentineDate = new Date("2025-02-14T00:00:00"); // 💕 Valentine's Day (6 February 2025) **(Fixed the incorrect formatting)**

    let daysUntilBirthday = Math.ceil((birthdayDate - today) / (1000 * 60 * 60 * 24));
    let daysUntilValentine = Math.ceil((valentineDate - today) / (1000 * 60 * 60 * 24));

    let valentineBox = document.getElementById("valentineBox");
    let birthdayBox = document.getElementById("birthdayBox");
    let surpriseBox = document.getElementById("surpriseBox");

    let valentineUnlockText = document.getElementById("valentineUnlock");
    let birthdayUnlockText = document.getElementById("birthdayUnlock");

    // 🔓 Unlock Valentine's Letter if today is Feb 6 or later
    if (daysUntilValentine <= 0) {
        valentineUnlockText.innerText = "💝 Available Now! Click to Open";
        valentineBox.classList.remove("locked");
        valentineBox.style.pointerEvents = "auto";
        valentineBox.style.opacity = "1"; // Ensure it looks clickable
    } else {
        valentineUnlockText.innerText = `Unlocks in: ${daysUntilValentine} Days`;
        valentineBox.classList.add("locked");
        valentineBox.style.pointerEvents = "none";
        valentineBox.style.opacity = "0.5"; // Make it look disabled
    }

    // 🔓 Unlock Birthday Surprise if today is Aug 9 or later
    if (daysUntilBirthday <= 0) {
        birthdayUnlockText.innerText = "🎉 Available Now! Click to Open";
        birthdayBox.classList.remove("locked");
        birthdayBox.style.pointerEvents = "auto";
        birthdayBox.style.opacity = "1"; // Ensure it looks clickable
    } else {
        birthdayUnlockText.innerText = `Unlocks in: ${daysUntilBirthday} Days`;
        birthdayBox.classList.add("locked");
        birthdayBox.style.pointerEvents = "none";
        birthdayBox.style.opacity = "0.5"; // Make it look disabled
    }

    // 🎁 Surprise Letter is always available
    surpriseBox.classList.remove("locked");
    surpriseBox.style.pointerEvents = "auto";
    surpriseBox.style.opacity = "1";
}