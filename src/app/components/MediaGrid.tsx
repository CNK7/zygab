"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

export default function MediaGrid({ media }: { media: MediaItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const activeMedia = activeIndex === null ? null : media[activeIndex] ?? null;
  const total = media.length;
  const canPrev = activeIndex !== null && activeIndex > 0;
  const canNext = activeIndex !== null && activeIndex < total - 1;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (activeIndex === null) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (activeIndex <= 0) {
          setHint("已经是第一张了");
          window.setTimeout(() => setHint(null), 900);
          return;
        }
        setActiveIndex(activeIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (activeIndex >= media.length - 1) {
          setHint("已经是最后一张了");
          window.setTimeout(() => setHint(null), 900);
          return;
        }
        setActiveIndex(activeIndex + 1);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, media.length]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (activeMedia) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeMedia]);

  function showEdgeHint(text: string) {
    setHint(text);
    window.setTimeout(() => setHint(null), 900);
  }

  function goPrev() {
    if (activeIndex === null) return;
    if (!canPrev) {
      showEdgeHint("已经是第一张了");
      return;
    }
    setActiveIndex(activeIndex - 1);
  }

  function goNext() {
    if (activeIndex === null) return;
    if (!canNext) {
      showEdgeHint("已经是最后一张了");
      return;
    }
    setActiveIndex(activeIndex + 1);
  }

  return (
    <>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {media.map((item, index) => {
          if (item.type === "video") {
            return (
              <div
                key={`${item.type}:${item.src}`}
                className="panel-soft relative aspect-video overflow-hidden rounded-xl border border-[color:var(--panel-border)]"
              >
                <video
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  src={item.src}
                  poster={item.poster}
                />
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white backdrop-blur hover:bg-black/55 active:bg-black/65"
                  aria-label="放大观看视频"
                  title="放大观看"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 3H5a2 2 0 0 0-2 2v4" strokeLinecap="round" />
                    <path d="M15 21h4a2 2 0 0 0 2-2v-4" strokeLinecap="round" />
                    <path d="M21 9V5a2 2 0 0 0-2-2h-4" strokeLinecap="round" />
                    <path d="M3 15v4a2 2 0 0 0 2 2h4" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            );
          }

          return (
            <button
              key={`${item.type}:${item.src}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="panel-soft relative aspect-video overflow-hidden rounded-xl border border-[color:var(--panel-border)] text-left"
              aria-label={`查看大图：${item.alt ?? "图片"}`}
            >
              <Image
                src={item.src}
                alt={item.alt ?? ""}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition duration-200 hover:scale-[1.02]"
              />
            </button>
          );
        })}
      </div>

      {activeMedia && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/85 p-2 sm:p-6"
              onPointerDown={() => setActiveIndex(null)}
              role="presentation"
            >
              <div
                className="relative h-[92dvh] w-[96vw] max-w-6xl"
                onPointerDown={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={activeMedia.type === "video" ? "视频预览" : "图片预览"}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="absolute right-2 top-2 z-10 hidden h-10 w-10 place-items-center rounded-full bg-black/55 text-white backdrop-blur hover:bg-black/65 active:bg-black/75 sm:grid"
                  aria-label="关闭"
                  title="关闭"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={goPrev}
                  className={`absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/55 active:bg-black/65 sm:grid ${
                    canPrev ? "" : "opacity-40"
                  }`}
                  aria-label="上一张"
                  title="上一张"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  className={`absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/55 active:bg-black/65 sm:grid ${
                    canNext ? "" : "opacity-40"
                  }`}
                  aria-label="下一张"
                  title="下一张"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="pointer-events-none absolute left-1/2 top-3 z-10 hidden -translate-x-1/2 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur sm:block">
                  {activeIndex !== null ? `${activeIndex + 1} / ${total}` : null}
                </div>

                <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/55 px-2 py-2 text-white backdrop-blur sm:hidden">
                  <button
                    type="button"
                    onClick={goPrev}
                    className={`grid h-10 w-10 place-items-center rounded-full bg-black/35 transition active:bg-black/55 ${
                      canPrev ? "" : "opacity-40"
                    }`}
                    aria-label="上一张"
                    title="上一张"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div className="min-w-[64px] text-center text-xs font-medium">
                    {activeIndex !== null ? `${activeIndex + 1}/${total}` : null}
                  </div>

                  <button
                    type="button"
                    onClick={goNext}
                    className={`grid h-10 w-10 place-items-center rounded-full bg-black/35 transition active:bg-black/55 ${
                      canNext ? "" : "opacity-40"
                    }`}
                    aria-label="下一张"
                    title="下一张"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-black/35 transition active:bg-black/55"
                    aria-label="关闭"
                    title="关闭"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {hint ? (
                  <div className="pointer-events-none absolute bottom-16 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur sm:bottom-3">
                    {hint}
                  </div>
                ) : null}

                {activeMedia.type === "video" ? (
                  <div className="grid h-full w-full place-items-center">
                    <video
                      className="max-h-[92dvh] w-full max-w-6xl rounded-2xl bg-black object-contain"
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      src={activeMedia.src}
                      poster={activeMedia.poster}
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    className="relative h-full w-full"
                    aria-label="关闭图片"
                    title="关闭"
                  >
                    <Image
                      src={activeMedia.src}
                      alt={activeMedia.alt ?? ""}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </button>
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
