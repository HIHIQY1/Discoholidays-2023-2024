import { DrawCallOptions, Easing, degToRad, lerp } from ".";

export function draw(options: DrawCallOptions) {
  const t = (options.i !== undefined && !!options.fps ? options.i / options.fps : performance.now() / 1000) % options.tEnd;

  const canvas = options.canvas;
  const size = Math.min(canvas.width, canvas.height);
  const ctx = canvas.getContext("2d")!;
}