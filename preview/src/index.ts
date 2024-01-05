export * from "./DrawCallOptions";
export * as Easing from "./easings";
export * from "./util";
import { draw } from "./draw";
import "./style.css";

const canvas = document.querySelector("canvas")!;

const canvasRect = canvas.getBoundingClientRect();
canvas.width = canvasRect.width;
canvas.height = canvasRect.height;

requestAnimationFrame(() => draw({
  canvas,
  tEnd: 8,
}));