# ASCII Donut Hero Prototype

## Goal

This prototype replaces the static hero image with a lightweight ASCII motion study.

The short-term goal is to ship a stable "donut 3D ascii web" style visual in the hero section.
The long-term goal is to evolve the same presentation shell into an Interstellar-inspired docking animation.

## Files

- `website/src/components/AsciiDonutHero.tsx`
- `website/src/components/Hero.tsx`
- `website/src/index.css`

## Current Implementation

### Rendering strategy

The current version does not use `three`, `react-three-fiber`, or any extra runtime dependency.

It renders the donut with:

- A software ASCII renderer written in TypeScript
- A `<pre>` element as the display surface
- `requestAnimationFrame` capped at 24 FPS
- Direct `textContent` writes instead of React state updates per frame

That choice keeps the prototype simple and avoids repeated React renders inside the hero section.

### Why this approach

This repo already uses React + TypeScript for a content-first personal site.
For the first iteration, a pure TypeScript renderer is the fastest path to:

- Validate the visual language
- Keep bundle impact low
- Avoid introducing 3D framework complexity too early
- Preserve a clean upgrade path to a richer scene later

### Performance safeguards

The component includes a few guardrails:

- Caps animation to 24 FPS
- Uses `ResizeObserver` to recompute the ASCII grid only when needed
- Stops animating when the tab is hidden
- Respects `prefers-reduced-motion`
- Avoids per-frame React state updates

## Hero Integration

`Hero.tsx` now mounts `AsciiDonutHero` in the right-hand hero column where the static image previously lived.

The visual shell around the ASCII output is intentional:

- A framed monitor-like panel
- Light scanline treatment
- Small "Hero Study // Donut Prototype" chrome label
- Caption that explains this is a motion study

This gives the prototype an identity now, while also matching the site's existing dark palette.

## How The Donut Renderer Works

The renderer follows the classic rotating ASCII donut approach:

1. Sample points on a torus surface.
2. Rotate the torus by two angles over time.
3. Project 3D points into a 2D character grid.
4. Use a depth buffer so nearer points overwrite farther ones.
5. Map luminance to a character ramp such as `.,-~:;=!*#$@`.

The result is compact, recognizable, and computationally cheap enough for a hero section.

## Upgrade Path: Interstellar Docking

The current donut is a visual stepping stone, not the final scene.

### What can stay

- The hero panel shell
- The `<pre>` output surface
- The direct frame-writing strategy
- The motion and accessibility safeguards

### What will change

To move from donut to docking, the scene logic should evolve from a single torus into a multi-body setup:

- Outer ring with continuous spin
- Inner ring or hub with separate angular velocity
- Small axial offset to create tension
- Camera roll and corrective alignment motion
- Final approach phase that tightens synchronization

### Recommended next implementation options

#### Option A: Stay pure ASCII software-rendered

Best if the goal is maximum stylistic control and the scene remains abstract.

Use this if we want:

- Rings, spokes, and capsules built from procedural point clouds
- Full ownership of the ASCII shading and composition
- Minimal dependencies

Tradeoff:

- More math and custom rendering code
- Harder to scale toward complex geometry

#### Option B: Move to `three` / `@react-three/fiber` + ASCII effect

Best if the final docking sequence needs stronger camera language and richer 3D structure.

Use this if we want:

- True 3D transforms
- Reusable procedural meshes or imported models
- Easier scene composition for docking choreography

Tradeoff:

- Higher bundle cost
- More integration complexity
- More care needed for hero-section performance

## Recommendation For The Next Step

Keep the hero prototype on the current pure TypeScript renderer for one more iteration.

Specifically:

1. Replace the donut mesh logic with two rotating rings and a center module.
2. Add slight camera roll and misalignment correction.
3. Keep the ASCII shell and panel styling unchanged.
4. Only introduce `three` if the docking choreography outgrows the software renderer.

That sequence gives us a fast visual path without prematurely committing to a heavier rendering stack.
