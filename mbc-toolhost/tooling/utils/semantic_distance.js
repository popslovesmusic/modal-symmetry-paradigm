/**
 * @typedef {object} Box
 * @property {string} id
 * @property {any} data
 */

/**
 * Computes the semantic distance between two boxes based on their structural differences.
 * This is a simplified approach, focusing on differences in keys and values within the 'data' property.
 * A more sophisticated semantic distance would require a deeper understanding of Box Calculus
 * and potentially involve graph theory, type checking, or functional equivalency.
 *
 * @param {Box} a - The first box.
 * @param {Box} b - The second box.
 * @returns {number} - The calculated semantic distance. A higher number indicates greater distance.
 */
function distance(a, b) {
  let diff = 0;

  const dataA = a.data || {};
  const dataB = b.data || {};

  const keysA = new Set(Object.keys(dataA));
  const keysB = new Set(Object.keys(dataB));

  // Count keys unique to box A
  keysA.forEach(key => {
    if (!keysB.has(key)) {
      diff++;
    }
  });

  // Count keys unique to box B
  keysB.forEach(key => {
    if (!keysA.has(key)) {
      diff++;
    }
  });

  // Compare values for common keys
  keysA.forEach(key => {
    if (keysB.has(key)) {
      // Simple shallow comparison for values.
      // For deep comparison, this would need recursion or a utility like lodash.isEqual
      if (typeof dataA[key] === 'object' && dataA[key] !== null &&
          typeof dataB[key] === 'object' && dataB[key] !== null) {
          // If both are objects, but not null, do a shallow JSON string compare
          if (JSON.stringify(dataA[key]) !== JSON.stringify(dataB[key])) {
              diff++;
          }
      } else if (dataA[key] !== dataB[key]) {
        diff++;
      }
    }
  });

  // Also consider 'id' property difference as part of semantic distance
  if (a.id !== b.id) {
    diff++;
  }

  return diff;
}

module.exports = {
  distance,
};
