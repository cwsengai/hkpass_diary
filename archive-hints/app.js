/**
 * ChatSpc CORE ARCHIVE — 古語殘片解密終端
 * ------------------------------------------------------------
 * HOW TO ADD YOUR REAL CHECKPOINT CODES:
 * Add more entries to the HINTS object below.
 * Each key is the exact code a team types in (case-insensitive,
 * spaces/dashes/dots are ignored — see normalizeCode()).
 *
 * Fields per entry:
 *   title      - shown as the fragment's heading
 *   elderLine  - short italic "quote" line
 *   body       - the actual hint text (use \n for line breaks)
 *   image      - OPTIONAL path/URL to a hint image. Omit or "" if none.
 * ------------------------------------------------------------
 */

const HINTS = {
  // ===== Group 1 (good) =====
  "0629": { title: "殘片 // GROUP 1 - #4", elderLine: "", body: "", image: "../grp1_hint4.webp"},
  "7341": { title: "殘片 // GROUP 1 - #5", elderLine: "", body: "137-46-XIII-35-139", image: "" },

  // ===== Group 2 (good) =====
  "9104": { title: "殘片 // GROUP 2 - #4（密碼本）", elderLine: "", body: "Call台傳呼密碼卡簿 (in paper)", image: "" },
  "3582": { title: "殘片 // GROUP 2 - #5", elderLine: "", body: "... - / --. . --- .-. --. . / ... - .-. . . -", image: "" },

  // ===== Group 3 (good) =====
  "5417": { title: "殘片 // GROUP 3 - #4", elderLine: "", body: "29-19-46", image: "" },
  "8291": { title: "殘片 // GROUP 3 - #5", elderLine: "", body: "↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑", image: "" },

  // ==== Group 6 (bad) ====
  "2716": { title: "殘片 // GROUP 6 - #2", elderLine: "", body: "沿著*屠龍戰士*所開闢的道路前行，尋找刻著*130*印記的巨石堡壘。", image: "" },

  // ===== Shared letter-confirmation code (same code for all 6 groups) =====
  "1209": {
    isLetter: true,
    title: "",
    elderLine: "",
    body: "信件已到達，請開啟確認...",
    image: ""
  }
};

// ---------- animated network background ----------
(function networkBackground() {
  const canvas = document.getElementById("network-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, nodes;
  const LINK_DIST = 150;
  const NODE_COUNT_BASE = 70;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function initNodes() {
    const count = Math.min(110, Math.max(40, Math.floor((width * height) / 16000)));
    nodes = Array.from({ length: count }, () => {
      const roll = Math.random();
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
        pulse: Math.random() * Math.PI * 2,
        color: roll < 0.05 ? "error" : roll < 0.14 ? "keyword" : roll < 0.3 ? "type" : "variable"
      };
    });
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    // update
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      n.pulse += 0.02;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.18;
          ctx.strokeStyle = `rgba(86,156,214,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // nodes
    const palette = {
      variable: "156,220,254",
      type: "78,201,176",
      keyword: "197,134,192",
      error: "244,71,71"
    };
    nodes.forEach(n => {
      const glow = 0.55 + Math.sin(n.pulse) * 0.25;
      const rgb = palette[n.color] || palette.variable;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},${glow})`;
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  resize();
  initNodes();
  requestAnimationFrame(step);

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
      initNodes();
    }, 200);
  });
})();

// ---------- helpers ----------
function normalizeCode(raw) {
  return raw.trim().toUpperCase().replace(/[\s\-_.]/g, "");
}

function buildHintLookup() {
  const map = {};
  Object.keys(HINTS).forEach(k => {
    map[normalizeCode(k)] = HINTS[k];
  });
  return map;
}
const HINT_LOOKUP = buildHintLookup();

