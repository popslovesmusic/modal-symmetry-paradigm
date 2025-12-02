const fs = require("fs");
const path = require("path");

module.exports = async function mkdirIfMissing({ path: dirPath, BASE_DIR }) {
  const full = path.resolve(BASE_DIR, dirPath);
  await fs.promises.mkdir(full, { recursive: true });
  return { success: true };
};
