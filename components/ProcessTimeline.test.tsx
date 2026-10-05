import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { cleaningProcess } from "@/lib/content";
import { ProcessTimeline } from "./ProcessTimeline";

describe("process timeline", () => {
  const steps = cleaningProcess.map((step) => ({ ...step, icon: null }));

  it("renders every stage and only one selected step before hydration", () => {
    const markup = renderToStaticMarkup(<ProcessTimeline steps={steps} />);
    expect(markup.match(/aria-pressed="true"/g)).toHaveLength(1);
    expect(markup.match(/단계 안내 보기/g)).toHaveLength(7);
    for (const step of steps) expect(markup).toContain(step.title);
  });

  it("starts without motion and distinguishes the guide from a live job status", () => {
    const markup = renderToStaticMarkup(<ProcessTimeline steps={steps} />);
    expect(markup).toContain("단계를 눌러 확인해 보세요");
    expect(markup).toContain("실제 작업 시간이나 작업 현황을 표시하지 않습니다");
    expect(markup).not.toContain("진행 순서 자동 안내 일시정지");
  });
});
