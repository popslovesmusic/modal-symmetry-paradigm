# Agent Directory Summary - MBC Toolhost Project

This document provides a high-level overview and purpose of key directories and their contents within the `mbc-toolhost` project. This summary is intended to facilitate quicker understanding and navigation for the agent, reducing the need to read every file for context.

## 1. `definitions/`
**Purpose**: Contains the core formal definitions that constitute the Mono Box Calculus (MBC) framework. This includes the individual "Boxes" and the tiered architecture that defines the system's operational logic.

### 1.1 `definitions/boxes/`
**Contents**: Individual `.json5` files defining various "Boxes" (e.g., Bx0-Bx7), which are fundamental discrete structures within MBC. These often serve as primitive elements.
**Key Context**: Understanding these provides insight into the basic units of computation and interaction.

### 1.2 `definitions/tiers/`
**Contents**: Subdirectories for each of the thirteen structural tiers (T00-T13) of the MBC. Each tier directory typically contains seven `.json5` files:
    *   `*_axiom_box.json5`: Fundamental, unbreakable rules and principles for the tier.
    *   `*_interaction_table.json5`: Specifies how operators and structures interact within the tier.
    *   `*_metadata.json5`: Describes the tier's purpose, scope, dependencies, and provided elements.
    *   `*_module_pack.json5`: Defines modules for organizing tier components.
    *   `*_operator_pack.json5`: Defines the new operators introduced or refined in the tier.
    *   `*_rewrite_system.json5`: Provides rules for transforming and normalizing Box structures within the tier.
    *   `*_test_suite.json5`: Contains tests to verify the tier's logic and adherence to its principles.
**Key Context**: These tiers progressively build complexity from foundational (T00) to meta-structural coherence (T13), defining how the system evolves and maintains consistency. Reading these files is crucial for understanding the operational logic of MBC.

## 2. `MBC/`
**Purpose**: Contains MBC-specific components, including connector schemas, operator definitions, presets, and overall schema definitions.

### 2.1 `MBC/connectors/`
**Contents**: Design documents and potentially generated definitions for "Connectors." Connectors formalize the interactions and flow of different payload types (e.g., deviation, semantic, truth) across various tiers and Boxes. The `Global Connector Schema Design (JSON5).md` provides the blueprint for these.
**Key Context**: Crucial for understanding how different parts of the MBC system communicate and exchange information.

### 2.2 `MBC/Operators/`
**Contents**: Individual `.json5` files defining specific MBC operators (e.g., Bx_Amplify, Bx_Filter). These are implementations or detailed specifications of operators introduced in the tiered architecture.
**Key Context**: Provides granular detail on the "verbs" of the calculus.

### 2.3 `MBC/presets/`
**Contents**: `.json5` files defining predefined Box configurations or common patterns.
**Key Context**: Examples of how Boxes can be configured for specific purposes.

### 2.4 `MBC/schema/`
**Contents**: `.json5` files defining schemas for various MBC components (e.g., PO_Amplifier.json5, schema_schema.json5).
**Key Context**: Ensures structural validation and consistency across MBC components.

## 3. `MSP/`
**Purpose**: Contains files related to the Modal Symmetry Paradigm (MSP), which defines the fundamental modal conditions and proto-operators at the base of the IGSOA framework.
**Contents**: Similar structure to tiers, with files like `msp_axiom_box.json5`, `msp_interaction_table.json5`, etc., defining the core MSP elements.
**Key Context**: Provides the philosophical and foundational modal primitives for the entire system.

## 4. `reports/`
**Purpose**: Stores generated reports, analyses, and summaries.
**Contents**: Markdown files (`.md`) summarizing agent behavior, system reviews, refactoring summaries, and tier file analyses.
**Key Context**: Useful for reviewing previous analysis and system understanding.

## 5. `scripts/logs/`
**Purpose**: Contains operational logs for the agent.
**Contents**: `agents_log.md` which records all interactions, plans, tool calls, and outcomes of the agent's work.
**Key Context**: Essential for auditing agent behavior and tracking progress.

## 6. `tooling/`
**Purpose**: Houses various agent-specific tools and utilities used for executing, semantic analysis, general utilities, and validation within the MBC project.

### 6.1 `tooling/execution/`
**Contents**: JavaScript files (`.js`) for executing MBC operations, such as `operator_executor.js`, `rewrite_engine.js`, and `test_harness.js`. (Note: Some of these were identified as placeholder implementations.)
**Key Context**: These tools are responsible for bringing the MBC operations to life.

### 6.2 `tooling/semantic/`
**Contents**: JavaScript files (`.js`) for semantic analysis, including `coherence_checker.js`, `delta_phi_psi_interpreter.js`, and `semantic_normalizer.js`.
**Key Context**: Used for analyzing and maintaining the meaning and consistency of MBC structures.

### 6.3 `tooling/utils/`
**Contents**: General JavaScript utility functions such as `box_renderer.js`, `semantic_distance.js`, and `trace_engine.js`.
**Key Context**: Provides helper functions for visualization, measurement, and tracking.

### 6.4 `tooling/validators/`
**Contents**: JavaScript files (`.js`) for validating MBC structures, such as `cross_tier_validator.js`, `json5_validator.js`, `schema_validator.js`, and `tier_schema_validator.js`.
**Key Context**: Ensures that MBC structures adhere to defined schemas and invariants.

## 7. `docs/`
**Purpose**: Contains general documentation, guides, and conceptual files related to the project.
**Contents**: Markdown (`.md`), JSON5 (`.json5`), and other document formats providing high-level conceptual explanations, usage guides, and meta-mathematical frameworks (e.g., `MonoBoxCalculus.md`, `THE META-LAYER.md`).
**Key Context**: Provides foundational conceptual understanding and architectural descriptions.

---
This summary is automatically generated based on the agent's knowledge acquisition during the current session.
