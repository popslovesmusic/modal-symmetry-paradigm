const { normalize } = require("./semantic_normalizer");

/**
 * @typedef {import('../utils/box_renderer').Box} Box
 */

/**
 * @typedef {object} BoxNetwork
 * @property {Box[]} boxes - An array of boxes in the network.
 */

/**
 * @typedef {object} CoherenceResult
 * @property {boolean} coherent
 * @property {string[]} errors
 */

const CANONICAL_FIELDS = [
  "box_id",
  "box_type",
  "name",
  "description",
  "ports",
  "operators",
  "states",
  "relations",
  "invariants",
];

/**
 * Checks the global ρ meta-consistency of a box network based on Tier 00 axioms.
 *
 * @param {BoxNetwork} network - The box network to check.
 * @returns {CoherenceResult} - The result of the coherence check.
 */
function check(network) {
  const errors = [];
  if (!network || !Array.isArray(network.boxes)) {
    errors.push("Invalid network object: must have a 'boxes' array.");
    return { coherent: false, errors };
  }

  network.boxes.forEach((box, index) => {
    const boxId = box.box_id || `(unknown_id_at_index_${index})`;

    // A00_box_schema: Check for presence of all canonical fields.
    CANONICAL_FIELDS.forEach(field => {
      if (!(field in box)) {
        errors.push(`Box ${boxId}: Missing canonical field '${field}'.`);
      }
    });

    // A02_single_D_operator: Check for a single root deviation operator 'D'.
    // This is a heuristic based on the name. A more robust check would require
    // a clear definition of operator types.
    if (box.operators && Array.isArray(box.operators)) {
      const deviationOps = box.operators.filter(op => {
        // Assuming the operator name/id might be 'D' or related to deviation.
        return op.id === 'D' || (op.name && op.name.includes('deviation'));
      });

      if (deviationOps.length > 1) {
        errors.push(`Box ${boxId}: Violates A02 - Found ${deviationOps.length} deviation operators. Only one 'D' operator is allowed.`);
      }
    }
    
    // A03_invariant_respect: Placeholder for invariant check.
    // This would require an execution engine to evaluate invariants against the box's state.
    // For now, we can check if the 'invariants' field is an array.
    if (box.invariants && !Array.isArray(box.invariants)) {
        errors.push(`Box ${boxId}: 'invariants' field must be an array.`);
    }

  });

  return {
    coherent: errors.length === 0,
    errors,
  };
}

module.exports = {
  check,
};
