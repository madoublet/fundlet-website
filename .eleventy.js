const site = require("./src/_data/site.js");

// Strip tags / collapse whitespace so markdown bodies can be embedded in JSON-LD.
function toPlainText(html, limit) {
  if (!html) return "";
  let text = String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
  if (limit && text.length > limit) {
    text = text.slice(0, limit).replace(/\s+\S*$/, "") + "…";
  }
  return text;
}

function absolute(url) {
  if (!url) return site.url;
  if (/^https?:\/\//i.test(url)) return url;
  return site.url.replace(/\/$/, "") + (url.startsWith("/") ? url : "/" + url);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/resources");
  eleventyConfig.addPassthroughCopy("src/screenshots");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  eleventyConfig.addFilter("absoluteUrl", absolute);
  eleventyConfig.addFilter("plainText", toPlainText);

  // Shallow object merge, for assembling JSON-LD entities in templates.
  eleventyConfig.addFilter("merge", (base, extra) =>
    Object.assign({}, base, extra)
  );

  // Serialize a JS value as JSON-LD, escaping the sequences that could break
  // out of a <script> element.
  eleventyConfig.addFilter("jsonld", (value) =>
    JSON.stringify(value, null, 2)
      .replace(/</g, "\\u003c")
      .replace(/>/g, "\\u003e")
      .replace(/&/g, "\\u0026")
  );

  // Build FAQPage entities from the rendered <details class="faq-item"> blocks
  // used in src/faq.md.
  eleventyConfig.addFilter("faqEntities", (content) => {
    const entities = [];
    const block = /<details[^>]*class="[^"]*faq-item[^"]*"[^>]*>([\s\S]*?)<\/details>/gi;
    let match;
    while ((match = block.exec(content)) !== null) {
      const inner = match[1];
      const summary = inner.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i);
      if (!summary) continue;
      const question = toPlainText(summary[1]);
      const answer = toPlainText(inner.replace(summary[0], ""), 1200);
      if (question && answer) {
        entities.push({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer }
        });
      }
    }
    return entities;
  });

  // Build HowTo steps from rendered "## Step N: ..." headings on tutorial pages.
  // Returns [] when a page is not step-structured, so the caller can fall back
  // to Article.
  eleventyConfig.addFilter("howToSteps", (content) => {
    const steps = [];
    const heading = /<h2[^>]*>\s*Step\s*\d+\s*[:.—-]?\s*([\s\S]*?)<\/h2>/gi;
    const matches = [...String(content).matchAll(heading)];
    matches.forEach((match, i) => {
      const name = toPlainText(match[1]);
      const start = match.index + match[0].length;
      const end = i + 1 < matches.length ? matches[i + 1].index : content.length;
      const text = toPlainText(content.slice(start, end), 600);
      if (name) {
        steps.push({
          "@type": "HowToStep",
          position: i + 1,
          name,
          text: text || name
        });
      }
    });
    return steps;
  });

  // First YouTube embed on a page, for VideoObject markup.
  eleventyConfig.addFilter("youtubeId", (content) => {
    const match = String(content).match(
      /(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})/
    );
    return match ? match[1] : null;
  });

  eleventyConfig.addFilter("isoDate", (date) =>
    date instanceof Date ? date.toISOString() : new Date(date).toISOString()
  );

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
