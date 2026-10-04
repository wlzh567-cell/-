"use client";

import { useMemo, useRef, useState } from "react";
import { kakaoContactUrl, serviceOptions, spaceOptions } from "@/lib/content";
import {
  buildQuoteSummary,
  formatLocalDate,
  formatQuoteDate,
  validateQuoteForm,
  type QuoteFormErrors,
  type QuoteFormValues,
} from "@/lib/validation";

const initialValues: QuoteFormValues = {
  service: "",
  spaceType: "",
  region: "",
  size: "",
  desiredDate: "",
  name: "",
  phone: "",
  message: "",
  consent: false,
};

const fieldOrder: Array<keyof QuoteFormValues> = [
  "service",
  "spaceType",
  "region",
  "size",
  "desiredDate",
  "name",
  "phone",
  "message",
  "consent",
];

type QuoteView = "form" | "summary";
type CopyStatus = "idle" | "copied" | "failed";

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [view, setView] = useState<QuoteView>("form");
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const fieldsRef = useRef<Partial<Record<keyof QuoteFormValues, HTMLElement | null>>>({});
  const summaryTitleRef = useRef<HTMLHeadingElement | null>(null);
  const today = useMemo(() => formatLocalDate(new Date()), []);

  function updateField<Key extends keyof QuoteFormValues>(
    field: Key,
    value: QuoteFormValues[Key],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuoteForm(values, today);
    setErrors(nextErrors);

    const firstInvalidField = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalidField) {
      fieldsRef.current[firstInvalidField]?.focus();
      return;
    }

    setCopyStatus("idle");
    setView("summary");
    requestAnimationFrame(() => summaryTitleRef.current?.focus());
  }

  function handleEdit() {
    setCopyStatus("idle");
    setView("form");
    requestAnimationFrame(() => fieldsRef.current.service?.focus());
  }

  function handleReset() {
    setValues({ ...initialValues });
    setErrors({});
    setCopyStatus("idle");
    setView("form");
    requestAnimationFrame(() => fieldsRef.current.service?.focus());
  }

  async function handleCopy() {
    const summary = buildQuoteSummary(values);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(summary);
      } else {
        copyWithTemporaryField(summary);
      }
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
  }

  return (
    <div className="quote-form">
      <ol className="quote-steps" aria-label="견적 내용 작성 단계">
        <li className={view === "form" ? "is-active" : "is-complete"}>
          <span aria-hidden="true">{view === "summary" ? "✓" : "1"}</span>
          정보 입력
        </li>
        <li className={view === "summary" ? "is-active" : ""}>
          <span aria-hidden="true">2</span>
          내용 확인
        </li>
      </ol>

      {view === "form" ? (
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-grid">
            <FormField label="서비스" required error={errors.service} id="service">
              <select
                id="service"
                ref={(node) => {
                  fieldsRef.current.service = node;
                }}
                value={values.service}
                onChange={(event) => updateField("service", event.target.value)}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <option value="">선택해 주세요</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="공간 유형" required error={errors.spaceType} id="spaceType">
              <select
                id="spaceType"
                ref={(node) => {
                  fieldsRef.current.spaceType = node;
                }}
                value={values.spaceType}
                onChange={(event) => updateField("spaceType", event.target.value)}
                aria-invalid={Boolean(errors.spaceType)}
                aria-describedby={errors.spaceType ? "spaceType-error" : undefined}
              >
                <option value="">선택해 주세요</option>
                {spaceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="지역" required error={errors.region} id="region">
              <input
                id="region"
                ref={(node) => {
                  fieldsRef.current.region = node;
                }}
                type="text"
                value={values.region}
                onChange={(event) => updateField("region", event.target.value)}
                placeholder="예: 서울 마포구"
                autoComplete="address-level2"
                aria-invalid={Boolean(errors.region)}
                aria-describedby={errors.region ? "region-error" : "region-help"}
              />
              <p className="field-help" id="region-help">
                상세 주소는 입력하지 마세요.
              </p>
            </FormField>

            <FormField label="면적 또는 수량" error={errors.size} id="size">
              <input
                id="size"
                ref={(node) => {
                  fieldsRef.current.size = node;
                }}
                type="text"
                value={values.size}
                onChange={(event) => updateField("size", event.target.value)}
                placeholder="예: 84㎡ 또는 의자 20개"
                aria-describedby={errors.size ? "size-error" : undefined}
              />
            </FormField>

            <FormField label="희망 시기" error={errors.desiredDate} id="desiredDate">
              <input
                id="desiredDate"
                ref={(node) => {
                  fieldsRef.current.desiredDate = node;
                }}
                type="date"
                min={today}
                value={values.desiredDate}
                onInput={(event) => updateField("desiredDate", event.currentTarget.value)}
                aria-invalid={Boolean(errors.desiredDate)}
                aria-describedby={errors.desiredDate ? "desiredDate-error" : undefined}
              />
            </FormField>

            <FormField label="이름" required error={errors.name} id="name">
              <input
                id="name"
                ref={(node) => {
                  fieldsRef.current.name = node;
                }}
                type="text"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                autoComplete="name"
                minLength={2}
                maxLength={30}
                placeholder="이름을 입력해 주세요"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
            </FormField>

            <FormField label="연락처" required error={errors.phone} id="phone">
              <input
                id="phone"
                ref={(node) => {
                  fieldsRef.current.phone = node;
                }}
                type="tel"
                value={values.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                autoComplete="tel"
                inputMode="tel"
                placeholder="예: 010-1234-5678"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
            </FormField>

            <div className="form-field form-field-wide">
              <div className="field-label-row">
                <label htmlFor="message">문의 내용</label>
                <span>{values.message.length}/500</span>
              </div>
              <textarea
                id="message"
                ref={(node) => {
                  fieldsRef.current.message = node;
                }}
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                maxLength={501}
                rows={5}
                placeholder="공간 상태나 궁금한 점을 적어 주세요. 출입 비밀번호 등 민감정보는 입력하지 마세요."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : "message-help"}
              />
              <p className="field-help" id="message-help">
                상세 주소, 출입 비밀번호 등 민감정보는 남기지 마세요.
              </p>
              {errors.message ? (
                <FieldError id="message-error" message={errors.message} />
              ) : null}
            </div>
          </div>

          <div className={`consent-box ${errors.consent ? "has-error" : ""}`}>
            <input
              id="consent"
              ref={(node) => {
                fieldsRef.current.consent = node;
              }}
              type="checkbox"
              checked={values.consent}
              onChange={(event) => updateField("consent", event.target.checked)}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-copy consent-error" : "consent-copy"}
            />
            <div>
              <label htmlFor="consent">개인정보 안내 확인 및 동의 (필수)</label>
              <p id="consent-copy">
                입력 내용은 서버로 전송되거나 저장되지 않습니다. 카카오톡 열기 버튼을 누르면 이
                기기의 클립보드에 정리된 내용이 복사됩니다.
              </p>
              {errors.consent ? (
                <FieldError id="consent-error" message={errors.consent} />
              ) : null}
            </div>
          </div>

          <div className="form-submit-row">
            <button className="submit-button" type="submit">
              견적 내용 확인
              <ArrowIcon />
            </button>
            <p>확인 단계로 이동하며 아직 접수되지 않습니다.</p>
          </div>
        </form>
      ) : (
        <QuoteSummary
          values={values}
          copyStatus={copyStatus}
          titleRef={summaryTitleRef}
          onCopy={handleCopy}
          onEdit={handleEdit}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

function QuoteSummary({
  values,
  copyStatus,
  titleRef,
  onCopy,
  onEdit,
  onReset,
}: {
  values: QuoteFormValues;
  copyStatus: CopyStatus;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  onCopy: () => Promise<void>;
  onEdit: () => void;
  onReset: () => void;
}) {
  const summaryItems = [
    ["서비스", values.service],
    ["공간 유형", values.spaceType],
    ["지역", values.region.trim()],
    ["면적 또는 수량", values.size.trim() || "미입력"],
    ["희망 시기", formatQuoteDate(values.desiredDate)],
    ["이름", values.name.trim()],
    ["연락처", values.phone.trim()],
    ["문의 내용", values.message.trim() || "미입력"],
  ];

  return (
    <section className="quote-summary" aria-labelledby="quote-summary-title">
      <header className="quote-summary-header">
        <span className="summary-check" aria-hidden="true">
          ✓
        </span>
        <div>
          <p>QUOTE READY</p>
          <h3 id="quote-summary-title" ref={titleRef} tabIndex={-1}>
            견적 요청 내용을 정리했습니다.
          </h3>
          <span>
            아래 내용은 아직 전송·저장되지 않았습니다. 확인한 뒤 카카오톡 상담으로 이어가세요.
          </span>
        </div>
      </header>

      <dl className="quote-summary-list">
        {summaryItems.map(([label, value]) => (
          <div key={label} className={label === "문의 내용" ? "is-wide" : undefined}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <div className="summary-notice">
        <span aria-hidden="true">i</span>
        <p>
          카카오톡 1:1 오픈채팅이 연결되어 있습니다. 버튼을 누르면 내용이 복사되고 채팅창이
          열립니다. 채팅창에 붙여넣은 뒤 직접 전송해야 상담 내용이 전달됩니다.
        </p>
      </div>

      <div className="summary-actions">
        <a
          className="summary-kakao-button"
          href={kakaoContactUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => void onCopy()}
        >
          <KakaoIcon />
          복사 후 카카오톡 열기
        </a>
        <button className="summary-edit-button" type="button" onClick={onEdit}>
          <EditIcon />
          수정하기
        </button>
        <button className="summary-reset-button" type="button" onClick={onReset}>
          새로 작성
        </button>
      </div>

      <div className="copy-status" aria-live="polite" role="status">
        {copyStatus === "copied" ? "견적 요청 내용이 클립보드에 복사되었습니다." : null}
        {copyStatus === "failed"
          ? "자동 복사가 허용되지 않았습니다. 브라우저의 클립보드 권한을 확인해 주세요."
          : null}
      </div>
    </section>
  );
}

function copyWithTemporaryField(value: string) {
  const temporaryField = document.createElement("textarea");
  temporaryField.value = value;
  temporaryField.setAttribute("readonly", "");
  temporaryField.style.position = "fixed";
  temporaryField.style.opacity = "0";
  document.body.appendChild(temporaryField);
  temporaryField.select();
  const copied = document.execCommand("copy");
  temporaryField.remove();

  if (!copied) {
    throw new Error("Clipboard copy failed");
  }
}

function FormField({
  label,
  required = false,
  error,
  id,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label} {required ? <span className="required">필수</span> : null}
      </label>
      {children}
      {error ? <FieldError id={`${id}-error`} message={error} /> : null}
    </div>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p className="field-error" id={id}>
      <span aria-hidden="true">!</span> {message}
    </p>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.75 9h10.5M10 4.75 14.25 9 10 13.25" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 6C9.4 6 4 10.2 4 15.3c0 3.3 2.3 6.2 5.7 7.8L8.4 27l4.7-2.6c.9.2 1.9.3 2.9.3 6.6 0 12-4.2 12-9.4S22.6 6 16 6Z" fill="currentColor" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="m11.9 3.1 3 3-8.55 8.55-3.6.6.6-3.6L11.9 3.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m10.65 4.35 3 3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
