import { serviceOptions, spaceOptions } from "@/lib/content";

export type QuoteFormValues = {
  service: string;
  spaceType: string;
  region: string;
  size: string;
  desiredDate: string;
  name: string;
  phone: string;
  message: string;
  consent: boolean;
};

export type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>;

const phonePattern = /^(?:01[016789]|02|0[3-6][1-5])-?\d{3,4}-?\d{4}$/;

export function formatLocalDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function formatQuoteDate(value: string): string {
  if (!value) {
    return "미입력";
  }

  const [year, month, day] = value.split("-");
  if (!year || !month || !day) {
    return value;
  }

  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
}

export function buildQuoteSummary(values: QuoteFormValues): string {
  const optionalValue = (value: string) => value.trim() || "미입력";

  return [
    "[청소 견적 문의 내용]",
    `서비스: ${values.service}`,
    `공간 유형: ${values.spaceType}`,
    `지역: ${values.region.trim()}`,
    `면적 또는 수량: ${optionalValue(values.size)}`,
    `희망 시기: ${formatQuoteDate(values.desiredDate)}`,
    `이름: ${values.name.trim()}`,
    `연락처: ${values.phone.trim()}`,
    `문의 내용: ${optionalValue(values.message)}`,
    "",
    "※ 웹사이트에서 자동 전송·접수된 내용이 아닙니다.",
  ].join("\n");
}

export function validateQuoteForm(
  values: QuoteFormValues,
  today = formatLocalDate(new Date()),
): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!serviceOptions.includes(values.service as (typeof serviceOptions)[number])) {
    errors.service = "문의할 서비스를 선택해 주세요.";
  }
  if (!spaceOptions.includes(values.spaceType as (typeof spaceOptions)[number])) {
    errors.spaceType = "공간 유형을 선택해 주세요.";
  }

  const region = values.region.trim();
  if (region.length < 2) {
    errors.region = "시·군·구 정도의 지역을 2자 이상 입력해 주세요.";
  }

  const name = values.name.trim();
  if (name.length < 2 || name.length > 30) {
    errors.name = "이름은 2자 이상 30자 이하로 입력해 주세요.";
  }

  const phone = values.phone.trim();
  if (!phonePattern.test(phone)) {
    errors.phone = "전화번호를 숫자 또는 하이픈을 포함한 형식으로 입력해 주세요.";
  }

  if (values.desiredDate && values.desiredDate < today) {
    errors.desiredDate = "오늘 이후의 날짜를 선택해 주세요.";
  }

  if (values.message.length > 500) {
    errors.message = "문의 내용은 500자 이하로 입력해 주세요.";
  }

  if (!values.consent) {
    errors.consent = "데모 개인정보 안내를 확인하고 동의해 주세요.";
  }

  return errors;
}
