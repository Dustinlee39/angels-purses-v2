export function el(id) {
  const node = document.getElementById(id);
  if (!node) console.warn("Missing element:", id);
  return node;
}
