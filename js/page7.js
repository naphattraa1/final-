// page7.js
document.addEventListener('DOMContentLoaded', () => {
    const form    = document.getElementById('momentForm');
    const tline   = document.getElementById('timeline');
    const STORAGE = 'ourStoryTimeline';
  
    // load existing entries (or empty array)
    let entries = JSON.parse(localStorage.getItem(STORAGE) || '[]');
    renderTimeline();
  
    // ————————————————————————
    // 1) Add new moment
    // ————————————————————————
    form.addEventListener('submit', e => {
      e.preventDefault();
      const date  = document.getElementById('mDate').value;
      const title = document.getElementById('mTitle').value.trim();
      const desc  = document.getElementById('mDesc').value.trim();
      const file  = document.getElementById('mImage').files[0];
  
      if (!date || !title) return;
  
      // helper to push the entry & re-render
      function pushEntry(imgData) {
        entries.push({ date, title, desc, img: imgData });
        entries.sort((a,b)=> new Date(a.date) - new Date(b.date));
        localStorage.setItem(STORAGE, JSON.stringify(entries));
        renderTimeline();
        form.reset();
      }
  
      if (file) {
        const reader = new FileReader();
        reader.onload = () => pushEntry(reader.result);
        reader.readAsDataURL(file);
      } else {
        pushEntry(null);
      }
    });
  
    // ————————————————————————
    // 2) Render + attach edit/delete handlers
    // ————————————————————————
    function renderTimeline() {
      tline.innerHTML = '';
      if (!entries.length) {
        tline.innerHTML = '<p class="empty">No moments yet — add one above!</p>';
        return;
      }
  
      entries.forEach((item,i) => {
        const card = document.createElement('div');
        card.className = 'timeline-item';
        card.dataset.index = i;
        card.innerHTML = `
          ${item.img
            ? `<img src="${item.img}">`
            : `<div class="no-img">📷 No image</div>`}
  
          <div class="info">
            <h3>${item.title}</h3>
            <time>${new Date(item.date).toLocaleDateString()}</time>
            <p>${item.desc||''}</p>
          </div>
  
          <div class="actions">
            <button class="edit-btn" title="Edit">✏️</button>
            <button class="delete-btn" title="Delete">🗑️</button>
          </div>
        `;
        tline.append(card);
      });
  
      // delegate 🚀 one handler for the container
      tline.onclick = e => {
        const card = e.target.closest('.timeline-item');
        if (!card) return;
        const idx = +card.dataset.index;
  
        // — Delete
        if (e.target.classList.contains('delete-btn')) {
          if (confirm('Delete this moment?')) {
            entries.splice(idx,1);
            localStorage.setItem(STORAGE, JSON.stringify(entries));
            renderTimeline();
          }
          return;
        }
  
        // — Edit
        if (e.target.classList.contains('edit-btn')) {
          openEditForm(card, idx);
        }
      };
    }
  
    // ————————————————————————
    // 3) Inline edit form
    // ————————————————————————
    function openEditForm(card, idx) {
      const entry = entries[idx];
      card.innerHTML = `
        <div class="edit-form">
          <input type="text" id="editTitle" value="${entry.title}">
          <textarea id="editDesc">${entry.desc}</textarea>
          <input type="file" id="editImg">
          <div class="edit-actions">
            <button class="save-btn">Save</button>
            <button class="cancel-btn">Cancel</button>
          </div>
        </div>
      `;
  
      // Save
      card.querySelector('.save-btn').onclick = () => {
        entry.title = card.querySelector('#editTitle').value.trim();
        entry.desc  = card.querySelector('#editDesc').value.trim();
        const f = card.querySelector('#editImg').files[0];
        if (f) {
          const reader = new FileReader();
          reader.onload = () => {
            entry.img = reader.result;
            finalizeUpdate();
          };
          reader.readAsDataURL(f);
        } else {
          finalizeUpdate();
        }
  
        function finalizeUpdate() {
          localStorage.setItem(STORAGE, JSON.stringify(entries));
          renderTimeline();
        }
      };
  
      // Cancel
      card.querySelector('.cancel-btn').onclick = renderTimeline;
    }
  });