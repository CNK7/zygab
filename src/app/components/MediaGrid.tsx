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
  const [activeImage, setActiveImage] = useState<MediaItem | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveImage(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (activeImage) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImage]);

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
              </div>
            );
          }

          return (
            <button
              key={`${item.type}:${item.src}`}
              type="button"
              onClick={() => setActiveImage(item)}
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

      {activeImage && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/85 p-2 sm:p-6"
              onPointerDown={() => setActiveImage(null)}
              role="presentation"
            >
              <div
                className="relative h-[92dvh] w-[96vw] max-w-6xl"
                onPointerDown={() => setActiveImage(null)}
                role="dialog"
                aria-modal="true"
                aria-label="图片预览"
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt ?? ""}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
