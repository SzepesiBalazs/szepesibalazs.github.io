import NumberTransformer from "../src/NumberTransfomer";
import ThreeToFoo from "../src/Three";

describe("FooBarQix", () => {
  test("Number 9 should be Foo", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(9);
    expect(text).toBe("Foo");
  });

  test("Number 3 should be FooFoo", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(3);
    expect(text).toBe("FooFoo");
  });

  test("Number 33 should be FooFooFoo", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(33);
    expect(text).toBe("FooFooFoo");
  });

  test("Number 1 should be 1", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(1);
    expect(text).toBe("1");
  });

  test("Number 36 should be FooFoo", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(36);
    expect(text).toBe("FooFoo");
  });

  test("Number 5 should be BarBar", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(5);
    expect(text).toBe("BarBar");
  });

  test("Number 35 should be BarFooBar", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(35);
    expect(text).toBe("BarQixFooBar");
  });

  test("Number 10 should be Bar", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(10);
    expect(text).toBe("Bar*");
  });

  test("Number 7 should be QixQix", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(7);
    expect(text).toBe("QixQix");
  });

  test("Number 101 should be 1*1", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(101);
    expect(text).toBe("1*1");
  });
  
  test("Number 303 should be FooFoo*Foo", () => {
    const numberTransfomer = new NumberTransformer();
    const text = numberTransfomer.numberChanger(303);
    expect(text).toBe("FooFoo*Foo");
  });
});
