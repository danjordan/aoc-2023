import { expect, test } from "bun:test";
import main from "./index.ts";

test("simple", () => {
  expect(main(`two1nine`)).toBe(29);
});

test("main()", async () => {
  expect(
    main(`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`)
  ).toBe(281);
});
