export * from "./DrawCallOptions";
export * as Easing from "./easings";
export * from "./util";
import { createCanvas } from "canvas";
import fs from "fs";
import { draw } from "./draw";

if (!fs.existsSync("./frames")) {
  fs.mkdirSync("./frames");
}

const canvas = createCanvas(512, 512);

const options = {
  canvas,
  fps: 60,
  tEnd: 8,
};

(async () => {
  for (let i = 0; i < options.tEnd * options.fps; i++) {
    if (i % 60 === 0) {
      console.log(`Frame ${i} / ${options.tEnd * options.fps}`);
    }

    draw({ ...options, i });

    const buf = canvas.toBuffer("image/png");
    fs.writeFileSync(`./frames/${i}.png`, buf);
  }
})();