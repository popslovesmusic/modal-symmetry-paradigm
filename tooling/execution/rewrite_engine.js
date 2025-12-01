/**
 * @typedef {object} Box
 * @property {any} data - Some data
 */

/**
 * Applies a single rewrite rule to a box.
 * NOTE: This is a placeholder implementation. A real rewrite engine would have a
 * library of rewrite rules and a mechanism for matching them against the box structure.
 *
 * @param {Box} box - The box to rewrite.
 * @returns {Box} - The rewritten box.
 */
function rewrite(box) {
  console.log("Applying single rewrite rule to box...");
  const newBox = {
    ...box,
    rewritten: true,
  };
  return newBox;
}

/**
 * Reduces a box to its normal form by repeatedly applying rewrite rules.
 * NOTE: This is a placeholder implementation. A real implementation would
 * continue to apply rules until no more rules can be applied (i.e., the
 * box is in a "normal form").
 *
 * @param {Box} box - The box to reduce.
 * @returns {Box} - The box in its normal form.
 */
function reduceToNormalForm(box) {
  console.log("Reducing box to normal form...");
  let currentBox = {
    ...box,
  };
  for (let i = 0; i < 5; i++) {
    // Simulate a few rewrite steps
    console.log(`Rewrite step ${i + 1}`);
    currentBox = rewrite(currentBox);
  }
  currentBox.normalForm = true;
  console.log("Box reduced to normal form.");
  return currentBox;
}

module.exports = {
  rewrite,
  reduceToNormalForm,
};
