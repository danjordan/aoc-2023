import { expect, test } from "bun:test";
import main from "./index.ts";

test("main()", async () => {
  expect(
    await main(`1abc2
qr3stu8vwx
a1b2c3d4e5f
treb7uchet`)
  ).toBe(142);
});
