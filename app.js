// ---------- animated network background ----------
(function networkBackground() {
  const canvas = document.getElementById("network-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, nodes;
  const LINK_DIST = 150;
  const PALETTE = ["86,156,214", "197,134,192", "78,201,176", "206,145,120"]; // blue / purple / teal / orange

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function initNodes() {
    const count = Math.min(110, Math.max(40, Math.floor((width * height) / 16000)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.4 + 0.6,
      pulse: Math.random() * Math.PI * 2,
      rgb: PALETTE[Math.floor(Math.random() * PALETTE.length)]
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      n.pulse += 0.02;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
    });

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

    nodes.forEach(n => {
      const glow = 0.55 + Math.sin(n.pulse) * 0.25;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.rgb},${glow})`;
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

// ---------- final truth password gate ----------
(function finalTruthGate() {
  const FINAL_PASSWORD = "JOINHKPASS"; // replace with your real end-game password

  const card = document.getElementById("final-truth-card");
  const lockOverlay = document.getElementById("lock-overlay");
  const cardContent = document.getElementById("final-card-content");
  const overlay = document.getElementById("password-overlay");
  const box = overlay.querySelector(".password-box");
  const input = document.getElementById("password-input");
  const submitBtn = document.getElementById("password-submit");
  const cancelBtn = document.getElementById("password-cancel");
  const errorEl = document.getElementById("password-error");

  let unlocked = false;

  function normalize(raw) {
    return raw.trim().toUpperCase().replace(/[\s\-_.]/g, "");
  }

  function openOverlay() {
    if (unlocked) return; // already cracked open, let the link work normally
    input.value = "";
    errorEl.textContent = "";
    overlay.classList.remove("hidden");
    setTimeout(() => input.focus(), 50);
  }
  function closeOverlay() {
    overlay.classList.add("hidden");
  }

  function crackOpen() {
    unlocked = true;
    lockOverlay.classList.add("cracking");
    setTimeout(() => {
      lockOverlay.classList.add("shatter");
      cardContent.classList.add("revealed");
    }, 380);
    setTimeout(() => {
      lockOverlay.style.display = "none";
    }, 900);
  }

  function submit() {
    const entered = normalize(input.value);
    if (!entered) return;
    if (entered === normalize(FINAL_PASSWORD)) {
      closeOverlay();
      crackOpen();
    } else {
      errorEl.textContent = "密碼錯誤 // 尚未到達解鎖時刻";
      box.classList.remove("shake");
      void box.offsetWidth;
      box.classList.add("shake");
    }
  }

  card.addEventListener("click", (e) => {
    if (!unlocked) {
      e.preventDefault();
      openOverlay();
    }
    // once unlocked, clicks fall through to the real <a> link inside card-content
  });
  submitBtn.addEventListener("click", submit);
  cancelBtn.addEventListener("click", closeOverlay);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submit();
    if (e.key === "Escape") closeOverlay();
  });
})();
