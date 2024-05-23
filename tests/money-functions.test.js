const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test('Given the amount 0, it returns "$0.00".', () => {
    const amount = 0;
    const ret = formatCurrency(amount);
    const exp = "$0.00";
    expect(ret).toBe(exp)
  });
  test('Given the amount 1, it returns "$1.00".', () => {
    const amount = 1;
    const ret = formatCurrency(amount);
    const exp = "$1.00";
    expect(ret).toBe(exp)
  });
  test('Given the amount 1.5, it returns "$1.50".', () => {
    const amount = 1.5;
    const ret = formatCurrency(amount);
    const exp = "$1.50";
    expect(ret).toBe(exp)
  });
  test('Given the amount 0.01, it returns "$0.01".', () => {
    const amount = 0.01;
    const ret = formatCurrency(amount);
    const exp = "$0.01";
    expect(ret).toBe(exp)
  });
  test('Given the amount 527.6789, it returns "$527.68".', () => {
    const amount = 527.6789;
    const ret = formatCurrency(amount);
    const exp = "$527.68";
    expect(ret).toBe(exp)
  });
  test('Given the amount -1, it returns "-$1.00".', () => {
    const amount = -1;
    const ret = formatCurrency(amount);
    const exp = "-$1.00";
    expect(ret).toBe(exp)
  });
  test('Given the amount -0.01, it returns "-$0.01".', () => {
    const amount = -0.01;
    const ret = formatCurrency(amount);
    const exp = "-$0.01";
    expect(ret).toBe(exp)
  });
  test('Given the amount -2.7346, it returns "-$2.74".', () => {
    const amount = -2.7346;
    const ret = formatCurrency(amount);
    const exp = "-$2.74";
    expect(ret).toBe(exp)
  });
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", () => {
    const cents = 32;
    const ret = getCoins(cents);
    const exp = {
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
    }
    expect(ret).toEqual(exp);
  });
  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.", () => {
    const cents = 10;
    const ret = getCoins(cents);
    const exp = {
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0
    }
    expect(ret).toEqual(exp);
  });
  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.", () => {
    const cents = 27;
    const ret = getCoins(cents);
    const exp = {
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2
    }
    expect(ret).toEqual(exp);
  });
  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.", () => {
    const cents = 68;
    const ret = getCoins(cents);
    const exp = {
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3
    }
    expect(ret).toEqual(exp);
  });
});