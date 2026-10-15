/* justPDF 官网 i18n：默认英文，可切换中文；选择记忆在 localStorage */
(function () {
  'use strict';

  /* ── GitHub 链接统一配置：改这里即可全站生效 ──────────────── */
  var GH_LINKS = {
    base: 'https://github.com/OneStackCoder', // owner 前缀
    repo: 'justPDF_website'                   // 仓库名
  };
  /* 页面与 i18n 文案中硬编码的原始前缀，仅用于识别需要重写的链接 */
  var GH_LEGACY_PREFIX = 'https://github.com/OneStackCoder/justPDF_website';

  function rewriteGithubLinks() {
    var anchors = document.querySelectorAll('a[href^="' + GH_LEGACY_PREFIX + '"]');
    for (var i = 0; i < anchors.length; i++) {
      var suffix = anchors[i].getAttribute('href').slice(GH_LEGACY_PREFIX.length);
      anchors[i].setAttribute('href', GH_LINKS.base + '/' + GH_LINKS.repo + suffix);
    }
  }

  var I18N = {
    en: {
      _title: 'justPDF — The fully offline PDF toolbox',
      _desc: 'One app with 16 PDF tools: merge, split, convert, edit, protect and repair. No internet, no uploads, no tracking — your files never leave your computer.',
      'nav.features': 'Features',
      'nav.tools': 'All Tools',
      'nav.privacy': 'Privacy',
      'nav.download': 'Download',
      'hero.badge': 'Fully offline · Privacy first · Desktop app',
      'hero.h1a': 'One app, every',
      'hero.h1b': 'PDF tool',
      'hero.h1c': ' you need',
      'hero.sub': 'Merge, split, convert, edit, protect and repair — <strong>16 tools</strong> ready out of the box. No internet, no uploads, no tracking. <strong>Your files never leave your computer.</strong>',
      'cta.download': 'Download latest',
      'cta.platform': 'Choose platform',
      'hero.note': 'Available for macOS, Linux &amp; Windows · Get it on <a href="https://github.com/OneStackCoder/justPDF_website/releases/latest" target="_blank" rel="noopener">GitHub Releases</a>',
      'mock.search': 'Search tools…',
      'mock.drop1': 'Drop files here',
      'mock.or': 'or',
      'mock.select': 'Select files',
      'feat.title': 'Why justPDF?',
      'feat.sub': 'Not another online tool that uploads your files — a real toolbox installed on your computer.',
      'f1.t': 'Fully offline',
      'f1.d': 'Works without internet. Everything runs on your machine — speed depends on your CPU, not your bandwidth.',
      'f2.t': 'Private by design',
      'f2.d': 'No uploads, no accounts, no tracking. Contracts, IDs and financial reports stay safe on your disk.',
      'f3.t': '16 tools in 1',
      'f3.d': 'From merging and splitting to format conversion, editing, encryption and repair — the entire PDF workflow in one app.',
      'f4.t': 'Fast & simple',
      'f4.d': 'Drag and drop, batch processing, live preview — what you see is what you get. Most tasks take seconds.',
      'tools.title': '16 tools for the entire PDF workflow',
      'tools.sub': 'Organize, optimize, secure, convert — every PDF operation you need.',
      'tool.merge': 'Merge PDF', 'tool.split': 'Split PDF', 'tool.organize': 'Organize pages',
      'tool.compress': 'Compress PDF', 'tool.repair': 'Repair PDF', 'tool.protect': 'Protect PDF',
      'tool.unlock': 'Unlock PDF', 'tool.rotate': 'Rotate PDF', 'tool.watermark': 'Watermark PDF',
      'tool.edit': 'Edit PDF', 'tool.pdf2word': 'PDF to Word', 'tool.word2pdf': 'Word to PDF',
      'tool.pdf2ppt': 'PDF to PPT', 'tool.pdf2excel': 'PDF to Excel', 'tool.pdf2jpg': 'PDF to JPG',
      'tool.jpg2pdf': 'JPG to PDF',
      'desc.merge': 'Combine files into one', 'desc.split': 'Extract page ranges',
      'desc.organize': 'Reorder · rotate · delete', 'desc.compress': 'Shrink file size',
      'desc.repair': 'Rescue damaged files', 'desc.protect': 'Passwords & permissions',
      'desc.unlock': 'Remove restrictions', 'desc.rotate': 'Single or batch rotation',
      'desc.watermark': 'Tiled or centered text', 'desc.edit': 'Text, images & shapes',
      'desc.pdf2word': 'Editable DOCX', 'desc.word2pdf': 'High-fidelity conversion',
      'desc.pdf2ppt': 'One slide per page', 'desc.pdf2excel': 'Extract table data',
      'desc.pdf2jpg': 'High-res image export', 'desc.jpg2pdf': 'Images into PDF',
      'priv.title': 'Your files never leave your computer',
      'priv.sub': 'justPDF has no cloud, no servers and no upload channel.<br>In the entire pipeline, there is no one else\u2019s computer.',
      'priv.n1': 'Your files',
      'priv.n2': 'justPDF · Local processing',
      'priv.n3': 'Output files',
      'priv.dead': '☁ Cloud upload',
      'chip.1': 'No uploads', 'chip.2': 'No accounts', 'chip.3': 'No tracking', 'chip.4': 'No ads',
      'dl.title': 'Download justPDF',
      'dl.sub': 'Single-file portable builds — download and run, no installation required.',
      'dl.macos.m': 'Apple Silicon<br>arm64 · zip',
      'dl.macos.btn': 'Download for macOS',
      'dl.linux.m': 'x64<br>tar.gz · single file',
      'dl.linux.btn': 'Download for Linux',
      'dl.win.m': 'x64<br>zip · single file',
      'dl.win.btn': 'Download for Windows',
      'dl.note': 'For all versions and release notes, visit <a href="https://github.com/OneStackCoder/justPDF_website/releases" target="_blank" rel="noopener">GitHub Releases</a> · Source code hosted on <a href="https://github.com/OneStackCoder/justPDF_website" target="_blank" rel="noopener">GitHub</a>',
      'foot.tag': ' — The fully offline PDF toolbox',
      'foot.tools': 'All Tools'
    },

    zh: {
      _title: 'justPDF — 完全离线的 PDF 工具箱',
      _desc: '一个应用装下 16 种 PDF 工具：合并、拆分、转换、编辑、加密、修复。不联网、不上传、无追踪，文件永远留在你的电脑里。',
      'nav.features': '特性',
      'nav.tools': '全部工具',
      'nav.privacy': '隐私',
      'nav.download': '下载',
      'hero.badge': '完全离线 · 隐私优先 · 桌面应用',
      'hero.h1a': '一个应用，装下所有',
      'hero.h1b': 'PDF 工具',
      'hero.h1c': '',
      'hero.sub': '合并、拆分、转换、编辑、加密、修复 —— <strong>16 种工具</strong>开箱即用。不联网、不上传、无追踪，<strong>文件永远留在你的电脑里</strong>。',
      'cta.download': '下载最新版',
      'cta.platform': '选择平台',
      'hero.note': '支持 macOS、Linux 与 Windows · 前往 <a href="https://github.com/OneStackCoder/justPDF_website/releases/latest" target="_blank" rel="noopener">GitHub Releases</a> 获取',
      'mock.search': '搜索工具…',
      'mock.drop1': '将文件拖放到此处',
      'mock.or': '或',
      'mock.select': '选择文件',
      'feat.title': '为什么选择 justPDF',
      'feat.sub': '不是又一个上传文件的在线工具，而是真正装在你电脑里的工具箱。',
      'f1.t': '完全离线',
      'f1.d': '无需联网，断网照样用。所有处理都在本机完成，速度取决于你的 CPU，而不是网速。',
      'f2.t': '隐私安全',
      'f2.d': '没有上传，没有账户，没有追踪。合同、证件、财报等敏感文档可以放心处理。',
      'f3.t': '16 合 1',
      'f3.d': '从合并拆分到格式转换，从编辑加密到修复抢救，一个应用覆盖 PDF 处理全流程。',
      'f4.t': '简单高效',
      'f4.d': '拖放导入、批量处理、实时预览，所见即所得。大部分任务几秒钟就能完成。',
      'tools.title': '16 种工具，覆盖 PDF 全流程',
      'tools.sub': '整理、优化、安全、转换 —— 你需要的 PDF 操作，这里都有。',
      'tool.merge': '合并 PDF', 'tool.split': '拆分 PDF', 'tool.organize': '页面排序',
      'tool.compress': '压缩 PDF', 'tool.repair': '修复 PDF', 'tool.protect': '保护 PDF',
      'tool.unlock': '解锁 PDF', 'tool.rotate': '旋转 PDF', 'tool.watermark': 'PDF 加水印',
      'tool.edit': '编辑 PDF', 'tool.pdf2word': 'PDF 转 Word', 'tool.word2pdf': 'Word 转 PDF',
      'tool.pdf2ppt': 'PDF 转 PPT', 'tool.pdf2excel': 'PDF 转 Excel', 'tool.pdf2jpg': 'PDF 转 JPG',
      'tool.jpg2pdf': 'JPG 转 PDF',
      'desc.merge': '多个文件合成一份', 'desc.split': '按页码范围拆分',
      'desc.organize': '拖动排序 · 旋转 · 删除', 'desc.compress': '减小文件体积',
      'desc.repair': '抢救损坏的文档', 'desc.protect': '密码加密 + 权限控制',
      'desc.unlock': '去除密码与限制', 'desc.rotate': '单页或批量旋转',
      'desc.watermark': '平铺或居中文字水印', 'desc.edit': '添加文字 / 图片 / 图形',
      'desc.pdf2word': '可编辑的 docx', 'desc.word2pdf': '高保真排版转换',
      'desc.pdf2ppt': '每页一张幻灯片', 'desc.pdf2excel': '表格数据提取',
      'desc.pdf2jpg': '高清图片导出', 'desc.jpg2pdf': '图片合成 PDF',
      'priv.title': '你的文件，永不离开你的电脑',
      'priv.sub': 'justPDF 没有云端、没有服务器、没有上传通道。<br>整个处理链条里，根本不存在"别人的电脑"。',
      'priv.n1': '你的文件',
      'priv.n2': 'justPDF · 本机处理',
      'priv.n3': '输出文件',
      'priv.dead': '☁ 云端上传',
      'chip.1': '无上传', 'chip.2': '无账户', 'chip.3': '无追踪', 'chip.4': '无广告',
      'dl.title': '下载 justPDF',
      'dl.sub': '单文件绿色版，下载即用，无需安装。',
      'dl.macos.m': 'Apple Silicon 芯片<br>arm64 · zip',
      'dl.macos.btn': '下载 macOS 版',
      'dl.linux.m': 'x64<br>tar.gz · 单文件',
      'dl.linux.btn': '下载 Linux 版',
      'dl.win.m': 'x64<br>zip · 单文件',
      'dl.win.btn': '下载 Windows 版',
      'dl.note': '全部历史版本与更新日志请前往 <a href="https://github.com/OneStackCoder/justPDF_website/releases" target="_blank" rel="noopener">GitHub Releases</a> · 源代码托管于 <a href="https://github.com/OneStackCoder/justPDF_website" target="_blank" rel="noopener">GitHub</a>',
      'foot.tag': ' — 完全离线的 PDF 工具箱',
      'foot.tools': '全部工具'
    }
  };

  function apply(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = dict._title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict._desc);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var v = dict[nodes[i].getAttribute('data-i18n')];
      if (v != null) nodes[i].textContent = v;
    }
    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlNodes.length; j++) {
      var hv = dict[htmlNodes[j].getAttribute('data-i18n-html')];
      if (hv != null) htmlNodes[j].innerHTML = hv;
    }

    var btns = document.querySelectorAll('.lang-btn');
    for (var k = 0; k < btns.length; k++) {
      btns[k].classList.toggle('active', btns[k].getAttribute('data-lang') === lang);
    }
    try { localStorage.setItem('justpdf-lang', lang); } catch (e) { /* 隐私模式等场景忽略 */ }

    rewriteGithubLinks(); // hero.note / dl.note 等 innerHTML 会重新注入链接，需再次统一
  }

  var buttons = document.querySelectorAll('.lang-btn');
  for (var n = 0; n < buttons.length; n++) {
    buttons[n].addEventListener('click', function () {
      apply(this.getAttribute('data-lang'));
    });
  }

  // 默认英文；若用户上次选择过中文则恢复
  var saved = 'en';
  try { saved = localStorage.getItem('justpdf-lang') || 'en'; } catch (e) { /* 忽略 */ }
  if (saved === 'zh') apply('zh');

  rewriteGithubLinks(); // 初始静态 HTML 中的链接也统一走配置
})();
