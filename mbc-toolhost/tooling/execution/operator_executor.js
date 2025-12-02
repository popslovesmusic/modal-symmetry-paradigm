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

const loadOperators = () => {
    const definitionsDir = path.join(PROJECT_ROOT, 'definitions');
    const tiers = fs.readdirSync(path.join(definitionsDir, 'tiers'));
    let allOperators = [];

    for (const tier of tiers) {
        const tierDir = path.join(definitionsDir, 'tiers', tier);
        if (!fs.statSync(tierDir).isDirectory()) {
            continue;
        }
        const files = fs.readdirSync(tierDir);
        const operatorPackFile = files.find(f => f.endsWith('_operator_pack.json5'));
        if (operatorPackFile) {
            const filePath = path.join(tierDir, operatorPackFile);
            const content = fs.readFileSync(filePath, 'utf8');
            const operatorPack = parseJson5(content);
            allOperators = allOperators.concat(operatorPack.operators);
        }
    }
    return allOperators;
};

const allOperators = loadOperators();

/**
 * @typedef {object} Box
 * @property {any} data - Some data
 */

/**
 * @typedef {object} ExecResult
 * @property {object} result
 * @property {Box} modifiedBox
 */

/**
 * Executes an operator on a box.
 *
 * @param {string} op - The id of the operator to execute.
 * @param {Box} box - The box to operate on.
 * @param {object} args - The arguments for the operator.
 * @returns {ExecResult} - The result of the execution.
 */
function execute(op, box, args) {
    console.log(`Executing operator '${op}' on box with args:`, args);

    const operator = allOperators.find(o => o.id === op);

    if (!operator) {
        console.error(`Unknown operator: ${op}`);
        return {
            result: {
                error: `Unknown operator: ${op}`,
            },
            modifiedBox: box,
        };
    }

    const modifiedBox = JSON.parse(JSON.stringify(box)); // Deep copy
    let result = {};

    // The logic here is a more educated guess based on the definitions.
    // A full implementation would require a much deeper understanding of the calculus.
    switch (operator.kind) {
        case 'root_deviation':
            result = {
                distinctionValue: Math.random(),
                description: "Created a new distinction based on the root deviation."
            };
            modifiedBox.lastOperation = op;
            modifiedBox.distinctions = (modifiedBox.distinctions || 0) + 1;
            break;
        case 'meta':
            if (op === 'BoxCreate') {
                result = {
                    newBoxId: `Bx${Math.floor(Math.random() * 1000)}`,
                    description: "Created a new box."
                };
            } else if (op === 'BoxLink') {
                result = {
                    linked: true,
                    description: `Linked ${box.box_id} to ${args.targetBoxId}`
                };
                modifiedBox.links = modifiedBox.links || [];
                modifiedBox.links.push(args.targetBoxId);
            } else if (op === 'InvariantCheck') {
                result = {
                    invariants_ok: true,
                    description: "Checked invariants."
                };
            }
            modifiedBox.lastOperation = op;
            break;
        case 'projection':
             result = {
                projection: {
                    newDimension: "projected",
                },
                 description: "Projected the box."
            };
            modifiedBox.projected = true;
            modifiedBox.lastOperation = op;
            break;
        case 'evaluation':
            result = {
                evaluation: "some_value",
                description: "Evaluated the box."
            };
            modifiedBox.evaluated = true;
            modifiedBox.lastOperation = op;
            break;
        default:
            console.warn(`Operator kind '${operator.kind}' not fully implemented.`);
            result = {
                status: "not_implemented",
                description: `Operator kind '${operator.kind}' is not fully implemented.`
            };
            modifiedBox.lastOperation = op;
            break;
    }

    console.log("Execution result:", result);
    console.log("Modified box:", modifiedBox);

    return {
        result,
        modifiedBox,
    };
}

module.exports = {
    execute,
    loadOperators
};