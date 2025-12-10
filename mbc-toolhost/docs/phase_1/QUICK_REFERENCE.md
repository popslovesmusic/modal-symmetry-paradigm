# MBC QUICK REFERENCE GUIDE

**Fast Lookup for Gates, Routers, Symbols, and Key Concepts**

Version: 1.0.0
Date: 2025-12-09

---

## Boolean Gates (Class 1) - Computational Operators

| Gate | Symbol | Truth Table (A,B → Out) | Function | Arity |
|------|--------|------------------------|----------|-------|
| **AND** | ∧ | 0,0→0  0,1→0  1,0→0  1,1→1 | All true → true | n-ary |
| **OR** | ∨ | 0,0→0  0,1→1  1,0→1  1,1→1 | Any true → true | n-ary |
| **NOT** | ¬ | 0→1  1→0 | Logical complement | unary |
| **NAND** | ↑ | 0,0→1  0,1→1  1,0→1  1,1→0 | NOT-AND (functionally complete) | n-ary |
| **NOR** | ↓ | 0,0→1  0,1→0  1,0→0  1,1→0 | NOT-OR (functionally complete) | n-ary |
| **XOR** | ⊕ | 0,0→0  0,1→1  1,0→1  1,1→0 | Odd parity / inequality | n-ary |
| **XNOR** | ⊙ | 0,0→1  0,1→0  1,0→0  1,1→1 | Even parity / equivalence | n-ary |

**Location:** `/mbc/gates/boolean/`
**Role:** Compute within boxes
**Return:** Boolean value (true/false)

---

## Control Gates (Class 2) - Validation Filters

| Gate | Symbol | Layer | Enforces | Decision |
|------|--------|-------|----------|----------|
| **NOT-Modal** | ⊬ | MSP | Absolute prohibitions | PASS / BLOCK |
| **IS-Necessity** | ⊨ | MSP | Required commitments | PASS / BLOCK |
| **Stability** | ⊳ | MSC | Structural cohesion & identity | STABLE / UNSTABLE |
| **Executability** | ⊢ | MBC | Symbolic consistency | EXECUTABLE / NON-EXECUTABLE |

**Location:** `/mbc/gates/control/`
**Role:** Validate between layers
**Return:** Decision (PASS/BLOCK, STABLE/UNSTABLE, etc.)

---

## Layer Hierarchy (Override Chain)

```
MSP    (Meta-Mathematics)
  ↓ constrains
MSC    (Stability & Identity)
  ↓ constrains
MBC    (Executable Logic)
  ↓ constrains
IGSOA  (Ontological Grounding)
  ↓ constrains
DFVM   (Geometric Representation)
  ↓ constrains
SATP   (Dynamics & Simulation)
```

**Rule:** Higher layers ALWAYS constrain lower layers.
Lower layers NEVER redefine higher layers.

---

## Domain Router

**Router ID:** `router_domain_dispatch.json5`
**Location:** `/mbc/routers/`

**Supported Domains (11):**
1. Mathematical
2. Logical
3. Physical
4. Cognitive
5. Computational
6. Social
7. Biological
8. Engineering
9. Philosophical
10. Abstract
11. Cross-Domain

**Decision Types:**
- **ROUTE** - Single target domain
- **MULTI_ROUTE** - Multiple parallel targets
- **NO_VALID_ROUTE** - Cannot route (needs reformulation)
- **DEFER** - Uncertain, need more info

**Routing Algorithm:**
1. Score each domain candidate (triggers + characteristics)
2. Apply relevance weights (primary=2x, secondary=1.2x)
3. Select top domain(s) (score ≥ 0.8 * max_score)

---

## Problem Object Structure

