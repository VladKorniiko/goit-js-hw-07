const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');
input.addEventListener('input', rename);
function rename(event) {
  const name = event.target.value.trim();
  text.textContent = name || 'Anonymous';
}
