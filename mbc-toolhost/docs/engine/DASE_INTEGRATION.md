# DASE Integration Overview

## 1. Role of DASE in the MBC–IGSOA–SATP Stack
DASE operates strictly as a numeric executor, a SATP transport engine, and an evidence generator within the MBC–IGSOA–SATP stack. It is not an ontology and is not a generator of physical law; it executes transport calculations under the directions defined by higher layers without introducing new theory.

## 2. Authority & Control Hierarchy
The governing authority order is MSP → MSC → MBC → IGSOA → DFVM → SATP → DASE. DASE sits at the bottom of this chain and may never override or redefine any layer above it.

## 3. Legal Dispatch Conditions
DASE may only be dispatched through the contractual bindings defined in op_pack_dase_satp.json5. A dispatch is legal only when all four control gates—gate_not, gate_is, gate_stability, and gate_executability—pass successfully before engagement.

## 4. Input & Output Classification
Input to DASE must originate from problem_object.schema.json5 to ensure validated context and structure. Output must be classified strictly as EvidenceOnly and must not redefine, amend, or replace any existing theory or law.

## 5. Engine & Math Interdiction Binding
The integration is bound by math_interdiction_profile.json5 and engine_interdiction_profile.json5, affirming that mathematics and simulations are instruments and tools only. These bindings prohibit using computational results to elevate simulations or math to law-making status.

## 6. Agent Governance
Per /mbc/agents/agents.md, agents are responsible for enforcing all interdiction requirements and control-gate checks prior to any DASE dispatch. Agent oversight ensures that operational conduct remains compliant with constitutional constraints.

## 7. Non-Goals (Explicit)
This integration does NOT implement SATP solvers, define IGSOA ontology, provide physical predictions, or replace MBC validation.
