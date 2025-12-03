// page6.js
document.addEventListener("DOMContentLoaded", () => {
  // ✉️ คลิกการ์ดแล้วเผย / ซ่อนจดหมาย
  const cards = document.querySelectorAll(".letter-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const targetId = card.dataset.target;
      if (!targetId) return;

      const msgEl = document.getElementById(targetId);
      if (!msgEl) return;

      // ปิดจดหมายฉบับอื่นก่อน ให้เปิดทีละอัน
      document.querySelectorAll(".reveal-message").forEach((box) => {
        if (box !== msgEl) {
          box.classList.remove("show");
        }
      });

      // toggle แสดง/ซ่อน ของฉบับที่กด
      msgEl.classList.toggle("show");
    });
  });
});