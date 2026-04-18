import Image from "next/image";
import MediaGrid from "./components/MediaGrid";
import DonateUSDTButton from "./components/DonateUSDTButton";
import ThemeToggle from "./components/ThemeToggle";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

type RecordEntry = {
  date: string;
  title: string;
  content: string;
  tags?: string[];
  media?: MediaItem[];
};

const contacts = [
  { label: "WhatsApp", href: "https://wa.me/1234567890" },
  { label: "Telegram", href: "https://t.me/your_username" },
  { label: "邮箱", href: "mailto:you@example.com" },
  { label: "Line", href: "https://line.me/ti/p/~your_line_id" },
];

const usdtDonation = {
  address: "TJ49GUWhHBn5K8dggUH7UNixGAR7777777",
  networkLabel: "TRC20",
  qrImageSrc: "/media/usdt.jpg",
};

const records: RecordEntry[] = [
  {
    date: "2026-04-18",
    title: "第一天：把页面搭起来",
    content: "毛玻璃 + 流动边框先到位。后续每天把图片/视频丢进 public/media，再在这里补一条记录。",
    tags: ["setup", "design"],
    media: [
      { type: "image", src: "/picture/1.jpg", alt: "1" },
      { type: "image", src: "/picture/2.jpg", alt: "2" },
      { type: "image", src: "/picture/3.jpg", alt: "3" },
      { type: "image", src: "/picture/4.jpg", alt: "4" },
      { type: "image", src: "/picture/5.jpg", alt: "5" },
      { type: "image", src: "/picture/6.jpg", alt: "6" },
      { type: "image", src: "/picture/7.jpg", alt: "7" },
    ],
  },
  {
    date: "2026-04-17",
    title: "灵感收集",
    content: "偏 AI / SaaS Landing 的“高级感”流动边框 + 苹果式毛玻璃质感，暗黑模式也要好看。",
    tags: ["inspiration"],
    media: [
      { type: "video", src: "/video/zyg-1.mp4" },
      { type: "video", src: "/video/zyg-2.mp4" },
      { type: "video", src: "/video/zyg-3.mp4" },
      { type: "video", src: "/video/zyg-4.mp4" },
      { type: "video", src: "/video/zyg-5.mp4" },
      { type: "video", src: "/video/zyg-6.mp4" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-dvh w-full">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 pb-4 pt-6 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)] text-[color:var(--foreground)]">
            <Image src="/picture/zyg.png" alt="logo" width={22} height={22} className="object-contain" priority />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-[color:var(--foreground)]">章鱼记录页</div>
            <div className="text-xs text-[color:var(--muted)]">Octopus Daily Log</div>
          </div>
        </div>
        <ThemeToggle />
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        <section className="glass rounded-[26px] p-6 sm:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-balance text-2xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-3xl">
                你好，欢迎来到神秘世界！
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-6 text-[color:var(--muted)] sm:text-base">
                这是我的记录页面：记录美好生活每一天。
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm text-[color:var(--muted)]">点击下方按钮可以快速联系我：</p>
              <div className="flex flex-wrap gap-3">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition hover:brightness-105 active:brightness-95"
                  >
                    {c.label}
                  </a>
                ))}
                <DonateUSDTButton
                  address={usdtDonation.address}
                  networkLabel={usdtDonation.networkLabel}
                  qrImageSrc={usdtDonation.qrImageSrc}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-[color:var(--foreground)]">每天的记录</h2>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                把图片/视频放进 public/media，然后在 records 数组里加一条即可。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {records.map((r) => (
              <article key={r.date} className="glass rounded-[20px] p-5 sm:p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-xs font-medium text-[color:var(--muted)]">{r.date}</div>
                    {r.tags?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {r.tags.map((t) => (
                          <span
                            key={t}
                            className="chip rounded-full px-2.5 py-1 text-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="text-base font-semibold text-[color:var(--foreground)] sm:text-lg">{r.title}</div>
                  <p className="text-sm leading-6 text-[color:var(--muted)] sm:text-base">{r.content}</p>

                  {r.media?.length ? <MediaGrid media={r.media} /> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-4 pb-10 sm:px-6">
        <div className="text-xs text-[color:var(--muted)]">© {new Date().getFullYear()} 章鱼记录页</div>
      </footer>
    </div>
  );
}
