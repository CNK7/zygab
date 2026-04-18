"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Props = {
  address: string;
  networkLabel?: string;
  qrImageSrc?: string;
};

async function copyText(text: string) {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "fixed";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

export default function DonateUSDTButton({ address, networkLabel = "TRC20", qrImageSrc = "/usdt-qr.png" }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [imgOk, setImgOk] = useState(true);

  const title = useMemo(() => `USDT 赞赏（${networkLabel}）`, [networkLabel]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  async function onCopy() {
    try {
      await copyText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition hover:brightness-105 active:brightness-95"
        aria-label={title}
        title={title}
      >
        USDT 赞赏
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[1000] grid place-items-center bg-black/70 p-4 sm:p-8"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="glass w-full max-w-md rounded-3xl border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] p-5 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-base font-semibold text-[color:var(--foreground)]">{title}</div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full text-[color:var(--foreground)] transition hover:brightness-105 active:brightness-95"
                aria-label="关闭"
                title="关闭"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4">
              <div className="panel-soft overflow-hidden rounded-2xl border border-[color:var(--panel-border)]">
                {imgOk ? (
                  <Image
                    src={qrImageSrc}
                    alt="USDT 收款二维码"
                    width={720}
                    height={720}
                    className="block h-auto w-full"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <div className="grid aspect-square w-full place-items-center px-6 text-center text-sm text-[color:var(--muted)]">
                    请把二维码图片放到 public/usdt-qr.png
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-[color:var(--panel-border)] bg-[color:color-mix(in srgb, var(--panel-strong) 55%, transparent)] p-4">
                <div className="text-xs font-medium text-[color:var(--muted)]">地址（点击复制）</div>
                <button
                  type="button"
                  onClick={onCopy}
                  className="mt-2 w-full rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel)] px-3 py-2 text-left font-mono text-xs text-[color:var(--foreground)] transition hover:brightness-105 active:brightness-95"
                  aria-label="点击复制地址"
                  title="点击复制"
                >
                  <div className="break-all">{address}</div>
                </button>
                <div className="mt-2 text-xs text-[color:var(--muted)]">{copied ? "已复制" : "点击上面地址即可复制"}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
