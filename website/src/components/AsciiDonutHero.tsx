import { useEffect, useRef } from "react";

const ASCII_RAMP = ".,-~:;=!*#$@";
const TAU = Math.PI * 2;
const TARGET_FPS = 24;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const MIN_COLUMNS = 34;
const MAX_COLUMNS = 72;
const MIN_ROWS = 18;
const MAX_ROWS = 34;
const STATIC_FRAME = renderDonutFrame(52, 24, 0.9, 1.1);

type SurfaceSize = {
  columns: number;
  rows: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function measureSurface(width: number, height: number): SurfaceSize {
  const columns = clamp(Math.floor(width / 7.4), MIN_COLUMNS, MAX_COLUMNS);
  const rows = clamp(Math.floor(height / 13), MIN_ROWS, MAX_ROWS);

  return { columns, rows };
}

function renderDonutFrame(columns: number, rows: number, angleA: number, angleB: number) {
  const output = new Array<string>(columns * rows).fill(" ");
  const zBuffer = new Float32Array(columns * rows);
  const cosA = Math.cos(angleA);
  const sinA = Math.sin(angleA);
  const cosB = Math.cos(angleB);
  const sinB = Math.sin(angleB);
  const radiusInner = 1;
  const radiusOuter = 2;
  const cameraOffset = 5;
  const projectionScale = columns * cameraOffset * 0.14;
  const verticalScale = 0.52;

  for (let theta = 0; theta < TAU; theta += 0.07) {
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);
    const circleX = radiusOuter + radiusInner * cosTheta;
    const circleY = radiusInner * sinTheta;

    for (let phi = 0; phi < TAU; phi += 0.02) {
      const cosPhi = Math.cos(phi);
      const sinPhi = Math.sin(phi);

      const x = circleX * (cosB * cosPhi + sinA * sinB * sinPhi) - circleY * cosA * sinB;
      const y = circleX * (sinB * cosPhi - sinA * cosB * sinPhi) + circleY * cosA * cosB;
      const z = cameraOffset + cosA * circleX * sinPhi + circleY * sinA;
      const inverseDepth = 1 / z;

      const screenX = Math.floor(columns / 2 + projectionScale * inverseDepth * x);
      const screenY = Math.floor(rows / 2 - projectionScale * verticalScale * inverseDepth * y);
      const bufferIndex = screenX + columns * screenY;

      const luminance =
        cosPhi * cosTheta * sinB -
        cosA * cosTheta * sinPhi -
        sinA * sinTheta +
        cosB * (cosA * sinTheta - cosTheta * sinA * sinPhi);

      if (
        screenY >= 0 &&
        screenY < rows &&
        screenX >= 0 &&
        screenX < columns &&
        luminance > 0 &&
        inverseDepth > zBuffer[bufferIndex]
      ) {
        zBuffer[bufferIndex] = inverseDepth;
        output[bufferIndex] = ASCII_RAMP[Math.min(ASCII_RAMP.length - 1, Math.floor(luminance * 8))];
      }
    }
  }

  const lines: string[] = [];

  for (let row = 0; row < rows; row += 1) {
    const start = row * columns;
    const line = output.slice(start, start + columns).join("").trimEnd();
    lines.push(line);
  }

  return lines.join("\n");
}

export function AsciiDonutHero() {
  const screenRef = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    const screenElement = screenRef.current;

    if (!screenElement) {
      return;
    }

    let animationFrameId = 0;
    let lastFrameTime = 0;
    let angleA = 0.9;
    let angleB = 1.1;
    let surfaceSize = measureSurface(screenElement.clientWidth, screenElement.clientHeight);
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const renderFrame = () => {
      const nextFrame = renderDonutFrame(surfaceSize.columns, surfaceSize.rows, angleA, angleB);
      screenElement.textContent = nextFrame;
    };

    const syncSurface = () => {
      const bounds = screenElement.getBoundingClientRect();
      surfaceSize = measureSurface(bounds.width, bounds.height);
      renderFrame();
    };

    const cancelLoop = () => {
      if (animationFrameId !== 0) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    };

    const startLoop = () => {
      if (motionQuery.matches || document.hidden || animationFrameId !== 0) {
        return;
      }

      const tick = (timestamp: number) => {
        if (motionQuery.matches || document.hidden) {
          animationFrameId = 0;
          return;
        }

        if (timestamp - lastFrameTime >= FRAME_INTERVAL) {
          angleA += 0.055;
          angleB += 0.024;
          renderFrame();
          lastFrameTime = timestamp;
        }

        animationFrameId = requestAnimationFrame(tick);
      };

      animationFrameId = requestAnimationFrame(tick);
    };

    const handleVisibilityChange = () => {
      cancelLoop();
      renderFrame();
      startLoop();
    };

    const handleMotionPreferenceChange = () => {
      cancelLoop();
      renderFrame();
      startLoop();
    };

    const resizeObserver = new ResizeObserver(() => {
      syncSurface();
    });

    resizeObserver.observe(screenElement);
    syncSurface();
    startLoop();

    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      cancelLoop();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);

  return (
    <div
      className="ascii-donut-panel"
      role="img"
      aria-label="A rotating ASCII donut prototype for the future Interstellar docking hero animation."
    >
      <div className="ascii-donut-chrome">
        <span className="ascii-donut-indicator" aria-hidden="true" />
        <span className="ascii-donut-label">Hero Study // Donut Prototype</span>
      </div>
      <pre ref={screenRef} className="ascii-donut-screen">
        {STATIC_FRAME}
      </pre>
      <p className="ascii-donut-caption">ASCII motion study, staged as the first step toward an Interstellar-style docking sequence.</p>
    </div>
  );
}
