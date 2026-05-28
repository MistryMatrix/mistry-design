"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio?: { isInitialized?: boolean; init?: () => void };
  }
}

const PROJECT_ID = "tR2EAMIx1mtMKRf7mnVr";
const SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js";

// The scene has no native resolution (normalized layers), so we lock it to a
// FIXED pixel size. A constant aspect ratio means it never skews — each device
// just sees a different crop of the same undistorted visual.
//   SCENE_HEIGHT — taller reveals more of the hand (its layer is taller than the canvas)
//   SCENE_WIDTH  — paired with the height to hold the aspect ratio
//   OFFSET_X     — shift the scene right (px). Larger = hand further right.
//   OFFSET_Y     — shift the scene down (px).
const SCENE_WIDTH = 1920;
const SCENE_HEIGHT = 1440;
const OFFSET_X = 300;
const OFFSET_Y = -175;

export default function UnicornBackground() {
  useEffect(() => {
    // Script already present (client re-render / StrictMode remount) → re-init.
    if (window.UnicornStudio?.init) {
      window.UnicornStudio.init();
      return;
    }
    // Injected but still loading.
    if (document.querySelector("script[data-unicorn]")) return;

    window.UnicornStudio = { isInitialized: false };
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.dataset.unicorn = "true";
    script.onload = () => window.UnicornStudio?.init?.();
    document.body.appendChild(script);
  }, []);

  return (
    // Viewport-sized clip window — crops the fixed-size scene without scaling it.
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: -20 }}
    >
      <div
        data-us-project={PROJECT_ID}
        className="absolute"
        style={{
          width: SCENE_WIDTH,
          height: SCENE_HEIGHT,
          left: OFFSET_X,
          top: OFFSET_Y,
        }}
      />
      {/* Sand fade over the left edge — hides the scene's rectangle seam where it
          sits inboard of the screen edge, and keeps the headline legible. */}
      <div
        className="absolute inset-y-0 left-0"
        style={{
          width: 760,
          background:
            "linear-gradient(to right, #e9e3d8 0px, #e9e3d8 360px, rgba(233,227,216,0) 760px)",
        }}
      />
    </div>
  );
}