```json5
{
  problem_id: "PRB-YYYYMMDD-XXXXXX",        // Required
  problem_name: "Descriptive Name",         // Optional

  not_constraints: [                        // Required (may be empty)
    {
      constraint_id: "NOT-XXXX",
      statement: "What MUST NOT be true",
      layer: "MSP/MSC/MBC/IGSOA/DFVM/SATP/Universal",
      justification: "Why forbidden"
    }
  ],

  is_commitments: [                         // Required (may be empty)
    {
      commitment_id: "IS-XXXX",
      statement: "What MUST be true",
      layer: "MSP/MSC/MBC/IGSOA/DFVM/SATP/Universal",
      justification: "Why required"
    }
  ],

  domain_candidates: [                      // Required (min 1)
    {
      domain_name: "Mathematical/Logical/...",
      relevance: "primary/secondary/exploratory"
    }
  ],

  assumptions: [                            // Required (may be empty)
    {
      assumption_id: "ASM-XXXX",
      statement: "Explicit assumption",
      status: "validated/unvalidated/contested/rejected"
    }
  ],

  metadata: {                               // Required
    origin: "human/observation/simulation/theorem/experiment/derived",
    confidence: "high/medium/low/speculative",
    timestamp: "ISO-8601",
    version: "X.Y.Z"
  }
}
```

---

## Math Interdiction Rules

### Permitted Entry Points (3)

| Entry Point | Layer | Type | Allowed Math |
|-------------|-------|------|--------------|
| MBC Operator Interface | MBC | Symbolic | Logic, algebra, proof theory |
| DFVM Field Interface | DFVM | Geometric | Differential geometry, tensors |
| SATP Dynamics Interface | SATP | Dynamical | PDEs, transport equations |

### Permitted Classification Tags (5)

✅ `[Symbolic Tool]`
✅ `[Geometric Tool]`
✅ `[Dynamical Tool]`
✅ `[Statistical Tool]`
✅ `[Numerical Tool]`

### Forbidden Classification Tags (8)

❌ `[Foundational]`
❌ `[Ontological]`
❌ `[Causal]`
❌ `[Primary]`
❌ `[Generative]`
❌ `[Essential]`
❌ `[Metaphysical]`
❌ `[Necessary]`

### Forbidden Actions (6)

1. ❌ Ontological claims (defines what exists)
2. ❌ Modal override (defines possible/impossible)
3. ❌ NOT constraint violation (bypasses prohibitions)
4. ❌ Causal generation (claims to cause reality)
5. ❌ Structure replacement (replaces δ-Φ-Π)
6. ❌ Foundational claims (claims to be foundation)

---

## Semantic Physics Concepts

| Symbol | Name | Meaning | Layer |
|--------|------|---------|-------|
| **μₛ** | Semantic Cohesion | Resistance to change ("semantic mass") | MSC |
| **λ** | Semantic Curvature | Bias, framing, contextual warping | DFVM |
| **χₛ** | Propagation Limit | Max speed of meaning transfer | SATP |
| **D** | Dignity | Semantic viscosity, resilience | MSC |
| **δ** | Deviation | Difference operator | IGSOA |
| **Φ** | Projection | Mapping into modal space | IGSOA |
| **Π** | Evaluation/Memory | Consistency testing | IGSOA |

---

## Validation Pipeline (Sequential)

```
1. Intake & Schema Validation
   ↓
2. Math Interdiction Check
   ↓
3. Gate 1: NOT-Modal (MSP)
   ↓
4. Gate 2: IS-Necessity (MSP)
   ↓
5. Gate 3: Stability (MSC)
   ↓
6. Gate 4: Executability (MBC)
   ↓
7. Domain Routing
   ↓
8. Domain-Specific Validation
   ↓
9. Final Verdict
```

**Total Rejection Points:** 8

---

## Rejection Point Checklist

