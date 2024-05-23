const { calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem } = require("../src/js/cart-functions");


describe("calculateChange", () => {
  test("Given total 5 and payment 6, it returns 1", () => {
    //arrange - dummy data
    // n/a for this one
    // act -- call the fn
    const change = calculateChange(5, 6);
    // assert -- expect fn
    expect(change).toBe(1);
  });
  test("Given total 12.3 and payment 13.03, it returns 0.73", () => {
    const change = calculateChange(12.3, 13.03);
    expect(change).toBeCloseTo(0.73);
  });
  test("Given total 30 and payment 25.40, it returns 'insufficient funds, $4.60 due'", () => {
    const change = calculateChange(30, 25.40);
    expect(change).toBe("Insufficient funds: $4.60 due.");
  });
});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6, it returns true.", () => {
    const suf = isSufficientPayment(5, 6);
    expect(suf).toBe(true);
  });
  test("Given total 10 and payment 7, it returns false.", () => {
    const suf = isSufficientPayment(10, 7);
    expect(suf).toBe(false);
  });
  test("Given total 3 and payment 3, it returns true.", () => {
    const suf = isSufficientPayment(3, 3);
    expect(suf).toBe(true);
  });
  test("Given total 5.06 and payment 5.05, it returns false.", () => {
    const suf = isSufficientPayment(5.06, 5.05);
    expect(suf).toBe(false);
  });
});

describe("calculateTotal", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99.", () => {
    const items = [{ name: "Jelly", price: 4.99 }]
    const total = calculateTotal(items);
    expect(total).toBe(4.99);
  });
  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52.", () => {
    const items = [{ name: "Jelly", price: 3.50 }, 
    { name: "Frozen Mango Chunks", price: 12.99 },
    { name: "Stamp", price: 0.03 }]
    const total = calculateTotal(items);
    expect(total).toBe(16.52);
  });
  test("Given an empty itemsArray, it returns 0;", () => {
    const items = []
    const total = calculateTotal(items);
    expect(total).toBe(0);
  });
  test("Given an itemsArray of four items with prices 3.50, 12.99, 0.03, and 5.99, it returns 22.51.", () => {
    const items = [{ name: "Jelly", price: 3.50 }, 
    { name: "Frozen Mango Chunks", price: 12.99 },
    { name: "Stamp", price: 0.03 },
    { name: "Tart Cherry Juice", price: 5.99 },]
    const total = calculateTotal(items);
    expect(total).toBe(22.51);
  });
});

describe("addItem", () => {
  test("Call addItem with an empty itemsArray, name 'Beans' and price 3. Then check that itemsArray has one item in it: { name: 'Beans', price: 3 }.", () => {
    const items = [];
    const name = "Beans";
    const price = 3;
    addItem(items, name, price);
    const exp = [{ name, price }]
    expect(items).toEqual(exp);
  });
  test('Create an itemsArray with one item in it: { name: "Beans", price: 3 }. Call addItem with itemsArray, name "Sugar" and price 2. Then check that itemsArray has two items in it: { name: "Beans", price: 3 } and { name: "Sugar", price: 2 }.', () => {
    const items = [{ name: "Beans", price: 3 }];
    const name = "sugar";
    const price = 2;
    addItem(items, name, price);
    const exp = [{ name: "Beans", price: 3 }, { name, price }]
    expect(items).toEqual(exp);
  });
  test('Create an itemsArray with two items in it: { name: "Beans", price: 3 } and { name: "Sugar", price: 2 }. Call addItem with itemsArray, name "Beer" and price 7.99. Then check that itemsArray has three items in it: { name: "Beans", price: 3 }, { name: "Sugar", price: 2 }, and { name: "Beer", price: 7.99 }.', () => {
    const items = [{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }];
    const name = "Beer";
    const price = 7.99;
    addItem(items, name, price);
    const exp = [{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }, { name, price }]
    expect(items).toEqual(exp);
  });
});

describe("removeItem", () => {
  test("Remove the first element from an array of three items.", () => {
    const items = [{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }, { name: "Beer", price: 7.99 }];
    const index = 0;
    removeItem(items, index);
    const exp = [{ name: "Sugar", price: 2 }, { name: "Beer", price: 7.99 }];
    expect(items).toEqual(exp);
  });
  test("Remove the last element from an array of three items.", () => {
    const items = [{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }, { name: "Beer", price: 7.99 }];
    const index = 2;
    removeItem(items, index);
    const exp = [{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }];
    expect(items).toEqual(exp);
  });
  test("Remove the middle element from an array of three items.", () => {
    const items = [{ name: "Beans", price: 3 }, { name: "Sugar", price: 2 }, { name: "Beer", price: 7.99 }];
    const index = 1;
    removeItem(items, index);
    const exp = [{ name: "Beans", price: 3 }, { name: "Beer", price: 7.99 }];
    expect(items).toEqual(exp);
  });
  test("Remove the only element from an array of one item.", () => {
    const items = [{ name: "Beans", price: 3 }];
    const index = 0;
    removeItem(items, index);
    const exp = [];
    expect(items).toEqual(exp);
  });
});