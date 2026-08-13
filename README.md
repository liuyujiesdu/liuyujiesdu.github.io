# 刘宇杰的学术个人主页

这是一个无需安装任何依赖的纯静态网站，可直接部署到 GitHub Pages。

## 本地预览

在本文件夹打开 PowerShell，运行：

```powershell
py -m http.server 8000
```

然后访问 <http://localhost:8000>。按 `Ctrl + C` 停止服务。

## 发布到 GitHub Pages

1. 在 GitHub 新建公开仓库。如果希望网址是 `用户名.github.io`，仓库也必须命名为 `用户名.github.io`。
2. 将本文件夹中的 `index.html`、`styles.css`、`script.js`、`assets` 文件夹上传到仓库根目录。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`，然后保存。
5. 等待几分钟后访问 GitHub 显示的网址。

## 发布前要替换的内容

打开 `index.html`，搜索“待补充”“待添加”“待上传”或英文 `to be added`，即可快速找到所有占位项。建议优先补充：

- 学校、专业、入学时间、GPA 与排名；
- 具体研究方向和个人简介；
- 邮箱、GitHub 链接与英文 CV；
- 科研、竞赛、课程项目及其代码或报告链接；
- 已经掌握的软件、研究方法和英语成绩。

如需启用邮箱按钮，将 `index.html` 中的 `span.contact-button` 改为：

```html
<a class="contact-button" href="mailto:你的邮箱地址">发送邮件</a>
```

## Google 收录

网站上线后，在 Google Search Console 添加该网址。下载 Google 提供的 HTML 验证文件，原样放到仓库根目录并重新部署；不要修改验证文件名或内容。
