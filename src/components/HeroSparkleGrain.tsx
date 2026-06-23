import { useEffect, useRef } from "react";

type Sparkle = {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  phase: number;
  speed: number;
  hue: number;
};

const drawSparkle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, hue: number) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.globalAlpha = opacity;

  const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
  gradient.addColorStop(0, `hsla(${hue}, 90%, 85%, 1)`);
  gradient.addColorStop(0.4, `hsla(${hue}, 80%, 70%, 0.6)`);
  gradient.addColorStop(1, `hsla(${hue}, 70%, 60%, 0)`);

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = `hsla(${hue}, 100%, 92%, ${opacity})`;
  ctx.lineWidth = 1;
  ctx.lineCap = "round";

  for (let i = 0; i < 4; i++) {
    ctx.save();
    ctx.rotate((Math.PI / 2) * i);
    ctx.beginPath();
    ctx.moveTo(0, -size * 1.8);
    ctx.lineTo(0, size * 1.8);
    ctx.stroke();
    ctx.restore();
  }

  ctx.fillStyle = `hsla(${hue}, 100%, 95%, ${Math.min(1, opacity + 0.2)})`;
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.35, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
};

/** Twinkling sparkles + drifting film grain on top of the hero background */
const HeroSparkleGrain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = 0;
    let height = 0;

    const sparkles: Sparkle[] = [];
    const count = 55;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const init = () => {
      sparkles.length = 0;
      for (let i = 0; i < count; i++) {
        sparkles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.2 + 1,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35 - 0.08,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02 + 0.015,
          hue: Math.random() > 0.5 ? 190 + Math.random() * 40 : 270 + Math.random() * 30,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const s of sparkles) {
        s.x += s.vx;
        s.y += s.vy;
        s.phase += s.speed;

        if (s.x < -20) s.x = width + 20;
        if (s.x > width + 20) s.x = -20;
        if (s.y < -20) s.y = height + 20;
        if (s.y > height + 20) s.y = -20;

        const twinkle = 0.35 + Math.sin(s.phase) * 0.35 + Math.sin(s.phase * 2.3) * 0.15;
        drawSparkle(ctx, s.x, s.y, s.size, twinkle, s.hue);
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    const onResize = () => {
      resize();
      init();
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="hero-sparkle-grain absolute inset-0 pointer-events-none z-[1]" aria-hidden>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="hero-film-grain" />
    </div>
  );
};

export default HeroSparkleGrain;
