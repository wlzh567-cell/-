export const siteConfig = {
  brandName: "오늘리셋",
  logo: "/images/oneul-reset-logo.png",
  tagline: "오늘, 공간을 다시 시작합니다.",
  headlineLines: ["오늘, 공간을", "다시 시작합니다."],
  title: "오늘리셋 | 오늘, 공간을 다시 시작합니다.",
  description:
    "오늘, 공간을 다시 시작합니다. 오늘리셋의 입주청소, 이사청소, 사무실, 소파, 의자 청소 상담과 예약부터 작업 후 확인까지의 진행 순서를 안내합니다.",
} as const;

export const navigation = [
  { label: "청소 범위", href: "#move-in-cleaning" },
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
    title: "일상이 머무는 곳",
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
      "현관 바닥과 수납장 외부 등 청소 전에 확인하고 싶은 지점을 알려주세요.",
    note: "수납장 내부 등 세부 범위는 상담 시 확인합니다.",
  },
] as const;

export const cleaningProcess = [
  {
    number: "01",
    title: "전문 예약 상담",
    description: "원하는 서비스와 공간 정보를 바탕으로 예약 상담을 진행합니다.",
    icon: "consult",
  },
  {
    number: "02",
    title: "방문 전 고객님께 전화",
    description: "현장에 방문하기 전 고객님께 전화로 연락드립니다.",
    icon: "phone",
  },
  {
    number: "03",
    title: "현장 확인 · 청소 범위 설명",
    description: "현장 상태를 확인하고 청소할 범위를 설명합니다.",
    icon: "scope",
  },
  {
    number: "04",
    title: "작업 준비",
    description: "현장 확인을 마친 뒤 청소 작업을 준비합니다.",
    icon: "prepare",
  },
  {
    number: "05",
    title: "각 구역별 청소",
    description: "앞서 설명한 범위에 따라 각 구역의 청소를 진행합니다.",
    icon: "clean",
  },
  {
    number: "06",
    title: "담당자 검수 후 고객 검수",
    description: "현장 담당자가 먼저 검수한 뒤 고객님과 함께 현장을 확인합니다.",
    icon: "inspect",
  },
  {
    number: "07",
    title: "작업 완료 후 해피콜",
    description: "작업을 마친 뒤 해피콜로 고객님께 연락드립니다.",
    icon: "followup",
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
      "입주청소, 이사청소, 사무실 청소, 소파 청소, 의자 청소를 문의할 수 있습니다. 공간과 소재에 따른 실제 작업 가능 범위는 상담 과정에서 확인해 주세요.",
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
