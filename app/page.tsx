import Image from "next/image";
import { CleaningProcess } from "@/components/CleaningProcess";
import { FloatingContactBar } from "@/components/FloatingContactBar";
import { QuoteForm } from "@/components/QuoteForm";
import { ScopeTabs } from "@/components/ScopeTabs";
import {
  equipmentItems,
  faqItems,
  navigation,
  siteConfig,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#top" aria-label={`${siteConfig.brandName} 처음으로`}>
            <Image className="wordmark-logo" src={siteConfig.logo} alt="" width={40} height={40} sizes="(max-width: 640px) 36px, 40px" />
            {siteConfig.brandName}
          </a>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#quote">
            견적 받기
            <ArrowIcon />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="photo-hero" id="top" aria-labelledby="hero-title">
          <Image
            className="photo-hero-image"
            src="/images/hero-cleaning-team.png"
            alt="밝은 빈 아파트에서 창문과 바닥을 청소하는 작업자 연출 장면"
            fill
            preload
            sizes="100vw"
          />
          <div className="photo-hero-shade" aria-hidden="true" />
          <div className="section-shell photo-hero-inner">
            <div className="photo-hero-copy reveal">
              <div className="hero-identity">
                <span className="hero-identity-brand">
                  <Image
                    className="hero-identity-logo"
                    src="/images/oneul-reset-symbol.svg"
                    alt=""
                    width={36}
                    height={36}
                    sizes="(max-width: 640px) 26px, 36px"
                  />
                  <span>{siteConfig.brandName}</span>
                </span>
                <span className="hero-identity-divider" aria-hidden="true" />
                <p className="hero-identity-service">공간별 청소 · 맞춤 상담</p>
              </div>
              <h1 id="hero-title" aria-label={siteConfig.tagline}>
                <span>{siteConfig.headlineLines[0]}</span>
                <em>{siteConfig.headlineLines[1]}</em>
              </h1>
              <p className="hero-brand-message">
                <span>오래 기다려온 내 집의 첫 시작.</span>
                <span>
                  그 소중한 순간을, {siteConfig.brandName}이{" "}
                  <br className="hero-message-break" />
                  깨끗하게 열어드리겠습니다.
                </span>
              </p>
              <div className="photo-hero-actions">
                <a className="primary-button hero-primary" href="#quote">
                  견적 받기
                  <ArrowIcon />
                </a>
                <a className="hero-secondary" href="#move-in-cleaning" aria-label="청소 상담 범위 보기">
                  청소 범위
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
              <ul className="hero-points" aria-label="청소 상담 안내">
                <li>공간별 청소 상담</li>
                <li>주거·업무·가구 청소</li>
                <li>공간별 요청 범위 확인</li>
              </ul>
            </div>
          </div>
          <p className="photo-disclaimer">서비스 이해를 돕기 위한 생성 연출 이미지</p>
        </section>

        <section className="quick-service-strip anchor-section" id="services" aria-label="상담 가능한 서비스">
          <div className="section-shell quick-service-inner">
            <p>상담 가능한 서비스</p>
            <div>
              <a href="#move-in-cleaning"><strong>입주청소</strong><span>새 공간을 시작하기 전</span></a>
              <a href="#quote"><strong>이사청소</strong><span>이사 전후 비어 있는 공간</span></a>
              <a href="#quote"><strong>사무실 청소</strong><span>업무·공용 공간</span></a>
              <a href="#quote"><strong>소파·의자</strong><span>소재와 수량별 상담</span></a>
            </div>
          </div>
        </section>

        <section className="cleaning-focus-section anchor-section" id="move-in-cleaning">
          <div className="section-shell cleaning-focus-layout">
            <figure className="cleaning-detail-photo">
              <Image
                src="/images/detail-window-track.png"
                alt="브러시와 천으로 창틀 틈의 먼지를 청소하는 작업자 손 연출 장면"
                fill
                sizes="(max-width: 900px) 100vw, 52vw"
              />
              <figcaption>서비스 이해를 돕기 위한 생성 연출 이미지</figcaption>
            </figure>
            <div className="cleaning-focus-copy">
              <p className="section-kicker">CLEANING SCOPE</p>
              <h2>
                눈에 보이는 면부터,
                <br />
                먼지가 머무는 틈까지.
              </h2>
              <p className="cleaning-focus-lead">
                공간마다 상태와 필요한 청소는 다릅니다. 신경 쓰이는 곳을 알려주시면
                공간별 상담 범위를 정리할 수 있습니다.
              </p>
              <ul className="cleaning-check-list">
                <li><CheckIcon /><span><strong>손이 자주 닿는 곳</strong>문과 손잡이, 스위치, 수납 외부</span></li>
                <li><CheckIcon /><span><strong>먼지가 머무는 경계</strong>창틀, 몰딩 주변, 공간의 모서리</span></li>
                <li><CheckIcon /><span><strong>사용 전 살펴볼 공간</strong>주방, 욕실, 현관과 베란다</span></li>
              </ul>
              <p className="cleaning-scope-note">
                <InfoIcon /> 대표적인 상담 영역이며, 실제 포함·제외 범위는 상담 시 확인합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="scope-section anchor-section" aria-labelledby="scope-title">
          <div className="section-shell">
            <div className="section-heading scope-heading">
              <p className="section-kicker">SPACE BY SPACE</p>
              <h2 id="scope-title">
                공간마다 필요한 청소는
                <br />
                다르니까.
              </h2>
              <p>
                아래 내용은 상담 가능한 대표 영역입니다. 모든 항목이 기본 포함된다는 뜻은
                아닙니다.
              </p>
            </div>
            <ScopeTabs />
          </div>
        </section>

        <section className="equipment-section anchor-section" id="equipment" aria-labelledby="equipment-title">
          <div className="section-shell">
            <div className="equipment-heading">
              <div>
                <p className="section-kicker">CLEANING EQUIPMENT</p>
                <h2 id="equipment-title">
                  공간과 소재에 맞는 장비를
                  <br />
                  먼저 확인합니다.
                </h2>
              </div>
              <div>
                <p>
                  아래는 청소 상담에서 확인할 수 있는 대표 장비 유형입니다. 실제 보유 모델과
                  현장 투입 여부는 운영 정보와 공간 상태 확인 후 안내해야 합니다.
                </p>
                <span>대표 장비 유형 예시</span>
              </div>
            </div>

            <div className="equipment-list">
              {equipmentItems.map((item) => (
                <article key={item.title} className="equipment-item">
                  <Image
                    className="equipment-item-image"
                    src={item.image}
                    alt={`${item.title}를 보여주는 생성 연출 이미지`}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1000px) 44vw, 30vw"
                  />
                  <div className="equipment-item-shade" aria-hidden="true" />
                  <div className="equipment-item-copy">
                    <span className="equipment-item-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="equipment-item-caption">대표 장비 유형 예시</span>
                  <a
                    className="equipment-card-arrow"
                    href="#quote"
                    aria-label={`${item.title} 관련 견적 받기`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h13M13 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>

            <p className="equipment-note">
              <InfoIcon /> 특정 장비의 보유·성능·효과를 보장하는 목록이 아닙니다. 실제 장비 정보가
              확인되면 브랜드와 모델, 적용 범위를 교체해 안내합니다.
            </p>
          </div>
        </section>

        <CleaningProcess />

        <section className="quote-section anchor-section" id="quote" aria-labelledby="quote-title">
          <div className="section-shell quote-layout">
            <aside className="quote-intro">
              <p className="section-kicker">QUOTE CHECK</p>
              <h2 id="quote-title">
                청소 견적에 필요한 내용을
                <br />
                미리 정리해 보세요.
              </h2>
              <p>
                서비스와 공간, 지역, 연락처를 입력하면 요청 내용을 확인하고 복사할 수 있습니다.
                실제 문의 접수·저장 없이 브라우저 안에서만 작동합니다.
              </p>
              <div className="privacy-seal" aria-hidden="true">
                <span>LOCAL ONLY</span>
                <strong>정리하고 복사하는 견적 폼</strong>
              </div>
            </aside>
            <QuoteForm />
          </div>
        </section>

        <section className="faq-section anchor-section" id="faq" aria-labelledby="faq-title">
          <div className="section-shell faq-layout">
            <div>
              <p className="section-kicker">FAQ</p>
              <h2 id="faq-title">
                궁금한 점을
                <br />
                먼저 확인하세요.
              </h2>
            </div>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      <FloatingContactBar />

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div>
            <a className="wordmark footer-wordmark" href="#top">
              <Image className="wordmark-logo" src={siteConfig.logo} alt="" width={40} height={40} sizes="(max-width: 640px) 36px, 40px" />
              {siteConfig.brandName}
            </a>
            <p>{siteConfig.tagline}</p>
          </div>
          <nav aria-label="푸터 메뉴">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="section-shell footer-bottom">
          <p>현재 페이지는 서비스 소개 및 입력 형식 확인용 데모입니다.</p>
          <p>사업자 정보와 개인정보 처리방침은 운영 정보 확정 후 반영됩니다.</p>
        </div>
      </footer>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11.5 5.5 16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 8v4M9 5.5v.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="10" fill="currentColor" />
      <path d="m6.75 11.2 2.65 2.65 5.9-6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

