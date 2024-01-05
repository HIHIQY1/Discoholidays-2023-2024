export const easeInCubic = (x: number): number => x * x * x;
export const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);
export const easeInOutCubic = (x: number): number => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
