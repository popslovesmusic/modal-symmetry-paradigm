# Initial Investigation Summary - MBC Toolhost Project

This report summarizes the findings from the initial investigation into the `mbc-toolhost` project, covering its structure, core components, agent directives, schema validation, and testing procedures.

## 1. Project Structure Overview
The project is structured around the Monistic Box Calculus (MBC) framework. Key directories include:
- `definitions/tiers`: Contains definitions for each MBC tier (00-12), with each tier having its own subdirectory.
- `MBC`: Holds MBC-specific components like Portable Operators (PO), connectors, and presets.
- `tooling`: Contains utilities, semantic tools, execution engines, and validators.
- `reports`: Designated directory for saving reports.
- `scripts/logs`: Contains agent logs.
- `toolchain_generated`: For generated code and temporary scripts.

## 2. MBC Tier Specification and Components
- The MBC framework comprises 13 tiers (00-12).
- Each tier is expected to have seven required components: `metadata`, `operator_pack`, `interaction_table`, `axiom_box`, `rewrite_system`, `module_pack`, and `test_suite`.
- This structure was confirmed by inspecting `definitions/tiers/tier_00_primitives`.

## 3. Agent's Core Directives and Reasoning Pipeline
The agent's behavior and internal reasoning are guided by `GEMINI.md`:
- **Core Directives**: Include ingesting all tiers, requiring all seven files per tier, enforcing schemas, and rejecting invalid components.
- **Reasoning Pipeline (Semantic Cycle)**: A sequence of semantic operations:
    - `δ_identify_deviation`
    - `Φ_semantic_projection`
    - `Π_consistency_evaluation`
    - `Ω_global_normalization`
    - `Θ_polarity_routing`
    - `χ_forward_semantic_evolution`
    - `ρ_federation_layer_alignment`
    - `Ξ_universal_schema_encoding`

## 4. Schema Validation Process
- `GEMINI.md` mandates `enforce_schemas: true`, with listed schema paths like `schemas/schema_metadata.json5`.
- The validation logic is implemented in `tooling/validators/schema_validator.js` and `tooling/validators/tier_schema_validator.js`. These validators expect a schema *object* as input; they do not load schema files themselves.
- **Discrepancy Identified**: The schema definition files (e.g., `schema_metadata.json5`, `schema_operator_pack.json5`) explicitly referenced by path in `GEMINI.md` could not be located in the project directory using `glob` or `search_file_content`. The `MBC/schema` directory contains schemas for "Portable Operators," which are distinct from the general tier component schemas. This discrepancy requires clarification to fully understand the schema validation process.

## 5. Testing Procedures
- The project uses `tooling/execution/test_harness.js` for running tests.
- This `test_harness.js` dynamically loads test suites from `definitions/tiers/**/_test_suite.json5` files using its `loadTestSuites()` function.
- Tests are executed via the `run(suiteName)` function, which currently contains largely simulated test logic.
- A demonstration script `toolchain_generated/run_tests.js` was created and executed, successfully listing available test suites and running the `MetaStructure_TestSuite`.

This summary outlines the current understanding of the project's foundational elements and highlights an area where further clarification is needed regarding schema definitions.
