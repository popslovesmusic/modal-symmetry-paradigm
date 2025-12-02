/**
 * @typedef {import('../utils/box_renderer').Box} Box
 */

const CANONICAL_FIELDS = [
  "box_id",
  "box_type",
  "name",
  "description",
];

const OPTIONAL_ARRAY_FIELDS = [
  "ports",
  "operators",
  "states",
  "relations",
  "invariants",
];

/**
 * Applies Ω normalization invariants to a box based on Tier 00 rewrite rules.
 * This ensures every Box conforms to the canonical schema.
 *
 * @param {Box} box - The box to normalize.
 * @returns {Box} - The normalized box.
 */
function normalize(box) {
  const normalizedBox = { ...box };

  // R00/R01: Ensure canonical fields and optional sections exist.
  // Add required non-array fields if they're missing.
  for (const field of CANONICAL_FIELDS) {
    if (!(field in normalizedBox)) {
      normalizedBox[field] = null; // Or some default value
    }
  }

  // Add required array-based sections if they're missing.
  for (const field of OPTIONAL_ARRAY_FIELDS) {
    if (!Array.isArray(normalizedBox[field])) {
      normalizedBox[field] = [];
    }
  }

  // R02_D_unification: Not implemented.
  // This rule requires a clear definition of "deviation operators" and their structure
  // within the `operators` array, which is not yet available.
  // A future implementation would identify and merge these operators.

  // The fields are now present, but to be fully compliant, we should sort them
  // to a canonical order for easier comparison and processing.
  const allFields = [...CANONICAL_FIELDS, ...OPTIONAL_ARRAY_FIELDS];
  const finalBox = {};
  allFields.forEach(field => {
      if (field in normalizedBox) {
          finalBox[field] = normalizedBox[field];
      }
  });

  // Add any other fields that were on the box but not in the canonical list
  Object.keys(normalizedBox).forEach(key => {
      if (!allFields.includes(key)) {
          finalBox[key] = normalizedBox[key];
      }
  });


  return finalBox;
}

module.exports = {
  normalize,
};
