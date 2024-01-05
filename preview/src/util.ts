export const degToRad = (deg: number): number => deg * Math.PI / 180;
export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;