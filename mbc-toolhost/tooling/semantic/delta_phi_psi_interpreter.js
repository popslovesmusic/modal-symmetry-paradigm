/**
 * @typedef {import('../utils/box_renderer').Box} Box
 */

/**
 * @typedef {object} Projection
 * @property {any} data - Some data
 */

/**
 * @typedef {object} ModeState
 * @property {number} frequency
 * @property {number} phase
 */

/**
 * Computes the magnitude of distinction gradients for a given box based on Tier 01 definitions.
 * This function calculates a score by summing the levels of all 'delta' operators found in the box.
 * It respects rule R10 by collapsing any delta level > 4 down to 4.
 *
 * @param {Box} box - The box to compute the delta gradient for.
 * @returns {number} - The magnitude of the distinction gradient.
 */
function computeDelta(box) {
  let magnitude = 0;
  if (!box || !Array.isArray(box.operators)) {
    return 0;
  }

  const deltaOperators = box.operators.filter(op => op.kind === 'expression_of_D');

  deltaOperators.forEach(op => {
    let level = op.level || 0;
    if (level > 4) {
      level = 4;
    }
    magnitude += level;
  });

  return magnitude;
}

/**
 * Projects the semantic surfaces of a box into a higher-tier structure based on Tier 04 definitions.
 *
 * @param {Box} box - The box to project.
 * @param {'phi0' | 'phi_structure' | 'phi_projection_map'} projection_type - The type of projection to apply.
 * @returns {Box | Projection} - The resulting projected Box or a new Projection object.
 */
function applyPhi(box, projection_type = 'phi_projection_map') {
  if (!box) return null;

  switch (projection_type) {
    case 'phi0':
      return { ...box };

    case 'phi_structure':
      return {
        box_id: `proj_struct_${box.box_id}`,
        box_type: 'structural_projection',
        name: `Structural Projection of ${box.name}`,
        description: `A projection of only the structural elements of ${box.box_id}.`,
        ports: box.ports || [],
        operators: [],
        states: [],
        relations: box.relations || [],
        invariants: [],
        source_box_id: box.box_id,
      };

    case 'phi_projection_map':
    default:
      return {
        box_id: `proj_map_${box.box_id}`,
        box_type: 'semantic_projection',
        name: `Semantic Projection of ${box.name}`,
        description: `A general semantic mapping of ${box.box_id}.`,
        ports: box.ports || [],
        operators: box.operators || [],
        states: box.states || [],
        relations: box.relations || [],
        invariants: box.invariants || [],
        source_box_id: box.box_id,
      };
  }
}

/**
 * Updates/combines semantic oscillation modes based on Tier 08 definitions.
 * This simulates a 'psi_interfere' operation.
 *
 * @param {ModeState} modeA - The first mode state.
 * @param {ModeState} modeB - The second mode state.
 * @returns {ModeState} - The new, combined mode state.
 */
function updatePsi(modeA, modeB) {
  // R80_mode_normalization: Normalize incomplete modes.
  const normA = { frequency: 0, phase: 0, ...modeA };
  const normB = { frequency: 0, phase: 0, ...modeB };

  // Simulate psi_interfere by combining the two modes.
  // A simple interference model: average frequencies and add phases.
  const newMode = {
    frequency: (normA.frequency + normB.frequency) / 2,
    phase: normA.phase + normB.phase,
  };

  return newMode;
}

module.exports = {
  computeDelta,
  applyPhi,
  updatePsi,
};
