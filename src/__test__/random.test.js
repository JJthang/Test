import { ranDomValue, randomChange } from "../Component/random";

describe("randomChange function", () => {
  test("thay đổi giá trị trong phạm vi phần trăm được chỉ định", () => {
    const value = 1000;
    const percent = Math.random() * (0.05 + 0.05) - 0.05;
    const result = randomChange(value, percent);
    expect(result).toBeGreaterThanOrEqual(value * 0.95);
    expect(result).toBeLessThanOrEqual(value * 1.05);
  });
  test("Thay đổi mỗi khi Price Thay đổi", () => {
    const value = 1000;
    const price = 80;
    const randomVolume = Math.random() * (30 - 10) + 10;
    const expectedValue = value * price + 10;
    const expectedValueTwo = value * price + 30;
    const result = ranDomValue(value, price, randomVolume);
    expect(result).toBeGreaterThanOrEqual(expectedValue);
    expect(result).toBeLessThanOrEqual(expectedValueTwo);
  });
});
