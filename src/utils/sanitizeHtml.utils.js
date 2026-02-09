const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");

const turndownService = new TurndownService();

function sanitizeData(incomingData) {
  // Markdown to HTML
  const html = marked.parse(incomingData);

  // Sanitize Html
  const clean = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat["img"],
  });

  //   Change to Markdown
  const markdown = turndownService.turndown(clean);

  return markdown;
}

module.exports = sanitizeData;
