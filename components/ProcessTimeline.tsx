"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import styles from "./CleaningProcess.module.css";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const STEP_INTERVAL_MS = 3000;

function subscribeToMotion(onChange: () => void) {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeToVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

function getPageVisible() {
  return document.visibilityState === "visible";
}

function getStaticSnapshot() {
  return true;
}

export function ProcessTimeline({ steps }: { steps: readonly ProcessStep[] }) {
  const timelineRef = useRef<HTMLOListElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeToMotion, getReducedMotion, getStaticSnapshot);
  const pageVisible = useSyncExternalStore(subscribeToVisibility, getPageVisible, getStaticSnapshot);
  const isPlaying = !reducedMotion && pageVisible && isInView && !isPaused && !isHovered && !hasFocus;

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.1),
      { threshold: [0, 0.1] },
    );
    observer.observe(timeline);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying || steps.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, STEP_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPlaying, steps.length, activeStep]);

  function selectStep(index: number) {
    setActiveStep(index);
    setIsPaused(true);
  }

  return (
    <div className={styles.player}>
      <div className={styles.controls}>
        <div className={styles.playbackInfo}>
          <span className={styles.currentStep} aria-label={`${activeStep + 1}번째 단계 안내`}>
            {steps[activeStep].number} <span>/ {String(steps.length).padStart(2, "0")}</span>
          </span>
          <span className={styles.playbackHint}>
            {reducedMotion ? "단계를 눌러 확인해 보세요" : "3초마다 순서대로 강조됩니다"}
          </span>
          <span className={styles.progressTrack} aria-hidden="true">
            {isPlaying && <span key={activeStep} className={styles.progressFill} />}
          </span>
        </div>
        {!reducedMotion && (
          <button
            type="button"
            className={styles.playbackButton}
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? "진행 순서 자동 안내 재생" : "진행 순서 자동 안내 일시정지"}
          >
            <span aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>
            {isPaused ? "자동 안내 재생" : "일시정지"}
          </button>
        )}
      </div>

      <ol
        ref={timelineRef}
        className={styles.timeline}
        aria-label="청소 진행 7단계"
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setIsHovered(true);
        }}
        onPointerLeave={() => setIsHovered(false)}
        onFocusCapture={() => setHasFocus(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
        }}
      >
        {steps.map((step, index) => (
          <li
            key={step.number}
            className={styles.step}
            data-active={index === activeStep}
            data-past={index < activeStep}
          >
            <button
              className={styles.marker}
              type="button"
              onClick={() => selectStep(index)}
              aria-label={`${step.number} ${step.title} 단계 안내 보기`}
              aria-pressed={index === activeStep}
            >
              <span className={styles.number}>{step.number}</span>
              <span className={styles.icon}>{step.icon}</span>
            </button>
            <div className={styles.copy}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className={styles.motionNote}>
        자동 강조는 순서 안내용이며, 실제 작업 시간이나 작업 현황을 표시하지 않습니다.
      </p>
    </div>
  );
}
