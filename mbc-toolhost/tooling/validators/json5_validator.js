const JSON5 = require("json5");
const fs = require("fs");

/**
 * @typedef {object} ValidationResult
 * @property {boolean} valid
 * @property {any} parsed
 * @property {Error[]} errors
 */

/**
 * Parses and validates a JSON5 string.
 *
 * @param {string} input - The raw JSON5 text to validate.
 * @returns {ValidationResult} - The result of the validation.
 */
function validateString(input) {
  try {
    const parsed = JSON5.parse(input);
    return {
      valid: true,
      parsed: parsed,
      errors: [],
    };
  } catch (e) {
    return {
      valid: false,
      parsed: null,
      errors: [e],
    };
  }
}

/**
 * Reads and validates a JSON5 file.
 *
 * @param {string} path - The path to the JSON5 file.
 * @returns {ValidationResult} - The result of the validation.
 */
function validateFile(path) {
  try {
    const fileContent = fs.readFileSync(path, "utf8");
    return validateString(fileContent);
  } catch (e) {
    return {
      valid: false,
      parsed: null,
      errors: [e],
    };
  }
}

module.exports = {
  validateString,
  validateFile,
};
