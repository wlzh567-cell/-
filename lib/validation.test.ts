import { describe, expect, it } from "vitest";
import {
  buildQuoteSummary,
  formatQuoteDate,
  validateQuoteForm,
  type QuoteFormValues,
} from "@/lib/validation";

const validValues: QuoteFormValues = {
  service: "입주청소",
  spaceType: "아파트",
  region: "서울 마포구",
  size: "84㎡",
  desiredDate: "2026-10-10",
  name: "김하늘",
  phone: "010-1234-5678",
  message: "입주 전 청소 범위를 상담하고 싶습니다.",
  consent: true,
};

describe("validateQuoteForm", () => {
  it("accepts a valid quote inquiry", () => {
    expect(validateQuoteForm(validValues, "2026-10-02")).toEqual({});
  });

  it("reports all required field errors", () => {
    const errors = validateQuoteForm(
      {
        ...validValues,
        service: "",
        spaceType: "",
        region: "서",
        name: "김",
        phone: "1234",
        consent: false,
      },
      "2026-10-02",
    );

    expect(errors).toMatchObject({
      service: expect.any(String),
      spaceType: expect.any(String),
      region: expect.any(String),
      name: expect.any(String),
      phone: expect.any(String),
      consent: expect.any(String),
    });
  });

  it("rejects a past date and an overlong message", () => {
    const errors = validateQuoteForm(
      {
        ...validValues,
        desiredDate: "2026-10-01",
        message: "가".repeat(501),
      },
      "2026-10-02",
    );

    expect(errors.desiredDate).toBeDefined();
    expect(errors.message).toBeDefined();
  });

  it("accepts common Korean landline formats", () => {
    const errors = validateQuoteForm(
      { ...validValues, phone: "02-123-4567" },
      "2026-10-02",
    );
    expect(errors.phone).toBeUndefined();
  });
});

describe("quote summary", () => {
  it("formats the selected date for Korean readers", () => {
    expect(formatQuoteDate("2026-10-10")).toBe("2026년 10월 10일");
    expect(formatQuoteDate("")).toBe("미입력");
  });

  it("builds a copyable summary without implying submission", () => {
    const summary = buildQuoteSummary({
      ...validValues,
      size: "",
      message: "",
    });

    expect(summary).toContain("서비스: 입주청소");
    expect(summary).toContain("희망 시기: 2026년 10월 10일");
    expect(summary).toContain("면적 또는 수량: 미입력");
    expect(summary).toContain("자동 전송·접수된 내용이 아닙니다");
  });
});
