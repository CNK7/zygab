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
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveMedia(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (activeMedia) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeMedia]);

  return (
    <>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {media.map((item) => {
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
                  onClick={() => setActiveMedia(item)}
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
              onClick={() => setActiveMedia(item)}
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
              onPointerDown={() => setActiveMedia(null)}
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
                  onClick={() => setActiveMedia(null)}
                  className="absolute right-2 top-2 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/55 text-white backdrop-blur hover:bg-black/65 active:bg-black/75"
                  aria-label="关闭"
                  title="关闭"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                </button>

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
                  <Image
                    src={activeMedia.src}
                    alt={activeMedia.alt ?? ""}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
