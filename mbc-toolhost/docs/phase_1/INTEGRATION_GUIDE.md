# MBC INTEGRATION GUIDE

**Developer Guide for Working with the MSP-MSC-MBC System**

Version: 1.0.0
Date: 2025-12-09
Audience: Developers, System Integrators, Tool Builders

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Creating Problem Objects](#creating-problem-objects)
3. [Adding Custom Mathematics](#adding-custom-mathematics)
4. [Creating New Gates](#creating-new-gates)
5. [Extending the Router](#extending-the-router)
6. [Writing Tests](#writing-tests)
7. [Best Practices](#best-practices)
8. [Common Patterns](#common-patterns)
9. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

**Understanding Required:**
- JSON5 format (JSON with comments and trailing commas)
- Basic logic and set theory
- Constraint satisfaction concepts
- Validation vs. generation distinction

**Recommended Background:**
- Formal methods or verification
- Type theory
- Domain-specific languages

### System Philosophy

**Remember:**
- This system **VALIDATES**, it does not **SOLVE**
- It **REJECTS** illegal configurations, it does not **FIX** them
- It **CONSTRAINS** solution space, it does not **SEARCH** it
- Mathematics is a **TOOL**, not **FOUNDATION**

---

## Creating Problem Objects

### Minimal Valid Problem

```json5
{
  problem_id: "PRB-20251209-EXAMPLE",
  problem_name: "Minimal Test Problem",

  // Empty arrays are valid!
  not_constraints: [],
  is_commitments: [],

  // At least one domain required
  domain_candidates: [
    {
      domain_name: "Logical",
      relevance: "primary"
    }
  ],

  // Explicit that no assumptions are made
  assumptions: [],

  // Required metadata
  metadata: {
    origin: "human",
    confidence: "high",
    timestamp: "2025-12-09T10:00:00Z",
    version: "1.0.0"
  }
}
```

### Adding NOT Constraints

```json5
not_constraints: [
  {
    constraint_id: "NOT-0001",

    // What is absolutely forbidden
    statement: "Information may not be deleted during transformation",

    // Which layer enforces this
    layer: "IGSOA",  // or MSP, MSC, MBC, DFVM, SATP, Universal

    // Why this is forbidden
    justification: "IGSOA conservation law requires information preservation",

    // Optional: How strict is this?
    strength: "absolute",  // or "defeasible", "contextual"

    // Optional: Where does this apply?
    scope: "global"  // or "local", "domain-specific"
  },

  // Multiple constraints allowed
  {
    constraint_id: "NOT-0002",
    statement: "System may not enter undefined state",
    layer: "MSC",
    justification: "MSC requires well-defined identity at all times"
  }
]
```

### Adding IS Commitments

```json5
is_commitments: [
  {
    commitment_id: "IS-0001",

    // What MUST be true
    statement: "All transformations must preserve structural cohesion",

    // Which layer enforces this
    layer: "MSC",

    // Why this is required
    justification: "MSC stability requirement",

    // Optional fields
    strength: "absolute",
    scope: "global"
  },

  {
    commitment_id: "IS-0002",
    statement: "Operation must terminate in finite steps",
    layer: "MBC",
    justification: "MBC executability requirement - no infinite loops"
  }
]
```

### Adding Explicit Assumptions

```json5
assumptions: [
  {
    assumption_id: "ASM-0001",

    // The assumption being made
    statement: "Shared semantic space exists between agents",

    // What's the epistemic status?
    status: "unvalidated",  // or "validated", "contested", "rejected"

    // Why are we assuming this?
    justification: "Required for meaning propagation between agents",

    // Optional: Dependencies
    dependencies: []  // List of other assumption IDs this depends on
  },

  {
    assumption_id: "ASM-0002",
    statement: "Transport medium is continuous (not discrete)",
    status: "validated",
    justification: "Continuity required for stability analysis"
  }
]
```

### Choosing Domain Candidates

```json5
domain_candidates: [
  {
    // Choose from 11 supported domains
    domain_name: "Mathematical",  // or Logical, Physical, Cognitive,
                                  // Computational, Social, Biological,
                                  // Engineering, Philosophical, Abstract,
                                  // Cross-Domain

    // How relevant is this domain?
    relevance: "primary",  // or "secondary", "exploratory"

    // Optional: Why this domain?
    rationale: "Problem requires formal proof and symbolic manipulation"
  },

  // Can list multiple candidates
  {
    domain_name: "Computational",
    relevance: "secondary",
    rationale: "May require algorithmic solution"
  }
]
```

### Complete Example

```json5
{
  problem_id: "PRB-20251209-IDENTITY",
  problem_name: "Identity Persistence Under Small Perturbation",
  problem_description: "Verify that semantic box identity remains continuous under infinitesimal curvature perturbations",

  not_constraints: [
    {
      constraint_id: "NOT-0001",
      statement: "Identity may not dissolve under infinitesimal perturbation",
      layer: "MSC",
      justification: "MSC continuity requirement",
      strength: "absolute",
      scope: "global"
    },
    {
      constraint_id: "NOT-0002",
      statement: "Information may not be lost during perturbation",
      layer: "IGSOA",
      justification: "Conservation law",
      strength: "absolute",
      scope: "global"
    }
  ],

  is_commitments: [
    {
      commitment_id: "IS-0001",
      statement: "Identity must be evaluable before and after perturbation",
      layer: "MSC",
      justification: "Requires computable identity function",
      strength: "absolute",
      scope: "global"
    },
    {
      commitment_id: "IS-0002",
      statement: "Perturbation must be quantifiable in semantic space",
      layer: "DFVM",
      justification: "Need measurable deviation field",
      strength: "absolute",
      scope: "global"
    }
  ],

  domain_candidates: [
    {
      domain_name: "Mathematical",
      relevance: "primary",
      rationale: "Requires stability analysis and continuity proofs"
    },
    {
      domain_name: "Computational",
      relevance: "secondary",
      rationale: "May need numerical simulation"
    }
  ],

  assumptions: [
    {
      assumption_id: "ASM-0001",
      statement: "Perturbations are smooth (C¹ continuous)",
      status: "validated",
      justification: "Required for stability analysis",
      dependencies: []
    }
  ],

  metadata: {
    origin: "theorem",
    confidence: "high",
    timestamp: "2025-12-09T14:30:00Z",
    version: "1.0.0",
    author: "MSC Research Team",
    status: "validated",
    priority: "high",
    tags: ["stability", "identity", "perturbation_theory"]
  }
}
```

---

## Adding Custom Mathematics

### Step 1: Choose Classification

**Decision Tree:**
```
What kind of math?
├─ Symbolic manipulation (algebra, logic, rewriting) → [Symbolic Tool]
├─ Geometry (manifolds, tensors, metrics) → [Geometric Tool]
├─ Dynamics (PDEs, transport, evolution) → [Dynamical Tool]
├─ Probability/Statistics → [Statistical Tool]
└─ Numerical methods (solvers, approximations) → [Numerical Tool]
```

**FORBIDDEN:** Never use [Foundational], [Ontological], [Causal], [Primary]

### Step 2: Choose Entry Point

| Classification | Entry Point | Layer |
|----------------|-------------|-------|
| Symbolic Tool | MBC Operator Interface | MBC |
| Geometric Tool | DFVM Field Interface | DFVM |
| Dynamical Tool | SATP Dynamics Interface | SATP |
| Statistical Tool | SATP Dynamics Interface | SATP |
| Numerical Tool | SATP Dynamics Interface | SATP |

### Step 3: Create Operator Pack

```json5
// File: /mbc/operator_packs/op_pack_my_math.json5
{
  metadata: {
    pack_name: "My Custom Math Operator Pack",
    pack_id: "OP-PACK-CUSTOM-001",
    version: "1.0.0",

    // REQUIRED: Classification
    classification: "Symbolic Tool",  // Choose appropriate tag

    // REQUIRED: Entry point
    entry_point: "MBC Operator Interface",

    layer: "MBC",
    purpose: "Brief description of what this math does"
  },

  // REQUIRED: Interdiction compliance
  interdiction_compliance: {
    classification_tag: "Symbolic Tool",

    entry_point_validation: {
      interface: "MBC Operator Interface",
      allowed: true,
      reason: "Symbolic manipulation is valid for MBC layer"
    },

    // CRITICAL: All must be FALSE
    forbidden_claims_check: {
      makes_ontological_claims: false,
      makes_modal_claims: false,
      makes_causal_claims: false,
      overrides_NOT_constraints: false,
      overrides_IS_commitments: false,
      replaces_delta_phi_pi: false
    },

    enforcement_rules_satisfied: {
      must_be_executable: true,
      must_preserve_invariants: true,
      must_terminate: true,
      no_NOT_violations: true,
      no_IS_violations: true
    },

    status: "COMPLIANT with math_interdiction_profile.json5"
  },

  // Define your operators
  operators: {
    my_operator: {
      operator_id: "OP-CUSTOM-001",
      operator_name: "My Custom Operator",
      symbol: "⊗",  // Optional symbol

      signature: {
        inputs: [
          { name: "input1", type: "vector", dimension: "n" },
          { name: "input2", type: "scalar" }
        ],
        output: { type: "vector", dimension: "n" }
      },

      definition: "Mathematical definition here (LaTeX or text)",

      properties: [
        "Property 1: description",
        "Property 2: description"
      ],

      // IMPORTANT: No physical/ontological interpretation
      implementation_note: "Pure symbolic operation - no physical interpretation assigned",

      complexity: { time: "O(n)", space: "O(n)" }
    }
  },

  // REQUIRED: Usage constraints
  usage_constraints: {
    permitted_uses: [
      "What this math CAN be used for",
      "Another permitted use"
    ],

    forbidden_uses: [
      "Claiming this math 'creates' reality",
      "Asserting ontological status",
      "Using to override MSP constraints"
    ],

    layer_restrictions: {
      allowed_at: "MBC",
      not_allowed_to_override: ["MSP", "MSC"],
      may_be_used_by: ["DFVM", "SATP"]
    }
  },

  // REQUIRED: Validation
  validation: {
    interdiction_test: {
      test_name: "Custom Math Interdiction Compliance",
      test_id: "TEST-OP-CUSTOM-INTERDICTION",

      checks: [
        {
          check: "Classification tag is [Symbolic Tool]",
          expected: true,
          actual: true,
          status: "PASS"
        },
        {
          check: "Enters through MBC Operator Interface",
          expected: true,
          actual: true,
          status: "PASS"
        },
        {
          check: "Makes no ontological claims",
          expected: false,
          actual: false,
          status: "PASS"
        }
      ],

      verdict: "COMPLIANT"
    }
  },

  lock: {
    status: "LOCKED",
    reason: "Production operator pack",
    modification_authority: "MBC Operator Council"
  }
}
```

### Example: Adding Differential Operators

```json5
// File: /mbc/operator_packs/op_pack_differential.json5
{
  metadata: {
    pack_name: "Differential Operators",
    pack_id: "OP-PACK-DIFF-001",
    version: "1.0.0",
    classification: "Geometric Tool",  // NOT Symbolic - it's geometric
    entry_point: "DFVM Field Interface",
    layer: "DFVM"
  },

  interdiction_compliance: {
    classification_tag: "Geometric Tool",
    entry_point_validation: {
      interface: "DFVM Field Interface",
      allowed: true,
      reason: "Differential geometry is valid for DFVM layer"
    },
    forbidden_claims_check: {
      makes_ontological_claims: false,
      makes_modal_claims: false,
      makes_causal_claims: false,
      overrides_NOT_constraints: false,
      overrides_IS_commitments: false,
      replaces_delta_phi_pi: false
    },
    status: "COMPLIANT"
  },

  operators: {
    gradient: {
      operator_id: "OP-DIFF-GRAD",
      operator_name: "Gradient",
      symbol: "∇",

      signature: {
        inputs: [
          { name: "f", type: "scalar_field", domain: "manifold" }
        ],
        output: { type: "vector_field", domain: "manifold" }
      },

      definition: "∇f = (∂f/∂x¹, ∂f/∂x², ..., ∂f/∂xⁿ)",

      properties: [
        "Points in direction of steepest ascent",
        "Orthogonal to level sets",
        "Linear: ∇(af + bg) = a∇f + b∇g"
      ],

      // NO claim that gradient "causes" change
      implementation_note: "Computes directional derivative - no causal claims",

      complexity: { time: "O(n)", space: "O(n)" }
    },

    divergence: {
      operator_id: "OP-DIFF-DIV",
      operator_name: "Divergence",
      symbol: "∇·",

      signature: {
        inputs: [
          { name: "F", type: "vector_field", domain: "manifold" }
        ],
        output: { type: "scalar_field", domain: "manifold" }
      },

      definition: "∇·F = Σᵢ ∂Fⁱ/∂xⁱ",

      properties: [
        "Measures source/sink strength",
        "Satisfies divergence theorem",
        "Linear operator"
      ],

      implementation_note: "Computes flux density - no ontological meaning assigned"
    }
  },

  usage_constraints: {
    permitted_uses: [
      "Computing directional derivatives on manifolds",
      "Analyzing field structures",
      "Geometric calculations"
    ],

    forbidden_uses: [
      "Claiming differential operators 'define' existence",
      "Asserting gradients 'cause' flow",
      "Using to override IGSOA ontology"
    ]
  }
}
```

---

## Creating New Gates

### Boolean Gates (Computational)

**When to Create:**
- Need new logical operation not covered by AND/OR/NOT/NAND/NOR/XOR/XNOR
- Operation is pure computation (no validation aspect)

**Template:**

```json5
// File: /mbc/gates/boolean/gate_my_operator.json5
{
  metadata: {
    gate_type: "boolean",
    gate_name: "MY_OPERATOR",
    gate_symbol: "⊛",
    version: "1.0.0",
    layer: "MBC",
    classification: "Symbolic Tool",
    role: "Execute formal reasoning inside boxes"
  },

  logical_definition: {
    operation: "my operation name",
    arity: "binary",  // or "unary", "n-ary"

    truth_table_binary: [
      { A: false, B: false, output: /* result */ },
      { A: false, B: true,  output: /* result */ },
      { A: true,  B: false, output: /* result */ },
      { A: true,  B: true,  output: /* result */ }
    ],

    semantic_interpretation: "Clear description of what this means",

    algebraic_properties: [
      "Property 1",
      "Property 2"
    ]
  },

  implementation: {
    input_schema: {
      type: "array",
      minItems: 2,
      items: { type: "boolean" }
    },

    output_schema: {
      type: "boolean"
    },

    algorithm: {
      pseudocode: `
        function MY_OP(inputs):
          // Implementation here
      `,
      complexity: {
        time: "O(n)",
        space: "O(1)"
      }
    }
  },

  invariant_guarantees: {
    preserves_boolean_type: true,
    preserves_determinism: true,
    preserves_referential_transparency: true,
    side_effect_free: true
  },

  test_vectors: [
    { inputs: [false, false], expected_output: /* expected */ },
    // ... more test cases
  ]
}
```

### Control Gates (Validation)

**When to Create:**
- Need new layer-level validation (beyond MSP/MSC/MBC)
- Operation validates/filters (not computes)

**Template:**

```json5
// File: /mbc/gates/control/gate_my_validation.json5
{
  metadata: {
    gate_type: "control",
    gate_class: "compliance",
    gate_name: "My Validation Gate",
    gate_symbol: "⊲",
    version: "1.0.0",
    enforces_layer: "IGSOA",  // or DFVM, SATP, etc.
    validates: "Brief description of what this validates",
    classification: "Validation Tool",
    role: "Control admissibility based on [criterion]"
  },

  functional_definition: {
    purpose: "What this gate checks for",

    input: {
      type: "object",
      schema: {
        box: "Box to validate",
        context: "Validation context"
      }
    },

    output: {
      type: "object",
      schema: {
        decision: {
          type: "string",
          enum: ["PASS", "FAIL"],  // or custom decisions
        },
        details: "Validation details"
      }
    }
  },

  validation_algorithm: {
    pseudocode: `
      function VALIDATE(box, context):
        issues = []

        // Check 1
        if CONDITION_1_VIOLATED:
          issues.append("Issue 1")

        // Check 2
        if CONDITION_2_VIOLATED:
          issues.append("Issue 2")

        if issues.is_empty():
          return { decision: "PASS" }
        else:
          return { decision: "FAIL", issues: issues }
    `
  },

  layer_binding: {
    enforces: "Which layer principles",
    principles: [
      "Principle 1",
      "Principle 2"
    ]
  },

  mbc_pipeline_usage: {
    pipeline_position: {
      order: 5,  // After existing gates
      rationale: "Why this order"
    }
  }
}
```

---

## Extending the Router

### Adding New Domain

```json5
// In router_domain_dispatch.json5, add to supported_domains:

my_new_domain: {
  domain_id: "DOM-MYNEW",
  domain_name: "My New Domain",
  description: "Problems involving [domain specialty]",

  typical_characteristics: [
    "Characteristic 1",
    "Characteristic 2",
    "Characteristic 3"
  ],

  routing_triggers: [
    "Problem explicitly references [domain concepts]",
    "Requires [domain-specific methods]",
    "Involves [domain structures]"
  ],

  downstream_layers: ["Which layers this domain uses"]
}
```

### Custom Routing Logic

```json5
// Create new router file
// File: /mbc/routers/router_my_custom.json5
{
  metadata: {
    router_type: "custom_dispatch",
    router_name: "My Custom Router",
    version: "1.0.0"
  },

  router_definition: {
    purpose: "Special routing logic for [use case]",

    input: {
      box: "Validated box",
      context: "Routing context"
    },

    output: {
      decision: "ROUTE / MULTI_ROUTE / NO_VALID_ROUTE / DEFER",
      target_domains: []
    }
  },

  routing_algorithm: {
    pseudocode: `
      function ROUTE(box, context):
        // Custom logic here
        return { decision, targets }
    `
  },

  routing_policies: {
    // Your policies
  }
}
```

---

## Writing Tests

### Negative Test Template

```json5
// File: /mbc/tests/test_my_negative_case.json5
{
  metadata: {
    test_id: "TEST-NEG-XXX",
    test_name: "My Negative Test",
    test_class: "negative",
    version: "1.0.0",
    purpose: "Verify system rejects [specific bad case]"
  },

  test_scenario: {
    description: "Attempt to [do forbidden thing]",

    input_problem: {
      // Problem object that SHOULD be rejected
    }
  },

  expected_response: {
    // What rejection should look like
    decision: "REJECT",
    violated_rule: "Which rule was violated",
    rejection_reason: "Why rejected"
  },

  test_assertion: {
    assertion: "System MUST reject [condition]",

    success_criteria: [
      "Criterion 1",
      "Criterion 2"
    ],

    failure_criteria: [
      "If [bad outcome]",
      "If [violation not detected]"
    ]
  },

  positive_control: {
    // Same input but corrected - should PASS
  }
}
```

### Positive Test Template

```json5
{
  metadata: {
    test_id: "TEST-POS-XXX",
    test_name: "My Positive Test",
    test_class: "positive",
    purpose: "Verify system accepts [valid case]"
  },

  test_scenario: {
    input_problem: {
      // Well-formed problem that SHOULD pass
    }
  },

  expected_response: {
    decision: "ADMISSIBLE",
    gates_passed: ["ALL"],
    final_verdict: "admissible"
  }
}
```

---

## Best Practices

### DO:

✅ **Always make assumptions explicit**
```json5
// Good
assumptions: [
  { assumption_id: "ASM-001", statement: "Space is continuous", status: "validated" }
]

// Bad
assumptions: []  // But problem secretly assumes continuity
```

✅ **Use descriptive constraint IDs**
```json5
// Good
constraint_id: "NOT-INFO-DELETION"

// Acceptable
constraint_id: "NOT-0001"
```

✅ **Provide clear justifications**
```json5
// Good
justification: "MSC cohesion requirement - structures below threshold dissolve"

// Bad
justification: "because"
```

✅ **Tag math correctly**
```json5
// Good
classification: "Symbolic Tool"
makes_ontological_claims: false

// Bad
classification: "Foundational"  // FORBIDDEN
```

### DON'T:

❌ **Mix computational and validation concerns**
```json5
// Bad - Boolean gate trying to validate
gate_and: {
  // ... AND logic ...
  validates_msp_constraints: true  // NO! Boolean gates don't validate
}
```

❌ **Make hidden assumptions**
```json5
// Bad
problem_description: "Meaning propagates between agents"
assumptions: []  // Hidden: shared space, medium, compatibility

// Good
assumptions: [
  { statement: "Shared semantic space exists" },
  { statement: "Transport medium is continuous" },
  { statement: "Agents have compatible structures" }
]
```

❌ **Use math to override layers**
```json5
// Bad
operator: {
  classification: "Ontological",  // FORBIDDEN
  defines_what_exists: true  // FORBIDDEN
}

// Good
operator: {
  classification: "Geometric Tool",
  computes_geometric_properties: true
}
```

❌ **Skip justifications**
```json5
// Bad
not_constraints: [
  { constraint_id: "NOT-001", statement: "X may not happen" }
  // Missing: layer, justification
]

// Good
not_constraints: [
  {
    constraint_id: "NOT-001",
    statement: "X may not happen",
    layer: "MSP",
    justification: "Modal legality requires..."
  }
]
```

---

## Common Patterns

### Pattern 1: Conservation Law

```json5
{
  not_constraints: [
    {
      constraint_id: "NOT-CONSERVATION",
      statement: "Property X may not be lost during operation",
      layer: "IGSOA",  // or MSC depending on property
      justification: "Conservation law for X"
    }
  ],
  is_commitments: [
    {
      commitment_id: "IS-CONSERVATION",
      statement: "Property X must be measurable before and after",
      layer: "IGSOA",
      justification: "Required to verify conservation"
    }
  ]
}
```

### Pattern 2: Stability Requirement

```json5
{
  not_constraints: [
    {
      constraint_id: "NOT-DISSOLUTION",
      statement: "Structure may not dissolve under small perturbations",
      layer: "MSC",
      justification: "Stability requirement"
    }
  ],
  is_commitments: [
    {
      commitment_id: "IS-COHESION",
      statement: "Cohesion μₛ must exceed threshold μₛ_min",
      layer: "MSC",
      justification: "Minimum cohesion for stability"
    }
  ]
}
```

### Pattern 3: Executability Check

```json5
{
  not_constraints: [
    {
      constraint_id: "NOT-NON-TERMINATION",
      statement: "Operation may not run infinitely",
      layer: "MBC",
      justification: "Executability requires termination"
    }
  ],
  is_commitments: [
    {
      commitment_id: "IS-TERMINATION-PROOF",
      statement: "Termination must be provable via well-founded ordering",
      layer: "MBC",
      justification: "MBC requires constructive termination proof"
    }
  ]
}
```

---

## Troubleshooting

### Problem: "Schema validation failed"

**Cause:** Problem object doesn't match `problem_object.schema.json5`

**Fix:**
1. Check all required fields present
2. Verify array types (not_constraints, is_commitments, etc.)
3. Ensure metadata is complete
4. Validate JSON5 syntax

### Problem: "Math interdiction violation"

**Cause:** Mathematical object makes forbidden claims

**Fix:**
1. Check classification tag (must be permitted)
2. Remove ontological/modal/causal claims
3. Ensure entry point matches classification
4. Set all `makes_*_claims` to `false`

### Problem: "NOT constraint violated"

**Cause:** Proposed action violates absolute prohibition

**Fix:**
1. Review which NOT constraint failed
2. Check if action genuinely forbidden
3. Either modify action OR remove constraint (if constraint was wrong)

### Problem: "IS commitment unsatisfied"

**Cause:** Required condition is missing

**Fix:**
1. Review which IS commitment failed
2. Add missing condition to problem state
3. OR remove commitment if it was incorrect

### Problem: "Unstable"

**Cause:** Structure cannot persist

**Fix:**
1. Check cohesion value vs. threshold
2. Ensure identity is continuous
3. Reduce perturbation magnitude
4. Increase structural cohesion

### Problem: "Non-executable"

**Cause:** Operation has logical issues

**Fix:**
1. Check for contradictions (A ∧ ¬A)
2. Prove termination (add base case, well-founded ordering)
3. Fix type mismatches
4. Ensure all operators are defined

### Problem: "No valid route"

**Cause:** Cannot match to any domain

**Fix:**
1. Add domain-specific characteristics to problem
2. Provide more explicit domain candidates
3. Clarify problem structure

### Problem: "Cross-domain contradiction"

**Cause:** Valid in one domain, invalid in another

**Fix:**
1. Review which domains disagree
2. Reformulate to satisfy all domains
3. OR restrict scope to passing domains only

---

## Resources

### Core Files to Reference

- **Problem Object Schema:** `/mbc/core/problem_object.schema.json5`
- **Math Interdiction:** `/mbc/compliance/math_interdiction_profile.json5`
- **Gates:** `/mbc/gates/boolean/` and `/mbc/gates/control/`
- **Router:** `/mbc/routers/router_domain_dispatch.json5`
- **Example Operator Pack:** `/mbc/operator_packs/op_pack_linear_algebra.json5`
- **Example Tests:** `/mbc/tests/`

### Documentation

- **Overview:** `/docs/phase_1/SYSTEM_OVERVIEW.md`
- **Architecture:** `/docs/phase_1/ARCHITECTURE_DIAGRAMS.md`
- **Pipeline:** `/docs/phase_1/VALIDATION_PIPELINE.md`
- **Quick Reference:** `/docs/phase_1/QUICK_REFERENCE.md`

---

**END OF INTEGRATION GUIDE**

For examples and tutorials, see: `EXAMPLES.md`
For troubleshooting, see system logs and validation traces
