export function batchRender(items, fn, chunk = 20) {
  let i = 0;
  function step() {
    const end = Math.min(i + chunk, items.length);
    for (; i < end; i++) fn(items[i]);
    if (i < items.length) requestAnimationFrame(step);
  }
  step();
}
