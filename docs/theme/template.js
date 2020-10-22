const tmpl = module.exports = {
// page layout ...
page(data) {
  return `<!doctype html>
<html${data.lang ? ` lang="${data.lang}"` : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1,user-scalable=no">
<meta name="description" content="${data.description || (data.title + ' - microjam page')}">
${data.authors ? `<meta name="authoraa" content="${data.authors.join()}">` : ''}
${data.date ? `<meta name="date" content="${new Date(data.date).toString()}">` : ''}
${data.tags ? `<meta name="keywords" content="${data.tags.join()}">` : ''}
<title>${data.title}</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@9.18.1/styles/tomorrow-night-bright.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/markdown-it-texmath/css/texmath.css">
<link rel="stylesheet" href="${data.base}/theme/style.css">
</head>
<body id="top">
<main>
  ${data.uses && data.uses.find((use) => use.uri === 'navigation.md').content || 'no navigation data !'}
<article>

<header>
<h1>${data.title}</h1>
${data.subtitle ? `<h3>${data.subtitle}</h3>` : ''}
${data.authors ? `<h4>${data.authors.join(', ')}</h4>` : ''}
${data.adresses ? `<h5>${data.adresses.join('<br>')}</h5>` : ''}
${data.date ? `<h5>${data.date}</h5>` : ''}
${data.tags ? `<h5><b>Keywords:</b> ${data.tags.join(', ')}</h5>` : ''}
</header>
${data.content}
</article>
</main>
<script src="${data.base}/js/g2.html.js"></script>
<script src="${data.base}/js/mec2.html.js"></script>
</body>
</html>` 
},

navigation(data) {
  return `<!doctype html>
  <html${data.lang ? ` lang="${data.lang}"` : ''}>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1,user-scalable=no">
  <meta name="description" content="${data.description || (data.title + ' - microjam page')}">
  ${data.authors ? `<meta name="authoraa" content="${data.authors.join()}">` : ''}
  ${data.date ? `<meta name="date" content="${new Date(data.date).toString()}">` : ''}
  ${data.tags ? `<meta name="keywords" content="${data.tags.join()}">` : ''}
  ${data.navigation || ''}
  <title>${data.title}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@9.18.1/styles/tomorrow-night-bright.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/markdown-it-texmath/css/texmath.css">
  <link rel="stylesheet" href="${data.base}/theme/style.css">
  </head>
  <body id="nav">
  <main>
  <article>
  ${data.content}
  </article>
  </main>
  </body>
  </html>` 
}

}
