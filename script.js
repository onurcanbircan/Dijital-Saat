// Theme Toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Flip Clock Function
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');

  flipTo('hour', h);
  flipTo('minute', m);
  flipTo('second', s);

  // Tarih
  const day = String(now.getDate()).padStart(2,'0');
  const month = String(now.getMonth()+1).padStart(2,'0');
  const year = now.getFullYear();
  document.getElementById('date').textContent = `${day} / ${month} / ${year}`;
}

// Flip Function
function flipTo(id, value) {
  const card = document.getElementById(id);
  const top = card.querySelector('.top');
  const bottom = card.querySelector('.bottom');

  if(top.textContent !== value){
    bottom.textContent = value;
    card.classList.remove('flip'); // Animasyonu resetlemek için
    void card.offsetWidth; // Reflow tetikleyerek animasyonu yeniden başlatır
    card.classList.add('flip');
    top.textContent = value;
  }
}

setInterval(updateClock, 1000);
updateClock();
