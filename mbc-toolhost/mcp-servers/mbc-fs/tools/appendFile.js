const fs = require("fs");
const path = require("path");

module.exports = async function appendFile({ file_path, text, BASE_DIR }) {
  const full = path.resolve(BASE_DIR, file_path);
  await fs.promises.mkdir(path.dirname(full), { recursive: true });
  await fs.promises.appendFile(full, text, "utf8");
  return { success: true };
};
