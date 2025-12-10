# MBC SYSTEM OVERVIEW - PHASE 0 & 1 COMPLETE

## Universal Law-Validation Engine

**Version:** 1.0.0
**Status:** Phase 0 & 1 Complete, Locked
**Date:** 2025-12-09

---

## Table of Contents

1. [What Is This System?](#what-is-this-system)
2. [Core Principles](#core-principles)
3. [Architecture Overview](#architecture-overview)
4. [What Has Been Built](#what-has-been-built)
5. [How It Works](#how-it-works)
6. [Current Capabilities](#current-capabilities)
7. [File Structure](#file-structure)
8. [Quick Start Guide](#quick-start-guide)

---

## What Is This System?

The **MSP–MSC–MBC–IGSOA–DFVM–SATP** system is a **domain-agnostic, cross-layer constraint validation engine**.

### Purpose

It does NOT generate answers automatically. Instead, it:

- **Rigorously determines** whether a proposed explanation, model, or solution is lawfully admissible across all representation domains simultaneously
- **Enforces structural truth**, not empirical truth
- **Validates** or **invalidates** proposed solutions
- **Shrinks lawful solution space** via constraint elimination

### What Makes It Unique

This system operates **above** all traditional domains:
- Physics ❌ (input, not foundation)
- Biology ❌ (input, not foundation)
- Cognition ❌ (input, not foundation)
- Computation ❌ (input, not foundation)
- Economics ❌ (input, not foundation)

Any domain may be an **input**. None are its **definition**.

---

## Core Principles

### The Foundation: Monistic Box Calculus (MBC)

MBC treats **meaning as a physical phenomenon** with geometry, dynamics, and mathematical laws analogous to physics. It's essentially "General Relativity for semantics."

### Four-Layer Ontological Stack

```
┌─────────────────────────────────────────────────────┐
│  SUBSTRATE (Pre-geometric Relational Foundation)    │
│  Pure relational potential before structure         │
└──────────────────┬──────────────────────────────────┘
                   │ symmetry-breaking
┌──────────────────▼──────────────────────────────────┐
│  MSP (Modal Symmetry Paradigm)                      │
│  Geometric framework, modal axes, proto-operators   │
└──────────────────┬──────────────────────────────────┘
                   │ physics layer
┌──────────────────▼──────────────────────────────────┐
│  MSC (Modal Structural Cohesion)                    │
│  Physics of meaning: mass, curvature, momentum      │
└──────────────────┬──────────────────────────────────┘
                   │ computation layer
┌──────────────────▼──────────────────────────────────┐
│  MBC (Monistic Box Calculus)                        │
│  13-tier computational engine for meaning           │
└─────────────────────────────────────────────────────┘
```

### Six-Layer Validation Stack

```
Layer 1: MSP    → Meta-mathematics (modal legality)
Layer 2: MSC    → Stability & identity
Layer 3: MBC    → Executable logic
Layer 4: IGSOA  → Ontological grounding
Layer 5: DFVM   → Geometric representability
Layer 6: SATP   → Transport & dynamics
```

**Override Hierarchy (INVIOLABLE):**
MSP > MSC > MBC > IGSOA > DFVM > SATP

Higher layers constrain lower layers. Lower layers may NEVER redefine higher layers.

---

## Architecture Overview

### Input: Universal Problem Object

All problems enter as standardized objects with:
- **NOT constraints** (absolute prohibitions)
- **IS commitments** (necessary conditions)
- **Domain candidates** (potential routing targets)
- **Assumptions** (explicit only - no hidden premises)

### Processing: Gate → Router → Domain Pipeline

```
Problem Object
      ↓
  [Interdiction Check]
      ↓
  [Gate Validation]
      │
      ├─→ NOT-Modal Gate (MSP) ──→ PASS/BLOCK
      ├─→ IS-Necessity Gate (MSP) ──→ PASS/BLOCK
      ├─→ Stability Gate (MSC) ──→ STABLE/UNSTABLE
      └─→ Executability Gate (MBC) ──→ EXECUTABLE/NON-EXECUTABLE
      ↓
  [Domain Router]
      ↓
  Dispatch to Domains:
      ├─→ Mathematical
      ├─→ Logical
      ├─→ Physical
      ├─→ Cognitive
      ├─→ Computational
      ├─→ Social
      ├─→ Biological
      ├─→ Engineering
      ├─→ Philosophical
      ├─→ Abstract
      └─→ Cross-Domain
```

### Output: Validation Verdict

- ✅ **ADMISSIBLE** - Passed all gates, consistent across domains
- ❌ **INADMISSIBLE** - Violated constraint(s), specific failures logged
- ⚠️ **NEEDS REFINEMENT** - Incomplete or ambiguous

---

## What Has Been Built

### Phase 0: Foundation (2 files)

**Math Interdiction Profile** (`/mbc/compliance/`)
- Prevents mathematics from claiming ontological, modal, or causal primacy
- Defines 3 entry points, 6 forbidden actions, 5 permitted tags
- Enforces override hierarchy

**Problem Object Schema** (`/mbc/core/`)
- Universal input format for all problems
- Mandatory fields: NOT/IS constraints, domain candidates, metadata
- Validation state tracking

### Phase 1: Rejection Engine (18 files)

#### Boolean Logic Gates (7 files) - `/mbc/gates/boolean/`

Computational primitives for symbolic execution **inside** boxes:

| Gate | Symbol | Function | Arity |
|------|--------|----------|-------|
| AND | ∧ | Conjunction | n-ary |
| OR | ∨ | Disjunction | n-ary |
| NOT | ¬ | Negation | unary |
| NAND | ↑ | NOT-AND (functionally complete) | n-ary |
| NOR | ↓ | NOT-OR (functionally complete) | n-ary |
| XOR | ⊕ | Exclusive OR | n-ary |
| XNOR | ⊙ | Equivalence | n-ary |

**Critical Distinction:**
These are **computational operators**, NOT validation filters.

#### Control/Validation Gates (4 files) - `/mbc/gates/control/`

Constraint enforcement filters that control admissibility **between** layers:

| Gate | Symbol | Layer | Function | Decision |
|------|--------|-------|----------|----------|
| NOT-Modal | ⊬ | MSP | Enforces absolute prohibitions | PASS/BLOCK |
| IS-Necessity | ⊨ | MSP | Enforces necessary commitments | PASS/BLOCK |
| Stability | ⊳ | MSC | Checks structural cohesion | STABLE/UNSTABLE |
| Executability | ⊢ | MBC | Validates symbolic consistency | EXECUTABLE/NON-EXECUTABLE |

**Critical Distinction:**
These are **validation filters**, NOT computational operators.

#### Domain Router (1 file) - `/mbc/routers/`

**router_domain_dispatch.json5**

Supports 11 domains:
- Mathematical, Logical, Physical, Cognitive, Computational
- Social, Biological, Engineering, Philosophical
- Abstract, Cross-Domain

**Routing Policies:**
- Domain neutrality (no a priori preferences)
- No solution generation (dispatch only)
- Multi-routing allowed (parallel exploration)
- Conservative (defer when uncertain)
- Traceable (all decisions logged)

#### Operator Pack (1 file) - `/mbc/operator_packs/`

**op_pack_linear_algebra.json5**

First controlled test of math interdiction compliance:
- 12 operators (vector ops, matrix ops, eigenanalysis)
- Classified as [Symbolic Tool]
- Enters through MBC Operator Interface
- NO ontological, modal, or causal claims

#### Negative Tests (3 files) - `/mbc/tests/`

Proof that system can **REJECT before it can ACCEPT**:

1. **test_illegal_ontology_in_math.json5**
   - Rejects math claiming "this defines existence"
   - Verifies GICC-04 (no upward domain leakage)

2. **test_hidden_assumption_rejection.json5**
   - Rejects implicit/unstated assumptions
   - Verifies GICC-05 (explicit constraints only)

3. **test_cross_domain_contradiction.json5**
   - Rejects claims valid in one domain but invalid in another
   - Verifies cross-layer consistency requirement

---

## How It Works

### Step-by-Step Validation Process

#### 1. Problem Intake

User submits problem conforming to `problem_object.schema.json5`:

```json5
{
  problem_id: "PRB-20251209-A7F2E1",
  problem_name: "Identity Persistence Under Perturbation",

  not_constraints: [
    {
      constraint_id: "NOT-0001",
      statement: "Identity may not dissolve under infinitesimal perturbation",
      layer: "MSC",
      justification: "MSC stability requirement"
    }
  ],

  is_commitments: [
    {
      commitment_id: "IS-0001",
      statement: "Identity must be evaluable before and after perturbation",
      layer: "MSC",
      justification: "MSC requires computable identity function"
    }
  ],

  domain_candidates: [
    { domain_name: "Mathematical", relevance: "primary" }
  ]
}
```

#### 2. Math Interdiction Check

If problem includes mathematical objects, validate against `math_interdiction_profile.json5`:

- ✅ Classification tag present? (Symbolic/Geometric/Dynamical Tool)
- ✅ Entry point valid?
- ❌ Makes ontological claims?
- ❌ Makes modal claims?
- ❌ Makes causal claims?
- ❌ Uses forbidden tags? (Foundational, Ontological, Causal)

**Outcome:** PASS → continue | REJECT → problem blocked

#### 3. Gate Validation (Sequential)

Each gate evaluated in order:

##### Gate 1: NOT-Modal (MSP)
- Checks all NOT constraints
- If ANY violated → **BLOCK**
- Logs: which constraints violated, why

##### Gate 2: IS-Necessity (MSP)
- Checks all IS commitments
- If ANY unsatisfied → **BLOCK**
- Logs: which commitments missing, why

##### Gate 3: Stability (MSC)
- Computes semantic cohesion μₛ
- Checks identity continuity
- Analyzes perturbation response
- If unstable → **BLOCK**
- Logs: failure modes (dissolution, fragmentation, collapse)

##### Gate 4: Executability (MBC)
- Checks logical consistency (no contradictions)
- Proves termination (no infinite loops)
- Validates type correctness
- Verifies invariant preservation
- If non-executable → **BLOCK**
- Logs: blocking issues (contradiction, non-termination, type error)

**Outcome:** All gates PASS → continue | Any gate BLOCKS → problem rejected

#### 4. Domain Routing

`router_domain_dispatch.json5` scores each domain candidate:

```
For each domain:
  score = 0
  For each routing trigger:
    if trigger matches box → score += weight
  For each characteristic:
    if box has characteristic → score += weight
  Apply relevance multiplier (primary=2x, secondary=1.2x)

If max_score exists:
  If only one top domain → ROUTE (single target)
  If multiple tied domains → MULTI_ROUTE (parallel exploration)
Else:
  NO_VALID_ROUTE (reformulation needed)
```

**Outcome:**
- **ROUTE** → Single domain target identified
- **MULTI_ROUTE** → Multiple domains for parallel validation
- **NO_VALID_ROUTE** → Problem lacks structure for routing

#### 5. Cross-Domain Validation

If routed to multiple domains, each validates independently:

```
For each target domain:
  domain_result = domain.validate(problem)

if ALL domains return PASS:
  verdict = ADMISSIBLE
else:
  violated_domains = domains where result = FAIL
  verdict = INADMISSIBLE (cross-domain contradiction)
  report = list of contradictions
```

**Outcome:**
- ✅ **All domains agree** → ADMISSIBLE
- ❌ **Any domain disagrees** → INADMISSIBLE (contradiction logged)

#### 6. Final Verdict

```
if all_gates_passed AND domain_consistency_satisfied:
  return {
    verdict: "ADMISSIBLE",
    message: "Problem is lawfully valid across all layers",
    next_steps: "Proceed to solution exploration (not provided by this system)"
  }
else:
  return {
    verdict: "INADMISSIBLE",
    violations: [list of specific failures],
    guidance: "Reformulate to satisfy constraints"
  }
```

---

## Current Capabilities

### What This System CAN Do (Phase 0 & 1 Complete)

✅ **Validate logic problems**
- Check consistency, termination, type safety
- Identify contradictions and non-executable operations

✅ **Validate design problems**
- Verify design constraints are satisfied
- Check stability and persistence of structures

✅ **Validate engineering problems**
- Ensure specifications are complete and consistent
- Validate constraint satisfaction

✅ **Validate philosophical problems**
- Enforce modal legality (possible/impossible/necessary)
- Detect hidden assumptions and implicit premises

✅ **Validate AI reasoning problems**
- Check reasoning is symbolically executable
- Verify cross-domain consistency

✅ **Validate mathematical claims**
- Ensure math is classified correctly (tool, not ontology)
- Prevent math from overriding foundational layers

✅ **Reject illegal configurations**
- Ontological claims from mathematics
- Hidden/implicit assumptions
- Cross-domain contradictions
- Unstable structures
- Non-executable operations

### What This System CANNOT Do Yet (Pending Phases 2-3)

❌ **Generate solutions** (validation only, not synthesis)
❌ **Simulate dynamics** (SATP layer not built)
❌ **Compute field representations** (DFVM layer not built)
❌ **Ground ontology** (IGSOA layer not built)
❌ **Execute physical models** (physics instantiation pending)

### Domain-Agnostic Validation

Current system works on:
- Pure logic
- Abstract mathematics
- Conceptual design
- Philosophical analysis
- Formal reasoning
- System architecture

**WITHOUT** requiring:
- Physics models
- Empirical data
- Domain-specific knowledge
- Numerical simulation

---

## File Structure

```
mbc-toolhost/
├── mbc/
│   ├── compliance/
│   │   └── math_interdiction_profile.json5       [Phase 0]
│   │
│   ├── core/
│   │   └── problem_object.schema.json5           [Phase 0]
│   │
│   ├── gates/
│   │   ├── boolean/                              [Phase 1]
│   │   │   ├── gate_and.json5
│   │   │   ├── gate_or.json5
│   │   │   ├── gate_not_boolean.json5
│   │   │   ├── gate_nand.json5
│   │   │   ├── gate_nor.json5
│   │   │   ├── gate_xor.json5
│   │   │   └── gate_xnor.json5
│   │   │
│   │   └── control/                              [Phase 1]
│   │       ├── gate_not_modal.json5
│   │       ├── gate_is_necessity.json5
│   │       ├── gate_stability.json5
│   │       └── gate_executability.json5
│   │
│   ├── routers/                                  [Phase 1]
│   │   └── router_domain_dispatch.json5
│   │
│   ├── operator_packs/                           [Phase 1]
│   │   └── op_pack_linear_algebra.json5
│   │
│   └── tests/                                    [Phase 1]
│       ├── test_illegal_ontology_in_math.json5
│       ├── test_hidden_assumption_rejection.json5
│       └── test_cross_domain_contradiction.json5
│
├── docs/
│   └── phase_1/
│       └── SYSTEM_OVERVIEW.md                    [This file]
│
└── [Root Documentation]
    ├── SYSTEM DESCRIPTION.md
    ├── MBC CANONICAL FILE SET.md
    ├── INTERDICTION OF REAL-WORLD MATHEMATICS.md
    ├── MINIMAL OUTLINE TO GET STARTED .md
    └── Textbook Format Preference.md
```

**Total Files Created:** 20 core system files

---

## Quick Start Guide

### For Users: Validating a Problem

1. **Format your problem** using `problem_object.schema.json5`:
   ```json5
   {
     problem_id: "YOUR-ID",
     problem_name: "Descriptive Name",
     not_constraints: [ /* prohibitions */ ],
     is_commitments: [ /* requirements */ ],
     domain_candidates: [ /* potential domains */ ],
     assumptions: [ /* explicit only */ ],
     metadata: { /* origin, confidence, etc. */ }
   }
   ```

2. **Submit to validation pipeline** (implementation pending - specifications complete)

3. **Review validation result:**
   - ✅ **ADMISSIBLE** → Problem is lawfully valid
   - ❌ **INADMISSIBLE** → Check violations, reformulate
   - ⚠️ **NEEDS REFINEMENT** → Add missing constraints/assumptions

### For Developers: Adding Mathematics

1. **Choose correct classification:**
   - Symbolic manipulation → `[Symbolic Tool]`
   - Geometry/manifolds → `[Geometric Tool]`
   - PDEs/dynamics → `[Dynamical Tool]`
   - Probability/stats → `[Statistical Tool]`
   - Numerical methods → `[Numerical Tool]`

2. **FORBIDDEN classifications:**
   - ❌ `[Foundational]`
   - ❌ `[Ontological]`
   - ❌ `[Causal]`
   - ❌ `[Primary]`

3. **Create operator pack** following `op_pack_linear_algebra.json5` pattern

4. **Validate against interdiction profile:**
   - No ontological claims ✓
   - No modal override ✓
   - No causal generation ✓
   - Correct entry point ✓

### For Researchers: Understanding Layer Discipline

**Golden Rule:**
Higher layers ALWAYS constrain lower layers. Lower layers NEVER redefine higher layers.

```
MSP (Meta-Math)
  ↓ constrains
MSC (Stability)
  ↓ constrains
MBC (Executable Logic)
  ↓ constrains
IGSOA (Ontology)
  ↓ constrains
DFVM (Geometry)
  ↓ constrains
SATP (Dynamics)

❌ NEVER flows upward
```

**Example Violations:**
- ❌ SATP PDE cannot redefine MSP modal legality
- ❌ DFVM geometry cannot override MSC stability criteria
- ❌ Mathematics cannot define IGSOA ontology

**Correct Usage:**
- ✅ MSP NOT constraint blocks SATP dynamics
- ✅ MSC stability requirement constrains DFVM geometry
- ✅ MBC executability requirement filters IGSOA grounding

---

## Key Concepts Reference

### NOT vs IS Constraints

**NOT Constraints (Prohibitions)**
- Absolute things that MUST NOT be true
- Examples:
  - "Information may not be deleted"
  - "Causality may not propagate faster than χₛ"
  - "Identity may not be undefined"
- Enforced by: `gate_not_modal.json5`
- Even ONE violation → BLOCK

**IS Commitments (Requirements)**
- Necessary things that MUST be true
- Examples:
  - "All boxes must have well-defined identity"
  - "Propagation must respect causal structure"
  - "Stability must be evaluable"
- Enforced by: `gate_is_necessity.json5`
- Even ONE unsatisfied → BLOCK

### Boolean Gates vs Control Gates

| Aspect | Boolean Gates | Control Gates |
|--------|---------------|---------------|
| **Location** | `/mbc/gates/boolean/` | `/mbc/gates/control/` |
| **Function** | Compute within boxes | Validate between layers |
| **Operate On** | Boolean values/propositions | Box states/transitions |
| **Return** | Boolean (true/false) | Decision (PASS/BLOCK) |
| **Examples** | AND, OR, NOT, XOR | NOT-Modal, Stability |
| **Role** | Computation | Validation |

### Boxes, Connectors, Routers

**Box**
- Sealed state container with typed I/O
- Internal invariants
- Permitted gates and rewrites
- Can transition via validated operations

**Connector**
- Relational edge between boxes
- Typed (different connector classes)
- May have properties (strength, direction)

**Router**
- Constrained dispatcher
- Maps (Box_Output, Gate_Result, Domain) → Next_Box
- Implements branching/merging logic
- Does NOT solve, only routes

### Semantic Physics Concepts

**Cohesion (μₛ)**
- "Semantic mass" - resistance to change
- Higher μₛ → more stable, harder to dissolve
- Checked by Stability gate

**Curvature (λ)**
- Semantic bias/framing
- Context-dependent warping of meaning space
- Affects propagation paths (geodesics)

**Propagation Limit (χₛ)**
- Maximum speed of meaning transfer
- Analogous to speed of light in physics
- Enforced by NOT constraints in SATP layer

**Dignity (D)**
- Semantic viscosity
- Resilience under stress/perturbation
- Related to stability margin

---

## Compliance Charters Reference

### GICC-01: Scope
Governs MSP, MSC, MBC, IGSOA, DFVM, SATP as generalized infrastructure. No domain-specific science may define this layer.

### GICC-02: Domain Neutrality
Infrastructure may validate any domain but may not be defined by any single domain. Physics, biology, cognition, AI are inputs, not foundations.

### GICC-03: No Answer Generation
System must NOT generate solutions automatically. Must only validate or invalidate proposed solutions.

### GICC-04: No Domain Leakage Upward
No element of SATP/DFVM/IGSOA may redefine MSP/MSC/MBC. Higher layers constrain lower layers. Lower layers never redefine higher layers.

### GICC-05: Universal NOT/IS Primacy
All problems must enter as explicit NOT/IS constraints. Implicit assumptions are non-compliant unless promoted to explicit.

### GICC-06: Dual Interpretation Lock
MSP–SATP chain is both a non-temporal realization hierarchy AND a sequential epistemic validation pipeline. NOT a physical time process.

### GICC-07: Executability Requirement
Every admissible claim must be:
- Logically executable (MBC)
- Ontologically grounded (IGSOA)
- Field-representable (DFVM)
- Dynamically evolvable (SATP)

Failure at any layer is hard rejection.

### GICC-08: General Problem Routing
Routers must support dispatch to physical, cognitive, artificial reasoning, abstract mathematical, and social/systemic domains. No router may be hard-coded to physics alone.

---

## Next Steps

### Phase 2: Ontological & Field Descent
- IGSOA bindings (informational ground state)
- DFVM bindings (deviation field vector model)
- Geometric representation layer

### Phase 3: Dynamics & Engine Realization
- SATP bindings (self-assembling transport protocol)
- Simulation kernels
- Abstract engine specification (language-agnostic)
- Reference implementation (Python)

### Phase 4: Textbook Series
- Volume I: Foundations (MSP–MSC–MBC)
- Volume II: Universal Validation Practice
- Volume III: Engine & Physics Instantiation

---

## Contact & Governance

**Modification Authority:**
- Math Interdiction Profile: MSP Core Council only
- Problem Object Schema: MSP Core Council only
- Gates: Gate Council + respective layer council
- Routers: MBC Routing Council
- Tests: Test Council + relevant layer councils

**Status:** LOCKED (Phase 0 & 1)
**Reason:** Foundational infrastructure must remain stable

**Extensibility:** New domains, operator packs, and gates may be added following established patterns, subject to council approval.

---

**END OF SYSTEM OVERVIEW**

For detailed architectural diagrams, see: `ARCHITECTURE_DIAGRAMS.md`
For validation pipeline flowchart, see: `VALIDATION_PIPELINE.md`
For quick reference, see: `QUICK_REFERENCE.md`
For integration guide, see: `INTEGRATION_GUIDE.md`
For examples, see: `EXAMPLES.md`
