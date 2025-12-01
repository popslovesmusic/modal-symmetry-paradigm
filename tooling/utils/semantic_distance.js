/**
 * @typedef {object} Box
 * @property {any} data
 */

/**
 * Computes the semantic distance between two boxes.
 * NOTE: This is a placeholder implementation. A real semantic distance metric
 * would be a complex function based on the specific semantics of the Box Calculus.
 * This implementation uses a simple string comparison (Levenshtein distance)
 * on the JSON representations of the boxes.
 *
 * @param {Box} a - The first box.
 * @param {Box} b - The second box.
 * @returns {number} - The semantic distance between the two boxes.
 */
function distance(a, b) {
  const s1 = JSON.stringify(a);
  const s2 = JSON.stringify(b);

  // Levenshtein distance implementation
  const track = Array(s2.length + 1)
    .fill(null)
    .map(() => Array(s1.length + 1).fill(null));
  for (let i = 0; i <= s1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= s2.length; j += 1) {
    track[j][0] = j;
  }
  for (let j = 1; j <= s2.length; j += 1) {
    for (let i = 1; i <= s1.length; i += 1) {
      const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1, // deletion
        track[j - 1][i] + 1, // insertion
        track[j - 1][i - 1] + indicator, // substitution
      );
    }
  }
  return track[s2.length][s1.length];
}

module.exports = {
  distance,
};
