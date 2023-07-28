import { test, describe, expect } from "vitest";
import { sum_max_100 } from "./general";

test("sum_max_100", () => {
  expect(sum_max_100(10, 20)).toBe(30);
  expect(sum_max_100(90, 20)).toBe(100);
});
