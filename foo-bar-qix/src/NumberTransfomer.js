export default class NumberTransformer {
  constructor() {
    this.transformedNumbers = "";
    this.isDivisible = false;
  }

  numberChanger(input) {
    this.transformedNumbers = "";
    this.isDivisible = false;

    const divisibility = [
      { divisiableNumber: 3, transformation: "Foo" },
      { divisiableNumber: 5, transformation: "Bar" },
      { divisiableNumber: 7, transformation: "Qix" },
    ];

    divisibility.forEach(({ divisiableNumber, transformation }) => {
      if (Number.isInteger(parseInt(input) / divisiableNumber)) {
        this.transformedNumbers += transformation;
        this.isDivisible = true;
      }
    });

    const numberArray = input.toString().split("").map(Number);
    const transformations = {
      3: "Foo",
      5: "Bar",
      7: "Qix",
      0: "*",
    };

    numberArray.map((n) => {
      if (transformations[n]) {
        this.transformedNumbers += transformations[n];
      } else if (!this.isDivisible) {
        this.transformedNumbers += n;
      }
    });
    return this.transformedNumbers;
  }
}
