# 입주청소 랜딩페이지

입주청소를 주력으로 소개하는 전환형 단일 랜딩페이지입니다. 이사청소, 사무실 청소, 소파 청소, 의자 청소는 보조 서비스로 안내합니다.

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
- 외부 이미지 대신 실제 사례로 오인되지 않는 CSS 연출 그래픽
- 실제 API, 데이터베이스, 브라우저 저장소, 상담 전송 기능 없음

운영 전 필요한 회사명, 연락처, 서비스 지역, 실제 작업 범위, 사진, 개인정보 처리 기준은 [`docs/decisions.md`](docs/decisions.md)에서 확인할 수 있습니다.
