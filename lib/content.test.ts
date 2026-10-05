import { describe, expect, it } from "vitest";
import { cleaningProcess, faqItems, scopeItems, siteConfig } from "@/lib/content";

describe("cleaning service content", () => {
  it("does not prioritize one service in public descriptions", () => {
    const descriptions = [
      siteConfig.description,
      ...faqItems.map((item) => item.answer),
      ...scopeItems.map((item) => item.title),
    ];

    expect(descriptions.join(" ")).not.toMatch(/중심|주력/);
  });

  it("preserves the seven customer-provided process stages in order", () => {
    expect(cleaningProcess.map((step) => step.number)).toEqual([
      "01", "02", "03", "04", "05", "06", "07",
    ]);
    expect(cleaningProcess.map((step) => step.icon)).toEqual([
      "consult", "phone", "scope", "prepare", "clean", "inspect", "followup",
    ]);
    expect(cleaningProcess[5].description).toContain("고객님과 함께");
    expect(cleaningProcess[6].title).toContain("해피콜");
  });
});
