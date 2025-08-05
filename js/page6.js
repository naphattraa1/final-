document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    today.setHours(0,0,0,0);
  
    // ⚙️ All your letter events:
    const events = [
      { key: "valentine",   date: "2025-02-14", label: "Valentine’s Day" },
      { key: "birthday",    date: "2025-08-09", label: "Birthday"      },
      { key: "christmas",   date: "2025-12-25", label: "Christmas"     },
      { key: "newYear",     date: "2026-01-01", label: "New Year"      },
      { key: "anniversary", date: "2026-03-10", label: "Anniversary"   },
      { key: "surprise",    date: null,         label: "Surprise",    always: true }
    ];
  
    // 1️⃣ Populate Upcoming list
    const upcomingEl = document.getElementById("upcoming");
    upcomingEl.innerHTML = `<h2>📅 Upcoming Letters</h2>`;
    let anyFuture = false;
  
    events.forEach(evt => {
      if (evt.always) return;
      const then = new Date(evt.date + "T00:00:00");
      const diff  = Math.ceil((then - today)/(1000*60*60*24));
      if (diff > 0) {
        anyFuture = true;
        const p = document.createElement("p");
        p.textContent = `${evt.date} — ${evt.label}`;
        upcomingEl.append(p);
      }
    });
  
    if (!anyFuture) {
      upcomingEl.insertAdjacentHTML("beforeend",
        `<p>All letters are now available! 🎉</p>`);
    }
  
    // 2️⃣ Lock/unlock letter-cards
    events.forEach(evt => {
      const box      = document.getElementById(evt.key + "Box");
      const unlockEl = document.getElementById(evt.key + "Unlock");
      if (evt.always) {
        // always unlocked
        box.classList.remove("locked");
        unlockEl?.remove();
        return;
      }
      const then = new Date(evt.date + "T00:00:00");
      const diff = Math.ceil((then - today)/(1000*60*60*24));
      if (diff <= 0) {
        unlockEl.textContent = "💝 Available Now! Click to Open";
        box.classList.remove("locked");
      } else {
        unlockEl.textContent = `Unlocks in: ${diff} day${diff>1?"s":""}`;
        box.classList.add("locked");
      }
    });
  
    // 3️⃣ Reveal on click if unlocked
    document.querySelectorAll(".letter-card").forEach(card => {
      card.addEventListener("click", () => {
        if (!card.classList.contains("locked")) {
          const targetId = card.dataset.target;
          const msgEl = document.getElementById(targetId);
          msgEl.classList.toggle("show");
        }
      });
    });
  });

  // …inside your DOMContentLoaded handler…
const remBtn  = document.getElementById("reminderBtn");
const remText = document.getElementById("reminderText");
remBtn.addEventListener("click", () => {
  remText.classList.toggle("hidden");
});