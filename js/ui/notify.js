export function notify(msg) {
  let box = document.getElementById('notify');

  if (!box) {
    box = document.createElement('div');
    box.id = 'notify';
    document.body.appendChild(box);
  }

  box.textContent = msg;
  box.style.opacity = 1;

  setTimeout(() => {
    box.style.opacity = 0;
  }, 2500);
}
