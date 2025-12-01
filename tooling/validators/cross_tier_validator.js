/**
 * @typedef {object} CrossTierValidationResult
 * @property {boolean} valid
 * @property {string[]} errors
 */

/**
 * Compares operator signatures across two tiers.
 *
 * @param {object} tier1 - The first tier object.
 * @param {object} tier2 - The second tier object.
 * @returns {CrossTierValidationResult} - The result of the operator check.
 */
function checkOperators(tier1, tier2) {
  const errors = [];
  const tier1Operators = tier1.operator_pack || {};
  const tier2Operators = tier2.operator_pack || {};

  for (const opName in tier1Operators) {
    if (tier2Operators.hasOwnProperty(opName)) {
      const op1 = tier1Operators[opName];
      const op2 = tier2Operators[opName];
      if (JSON.stringify(op1) !== JSON.stringify(op2)) {
        // This is a simplistic check. A more robust check would
        // compare signatures, arity, etc. in a more structured way.
        errors.push(
          `Operator '${opName}' has a different definition in tier 2.`,
        );
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors: errors,
  };
}

/**
 * Verifies that invariants (axioms) from a lower tier are maintained in a higher tier.
 *
 * @param {object} lowerTier - The lower tier object.
 * @param {object} higherTier - The higher tier object.
 * @returns {CrossTierValidationResult} - The result of the invariant check.
 */
function checkInvariants(lowerTier, higherTier) {
  const errors = [];
  const lowerAxioms = lowerTier.axiom_box || [];
  const higherAxioms = higherTier.axiom_box || [];

  lowerAxioms.forEach((axiom) => {
    const found = higherAxioms.some(
      (higherAxiom) => JSON.stringify(higherAxiom) === JSON.stringify(axiom),
    );
    if (!found) {
      errors.push(
        `Axiom from lower tier not found in higher tier: ${JSON.stringify(axiom)}`,
      );
    }
  });

  return {
    valid: errors.length === 0,
    errors: errors,
  };
}

module.exports = {
  checkOperators,
  checkInvariants,
};
