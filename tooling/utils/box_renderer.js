/**
 * @typedef {object} Box
 * @property {string} id
 * @property {any} data
 */

/**
 * Renders a box as an SVG graph.
 *
 * @param {Box} box - The box to render.
 * @returns {string} - The SVG string.
 */
function renderGraph(box) {
  const width = 300;
  const height = 200;
  const title = box.id || "Box";
  const entries = Object.entries(box.data || {});

  let content = "";
  entries.forEach(([key, value], index) => {
    const y = 60 + index * 20;
    content += `<text x="20" y="${y}" class="content">${key}: ${JSON.stringify(value)}</text>`;
  });

  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
        .background { fill: #f0f0f0; }
        .border { stroke: #333; stroke-width: 2; fill: none; }
        .title { font-family: sans-serif; font-size: 18px; font-weight: bold; text-anchor: middle; }
        .content { font-family: monospace; font-size: 12px; }
    </style>
    <rect x="0" y="0" width="${width}" height="${height}" class="background" />
    <rect x="5" y="5" width="${width - 10}" height="${height - 10}" rx="10" class="border" />
    <text x="${width / 2}" y="30" class="title">${title}</text>
    <line x1="10" y1="40" x2="${width - 10}" y2="40" stroke="#ccc" />
    ${content}
</svg>`;

  return svg.replace(/\n\s*/g, ""); // Minify SVG
}

module.exports = {
  renderGraph,
};
