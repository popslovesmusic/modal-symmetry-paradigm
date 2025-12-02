const fs = require("fs");
const path = require("path");

module.exports = async function readFile({ file_path, BASE_DIR }) {
  const full = path.resolve(BASE_DIR, file_path);
  const data = await fs.promises.readFile(full, "utf8");
  return { content: data };
};