| Point | Check | Fix |
|-------|-------|-----|
| 1 | Schema valid? | Correct structure |
| 2 | Math not forbidden? | Reclassify as tool |
| 3 | NOT constraints satisfied? | Remove prohibited conditions |
| 4 | IS commitments satisfied? | Add required conditions |
| 5 | Structure stable? | Increase cohesion, ensure continuity |
| 6 | Operation executable? | Resolve contradictions, prove termination |
| 7 | Valid routing target? | Add domain characteristics |
| 8 | Cross-domain consistent? | Reformulate or restrict scope |

---

## Compliance Charters (GICC)

| Charter | Requirement | Enforces |
|---------|-------------|----------|
| **GICC-01** | Scope | System governs all layers, not domain-specific |
| **GICC-02** | Domain Neutrality | May validate any domain, not defined by any |
| **GICC-03** | No Answer Generation | Validates only, does not solve |
| **GICC-04** | No Domain Leakage Upward | Lower layers never redefine higher layers |
| **GICC-05** | Universal NOT/IS Primacy | All constraints explicit, no hidden assumptions |
| **GICC-06** | Dual Interpretation Lock | Hierarchy + validation pipeline |
| **GICC-07** | Executability Requirement | Must be valid in logic AND geometry AND dynamics |
| **GICC-08** | General Problem Routing | Routers support all domains |

---

## File Locations

| Component | Location | Count |
|-----------|----------|-------|
| **Compliance** | `/mbc/compliance/` | 1 |
| **Core Schemas** | `/mbc/core/` | 1 |
| **Boolean Gates** | `/mbc/gates/boolean/` | 7 |
| **Control Gates** | `/mbc/gates/control/` | 4 |
| **Routers** | `/mbc/routers/` | 1 |
| **Operator Packs** | `/mbc/operator_packs/` | 1 |
| **Tests** | `/mbc/tests/` | 3 |
| **Documentation** | `/docs/phase_1/` | 6 |

**Total Core Files:** 20

---

## Common Operations

### Submit Problem for Validation

```python
# Example (pseudocode - implementation pending)
problem = ProblemObject(
    problem_id="PRB-20251209-TEST01",
    not_constraints=[...],
    is_commitments=[...],
    domain_candidates=[...]
)

result = mbc_system.validate(problem)

if result.verdict == "ADMISSIBLE":
    print("✅ Problem is lawfully valid")
else:
    print("❌ Problem rejected:")
    for violation in result.violations:
        print(f"  - {violation}")
```

### Add External Mathematics

```json5
// In operator pack
{
  operator_id: "OP-CUSTOM-001",
  operator_name: "My Math Operation",

  // REQUIRED: Classification
  classification: "Symbolic Tool",  // or Geometric/Dynamical/Statistical/Numerical

  // REQUIRED: Entry point
  entry_point: "MBC Operator Interface",  // or DFVM/SATP

  // FORBIDDEN: These claims
  makes_ontological_claims: false,
  makes_modal_claims: false,
  makes_causal_claims: false,

  // Implementation
  signature: { inputs: [...], output: {...} },
  definition: "Mathematical definition here"
}
```

### Check Gate Status

```python
# Example (pseudocode)
gate_result = gate_not_modal.validate(
    box=current_box,
    action=proposed_action,
    constraints=not_constraints
)

if gate_result.decision == "BLOCK":
    print(f"Blocked: {gate_result.violation_details}")
```

---

## Decision Trees

### Boolean Gate Selection

```
Need to:
  Combine conditions? → AND/OR
  Negate condition? → NOT
  Check inequality? → XOR
  Check equivalence? → XNOR
  Universal computation? → NAND or NOR (functionally complete)
```

### Control Gate Order

```
Always sequential:
  1. NOT-Modal (check prohibitions)
  2. IS-Necessity (check requirements)
  3. Stability (check persistence)
  4. Executability (check consistency)
```

### Domain Selection Hints

| If Problem Involves... | Route To |
|------------------------|----------|
| Proofs, formal logic | Mathematical or Logical |
| Spacetime, fields, causality | Physical |
| Meaning, semantics, belief | Cognitive |
| Algorithms, complexity | Computational |
| Multi-agent, consensus | Social |
| Evolution, organisms | Biological |
| Design, optimization | Engineering |
| Ontology, epistemology | Philosophical |
| Pure structure | Abstract |
| Multiple of above | Cross-Domain |

