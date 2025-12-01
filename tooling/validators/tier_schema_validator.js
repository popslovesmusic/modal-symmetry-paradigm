const { validateAgainstSchema } = require("./schema_validator");

/**
 * @typedef {import('./schema_validator').SchemaResult} SchemaResult
 */

/**
 * @typedef {SchemaResult} TierSchemaResult
 */

/**
 * Validates a tier object against a tier schema.
 *
 * @param {object} tierObj - The tier object to validate.
 * @param {object} tierSchema - The schema for the tier.
 * @param {string} tierFileName - The filename of the tier.
 * @returns {TierSchemaResult} - The result of the tier schema validation.
 */
function validateTier(tierObj, tierSchema, tierFileName) {
  const baseValidation = validateAgainstSchema(tierObj, tierSchema);

  // Additional tier-specific checks can be added here.
  // For example, check if the tier name in the object matches the filename.
  if (tierObj.name && tierFileName) {
    const expectedName = tierFileName
      .replace(/_metadata.json5$/, "")
      .replace(/_/g, "-");
    if (tierObj.name !== expectedName) {
      baseValidation.valid = false;
      baseValidation.typeErrors.push(
        `Tier name '${tierObj.name}' does not match filename convention '${expectedName}'`,
      );
    }
  }

  return baseValidation;
}

module.exports = {
  validateTier,
};
