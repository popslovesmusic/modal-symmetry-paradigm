const { run, loadTestSuites } = require('../tooling/execution/test_harness.js');

console.log("Loading all test suites...");
const allSuites = loadTestSuites();

if (allSuites.length === 0) {
    console.log("No test suites found.");
} else {
    console.log("Available test suites:");
    allSuites.forEach(suite => console.log(`- ${suite.name}`));

    // Example: Run the first test suite found
    if (allSuites.length > 0) {
        const firstSuiteName = allSuites[0].name;
        console.log(`\nRunning the first test suite: ${firstSuiteName}`);
        const report = run(firstSuiteName);
        console.log("\nTest Report:");
        console.log(JSON.stringify(report, null, 2));
    }
}