---

## Glossary (Key Terms)

**Admissible** - Passed all gates and domain validations

**Box** - Sealed state container with typed I/O, internal invariants

**Cohesion (μₛ)** - Semantic mass, resistance to change

**Connector** - Relational edge between boxes

**Cross-Domain Consistency** - Valid in ALL applicable domains

**Curvature (λ)** - Semantic bias, contextual warping

**Executability** - Can be formally executed without contradiction

**Gate** - Validation filter (control) or computational operator (boolean)

**GICC** - Generalized Infrastructure Compliance Charter

**Interdiction** - Controlled entry/filtering of external mathematics

**IS Commitment** - Necessary condition that MUST be true

**Layer Discipline** - Higher layers constrain lower, never vice versa

**MBC** - Monistic Box Calculus (executable logic layer)

**MSC** - Modal Structural Cohesion (stability layer)

**MSP** - Modal Symmetry Paradigm (meta-mathematics layer)

**NOT Constraint** - Absolute prohibition, MUST NOT be true

**Operator Pack** - Collection of mathematical operators (tools)

**Problem Object** - Standardized input format (NOT/IS/domains/metadata)

**Propagation Limit (χₛ)** - Max speed of meaning transfer

**Router** - Constrained dispatcher to domain targets

**Stability** - Can persist as coherent identity

**Validation** - Checking admissibility, NOT generating solutions

---

## Quick Diagnostic

### Problem Rejected - Where to Look?

**"Schema error"** → Check `problem_object.schema.json5`, fix structure

**"Interdiction violation"** → Check `math_interdiction_profile.json5`, reclassify math

**"NOT constraint violated"** → Check `gate_not_modal.json5`, remove prohibited condition

**"IS commitment unsatisfied"** → Check `gate_is_necessity.json5`, add required condition

**"Unstable"** → Check `gate_stability.json5`, increase cohesion or continuity

**"Non-executable"** → Check `gate_executability.json5`, resolve contradiction/termination

**"No valid route"** → Check `router_domain_dispatch.json5`, add domain characteristics

**"Cross-domain contradiction"** → Multiple domains disagree, reformulate or restrict scope

---

## Symbols Quick Lookup

```
⊬  NOT-Modal gate (MSP prohibition)
⊨  IS-Necessity gate (MSP requirement)
⊳  Stability gate (MSC cohesion)
⊢  Executability gate (MBC consistency)

∧  AND (conjunction)
∨  OR (disjunction)
¬  NOT (negation)
↑  NAND (functionally complete)
↓  NOR (functionally complete)
⊕  XOR (exclusive OR)
⊙  XNOR (equivalence)

μₛ Semantic cohesion
λ  Semantic curvature
χₛ Propagation limit
D  Dignity (viscosity)
δ  Deviation
Φ  Projection
Π  Evaluation/Memory
```

---

## System Status (Phase 0 & 1)

✅ **COMPLETE:**
- Math interdiction profile
- Problem object schema
- 7 boolean gates
- 4 control gates
- Domain router
- Linear algebra operator pack
- 3 negative tests
- Complete documentation

❌ **PENDING (Phase 2-3):**
- IGSOA bindings
- DFVM bindings
- SATP bindings
- Engine implementation
- Textbook series (Phase 4)

**Current Capabilities:** Logic, design, engineering, philosophical, AI reasoning validation (domain-agnostic)

**NOT Yet Available:** Physics simulation, field dynamics, ontological grounding

---

**END OF QUICK REFERENCE**

For full details, see: `SYSTEM_OVERVIEW.md`, `ARCHITECTURE_DIAGRAMS.md`, `VALIDATION_PIPELINE.md`
