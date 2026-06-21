import React, { useRef, useEffect } from "react";

const GlitchPortrait = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const timeRef = useRef(0);
  const imgRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const SIZE = 400;
    const DPR = window.devicePixelRatio || 1;

    canvas.width = SIZE * DPR;
    canvas.height = SIZE * DPR;
    canvas.style.width = `${SIZE}px`;
    canvas.style.height = `${SIZE}px`;
    ctx.scale(DPR, DPR);

    const img = new Image();
    img.src = "/profile.png";
    imgRef.current = img;

    img.onload = () => {
      loadedRef.current = true;
    };

    // Glitch state
    let glitchTimer = 0;
    let glitchDuration = 0;
    let glitchActive = false;
    let glitchLines = [];
    let rgbShift = 0;
    let scanlineOffset = 0;

    const randomGlitchLines = () => {
      glitchLines = [];
      const count = 3 + Math.floor(Math.random() * 5);
      for (let i = 0; i < count; i++) {
        glitchLines.push({
          y: Math.random() * SIZE,
          h: 2 + Math.random() * 12,
          shift: (Math.random() - 0.5) * 30,
          alpha: 0.4 + Math.random() * 0.6,
        });
      }
    };

    const draw = (timestamp) => {
      animRef.current = requestAnimationFrame(draw);
      const dt = timestamp - timeRef.current;
      timeRef.current = timestamp;

      ctx.clearRect(0, 0, SIZE, SIZE);

      if (!loadedRef.current) return;

      // ─── Draw base photo ───────────────────────────────────────────
      // Fit the image in the canvas maintaining aspect ratio
      const imgAspect = img.naturalWidth / img.naturalHeight;
      let dw, dh, dx, dy;
      if (imgAspect > 1) {
        dw = SIZE;
        dh = SIZE / imgAspect;
        dx = 0;
        dy = (SIZE - dh) / 2;
      } else {
        dh = SIZE;
        dw = SIZE * imgAspect;
        dx = (SIZE - dw) / 2;
        dy = 0;
      }

      // ─── Glitch scheduling ─────────────────────────────────────────
      glitchTimer += dt;
      if (!glitchActive && glitchTimer > 1800 + Math.random() * 2000) {
        glitchActive = true;
        glitchDuration = 80 + Math.random() * 200;
        glitchTimer = 0;
        rgbShift = 4 + Math.random() * 10;
        randomGlitchLines();
      }
      if (glitchActive) {
        glitchDuration -= dt;
        if (glitchDuration <= 0) {
          glitchActive = false;
          rgbShift = 0;
          glitchLines = [];
        }
      }

      // ─── RGB chromatic aberration ──────────────────────────────────
      if (glitchActive && rgbShift > 0) {
        ctx.globalCompositeOperation = "source-over";

        // Red channel shifted left
        ctx.globalAlpha = 0.6;
        ctx.filter = "url(#red-channel)";
        ctx.drawImage(img, dx - rgbShift, dy, dw, dh);

        // Blue channel shifted right
        ctx.filter = "url(#blue-channel)";
        ctx.drawImage(img, dx + rgbShift, dy, dw, dh);

        ctx.filter = "none";
        ctx.globalAlpha = 1;
      }

      // Normal image on top
      ctx.globalAlpha = glitchActive ? 0.85 : 1;
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.globalAlpha = 1;

      // ─── Glitch horizontal slices ──────────────────────────────────
      if (glitchActive) {
        glitchLines.forEach((line) => {
          ctx.globalAlpha = line.alpha * 0.7;
          ctx.drawImage(
            img,
            0, (line.y / SIZE) * img.naturalHeight,
            img.naturalWidth, (line.h / SIZE) * img.naturalHeight,
            dx + line.shift, line.y, dw, line.h
          );
          ctx.globalAlpha = 1;
        });

        // Random static noise block
        if (Math.random() < 0.3) {
          const ny = Math.random() * SIZE;
          const nh = 2 + Math.random() * 6;
          ctx.fillStyle = `rgba(249,115,22,${Math.random() * 0.4})`;
          ctx.fillRect(0, ny, SIZE, nh);
        }
      }

      // ─── CRT Scanlines ────────────────────────────────────────────
      scanlineOffset = (scanlineOffset + 0.4) % 4;
      ctx.globalCompositeOperation = "multiply";
      for (let y = scanlineOffset; y < SIZE; y += 4) {
        ctx.fillStyle = "rgba(0,0,0,0.18)";
        ctx.fillRect(0, y, SIZE, 2);
      }
      ctx.globalCompositeOperation = "source-over";

      // ─── Vignette ─────────────────────────────────────────────────
      const vignette = ctx.createRadialGradient(
        SIZE / 2, SIZE / 2, SIZE * 0.3,
        SIZE / 2, SIZE / 2, SIZE * 0.75
      );
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.65)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, SIZE, SIZE);

      // ─── Orange corner brackets ────────────────────────────────────
      const bSize = 28;
      const bThick = 3;
      const pad = 12;
      ctx.strokeStyle = "rgba(249,115,22,0.9)";
      ctx.lineWidth = bThick;
      ctx.lineCap = "square";

      // top-left
      ctx.beginPath(); ctx.moveTo(pad, pad + bSize); ctx.lineTo(pad, pad); ctx.lineTo(pad + bSize, pad); ctx.stroke();
      // top-right
      ctx.beginPath(); ctx.moveTo(SIZE - pad - bSize, pad); ctx.lineTo(SIZE - pad, pad); ctx.lineTo(SIZE - pad, pad + bSize); ctx.stroke();
      // bottom-left
      ctx.beginPath(); ctx.moveTo(pad, SIZE - pad - bSize); ctx.lineTo(pad, SIZE - pad); ctx.lineTo(pad + bSize, SIZE - pad); ctx.stroke();
      // bottom-right
      ctx.beginPath(); ctx.moveTo(SIZE - pad - bSize, SIZE - pad); ctx.lineTo(SIZE - pad, SIZE - pad); ctx.lineTo(SIZE - pad, SIZE - pad - bSize); ctx.stroke();

      // ─── Flicker label ────────────────────────────────────────────
      const labelAlpha = glitchActive
        ? Math.random() > 0.3 ? 0.9 : 0
        : 0.7;
      ctx.globalAlpha = labelAlpha;
      ctx.font = "bold 11px monospace";
      ctx.fillStyle = "#F97316";
      ctx.textAlign = "left";
      ctx.fillText("// abhinave.pb", pad + 2, SIZE - pad - 6);
      ctx.globalAlpha = 1;
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        borderRadius: "4px",
        display: "block",
      }}
    />
  );
};

export default GlitchPortrait;
