export const siteConfig = {
  brandName: "오늘리셋",
  logo: "/images/oneul-reset-logo.png",
  tagline: "오늘, 공간을 다시 시작합니다.",
  title: "오늘리셋 | 오늘, 공간을 다시 시작합니다.",
  description:
    "오래 기다려온 내 집의 첫 시작. 오늘리셋이 깨끗하게 열어드리겠습니다. 입주청소를 중심으로 이사청소, 사무실, 소파, 의자 청소를 상담합니다.",
} as const;

export const navigation = [
  { label: "입주청소", href: "#move-in-cleaning" },
  { label: "장비 안내", href: "#equipment" },
  { label: "서비스", href: "#services" },
  { label: "진행 안내", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

export type ContactChannel = {
  id: "kakao" | "blog" | "instagram" | "phone";
  label: string;
  href: string | null;
};

export const kakaoContactUrl = "https://open.kakao.com/o/sYOvRLQi";

export const contactChannels: ContactChannel[] = [
  { id: "kakao", label: "카카오톡 1:1 상담", href: kakaoContactUrl },
  { id: "blog", label: "네이버 블로그", href: "https://blog.naver.com/wlzh567" },
  { id: "instagram", label: "인스타그램", href: null },
  { id: "phone", label: "전화 문의", href: "tel:01071619002" },
];

export const scopeItems = [
  {
    id: "kitchen",
    label: "주방",
    index: "01",
    title: "매일의 시작이 닿는 곳",
    description:
      "상·하부장 외부, 조리대, 싱크대 등 눈에 보이는 상태와 요청 범위를 상담할 수 있습니다.",
    note: "내부 청소와 세부 포함 범위는 상담 시 확인합니다.",
  },
  {
    id: "bathroom",
    label: "욕실",
    index: "02",
    title: "물과 손길이 자주 닿는 곳",
    description:
      "세면대, 수전, 타일, 배수구 주변 등 사용 전 살펴볼 영역을 함께 확인합니다.",
    note: "오염 상태와 소재에 따라 가능한 범위를 상담합니다.",
  },
  {
    id: "living",
    label: "방·거실",
    index: "03",
    title: "생활의 중심이 되는 곳",
    description:
      "바닥, 몰딩 주변, 문과 손잡이 등 공간별로 신경 쓰이는 지점을 전달할 수 있습니다.",
    note: "공간 구조에 따라 상담 항목이 달라질 수 있습니다.",
  },
  {
    id: "window",
    label: "창틀·베란다",
    index: "04",
    title: "빛과 바람이 지나는 곳",
    description:
      "창틀과 베란다처럼 먼지가 머물기 쉬운 경계 영역의 상태를 상담합니다.",
    note: "외창 등 작업 가능 여부는 현장 조건 확인이 필요합니다.",
  },
  {
    id: "entry",
    label: "현관·수납",
    index: "05",
    title: "처음 마주하는 곳",
    description:
      "현관 바닥과 수납장 외부 등 입주 전에 확인하고 싶은 지점을 알려주세요.",
    note: "수납장 내부 등 세부 범위는 상담 시 확인합니다.",
  },
] as const;

export const secondaryServices = [
  {
    title: "이사청소",
    number: "01",
    description: "이사 전후 비어 있는 주거 공간의 청소 범위를 상담합니다.",
    tone: "mint",
  },
  {
    title: "사무실 청소",
    number: "02",
    description: "업무 공간과 공용 공간의 상태, 규모, 희망 범위를 확인합니다.",
    tone: "ink",
  },
  {
    title: "소파 청소",
    number: "03",
    description: "소재와 오염 상태를 먼저 확인한 뒤 가능한 범위를 상담합니다.",
    tone: "sand",
  },
  {
    title: "의자 청소",
    number: "04",
    description: "사무용·패브릭 의자의 수량과 소재에 맞춰 상담합니다.",
    tone: "blue",
  },
] as const;

export const equipmentItems = [
  {
    title: "진공 청소 장비",
    description: "바닥과 틈에 남은 건식 먼지를 정리할 때 검토하는 장비 유형입니다.",
    tag: "바닥 · 틈",
    image: "/images/equipment-vacuum.png",
  },
  {
    title: "스팀 청소 장비",
    description: "열과 수분 적용이 가능한 소재인지 먼저 확인해야 하는 장비 유형입니다.",
    tag: "주방 · 욕실",
    image: "/images/equipment-steam.png",
  },
  {
    title: "창문·창틀 도구",
    description: "스퀴지와 좁은 브러시처럼 창과 레일 주변에 사용하는 도구 유형입니다.",
    tag: "창 · 레일",
    image: "/images/equipment-window-tools.png",
  },
  {
    title: "브러시·패드",
    description: "표면과 모서리 상태에 맞춰 형태와 강도를 선택하는 도구 유형입니다.",
    tag: "면 · 모서리",
    image: "/images/equipment-brushes.png",
  },
  {
    title: "패브릭 세척 장비",
    description: "소파와 의자의 소재·오염 상태를 확인한 뒤 검토하는 장비 유형입니다.",
    tag: "소파 · 의자",
    image: "/images/equipment-fabric.png",
  },
  {
    title: "보양·안전 도구",
    description: "작업 주변의 표면과 동선을 보호하기 위해 확인하는 준비 도구입니다.",
    tag: "작업 준비",
    image: "/images/equipment-protection.png",
  },
] as const;

export const faqItems = [
  {
    question: "어떤 청소를 문의할 수 있나요?",
    answer:
      "입주청소를 중심으로 이사청소, 사무실 청소, 소파 청소, 의자 청소를 문의할 수 있습니다. 실제 가능 범위는 운영 정보가 확정된 뒤 상담 과정에서 안내됩니다.",
  },
  {
    question: "견적 문의 전에 무엇을 준비하면 되나요?",
    answer:
      "원하는 서비스와 공간 유형, 지역, 면적 또는 수량, 희망 시기를 정리해 두면 상담에 도움이 됩니다. 상세 주소나 출입 비밀번호 같은 민감한 정보는 입력하지 마세요.",
  },
  {
    question: "사진을 함께 전달해도 되나요?",
    answer:
      "현재 견적 폼에는 사진 첨부 기능이 없습니다. 연결된 카카오톡 1:1 오픈채팅에서 사진 전달 가능 여부와 필요한 촬영 범위를 먼저 확인해 주세요.",
  },
  {
    question: "온라인 문의가 바로 접수되나요?",
    answer:
      "견적 폼 자체는 내용을 서버로 전송하거나 저장하지 않습니다. 확인 화면에서 내용을 복사한 뒤 연결된 카카오톡 1:1 오픈채팅에 붙여넣어 직접 전송하면 상담할 수 있습니다.",
  },
] as const;

export const serviceOptions = [
  "입주청소",
  "이사청소",
  "사무실",
  "소파",
  "의자",
  "기타 문의",
] as const;

export const spaceOptions = [
  "아파트",
  "오피스텔",
  "빌라·주택",
  "사무실",
  "기타",
] as const;
