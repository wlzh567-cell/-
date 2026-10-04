"use client";

import { useId, useRef, useState } from "react";
import { scopeItems } from "@/lib/content";

export function ScopeTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const instanceId = useId();
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const activeItem = scopeItems[activeIndex];

  function selectTab(index: number) {
    setActiveIndex(index);
    tabsRef.current[index]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectTab((index + 1) % scopeItems.length);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectTab((index - 1 + scopeItems.length) % scopeItems.length);
    }
    if (event.key === "Home") {
      event.preventDefault();
      selectTab(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      selectTab(scopeItems.length - 1);
    }
  }

  return (
    <div className="scope-shell">
      <div className="scope-tabs" role="tablist" aria-label="입주청소 공간 선택">
        {scopeItems.map((item, index) => (
          <button
            key={item.id}
            ref={(node) => {
              tabsRef.current[index] = node;
            }}
            id={`${instanceId}-tab-${item.id}`}
            className="scope-tab"
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`${instanceId}-panel-${item.id}`}
            tabIndex={activeIndex === index ? 0 : -1}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <span>{item.label}</span>
            <span aria-hidden="true">{item.index}</span>
          </button>
        ))}
      </div>

      <div
        id={`${instanceId}-panel-${activeItem.id}`}
        className="scope-panel"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`${instanceId}-tab-${activeItem.id}`}
      >
        <div>
          <p className="scope-index" aria-hidden="true">
            {activeItem.index}
          </p>
          <h3>{activeItem.title}</h3>
        </div>
        <div className="scope-copy">
          <p>{activeItem.description}</p>
          <p className="scope-note">{activeItem.note}</p>
        </div>
      </div>
    </div>
  );
}
