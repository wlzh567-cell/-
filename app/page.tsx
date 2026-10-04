import Image from "next/image";
import { FloatingContactBar } from "@/components/FloatingContactBar";
import { QuoteForm } from "@/components/QuoteForm";
import { ScopeTabs } from "@/components/ScopeTabs";
import {
  equipmentItems,
  faqItems,
  navigation,
  secondaryServices,
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
          <a className="wordmark" href="#top" aria-label="처음으로">
            <span className="wordmark-mark" aria-hidden="true">
              <span />
            </span>
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
            priority
            sizes="100vw"
          />
          <div className="photo-hero-shade" aria-hidden="true" />
          <div className="section-shell photo-hero-inner">
            <div className="photo-hero-copy reveal">
              <p className="hero-badge">입주청소 중심 · 공간별 상담</p>
              <h1 id="hero-title">
                입주 전 먼지와 흔적,
                <br />
                <em>생활 전에 정리합니다.</em>
              </h1>
              <p>
                아파트부터 오피스텔까지. 주방·욕실·창틀·수납 등 입주를 앞둔 공간에서
                필요한 청소 범위를 함께 확인합니다.
              </p>
              <div className="photo-hero-actions">
                <a className="primary-button hero-primary" href="#quote">
                  견적 받기
                  <ArrowIcon />
                </a>
                <a className="hero-secondary" href="#move-in-cleaning" aria-label="입주청소 범위 보기">
                  청소 범위
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
              <ul className="hero-points" aria-label="입주청소 상담 특징">
                <li>입주청소 중심</li>
                <li>아파트·오피스텔 상담</li>
                <li>공간별 요청 범위 확인</li>
              </ul>
            </div>
          </div>
          <p className="photo-disclaimer">서비스 이해를 돕기 위한 생성 연출 이미지</p>
        </section>

        <section className="quick-service-strip" aria-label="상담 가능한 서비스">
          <div className="section-shell quick-service-inner">
            <p>상담 가능한 서비스</p>
            <div>
              <a href="#move-in-cleaning"><strong>입주청소</strong><span>새 공간을 시작하기 전</span></a>
              <a href="#services"><strong>이사청소</strong><span>이사 전후 비어 있는 공간</span></a>
              <a href="#services"><strong>사무실 청소</strong><span>업무·공용 공간</span></a>
              <a href="#services"><strong>소파·의자</strong><span>소재와 수량별 상담</span></a>
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
              <p className="section-kicker">MOVE-IN CLEANING</p>
              <h2>
                눈에 보이는 면부터,
                <br />
                먼지가 머무는 틈까지.
              </h2>
              <p className="cleaning-focus-lead">
                새 공간이라고 모두 같은 상태는 아닙니다. 생활 전에 확인하고 싶은 곳을 알려주면
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

        <section className="services-section anchor-section" id="services" aria-labelledby="services-title">
          <div className="section-shell">
            <div className="services-heading">
              <div>
                <p className="section-kicker">BEYOND MOVE-IN</p>
                <h2 id="services-title">
                  다른 공간의 고민도
                  <br />
                  이어서 들을게요.
                </h2>
              </div>
              <p>
                주력은 입주청소입니다. 이사 전후 공간과 업무 공간, 패브릭 가구도 상태와
                소재를 바탕으로 상담할 수 있습니다.
              </p>
            </div>

            <div className="service-grid">
              {secondaryServices.map((service, index) => (
                <article key={service.title} className={`service-item service-${service.tone}`}>
                  <span className="service-number">{service.number}</span>
                  <ServiceIcon index={index} />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="service-caption">
              실제 제공 가능 지역과 세부 작업 범위는 운영 정보 확정 후 안내됩니다.
            </p>
          </div>
        </section>

        <section className="process-section anchor-section" id="process" aria-labelledby="process-title">
          <div className="section-shell process-layout">
            <div className="process-heading">
              <p className="section-kicker">QUOTE PROCESS</p>
              <h2 id="process-title">
                청소 상담은,
                <br />
                정보 확인부터.
              </h2>
              <p>
                필요한 정보를 입력하고, 상담에 전달할 내용을 한눈에 확인해 보세요.
              </p>
            </div>
            <ol className="process-list">
              <li>
                <span>01</span>
                <div>
                  <h3>서비스와 공간 정보 정리</h3>
                  <p>원하는 청소, 공간 유형, 지역과 궁금한 점을 적습니다.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>요청 내용을 한눈에 확인</h3>
                  <p>필수 항목과 연락처 형식을 확인하고 요청 내용을 정리합니다.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>카카오톡으로 상담 이어가기</h3>
                  <p>정리된 내용을 복사해 연결된 1:1 오픈채팅으로 전달할 수 있습니다.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

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

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="section-shell closing-inner">
            <p className="section-kicker">A CLEAN BEGINNING</p>
            <h2 id="closing-title">
              입주 전, 청소가 필요한 곳부터
              <br />
              알려주세요.
            </h2>
            <a className="closing-cta" href="#quote">
              견적 받기
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <FloatingContactBar />

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div>
            <a className="wordmark footer-wordmark" href="#top">
              <span className="wordmark-mark" aria-hidden="true">
                <span />
              </span>
              {siteConfig.brandName}
            </a>
            <p>새로운 공간의 시작을, 깨끗하게 준비합니다.</p>
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

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    <path key="home" d="M5 13.5 18 3l13 10.5V32H5V13.5Zm6 18V20h14v11.5M3 13l15-12 15 12" />,
    <path key="office" d="M6 33V5h19v28M25 14h7v19M11 11h4m5 0h1m-10 6h4m5 0h1m-10 6h4m5 0h1M3 33h30" />,
    <path key="sofa" d="M6 19v-5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v5M5 17a4 4 0 0 0-4 4v8h34v-8a4 4 0 0 0-4-4m-26 8h26M6 29v4m24-4v4" />,
    <path key="chair" d="M10 17h16v9H10zM12 17V7a6 6 0 0 1 12 0v10M18 26v7M8 33h20M10 26l-3 5m19-5 3 5" />,
  ];

  return (
    <div className="service-icon" aria-hidden="true">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {icons[index]}
        </g>
      </svg>
    </div>
  );
}

