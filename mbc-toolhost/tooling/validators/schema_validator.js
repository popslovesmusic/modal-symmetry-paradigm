/**
 * @typedef {object} SchemaResult
 * @property {boolean} valid
 * @property {string[]} missingFields
 * @property {string[]} typeErrors
 */

/**
 * Validates a JSON5 structure against a schema object.
 *
 * @param {object} obj - The object to validate.
 * @param {object} schema - The schema to validate against.
 * @returns {SchemaResult} - The result of the schema validation.
 */
function validateAgainstSchema(obj, schema) {
  const missingFields = [];
  const typeErrors = [];

  for (const key in schema) {
    if (!obj.hasOwnProperty(key)) {
      missingFields.push(key);
    } else {
      const expectedType = schema[key];
      const actualType = typeof obj[key];

      if (typeof expectedType === "object" && expectedType !== null) {
        if (Array.isArray(expectedType)) {
          if (!Array.isArray(obj[key])) {
            typeErrors.push(`${key} should be an array`);
          } else if (obj[key].length > 0) {
            const arrayResult = validateAgainstSchema(
              obj[key][0],
              expectedType[0],
            );
            if (!arrayResult.valid) {
              typeErrors.push(
                ...arrayResult.typeErrors.map((e) => `${key}[0].${e}`),
              );
              missingFields.push(
                ...arrayResult.missingFields.map((e) => `${key}[0].${e}`),
              );
            }
          }
        } else {
          const nestedResult = validateAgainstSchema(obj[key], expectedType);
          if (!nestedResult.valid) {
            typeErrors.push(
              ...nestedResult.typeErrors.map((e) => `${key}.${e}`),
            );
            missingFields.push(
              ...nestedResult.missingFields.map((e) => `${key}.${e}`),
            );
          }
        }
      } else if (actualType !== expectedType) {
        typeErrors.push(
          `${key} should be of type ${expectedType} but was ${actualType}`,
        );
      }
    }
  }

  return {
    valid: missingFields.length === 0 && typeErrors.length === 0,
    missingFields: missingFields,
    typeErrors: typeErrors,
  };
}

module.exports = {
  validateAgainstSchema,
};