// ---------- element refs ----------
const input = document.getElementById("code-input");
const btn = document.getElementById("decrypt-btn");
const statusLine = document.getElementById("status-line");
const consoleEl = document.getElementById("console");
const hintOverlay = document.getElementById("scroll-overlay");
const closeScrollBtn = document.getElementById("close-scroll");
const glitchFlash = document.getElementById("glitch-flash");
const spAttempts = document.getElementById("sp-attempts");
const spRecovered = document.getElementById("sp-recovered");
const spIntegrity = document.getElementById("sp-integrity");

let attempts = 0;
let recovered = 0;
let integrity = 94;

function attemptDecrypt() {
  const raw = input.value;
  if (!raw.trim() || btn.disabled) return;

  const code = normalizeCode(raw);
  const entry = HINT_LOOKUP[code];

  attempts++;
  if (spAttempts) spAttempts.textContent = attempts;

  consoleEl.classList.remove("rejected");
  statusLine.classList.remove("denied", "granted");

  if (entry) {
    recovered++;
    if (spRecovered) spRecovered.textContent = recovered;

    statusLine.textContent = "CIPHER ACCEPTED — DECRYPTING FRAGMENT //";
    statusLine.classList.add("granted");
    btn.disabled = true;
    setTimeout(() => {
      revealHint(entry);
      btn.disabled = false;
    }, 400);
  } else {
    integrity = Math.max(40, integrity - 1);
    if (spIntegrity) spIntegrity.textContent = integrity + "%";

    statusLine.textContent = "CIPHER REJECTED — NO MATCHING FRAGMENT //";
    statusLine.classList.add("denied");
    consoleEl.classList.add("rejected", "shake");
    triggerGlitch();
    setTimeout(() => consoleEl.classList.remove("shake"), 400);
  }
}

function triggerGlitch() {
  glitchFlash.classList.remove("active");
  // force reflow so the animation can restart
  void glitchFlash.offsetWidth;
  glitchFlash.classList.add("active");
}

function typewrite(el, text, speed = 14) {
  el.textContent = "";
  let i = 0;
  return new Promise(resolve => {
    function step() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(step, speed);
      } else {
        resolve();
      }
    }
    step();
  });
}

function revealHint(entry) {
  const hintBox = document.querySelector(".hint-box");
  const headline = document.querySelector(".hint-headline");
  const chevrons = document.querySelector(".chevrons");
  const titleEl = document.getElementById("scroll-title");
  const elderEl = document.getElementById("scroll-elder-line");
  const ruleEl = document.querySelector(".hint-rule");

  if (entry.isLetter) {
    hintBox.classList.add("letter-mode");
    headline.classList.add("hidden");
    chevrons.classList.add("hidden");
    titleEl.classList.add("hidden");
    elderEl.classList.add("hidden");
    ruleEl.classList.add("hidden");
  } else {
    hintBox.classList.remove("letter-mode");
    headline.classList.remove("hidden");
    chevrons.classList.remove("hidden");
    titleEl.classList.remove("hidden");
    elderEl.classList.remove("hidden");
    ruleEl.classList.remove("hidden");
    titleEl.textContent = entry.title;
    elderEl.textContent = entry.elderLine || "";
  }

  const imgWrap = document.getElementById("scroll-image-wrap");
  const img = document.getElementById("scroll-image");
  if (entry.image) {
    img.src = entry.image;
    imgWrap.classList.remove("hidden");
  } else {
    imgWrap.classList.add("hidden");
    img.src = "";
  }

  hintOverlay.classList.remove("hidden");
  const bodyEl = document.getElementById("scroll-body-text");
  typewrite(bodyEl, entry.body, 12);
}

function closeHint() {
  hintOverlay.classList.add("hidden");
  input.value = "";
  input.focus();
  statusLine.textContent = "STANDING BY //";
  statusLine.classList.remove("denied", "granted");
}

btn.addEventListener("click", attemptDecrypt);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") attemptDecrypt();
});
closeScrollBtn.addEventListener("click", closeHint);
