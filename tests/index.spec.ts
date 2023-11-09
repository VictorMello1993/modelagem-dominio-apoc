import { somar } from "@/index";

test("Deve somar dois números corretamente", () => {
  expect(somar(1, 2)).toBe(3);
});
