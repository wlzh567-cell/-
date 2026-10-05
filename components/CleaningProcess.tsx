import { cleaningProcess } from "@/lib/content";
import { ProcessTimeline } from "./ProcessTimeline";
import styles from "./CleaningProcess.module.css";

export function CleaningProcess() {
  return (
    <section className={`${styles.section} anchor-section`} id="process" aria-labelledby="process-title">
      <div className="section-shell">
        <div className={styles.heading}>
          <div>
            <p className="section-kicker">OUR PROCESS</p>
            <h2 id="process-title">
              상담부터 마무리까지,
              <br />
              진행 순서를 확인하세요.
            </h2>
          </div>
          <p className={styles.intro}>
            작업 전에는 청소 범위를 설명하고,
            <br />
            작업 후에는 고객님과 함께 확인합니다.
          </p>
        </div>

        <ProcessTimeline
          steps={cleaningProcess.map((step) => ({
            ...step,
            icon: <ProcessIcon icon={step.icon} />,
          }))}
        />

        <p className={styles.note}>
          세부 작업 범위·비용·일정은 상담 시 확인해 주세요.
          <span>홈페이지 폼 입력만으로 예약이 확정되지는 않습니다.</span>
        </p>
      </div>
    </section>
  );
}

function ProcessIcon({ icon }: { icon: (typeof cleaningProcess)[number]["icon"] }) {
  const paths = {
    consult: "M7 6h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H14l-7 5v-5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Zm3 7h12m-12 5h8",
    phone: "m9 4-4 2c-1 1-1 4 0 7 3 7 7 11 14 14 3 1 6 1 7 0l2-4-7-5-3 3c-4-2-6-4-8-8l3-3-4-6Zm11 1a9 9 0 0 1 7 7m-7-3a5 5 0 0 1 3 3",
    scope: "M11 5H7a2 2 0 0 0-2 2v21h22V7a2 2 0 0 0-2-2h-4M11 3h10v5H11V3Zm-1 11h12m-12 5h8m-8 5h6",
    prepare: "M5 11h22v16H5V11Zm6 0V6h10v5M5 17h22m-13-2h4v5h-4v-5",
    clean: "M14 6h9v5h-9V6Zm3 5v4l-6 5v8h15V18l-6-3M23 6l5-2m-5 5 5 2M6 4v6m-3-3h6M4 18v4m-2-2h4",
    inspect: "M10 5H6v23h20V5h-4M10 3h12v5H10V3Zm0 14 3 3 8-8m-11 12h12",
    followup: "m8 5-3 2c-1 1 0 5 2 8 2 4 6 8 10 10 3 2 7 3 8 2l2-3-6-4-3 3c-4-2-7-5-9-9l3-3-4-6Zm12 5 3 3 6-7",
  } satisfies Record<(typeof cleaningProcess)[number]["icon"], string>;

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d={paths[icon]} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
