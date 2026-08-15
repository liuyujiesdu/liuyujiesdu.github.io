# 刘宇杰的学术个人主页

这是一个无需安装任何依赖的纯静态网站，可直接部署到 GitHub Pages。

## 本地预览

在本文件夹打开 PowerShell，运行：

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

然后访问 <http://127.0.0.1:8000>。按 `Ctrl + C` 停止服务。

## 发布到 GitHub Pages

1. 在 GitHub 新建公开仓库。如果希望网址是 `用户名.github.io`，仓库也必须命名为 `用户名.github.io`。
2. 将本文件夹中的 `index.html`、`styles.css`、`script.js`、`assets` 文件夹上传到仓库根目录。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`，然后保存。
5. 等待几分钟后访问 GitHub 显示的网址。

## 当前页面内容

页面已经录入中英文个人简介、山东大学教育经历、成绩与排名、研究兴趣、科研立项、荣誉奖项、田径成绩、学生工作和联系邮箱。

首次访问默认显示英文，可通过页面右上角切换为中文。正文统一使用 Times New Roman；章节编号和成绩数字使用网站本地提供的 Libre Baskerville 字体，因此部署时必须完整上传 `assets/fonts` 文件夹。

后续获得更多资料后，可继续在 `index.html` 中补充：

- 科研项目的正式名称、时间、指导教师和成果链接；
- GitHub、Google Scholar、ORCID 和英文 CV；
- 课程、软件技能、英语成绩及论文或报告；
- 奖项证书、项目图片和公开代码链接。

联系按钮已经连接到 `202300810066@mail.sdu.edu.cn`。

## Google 收录

网站上线后，在 Google Search Console 添加该网址。下载 Google 提供的 HTML 验证文件，原样放到仓库根目录并重新部署；不要修改验证文件名或内容。
