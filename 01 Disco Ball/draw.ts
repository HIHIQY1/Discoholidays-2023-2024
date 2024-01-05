import { DrawCallOptions, Easing, degToRad, lerp } from ".";

export function draw(options: DrawCallOptions) {
  const t = (options.i !== undefined && !!options.fps ? options.i / options.fps : performance.now() / 1000) % options.tEnd;

  const canvas = options.canvas;
  const size = Math.min(canvas.width, canvas.height);
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  if (t > 5.6 && t <= 5.8) {
    ctx.fillStyle = "hsl(0, 100%, 45%)";
    ctx.arc(size * .2, size * .25, size / 10, 0, 2 * Math.PI);
  } else if (t > 5.8 && t < 6.0) {
    ctx.fillStyle = "hsl(210, 100%, 45%)";
    ctx.arc(size * .4, size * .75, size / 10, 0, 2 * Math.PI);
  } else if (t > 6.0 && t < 6.2) {
    ctx.fillStyle = "hsl(60, 100%, 45%)";
    ctx.arc(size * .6, size * .25, size / 10, 0, 2 * Math.PI);
  } else if (t > 6.2 && t < 6.4) {
    ctx.fillStyle = "hsl(160, 100%, 40%)";
    ctx.arc(size * .8, size * .75, size / 10, 0, 2 * Math.PI);
  } else if (t > 6.4 && t < 6.6) {
    ctx.fillStyle = "hsl(60, 100%, 45%)";
    ctx.arc(size * .6, size * .25, size / 10, 0, 2 * Math.PI);
  } else if (t > 6.6 && t < 6.8) {
    ctx.fillStyle = "hsl(210, 100%, 45%)";
    ctx.arc(size * .4, size * .75, size / 10, 0, 2 * Math.PI);
  } else if (t > 6.8 && t < 7.0) {
    ctx.fillStyle = "hsl(0, 100%, 45%)";
    ctx.arc(size * .2, size * .25, size / 10, 0, 2 * Math.PI);
  }
  ctx.fill();

  switch (Math.floor(t)) {
    case 0:
    case 1:
      const tEased = Easing.easeInOutCubic(t / 2);
      ctx.strokeStyle = "hsl(0, 0%, 90%)";
      ctx.lineWidth = tEased * size / 50;

      ctx.save();
      ctx.translate(size / 2, size / 2);
      ctx.scale(.75 + tEased * .25, .75 + tEased * .25);
      // ctx.scale(.5, .5);
      ctx.translate(-size / 2, -size / 2);

      const radOffset = degToRad(tEased * 315);

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 4, 0 + radOffset, 2 * Math.PI * tEased + radOffset);
      ctx.stroke();

      ctx.restore();
      break;
    case 2:
      // case 3:
      const tEased2 = Easing.easeInCubic((t - 2) / 1);

      ctx.strokeStyle = "hsl(0, 0%, 90%)";
      ctx.lineWidth = size / 50;

      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 4, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.clip();

      // R
      ctx.beginPath();
      ctx.arc(size * .3, size * .5, size * .4, -.17 * Math.PI, lerp(-.17, .17, tEased2) * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(size * .11, size * .5, size * .5, -.17 * Math.PI, lerp(-.17, .17, tEased2) * Math.PI);
      ctx.stroke();

      // L
      ctx.beginPath();
      ctx.arc(size * .7, size * .5, size * .4, .83 * Math.PI, lerp(.83, 1.17, tEased2) * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(size * .89, size * .5, size * .5, .83 * Math.PI, lerp(.83, 1.17, tEased2) * Math.PI);
      ctx.stroke();

      ctx.restore();
      break;
    case 3:
      const tEased3 = Easing.easeOutCubic((t - 3) / 1);

      ctx.strokeStyle = "hsl(0, 0%, 90%)";
      ctx.lineWidth = size / 50;

      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 4, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.clip();

      // R
      ctx.beginPath();
      ctx.arc(size * .3, size * .5, size * .4, -.17 * Math.PI, .17 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(size * .11, size * .5, size * .5, -.17 * Math.PI, .17 * Math.PI);
      ctx.stroke();

      // L
      ctx.beginPath();
      ctx.arc(size * .7, size * .5, size * .4, .83 * Math.PI, 1.17 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(size * .89, size * .5, size * .5, .83 * Math.PI, 1.17 * Math.PI);
      ctx.stroke();

      // B
      ctx.beginPath();
      ctx.arc(size * .5, size * .3, size * .4, .33 * Math.PI, lerp(.33, .67, tEased3) * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(size * .5, size * .11, size * .5, .33 * Math.PI, lerp(.33, .67, tEased3) * Math.PI);
      ctx.stroke();

      // T
      ctx.beginPath();
      ctx.arc(size * .5, size * .7, size * .4, 1.33 * Math.PI, lerp(1.33, 1.67, tEased3) * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(size * .5, size * .89, size * .5, 1.33 * Math.PI, lerp(1.33, 1.67, tEased3) * Math.PI);
      ctx.stroke();

      ctx.restore();
      break;
    case 4:
    case 5:
    case 6:
    case 7:
      const tEased4 = Math.min(Easing.easeInOutCubic((t - 4) / 3.5), 1);
      const mult = tEased4 > .5 ? (1 - tEased4) : tEased4;

      ctx.strokeStyle = "hsl(0, 0%, 90%)";
      ctx.lineWidth = size / 50;

      ctx.save();
      const tmX = Math.cos(tEased4 * 2 * Math.PI * 1.5) * 0.15 * size * mult;
      const tmY = Math.sin(tEased4 * 2 * Math.PI * 1.5) * 0.15 * size * mult;
      ctx.translate(tmX, tmY);

      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 4, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.clip();

      const tX = Math.cos(tEased4 * 2 * Math.PI * 1.5) * 0.02 * size * mult;
      const tY = Math.sin(tEased4 * 2 * Math.PI * 1.5) * 0.02 * size * mult;
      ctx.translate(tX, tY);

      // R
      ctx.beginPath();
      ctx.arc(size * .3, size * .5, size * .4, Math.PI, 3 * Math.PI);
      ctx.arc(size * .11, size * .5, size * .5, Math.PI, 3 * Math.PI);
      ctx.stroke();

      // L
      ctx.beginPath();
      ctx.arc(size * .7, size * .5, size * .4, 0, 2 * Math.PI);
      ctx.arc(size * .89, size * .5, size * .5, 0, 2 * Math.PI);
      ctx.stroke();

      // B
      ctx.beginPath();
      ctx.arc(size * .5, size * .3, size * .4, -.5 * Math.PI, 1.5 * Math.PI);
      ctx.arc(size * .5, size * .11, size * .5, -.5 * Math.PI, 1.5 * Math.PI);
      ctx.stroke();

      // T
      ctx.beginPath();
      ctx.arc(size * .5, size * .7, size * .4, .5 * Math.PI, 2.5 * Math.PI);
      ctx.arc(size * .5, size * .89, size * .5, .5 * Math.PI, 2.5 * Math.PI);
      ctx.stroke();

      ctx.restore();

      if (t >= 7) {
        const lastT = Easing.easeInOutCubic((t - 7) / 1);
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, (size / 4 + ctx.lineWidth / 2) * lastT, 0, 2 * Math.PI);
        ctx.fill();
      }
      break;
    default:
      break;
  }

  requestAnimationFrame(() => draw(options));
}