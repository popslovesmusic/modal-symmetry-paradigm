const fs = require('fs');
const path = require('path');

// Assuming json5 files can be parsed after stripping comments.
// In a real scenario, a proper json5 parser would be used.
const parseJson5 = (content) => {
    const singleLineComments = /\/\/.*/g;
    const multiLineComments = /\/\*[\s\S]*?\*\//g;
    const cleanedContent = content.replace(singleLineComments, '').replace(multiLineComments, '');
    return JSON.parse(cleanedContent);
};

const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

const loadRewriteRules = () => {
    const definitionsDir = path.join(PROJECT_ROOT, 'definitions');
    const tiers = fs.readdirSync(path.join(definitionsDir, 'tiers'));
    let allRules = [];

    for (const tier of tiers) {
        const tierDir = path.join(definitionsDir, 'tiers', tier);
        if (!fs.statSync(tierDir).isDirectory()) {
            continue;
        }
        const files = fs.readdirSync(tierDir);
        const rewriteSystemFile = files.find(f => f.endsWith('_rewrite_system.json5'));
        if (rewriteSystemFile) {
            const filePath = path.join(tierDir, rewriteSystemFile);
            const content = fs.readFileSync(filePath, 'utf8');
            const rewriteSystem = parseJson5(content);
            allRules = allRules.concat(rewriteSystem.rules);
        }
    }
    return allRules;
};

const allRules = loadRewriteRules();

/**
 * @typedef {object} Box
 * @property {any} data - Some data
 */

/**
 * Applies a single rewrite rule to a box.
 * NOTE: The pattern matching is very basic and based on the descriptive text.
 * A real implementation would require a proper pattern matching engine.
 *
 * @param {Box} box - The box to rewrite.
 * @returns {Box} - The rewritten box.
 */
function rewrite(box) {
    console.log("Applying rewrite rules to box...");
    let rewritten = false;
    const newBox = JSON.parse(JSON.stringify(box)); // Deep copy

    for (const rule of allRules) {
        let applied = false;
        // This is a very simplified interpretation of the rules.
        if (rule && rule.id === 'R00_canonical_box_fields' && !newBox.box_id) {
            newBox.box_id = "unknown";
            applied = true;
        } else if (rule && rule.id === 'R01_empty_null_normalization') {
            if (!newBox.ports) newBox.ports = [];
            if (!newBox.operators) newBox.operators = [];
            if (!newBox.states) newBox.states = [];
            if (!newBox.relations) newBox.relations = [];
            if (!newBox.invariants) newBox.invariants = [];
            applied = true;
        }

        if (applied) {
            console.log(`Applied rule: ${rule.id}`);
            newBox.history = newBox.history || [];
            newBox.history.push(`Applied rule: ${rule.id}`);
            rewritten = true;
        }
    }

    if (rewritten) {
        newBox.rewritten = true;
    }

    return newBox;
}

/**
 * Reduces a box to its normal form by repeatedly applying rewrite rules.
 *
 * @param {Box} box - The box to reduce.
 * @returns {Box} - The box in its normal form.
 */
function reduceToNormalForm(box) {
    console.log("Reducing box to normal form...");
    let currentBox = JSON.parse(JSON.stringify(box));
    let lastBoxState = "";

    for (let i = 0; i < 10; i++) { // Limit iterations to prevent infinite loops
        console.log(`Rewrite step ${i + 1}`);
        currentBox = rewrite(currentBox);
        const currentBoxString = JSON.stringify(currentBox);
        if (currentBoxString === lastBoxState) {
            console.log("No more rules to apply. Box is in normal form.");
            break;
        }
        lastBoxState = currentBoxString;
    }
    currentBox.normalForm = true;
    console.log("Box reduced to normal form.");
    return currentBox;
}

module.exports = {
    rewrite,
    reduceToNormalForm,
    loadRewriteRules
};