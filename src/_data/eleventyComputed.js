const { execFileSync } = require("child_process");

// Last git commit date per source file, used for <lastmod> and schema.org
// dateModified. Falls back to the page date when a file is untracked.
const cache = new Map();

function gitLastModified(inputPath) {
  if (!inputPath) return null;
  if (cache.has(inputPath)) return cache.get(inputPath);

  let result = null;
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", inputPath],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
    ).trim();
    if (out) result = new Date(out);
  } catch (e) {
    // Not a git repo, or git unavailable — fall through to null.
  }

  cache.set(inputPath, result);
  return result;
}

module.exports = {
  dateModified: (data) =>
    data.dateModified || gitLastModified(data.page.inputPath) || data.page.date
};
