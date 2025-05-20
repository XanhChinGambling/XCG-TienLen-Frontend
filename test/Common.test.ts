import { formatNumber } from "@/util/Common";
import { describe, test, expect } from "vitest";

describe("Hàm thường dụng - thử nghiệm", () => {
  test.skip("Định dạng số - Đa số trường hợp khả thi", () => {
    expect(formatNumber(72_900.12)).toBe("72.9k");
    expect(formatNumber(720_900.12)).toBe("720k");
    expect(formatNumber(7_720_900.12)).toBe("7.72m");
  });
});
