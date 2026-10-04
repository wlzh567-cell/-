"use client";

import { useEffect, useState } from "react";
import { contactChannels, type ContactChannel } from "@/lib/content";

export function FloatingContactBar() {
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 3200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  return (
    <aside className="floating-contact" aria-label="빠른 문의 채널">
      <div className="floating-contact-list">
        {contactChannels.map((channel) => {
          const content = (
            <>
              <ChannelIcon id={channel.id} />
              <span className="floating-contact-tooltip" aria-hidden="true">
                <strong>{channel.label}</strong>
                <small>{channel.href ? "바로 연결" : "연결 준비 중"}</small>
              </span>
            </>
          );

          if (channel.href) {
            return (
              <a
                key={channel.id}
                className={`floating-contact-button channel-${channel.id}`}
                href={channel.href}
                target={channel.id === "phone" ? undefined : "_blank"}
                rel={channel.id === "phone" ? undefined : "noreferrer"}
                aria-label={channel.label}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={channel.id}
              className={`floating-contact-button channel-${channel.id}`}
              type="button"
              aria-label={`${channel.label} 연결 준비 중`}
              aria-describedby="contact-channel-status"
              onClick={() => setNotice(`${channel.label} 연결 정보가 아직 등록되지 않았습니다.`)}
            >
              {content}
            </button>
          );
        })}
      </div>
      <p
        className={`floating-contact-notice ${notice ? "is-visible" : ""}`}
        id="contact-channel-status"
        role="status"
        aria-live="polite"
      >
        {notice}
      </p>
    </aside>
  );
}

function ChannelIcon({ id }: { id: ContactChannel["id"] }) {
  if (id === "kakao") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 6C9.4 6 4 10.2 4 15.3c0 3.3 2.3 6.2 5.7 7.8L8.4 27l4.7-2.6c.9.2 1.9.3 2.9.3 6.6 0 12-4.2 12-9.4S22.6 6 16 6Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "blog") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9 7.5h9.2c4.1 0 6.5 1.8 6.5 5 0 1.8-.9 3.2-2.5 4 2.2.7 3.3 2.3 3.3 4.4 0 3.7-2.8 5.6-7.1 5.6H9v-19Zm8.7 7.4c1.8 0 2.8-.7 2.8-2 0-1.4-1-2-2.8-2h-4.5v4h4.5Zm.5 8.2c2.1 0 3.1-.8 3.1-2.4s-1.1-2.4-3.1-2.4h-5v4.8h5Z" fill="currentColor" />
      </svg>
    );
  }

  if (id === "instagram") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="6.5" y="6.5" width="19" height="19" rx="6" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="16" cy="16" r="4.7" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="22.5" cy="9.8" r="1.4" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9.2 5.5 13 4.3l3.4 7.2-2.8 2.1c1.3 2.8 3.6 5 6.3 6.4l2.1-2.8 7.2 3.4-1.2 3.8c-.5 1.7-2.2 2.8-4 2.5C13.9 25.3 6.7 18.1 5.1 8c-.3-1.7.8-3.4 2.5-4l1.6-.5Z" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
