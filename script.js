// Generador de colores
// Enpezamos con HSL porque es fácil generar tonos agradables
// controlando la saturación y la luminosidad dentro de rangos razonables.
function randomColorHSL() {
  const h = Math.floor(Math.random() * 360);       // matiz: 0-360
  const s = Math.floor(60 + Math.random() * 31);    // saturación: 60-90%
  const l = Math.floor(40 + Math.random() * 26);    // luminosidad: 40-65%
  return { h, s, l };
}

// Conversion de hsl a hex
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = x => Math.round(255 * x).toString(16).padStart(2, "0");
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

// Contraste automático del texto 
// Calculamos el brillo percibido del color de fondo para decidir si el
// texto encima debe ser blanco o negro, y así mantener contraste suficiente.
function hslToRgb(h, s, l) {
  s /= 100; l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0) * 255, f(8) * 255, f(4) * 255];
}

function readableTextColor(h, s, l) {
  const [r, g, b] = hslToRgb(h, s, l);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? "#0b0f0d" : "#f4f6f5";
}

// Toast de microfeedback 
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 1800);
}

// Copiar al portapapeles
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`Copiado: ${text}`);
  } catch (err) {
    showToast("No se pudo copiar el color");
  }
}

// Render de la paleta 
function getSelectedValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function renderPalette() {
  const size = parseInt(getSelectedValue("size"), 10);
  const format = getSelectedValue("format");
  const list = document.getElementById("palette");
  list.innerHTML = ""; // limpiamos la paleta anterior antes de dibujar la nueva

  for (let i = 0; i < size; i++) {
    const { h, s, l } = randomColorHSL();
    const hslString = `hsl(${h}, ${s}%, ${l}%)`;
    const hexString = hslToHex(h, s, l);
    const code = format === "hex" ? hexString : hslString;
    const textColor = readableTextColor(h, s, l);

    const li = document.createElement("li");

    const swatch = document.createElement("button");
    swatch.type = "button";
    swatch.className = "swatch";
    swatch.style.background = hslString;
    swatch.style.color = textColor;
    swatch.setAttribute("aria-label", `Color ${code}. Presiona para copiar el código.`);
    swatch.textContent = code;
    swatch.addEventListener("click", () => copyToClipboard(code));

    li.appendChild(swatch);
    list.appendChild(li);
  }

  showToast(`Paleta de ${size} colores generada`);
}

// Conexión del botón 
document.getElementById("generate-btn").addEventListener("click", renderPalette);

// Generamos una paleta inicial al cargar la página
renderPalette();