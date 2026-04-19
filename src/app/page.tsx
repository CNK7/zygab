import Image from "next/image";
import MediaGrid from "./components/MediaGrid";
import DonateUSDTButton from "./components/DonateUSDTButton";
import ThemeToggle from "./components/ThemeToggle";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
  { label: "WhatsApp", href: "https://wa.me/qr/L6Q5RLMFYFFEM1" },
  { label: "Telegram", href: "https://t.me/zygnbot" },
  { label: "邮箱", href: "mailto:F56788@88.com" },
  { label: "Line", href: "https://line.me/ti/p/xhULu8n4jQ" },
];

const usdtDonation = {
  address: "TJ49GUWhHBn5K8dggUH7UNixGAR7777777",
  networkLabel: "TRC20",
  qrImageSrc: "/media/usdt.jpg",
};

const records: RecordEntry[] = [
  {
    date: "2026-04-18",
    title: "跟妹妹聊色色",
    content: "今天休息，睡到下午有点无聊了。想到妹妹好久没联系了，就联系一下。妹妹一说干嘛我就想歪了，嘎嘎嘎。干脆就（干吧）",
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
    title: "视频集锦",
    content: "跟妹妹在一块的时候一起录的视频，嘿嘿嘿😏\n建议直接打开右上角放大按钮观看哦~",
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
  {
    date: "2026-01-01",
    title: "妹妹照片",
    content: "之前带妹妹一起出去玩的照片",
    tags: ["setup", "design"],
    media: [
      { type: "image", src: "/picture/hf (2).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (30).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (1).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (3).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (4).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (5).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (6).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (7).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (8).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (9).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (10).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (11).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (12).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (13).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (14).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (15).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (16).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (17).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (18).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (19).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (20).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (21).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (22).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (23).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (24).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (25).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (26).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (31).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (27).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (28).jpg", alt: "1" },
      { type: "image", src: "/picture/hf (29).jpg", alt: "1" },
    ],
  },
  {
    date: "2026-01-01",
    title: "妹妹照片",
    content: "给妹妹开家长会的照片",
    tags: ["setup", "design"],
    media: [
      { type: "image", src: "/picture/zyg (1).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (2).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (3).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (4).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (5).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (6).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (7).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (8).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (9).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (10).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (11).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (12).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (13).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (14).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (15).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (16).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (17).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (18).jpg", alt: "1" },
      { type: "image", src: "/picture/zyg (19).jpg", alt: "1" },
    ],
  },
  {
    date: "2025-12-26",
    title: "15岁可爱小女友2号",
    content: "这位妹妹从13岁开始跟我到现在，几乎没有她不会的爱爱姿势，可爱又听话，真让我爱不释手。口交，吞精，舔屁眼，三洞全开。",
    tags: ["setup", "design"],
    media: [
      { type: "image", src: "/picture/ll (1).jpg", alt: "1" },
{ type: "image", src: "/picture/ll (2).jpg", alt: "2" },
{ type: "image", src: "/picture/ll (3).jpg", alt: "3" },
{ type: "image", src: "/picture/ll (4).jpg", alt: "4" },
{ type: "image", src: "/picture/ll (5).jpg", alt: "5" },
{ type: "image", src: "/picture/ll (6).jpg", alt: "6" },
{ type: "image", src: "/picture/ll (7).jpg", alt: "7" },
{ type: "image", src: "/picture/ll (8).jpg", alt: "8" },
{ type: "image", src: "/picture/ll (9).jpg", alt: "9" },
{ type: "image", src: "/picture/ll (10).jpg", alt: "10" },
{ type: "image", src: "/picture/ll (11).jpg", alt: "11" },
{ type: "image", src: "/picture/ll (12).jpg", alt: "12" },
{ type: "image", src: "/picture/ll (13).jpg", alt: "13" },
{ type: "image", src: "/picture/ll (14).jpg", alt: "14" },
{ type: "image", src: "/picture/ll (15).jpg", alt: "15" },
{ type: "image", src: "/picture/ll (16).jpg", alt: "16" },
{ type: "image", src: "/picture/ll (17).jpg", alt: "17" },
{ type: "image", src: "/picture/ll (18).jpg", alt: "18" },
{ type: "image", src: "/picture/ll (19).jpg", alt: "19" },
{ type: "image", src: "/picture/ll (20).jpg", alt: "20" },
{ type: "image", src: "/picture/ll (21).jpg", alt: "21" },
{ type: "image", src: "/picture/ll (22).jpg", alt: "22" },
{ type: "image", src: "/picture/ll (23).jpg", alt: "23" },
{ type: "image", src: "/picture/ll (24).jpg", alt: "24" },
{ type: "image", src: "/picture/ll (25).jpg", alt: "25" },
{ type: "image", src: "/picture/ll (26).jpg", alt: "26" },
{ type: "image", src: "/picture/ll (27).jpg", alt: "27" },
{ type: "image", src: "/picture/ll (28).jpg", alt: "28" },
{ type: "image", src: "/picture/ll (29).jpg", alt: "29" },
{ type: "image", src: "/picture/ll (30).jpg", alt: "30" },
{ type: "image", src: "/picture/ll (31).jpg", alt: "31" },
{ type: "image", src: "/picture/ll (32).jpg", alt: "32" },
{ type: "image", src: "/picture/ll (33).jpg", alt: "33" },
{ type: "image", src: "/picture/ll (34).jpg", alt: "34" },
{ type: "image", src: "/picture/ll (35).jpg", alt: "35" },
{ type: "image", src: "/picture/ll (36).jpg", alt: "36" },
{ type: "image", src: "/picture/ll (37).jpg", alt: "37" },
{ type: "image", src: "/picture/ll (38).jpg", alt: "38" },
{ type: "image", src: "/picture/ll (39).jpg", alt: "39" },
{ type: "image", src: "/picture/ll (40).jpg", alt: "40" },
{ type: "image", src: "/picture/ll (41).jpg", alt: "41" },
{ type: "image", src: "/picture/ll (42).jpg", alt: "42" },
{ type: "image", src: "/picture/ll (43).jpg", alt: "43" },
{ type: "image", src: "/picture/ll (44).jpg", alt: "44" },
{ type: "image", src: "/picture/ll (45).jpg", alt: "45" },
{ type: "image", src: "/picture/ll (46).jpg", alt: "46" },
{ type: "image", src: "/picture/ll (47).jpg", alt: "47" },
{ type: "image", src: "/picture/ll (48).jpg", alt: "48" },
{ type: "image", src: "/picture/ll (49).jpg", alt: "49" },
{ type: "image", src: "/picture/ll (50).jpg", alt: "50" },
{ type: "image", src: "/picture/ll (51).jpg", alt: "51" },
{ type: "image", src: "/picture/ll (52).jpg", alt: "52" },
{ type: "image", src: "/picture/ll (53).jpg", alt: "53" },
{ type: "image", src: "/picture/ll (54).jpg", alt: "54" },
{ type: "image", src: "/picture/ll (55).jpg", alt: "55" },
{ type: "image", src: "/picture/ll (56).jpg", alt: "56" },
{ type: "image", src: "/picture/ll (57).jpg", alt: "57" },
{ type: "image", src: "/picture/ll (58).jpg", alt: "58" },
{ type: "image", src: "/picture/ll (59).jpg", alt: "59" },
{ type: "image", src: "/picture/ll (60).jpg", alt: "60" },
    ],
  },
     {
    date: "2025-12-25",
    title: "16岁干女儿",
    content: "唐山的可爱干女儿，经常带着他的两个闺蜜一起来找我玩，得想个办法搞个3P☺️",
    tags: ["setup", "design"],
    media: [
      { type: "image", src: "/picture/qxy (1).jpg", alt: "1" },
      { type: "image", src: "/picture/qxy (2).jpg", alt: "2" },
      { type: "image", src: "/picture/qxy (3).jpg", alt: "3" },
      { type: "image", src: "/picture/qxy (4).jpg", alt: "4" },
      { type: "image", src: "/picture/qxy (5).jpg", alt: "5" },
      { type: "image", src: "/picture/qxy (6).jpg", alt: "6" },
      { type: "image", src: "/picture/qxy (7).jpg", alt: "7" },
      { type: "image", src: "/picture/qxy (8).jpg", alt: "8" },
      { type: "image", src: "/picture/qxy (9).jpg", alt: "9" },
      { type: "image", src: "/picture/qxy (10).jpg", alt: "10" },
      { type: "image", src: "/picture/qxy (11).jpg", alt: "11" },
      { type: "image", src: "/picture/qxy (12).jpg", alt: "12" },
      { type: "image", src: "/picture/qxy (13).jpg", alt: "13" },
      { type: "image", src: "/picture/qxy (14).jpg", alt: "14" },
      { type: "image", src: "/picture/qxy (15).jpg", alt: "15" },
    ],
  },
  {
    date: "2025-12-25",
    title: "15岁可爱小女友1号",
    content: "60多张照片",
    tags: ["setup", "design"],
    media: [
      { type: "image", src: "/picture/YJH (1).JPG", alt: "1" },
{ type: "image", src: "/picture/YJH (2).JPG", alt: "2" },
{ type: "image", src: "/picture/YJH (3).JPG", alt: "3" },
{ type: "image", src: "/picture/YJH (4).JPG", alt: "4" },
{ type: "image", src: "/picture/YJH (5).JPG", alt: "5" },
{ type: "image", src: "/picture/YJH (6).JPG", alt: "6" },
{ type: "image", src: "/picture/YJH (7).JPG", alt: "7" },
{ type: "image", src: "/picture/YJH (8).JPG", alt: "8" },
{ type: "image", src: "/picture/YJH (9).JPG", alt: "9" },
{ type: "image", src: "/picture/YJH (10).JPG", alt: "10" },
{ type: "image", src: "/picture/YJH (11).JPG", alt: "11" },
{ type: "image", src: "/picture/YJH (12).JPG", alt: "12" },
{ type: "image", src: "/picture/YJH (13).JPG", alt: "13" },
{ type: "image", src: "/picture/YJH (14).JPG", alt: "14" },
{ type: "image", src: "/picture/YJH (15).JPG", alt: "15" },
{ type: "image", src: "/picture/YJH (16).JPG", alt: "16" },
{ type: "image", src: "/picture/YJH (17).JPG", alt: "17" },
{ type: "image", src: "/picture/YJH (18).JPG", alt: "18" },
{ type: "image", src: "/picture/YJH (19).JPG", alt: "19" },
{ type: "image", src: "/picture/YJH (20).JPG", alt: "20" },
{ type: "image", src: "/picture/YJH (21).JPG", alt: "21" },
{ type: "image", src: "/picture/YJH (22).JPG", alt: "22" },
{ type: "image", src: "/picture/YJH (23).JPG", alt: "23" },
{ type: "image", src: "/picture/YJH (24).JPG", alt: "24" },
{ type: "image", src: "/picture/YJH (25).JPG", alt: "25" },
{ type: "image", src: "/picture/YJH (26).JPG", alt: "26" },
{ type: "image", src: "/picture/YJH (27).JPG", alt: "27" },
{ type: "image", src: "/picture/YJH (28).JPG", alt: "28" },
{ type: "image", src: "/picture/YJH (29).JPG", alt: "29" },
{ type: "image", src: "/picture/YJH (30).JPG", alt: "30" },
{ type: "image", src: "/picture/YJH (31).JPG", alt: "31" },
{ type: "image", src: "/picture/YJH (32).JPG", alt: "32" },
{ type: "image", src: "/picture/YJH (33).JPG", alt: "33" },
{ type: "image", src: "/picture/YJH (34).JPG", alt: "34" },
{ type: "image", src: "/picture/YJH (35).JPG", alt: "35" },
{ type: "image", src: "/picture/YJH (36).JPG", alt: "36" },
{ type: "image", src: "/picture/YJH (37).JPG", alt: "37" },
{ type: "image", src: "/picture/YJH (38).JPG", alt: "38" },
{ type: "image", src: "/picture/YJH (39).JPG", alt: "39" },
{ type: "image", src: "/picture/YJH (40).JPG", alt: "40" },
{ type: "image", src: "/picture/YJH (41).JPG", alt: "41" },
{ type: "image", src: "/picture/YJH (42).JPG", alt: "42" },
{ type: "image", src: "/picture/YJH (43).JPG", alt: "43" },
{ type: "image", src: "/picture/YJH (44).JPG", alt: "44" },
{ type: "image", src: "/picture/YJH (45).JPG", alt: "45" },
{ type: "image", src: "/picture/YJH (46).JPG", alt: "46" },
{ type: "image", src: "/picture/YJH (47).JPG", alt: "47" },
{ type: "image", src: "/picture/YJH (48).JPG", alt: "48" },
{ type: "image", src: "/picture/YJH (49).JPG", alt: "49" },
{ type: "image", src: "/picture/YJH (50).JPG", alt: "50" },
{ type: "image", src: "/picture/YJH (51).JPG", alt: "51" },
{ type: "image", src: "/picture/YJH (52).JPG", alt: "52" },
{ type: "image", src: "/picture/YJH (53).JPG", alt: "53" },
{ type: "image", src: "/picture/YJH (54).JPG", alt: "54" },
{ type: "image", src: "/picture/YJH (55).JPG", alt: "55" },
{ type: "image", src: "/picture/YJH (56).JPG", alt: "56" },
{ type: "image", src: "/picture/YJH (57).JPG", alt: "57" },
{ type: "image", src: "/picture/YJH (58).JPG", alt: "58" },
{ type: "image", src: "/picture/YJH (59).JPG", alt: "59" },
{ type: "image", src: "/picture/YJH (60).JPG", alt: "60" },
{ type: "image", src: "/picture/YJH (61).JPG", alt: "61" },
{ type: "image", src: "/picture/YJH (62).JPG", alt: "62" },
    ],
    },
];

export default function Home() {
  return (
    <div className="min-h-dvh w-full">
      <ScrollToTopButton />
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
                你好，欢迎来到章鱼哥神秘世界！
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-6 text-[color:var(--muted)] sm:text-base">
                这是我的记录页面：记录美好生活每一天。
                <br />
                这里只是某些预览，投喂388及以上更有更多内容待开放哦！【无码超清等待你来解锁！】不会使用USDT的板板可以联系我邮箱哦~
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
              <h2 className="text-lg font-semibold tracking-tight text-[color:var(--foreground)]">精彩集锦</h2>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                无码超清等待你来解锁！妹妹正在开发中~还有3个小女友，忙不过来了嘎QAQ
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
