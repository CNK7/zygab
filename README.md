# 章鱼记录页

一个基于 Next.js 的个人记录页面模板，支持：

- 每天一条（或多条）记录
- 本地图片/视频展示
- 图片点击放大（再次点击关闭，`Esc` 也可关闭）
- 毛玻璃风格
- 暗黑模式（明亮 / 暗黑）
- GitHub + Vercel 一键部署

---

## 1. 本地运行

### 1.1 安装依赖

```bash
npm install
```

### 1.2 启动开发环境

```bash
npm run dev
```

默认访问：

- http://localhost:3000

如果 3000 被占用：

```bash
npm run dev -- --port 3001
```

---

## 2. 你最常改的文件

- 页面主内容：`src/app/page.tsx`
- 图片/视频网格与大图预览：`src/app/components/MediaGrid.tsx`
- 主题切换：`src/app/components/ThemeToggle.tsx`
- 全局样式：`src/app/globals.css`

---

## 3. 怎么写文章 / 改文章 / 删文章

所有记录都在 `src/app/page.tsx` 的 `records` 数组里。

### 3.1 数据结构

```ts
type RecordEntry = {
  date: string;         // 日期，例如 "2026-04-18"
  title: string;        // 标题
  content: string;      // 正文
  tags?: string[];      // 标签，可选
  media?: MediaItem[];  // 媒体，可选
};
```

媒体结构：

```ts
type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;     // 图片描述，可选
  poster?: string;  // 视频封面，可选
};
```

### 3.2 新增文章（新增一天）

在 `records` 数组最前面插入一条：

```ts
{
  date: "2026-04-19",
  title: "今天做了什么",
  content: "这里写正文...",
  tags: ["daily", "idea"],
  media: [
    { type: "image", src: "/media/2026-04-19/1.jpg", alt: "今天的照片" },
    { type: "video", src: "/media/2026-04-19/clip.mp4", poster: "/media/2026-04-19/poster.jpg" }
  ]
}
```

### 3.3 修改文章

找到对应记录对象，直接改：

- `title`
- `content`
- `tags`
- `media`

保存后浏览器会自动热更新。

### 3.4 删除文章

删掉对应记录对象即可。

---

## 4. 怎么添加图片 / 视频

### 4.1 把素材放到 `public`

建议按日期建目录：

- `public/media/2026-04-19/1.jpg`
- `public/media/2026-04-19/2.jpg`
- `public/media/2026-04-19/clip.mp4`
- `public/media/2026-04-19/poster.jpg`

### 4.2 在文章里引用

路径要从 `/media/...` 开始：

- 图片：`/media/2026-04-19/1.jpg`
- 视频：`/media/2026-04-19/clip.mp4`
- 封面：`/media/2026-04-19/poster.jpg`

### 4.3 图片放大说明

- 点缩略图 -> 全屏大图
- 再点大图任意位置 -> 关闭
- 键盘 `Esc` -> 关闭

---

## 5. 顶部内容怎么改

在 `src/app/page.tsx`：

- 自我介绍：修改 `h1` 和介绍段落
- 联系方式：修改 `contacts` 数组

参考格式：

- WhatsApp：`https://wa.me/国家码+手机号`（不要 `+` 和空格）
- Telegram：`https://t.me/你的用户名`
- 邮箱：`mailto:you@example.com`
- Line：你的 Line 公开链接

---

## 5.1 怎么修改网址 Logo（浏览器标签图标）

### A. 修改浏览器标签图标（favicon）

当前项目使用的是：

- `src/app/favicon.ico`

你只需要把你自己的图标文件替换这个文件，文件名保持 `favicon.ico` 即可。

建议：

- 尺寸至少 `32x32`，推荐 `64x64` 或 `128x128`
- 图形尽量简洁，避免太细节（小尺寸会糊）

如果你手里是 `png/svg`，先转成 `ico` 再替换。

### B. 修改网页标题（标签页文字）

在 `src/app/layout.tsx` 的 `metadata` 里改：

```ts
export const metadata: Metadata = {
  title: "章鱼记录页",
  description: "用图片与视频记录每一天",
};
```

你可以把 `title` 改成你自己的站点名。

### C. 修改页面左上角的小方块“章”字 Logo（页面内）

在 `src/app/page.tsx` 顶部区域：

- 默认是一个文字 `章`
- 你可以直接改字，或者改成图片图标

例如改成图片（放在 `public/logo.png`）：

```tsx
<div className="grid size-10 place-items-center rounded-2xl border border-[color:var(--panel-border)] bg-[color:var(--panel-strong)]">
  <img src="/logo.png" alt="logo" className="h-6 w-6 object-contain" />
</div>
```

改完后强刷浏览器缓存：

- Windows：`Ctrl + F5`

---

## 6. 部署教程（GitHub + Vercel）

### 6.1 上传到 GitHub

```bash
git add .
git commit -m "init octopus log page"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

> 如果你已经设置过 `origin`，先执行：
>
> ```bash
> git remote set-url origin https://github.com/<你的用户名>/<仓库名>.git
> ```

### 6.2 在 Vercel 部署

1. 打开 https://vercel.com/new
2. 选择并导入你的 GitHub 仓库
3. Framework 识别为 Next.js（一般自动识别）
4. 点击 Deploy

部署后会得到一个可公网访问的域名。

---

## 7. 常见问题（疑难杂症）

### 7.1 预览打不开 / 端口被占用

报错 `EADDRINUSE` 说明端口被占用，换端口启动：

```bash
npm run dev -- --port 3001
```

### 7.2 明明启动了却还是打不开（代理场景）

如果你开了代理（如 Clash、v2rayN），请把这些地址设为直连：

- `localhost`
- `127.0.0.1`
- `::1`

否则本地地址可能被错误走代理，导致打不开预览。

### 7.3 图片不显示

检查三件事：

- 文件是否真的在 `public` 目录内
- 路径是否以 `/` 开头（例如 `/media/a.jpg`）
- 文件名大小写是否和代码完全一致

### 7.4 视频无法播放

优先使用 `mp4 (H.264 + AAC)`，浏览器兼容性最好。

如果你本地能播放，但部署到 Vercel 后视频全黑/0:00，常见原因是仓库使用了 Git LFS，但 Vercel 项目没有开启 Git LFS 支持：

1. 进入 Vercel 项目 Settings
2. 打开 Git
3. 找到 Git LFS，开启支持
4. 重新部署一次

开启后 Vercel 才会拉取 LFS 真实视频文件，否则部署出来的 mp4 可能是 LFS 指针文件，浏览器无法播放。

### 7.5 样式改了没变化

先强刷浏览器缓存：

- Windows：`Ctrl + F5`

### 7.6 暗黑模式文本闪一下

主题切换已做本地记忆和水合处理；如果偶发闪烁，先强刷一次或清缓存后重试。

---

## 8. 发布前检查

```bash
npm run lint
npm run build
```

两个都通过再推送和部署，最稳。
