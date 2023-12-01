const file = Bun.file("./src/1/input.txt");
const input = await file.text();

export default function main(input: string): number {
  const lines = input.split("\n");

  let total = 0;

  for (let line of lines) {
    let first;
    let last;

    for (const char of line.split("")) {
      const num = Number(char);
      if (!Number.isNaN(num)) {
        if (!first) {
          first = num;
        }
        last = num;
      }
    }

    total += Number(`${first}${last}`);
  }

  return total;
}

// const output = main(input);

// console.log(output);
