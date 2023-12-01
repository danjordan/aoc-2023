const file = Bun.file("./src/2/input.txt");
const input = await file.text();

type NumberAsWords =
  | "one"
  | "two"
  | "three"
  | "four"
  | "five"
  | "six"
  | "seven"
  | "eight"
  | "nine";

const nums: Record<NumberAsWords, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export default function main(input: string): number {
  const lines = input.split("\n");

  let total = 0;

  for (let line of lines) {
    let first;
    let last;
    let index = 0;

    for (const char of line.split("")) {
      let num;
      let charAsNumber = Number(char);

      if (!Number.isNaN(charAsNumber)) {
        num = charAsNumber;
      } else {
        let slice = line.slice(index);
        const matched = slice.match(
          /^(one|two|three|four|five|six|seven|eight|nine)/
        ) as NumberAsWords[] | null;

        if (matched) {
          num = nums[matched[0]];
        }
      }

      if (num) {
        if (!first) {
          first = num;
        }
        last = num;
      }

      index += 1;
    }

    total += Number(`${first}${last}`);
  }

  return total;
}

// const output = main(input);

// console.log(output);
