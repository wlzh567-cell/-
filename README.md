# 오늘리셋 청소 서비스 랜딩페이지

오늘리셋의 청소 서비스를 소개하는 전환형 단일 랜딩페이지입니다. 입주청소, 이사청소, 사무실 청소, 소파 청소, 의자 청소를 우선순위 구분 없이 안내합니다. 2026-10-05 사용자의 최신 요청에 따라 초기 기획의 입주청소 우선 배치를 변경했습니다.

## 로컬 실행

Node.js 20 이상이 필요합니다.

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 품질 검사

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## 현재 범위

- Next.js App Router + TypeScript + Tailwind CSS
- 반응형 단일 페이지와 접근 가능한 공간 탭·FAQ
- 브라우저 로컬 검증 전용 견적 폼
- 생성 연출 이미지 안내와 실제 사례로 오인되지 않는 단계별 아이콘
- 사용자가 제공한 예약 상담부터 해피콜까지의 7단계 진행 안내
- 실제 API, 데이터베이스, 브라우저 저장소, 자동 상담 전송 기능 없음

확정된 상호·연락처와 운영 전 확인할 서비스 지역, 세부 작업 범위, 실제 사진, 개인정보 처리 기준은 [`docs/decisions.md`](docs/decisions.md)에서 확인할 수 있습니다.
