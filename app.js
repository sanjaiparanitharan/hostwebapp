
const div = document.getElementById("content");
for (let i = 1; i <= 20; i++) {
  const p = document.createElement("p");
  p.innerText = "Sample content block " + i;
  div.appendChild(p);
}
