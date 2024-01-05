import { Canvas } from "canvas";

export type DrawCallOptions = {
  canvas: Canvas;
  i?: number;
  fps?: number;
  tEnd: number;
}