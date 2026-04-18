"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

      {activeImage ? (
        <button
          type="button"
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 sm:p-8"
          onClick={() => setActiveImage(null)}
          aria-label="关闭大图"
        >
          <div className="relative h-[82vh] w-full max-w-6xl">
            <Image
              src={activeImage.src}
              alt={activeImage.alt ?? ""}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </button>
      ) : null}
    </>
  );
}

