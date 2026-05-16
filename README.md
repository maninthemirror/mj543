# Michael Jackson小事考察委員會

Astro + Markdown 的 GitHub Pages 長文網站。

## 上線網址

- Repository：`mj543`（放在 `maninthemirror` 帳號下）
- 站點網址：`https://maninthemirror.github.io/mj543/`

## 本機開發

```bash
npm install
npm run dev
```


## 新增文章

1. 在 `src/content/posts/` 新增 `*.md`。
2. frontmatter 必填：

```md
---
title: "文章標題"
description: "摘要"
pubDate: 2026-05-16
updatedDate: 2026-05-16
cover: "/images/xxx.jpg"
coverAlt: "封面說明"
tags: ["tag1", "tag2"]
draft: false
ogImage: "/images/xxx.jpg"
---
```

3. 檔名會對應網址：
- `src/content/posts/botdf30.md` -> `/botdf30/`

## Notion 轉換建議

- 標題、段落、blockquote、清單：直接貼 Markdown。
- 圖片盡量放本地：`public/images/...`。
- YouTube / Spotify 可用 iframe（已有樣式支援 `.embed.youtube`、`.embed.spotify`）。

## 外部連結行為

- 外部連結會自動加上：
- `target="_blank"`
- `rel="noopener noreferrer"`

## 文字顏色

Markdown 原生不支援文字顏色，可用行內 HTML：

```html
<span class="text-red">這段是紅色</span>
```

## 部署

- push 到 `main` 會觸發 `.github/workflows/deploy.yml` 自動部署。
- GitHub repo 設定中，Pages Source 選 `GitHub Actions`。
