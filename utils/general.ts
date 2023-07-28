export function sum_max_100(x: number, y: number) {
  if (x + y > 100) {
    return 100;
  }
  return x + y;
}
