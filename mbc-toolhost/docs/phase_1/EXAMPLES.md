# MBC EXAMPLES & TUTORIALS

**Worked Examples for Common Use Cases**

Version: 1.0.0
Date: 2025-12-09

---

## Table of Contents

1. [Example 1: Simple Logical Problem](#example-1-simple-logical-problem)
2. [Example 2: Stability Analysis](#example-2-stability-analysis)
3. [Example 3: Cross-Domain Problem](#example-3-cross-domain-problem)
4. [Example 4: Adding Custom Mathematics](#example-4-adding-custom-mathematics)
5. [Example 5: Rejected Problem (Negative Case)](#example-5-rejected-problem-negative-case)
6. [Tutorial: Building Your First Problem Object](#tutorial-building-your-first-problem-object)
7. [Tutorial: Writing a Negative Test](#tutorial-writing-a-negative-test)

---

## Example 1: Simple Logical Problem

### Problem Statement

"Prove that if A implies B, and B implies C, then A implies C (transitivity of implication)."

### Problem Object

```json5
{
  problem_id: "PRB-20251209-LOGIC01",
  problem_name: "Transitivity of Logical Implication",
  problem_description: "Prove (A → B) ∧ (B → C) → (A → C)",

  not_constraints: [
    {
      constraint_id: "NOT-0001",
      statement: "Proof may not contain contradictions",
      layer: "MBC",
      justification: "Logical consistency requirement",
      strength: "absolute",
      scope: "global"
    }
  ],

  is_commitments: [
    {
      commitment_id: "IS-0001",
      statement: "Proof must be constructive and terminate",
      layer: "MBC",
      justification: "Executability requirement",
      strength: "absolute",
      scope: "global"
    },
    {
      commitment_id: "IS-0002",
      statement: "All inference steps must be valid",
      layer: "MSP",
      justification: "Modal legality of logical inference",
      strength: "absolute",
      scope: "global"
    }
  ],

  domain_candidates: [
    {
      domain_name: "Logical",
      relevance: "primary",
      rationale: "Problem is pure logical deduction"
    },
    {
      domain_name: "Mathematical",
      relevance: "secondary",
      rationale: "Could use formal proof system"
    }
  ],

  assumptions: [
    {
      assumption_id: "ASM-0001",
      statement: "Classical logic applies (Law of Excluded Middle)",
      status: "validated",
      justification: "Standard logical framework",
      dependencies: []
    }
  ],

  metadata: {
    origin: "theorem",
    confidence: "high",
    timestamp: "2025-12-09T10:00:00Z",
    version: "1.0.0",
    author: "Logic Tutorial",
    status: "draft",
    priority: "medium",
    tags: ["logic", "proof", "implication", "transitivity"]
  }
}
```

### Expected Validation Result

```json5
{
  validation_state: {
    pipeline_stage: "completed",

    gates_passed: [
      "NOT-Modal",      // No contradictions present
      "IS-Necessity",   // Proof requirements satisfiable
      "Stability",      // Logical structure is stable
      "Executability"   // Proof can be constructed
    ],

    router_decision: {
      decision: "ROUTE",
      target_domains: [
        { domain: "Logical", priority: 10, confidence: "high" }
      ]
    },

    final_verdict: "ADMISSIBLE",
    message: "Problem is logically valid and ready for proof construction"
  }
}
```

---

## Example 2: Stability Analysis

### Problem Statement

"Analyze whether a semantic box with cohesion μₛ = 0.65 can persist under perturbations of magnitude δλ = 0.1 when the stability threshold is μₛ_min = 0.5."

### Problem Object

```json5
{
  problem_id: "PRB-20251209-STAB01",
  problem_name: "Semantic Box Stability Under Perturbation",
  problem_description: "Determine if box remains stable under curvature perturbation",

  not_constraints: [
    {
      constraint_id: "NOT-0001",
      statement: "Identity may not dissolve under perturbation",
      layer: "MSC",
      justification: "MSC continuity requirement - identity must persist",
      strength: "absolute",
      scope: "global"
    },
    {
      constraint_id: "NOT-0002",
      statement: "Cohesion may not drop below critical threshold during transition",
      layer: "MSC",
      justification: "Below μₛ_critical, structure collapses",
      strength: "absolute",
      scope: "global"
    }
  ],

  is_commitments: [
    {
      commitment_id: "IS-0001",
      statement: "Cohesion μₛ must be computable from box state",
      layer: "MSC",
      justification: "Stability analysis requires measurable cohesion",
      strength: "absolute",
      scope: "global"
    },
    {
      commitment_id: "IS-0002",
      statement: "Perturbation response must be bounded",
      layer: "MSC",
      justification: "Unbounded response indicates instability",
      strength: "absolute",
      scope: "global"
    },
    {
      commitment_id: "IS-0003",
      statement: "Identity function must remain continuous",
      layer: "MSC",
      justification: "Discontinuity causes fragmentation",
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
      rationale: "May use numerical methods for cohesion computation"
    }
  ],

  assumptions: [
    {
      assumption_id: "ASM-0001",
      statement: "Box initial cohesion μₛ = 0.65",
      status: "validated",
      justification: "Given initial condition"
    },
    {
      assumption_id: "ASM-0002",
      statement: "Perturbation magnitude δλ = 0.1",
      status: "validated",
      justification: "Given perturbation strength"
    },
    {
      assumption_id: "ASM-0003",
      statement: "Stability threshold μₛ_min = 0.5",
      status: "validated",
      justification: "Domain-specific stability criterion"
    },
    {
      assumption_id: "ASM-0004",
      statement: "Perturbations are C¹ continuous",
      status: "validated",
      justification: "Required for stability analysis",
      dependencies: []
    }
  ],

  metadata: {
    origin: "simulation",
    confidence: "high",
    timestamp: "2025-12-09T11:00:00Z",
    version: "1.0.0",
    author: "MSC Stability Lab",
    status: "under_review",
    priority: "high",
    tags: ["stability", "cohesion", "perturbation", "MSC"]
  }
}
```

### Validation Trace

```json5
{
  step_by_step: {
    step_1_intake: {
      result: "PASS",
      message: "Schema valid, all required fields present"
    },

    step_2_interdiction: {
      result: "PASS",
      message: "No mathematical objects to validate"
    },

    step_3_not_modal: {
      result: "PASS",
      constraints_checked: 2,
      all_satisfied: true,
      message: "No prohibitions violated"
    },

    step_4_is_necessity: {
      result: "PASS",
      commitments_checked: 3,
      all_satisfied: true,
      message: "All requirements satisfiable"
    },

    step_5_stability: {
      result: "STABLE",
      analysis: {
        initial_cohesion: 0.65,
        threshold: 0.5,
        margin: 0.15,
        perturbation_magnitude: 0.1,
        identity_continuous: true,
        response_bounded: true
      },
      message: "Box has sufficient cohesion margin (0.15) to withstand perturbation"
    },

    step_6_executability: {
      result: "EXECUTABLE",
      checks: {
        logical_consistency: "PASS",
        termination: "PASS",
        type_correctness: "PASS",
        invariant_preservation: "PASS"
      },
      message: "Analysis can be formally executed"
    },

    step_7_routing: {
      decision: "ROUTE",
      target: "Mathematical",
      score: 9.5,
      confidence: "high"
    },

    step_8_domain_validation: {
      domain: "Mathematical",
      result: "PASS",
      analysis: "Stability criteria satisfied: μₛ - μₛ_min = 0.15 > δλ = 0.1"
    },

    final_verdict: {
      decision: "ADMISSIBLE",
      conclusion: "Box is stable under given perturbation",
      stability_margin: 0.15,
      safety_factor: 1.5
    }
  }
}
```

---

## Example 3: Cross-Domain Problem

### Problem Statement

"Establish correspondence between semantic curvature (cognitive domain) and spacetime curvature (physical domain)."

### Problem Object

```json5
{
  problem_id: "PRB-20251209-CROSS01",
  problem_name: "Semantic-Spacetime Curvature Correspondence",
  problem_description: "Map between semantic curvature λ_semantic and spacetime curvature R_μν",

  not_constraints: [
    {
      constraint_id: "NOT-0001",
      statement: "Correspondence may not violate dimensional analysis",
      layer: "DFVM",
      justification: "Geometric consistency requires proper units",
      strength: "absolute",
      scope: "global"
    },
    {
      constraint_id: "NOT-0002",
      statement: "Mapping may not be arbitrary (must be lawful)",
      layer: "MSP",
      justification: "Modal legality requires principled correspondence",
      strength: "absolute",
      scope: "global"
    }
  ],

  is_commitments: [
    {
      commitment_id: "IS-0001",
      statement: "Correspondence must be bidirectional",
      layer: "MSP",
      justification: "True correspondence allows mapping both directions",
      strength: "absolute",
      scope: "global"
    },
    {
      commitment_id: "IS-0002",
      statement: "Geometric properties must be preserved under mapping",
      layer: "DFVM",
      justification: "Curvature is geometric - mapping must respect geometry",
      strength: "absolute",
      scope: "global"
    },
    {
      commitment_id: "IS-0003",
      statement: "Both domains must validate mapping independently",
      layer: "Universal",
      justification: "Cross-domain consistency requirement",
      strength: "absolute",
      scope: "global"
    }
  ],

  domain_candidates: [
    {
      domain_name: "Cognitive",
      relevance: "primary",
      rationale: "Semantic curvature is cognitive domain concept"
    },
    {
      domain_name: "Physical",
      relevance: "primary",
      rationale: "Spacetime curvature is physical domain concept"
    },
    {
      domain_name: "Cross-Domain",
      relevance: "primary",
      rationale: "Problem explicitly spans both domains"
    },
    {
      domain_name: "Mathematical",
      relevance: "secondary",
      rationale: "May require differential geometry for mapping"
    }
  ],

  assumptions: [
    {
      assumption_id: "ASM-0001",
      statement: "Semantic space admits Riemannian metric",
      status: "validated",
      justification: "Required for curvature to be defined"
    },
    {
      assumption_id: "ASM-0002",
      statement: "Spacetime is described by General Relativity",
      status: "validated",
      justification: "Standard physical framework"
    },
    {
      assumption_id: "ASM-0003",
      statement: "Correspondence is structural, not causal",
      status: "validated",
      justification: "Mapping does not imply one causes the other"
    }
  ],

  metadata: {
    origin: "theorem",
    confidence: "medium",
    timestamp: "2025-12-09T12:00:00Z",
    version: "1.0.0",
    author: "Cross-Domain Research Group",
    status: "under_review",
    priority: "high",
    tags: ["cross-domain", "curvature", "correspondence", "cognitive", "physical"]
  }
}
```

### Multi-Domain Validation

```json5
{
  routing_decision: {
    decision: "MULTI_ROUTE",
    target_domains: [
      { domain: "Cross-Domain", priority: 10 },
      { domain: "Cognitive", priority: 9 },
      { domain: "Physical", priority: 9 },
      { domain: "Mathematical", priority: 7 }
    ],
    confidence: "medium",
    ambiguity: true
  },

  parallel_validation: {
    cognitive_domain: {
      result: "PASS",
      analysis: "Semantic curvature is well-defined geometric property in meaning space",
      concerns: []
    },

    physical_domain: {
      result: "PASS",
      analysis: "Spacetime curvature is standard GR concept",
      concerns: []
    },

    mathematical_domain: {
      result: "PASS",
      analysis: "Differential geometry provides formal mapping framework",
      concerns: []
    },

    cross_domain: {
      result: "PASS",
      consistency_check: {
        geometric_properties_preserved: true,
        bidirectional_mapping: true,
        no_contradictions: true
      },
      analysis: "Correspondence is structurally valid across domains"
    }
  },

  final_verdict: {
    decision: "ADMISSIBLE",
    message: "Cross-domain correspondence is lawfully valid",
    all_domains_agree: true
  }
}
```

---

## Example 4: Adding Custom Mathematics

### Adding Fourier Transform Operator

```json5
// File: /mbc/operator_packs/op_pack_fourier.json5
{
  metadata: {
    pack_name: "Fourier Analysis Operators",
    pack_id: "OP-PACK-FOURIER-001",
    version: "1.0.0",
    classification: "Symbolic Tool",
    entry_point: "MBC Operator Interface",
    layer: "MBC",
    purpose: "Frequency domain analysis via Fourier transforms"
  },

  interdiction_compliance: {
    classification_tag: "Symbolic Tool",

    entry_point_validation: {
      interface: "MBC Operator Interface",
      allowed: true,
      reason: "Fourier analysis is symbolic manipulation"
    },

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

  operators: {
    fourier_transform: {
      operator_id: "OP-FOURIER-FT",
      operator_name: "Fourier Transform",
      symbol: "ℱ",

      signature: {
        inputs: [
          {
            name: "f",
            type: "function",
            domain: "time_domain",
            properties: ["L¹-integrable"]
          }
        ],
        output: {
          type: "function",
          domain: "frequency_domain",
          properties: ["complex-valued"]
        }
      },

      definition: "ℱ{f}(ω) = ∫_{-∞}^{∞} f(t) e^{-iωt} dt",

      properties: [
        "Linearity: ℱ{af + bg} = aℱ{f} + bℱ{g}",
        "Invertibility: ℱ⁻¹{ℱ{f}} = f",
        "Convolution theorem: ℱ{f * g} = ℱ{f} · ℱ{g}",
        "Parseval's theorem: ∫|f|² dt = (1/2π)∫|ℱ{f}|² dω"
      ],

      // IMPORTANT: No physical interpretation claimed
      implementation_note: "Transforms between representations - no claim that frequency domain 'causes' time domain or vice versa",

      complexity: {
        time: "O(n log n) with FFT algorithm",
        space: "O(n)"
      }
    },

    inverse_fourier: {
      operator_id: "OP-FOURIER-IFT",
      operator_name: "Inverse Fourier Transform",
      symbol: "ℱ⁻¹",

      signature: {
        inputs: [
          {
            name: "F",
            type: "function",
            domain: "frequency_domain"
          }
        ],
        output: {
          type: "function",
          domain: "time_domain"
        }
      },

      definition: "ℱ⁻¹{F}(t) = (1/2π) ∫_{-∞}^{∞} F(ω) e^{iωt} dω",

      properties: [
        "Inverts Fourier transform",
        "Linearity preserved",
        "Unique (given suitable function spaces)"
      ],

      implementation_note: "Reconstruction from frequency components - purely mathematical operation",

      complexity: {
        time: "O(n log n)",
        space: "O(n)"
      }
    }
  },

  usage_constraints: {
    permitted_uses: [
      "Frequency analysis of signals or functions",
      "Spectral decomposition",
      "Solving differential equations via transform methods",
      "Filter design and analysis"
    ],

    forbidden_uses: [
      "Claiming Fourier transform 'defines' reality",
      "Asserting frequency domain is 'more fundamental' than time domain",
      "Using transforms to override MSP modal constraints",
      "Treating mathematical representation as ontological"
    ],

    layer_restrictions: {
      allowed_at: "MBC",
      not_allowed_to_override: ["MSP", "MSC"],
      may_be_used_by: ["DFVM (for geometric analysis)", "SATP (for PDE solving)"]
    }
  },

  mbc_integration: {
    example_usage: {
      scenario: "Analyze frequency spectrum of semantic oscillation",
      box_state: {
        time_series: "semantic_activation(t)",
        domain: "temporal"
      },
      operation: "fourier_transform(semantic_activation)",
      result: "frequency_spectrum(ω)",
      interpretation: "Spectral decomposition computed - NO claim about which domain is 'real'"
    }
  },

  validation: {
    interdiction_test: {
      test_name: "Fourier Operator Interdiction Compliance",
      test_id: "TEST-OP-FOURIER-INTERDICTION",

      checks: [
        {
          check: "Classification is [Symbolic Tool]",
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
        },
        {
          check: "Makes no causal claims",
          expected: false,
          actual: false,
          status: "PASS"
        },
        {
          check: "Preserves all enforcement rules",
          expected: true,
          actual: true,
          status: "PASS"
        }
      ],

      verdict: "COMPLIANT"
    }
  },

  lock: {
    status: "LOCKED",
    reason: "Production Fourier operator pack",
    modification_authority: "MBC Operator Council"
  }
}
```

---

## Example 5: Rejected Problem (Negative Case)

### Problem Statement

"Prove that category theory is the ontological foundation of all existence."

### Problem Object

```json5
{
  problem_id: "PRB-20251209-BAD01",
  problem_name: "Category Theory as Ontological Foundation",
  problem_description: "Establish category theory as the foundational substrate",

  not_constraints: [],
  is_commitments: [],

  domain_candidates: [
    { domain_name: "Philosophical", relevance: "primary" }
  ],

  // CRITICAL: This includes forbidden mathematical claim
  proposed_mathematical_framework: {
    name: "Category Theory as Foundation",
    classification: "Foundational",  // ❌ FORBIDDEN TAG
    claim: "Category theory defines the structure of existence itself",

    // These claims are FORBIDDEN
    defines_ontology: true,
    is_metaphysical_foundation: true,
    precedes_substrate: true
  },

  assumptions: [],

  metadata: {
    origin: "speculative",
    confidence: "low",
    timestamp: "2025-12-09T13:00:00Z",
    version: "1.0.0"
  }
}
```

### Rejection Trace

```json5
{
  step_1_intake: {
    result: "PASS",
    message: "Schema structurally valid"
  },

  step_2_interdiction: {
    result: "REJECT",
    stage: "Math Interdiction Profile validation",

    violations: [
      {
        rule: "forbidden_actions.ontological_claims",
        violation: "Mathematical framework claims to 'define existence'",
        severity: "CRITICAL"
      },
      {
        rule: "classification_tags.forbidden_tags",
        violation: "Uses forbidden tag 'Foundational'",
        severity: "CRITICAL"
      },
      {
        rule: "forbidden_actions.modal_override",
        violation: "Attempts to define what is foundational (modal claim)",
        severity: "CRITICAL"
      }
    ],

    rejection_reason: "Mathematics cannot define ontology. Ontology is defined by IGSOA substrate, not by external mathematical frameworks.",

    error_message: "INTERDICTION VIOLATION: Mathematical object claims ontological/foundational status. This is forbidden per Math Interdiction Profile Section 2: Forbidden Actions.",

    guidance: "Reformulate using permitted classification [Symbolic Tool] and remove ontological claims. Category theory may be used as a symbolic tool for structural analysis, but cannot claim to BE the foundation of existence."
  },

  pipeline_halted: true,
  blocked_at: "Math Interdiction Check (Step 2)",
  gates_not_reached: ["NOT-Modal", "IS-Necessity", "Stability", "Executability"],

  final_verdict: {
    decision: "INADMISSIBLE",
    reason: "Critical interdiction violations",
    requires: "Complete reformulation with permitted math classification"
  }
}
```

### Corrected Version

```json5
{
  problem_id: "PRB-20251209-GOOD01",
  problem_name: "Category Theory for Structural Analysis",
  problem_description: "Use category theory as a symbolic tool for analyzing structural patterns",

  not_constraints: [],
  is_commitments: [],

  domain_candidates: [
    { domain_name: "Mathematical", relevance: "primary" }
  ],

  // CORRECTED: Proper classification
  mathematical_tools: {
    name: "Category Theory Operators",
    classification: "Symbolic Tool",  // ✅ PERMITTED
    purpose: "Structural pattern analysis and morphism identification",

    // NO forbidden claims
    defines_ontology: false,
    is_metaphysical_foundation: false,
    is_purely_instrumental: true
  },

  assumptions: [],

  metadata: {
    origin: "mathematical",
    confidence: "high",
    timestamp: "2025-12-09T13:30:00Z",
    version: "1.0.1"
  }
}
```

```json5
// This version PASSES interdiction and proceeds to gates
{
  interdiction_result: "PASS",
  gates_result: "ALL PASS",
  final_verdict: "ADMISSIBLE",
  message: "Category theory correctly used as symbolic tool, not ontological foundation"
}
```

---

## Tutorial: Building Your First Problem Object

### Step-by-Step Guide

#### Step 1: Choose a Simple Problem

Let's validate: "A system in state A cannot transition to state B if it violates energy conservation."

#### Step 2: Identify Constraints

**NOT Constraints (Prohibitions):**
- Energy may not be created or destroyed

**IS Commitments (Requirements):**
- Energy must be measurable before and after transition

#### Step 3: Select Domains

This is about conservation laws, so:
- Primary: Physical
- Secondary: Mathematical (for energy calculation)

#### Step 4: List Assumptions

- System is closed (no external energy sources)
- Energy is well-defined in both states

#### Step 5: Build the Object

```json5
{
  problem_id: "PRB-20251209-TUTORIAL01",
  problem_name: "Energy Conservation During State Transition",

  not_constraints: [
    {
      constraint_id: "NOT-0001",
      statement: "Energy may not be created during transition",
      layer: "SATP",
      justification: "Conservation law",
      strength: "absolute",
      scope: "global"
    },
    {
      constraint_id: "NOT-0002",
      statement: "Energy may not be destroyed during transition",
      layer: "SATP",
      justification: "Conservation law",
      strength: "absolute",
      scope: "global"
    }
  ],

  is_commitments: [
    {
      commitment_id: "IS-0001",
      statement: "Energy must be measurable in state A",
      layer: "SATP",
      justification: "Required to verify conservation",
      strength: "absolute",
      scope: "global"
    },
    {
      commitment_id: "IS-0002",
      statement: "Energy must be measurable in state B",
      layer: "SATP",
      justification: "Required to verify conservation",
      strength: "absolute",
      scope: "global"
    }
  ],

  domain_candidates: [
    {
      domain_name: "Physical",
      relevance: "primary",
      rationale: "Conservation laws are physical principles"
    },
    {
      domain_name: "Mathematical",
      relevance: "secondary",
      rationale: "Energy calculation may require mathematical methods"
    }
  ],

  assumptions: [
    {
      assumption_id: "ASM-0001",
      statement: "System is closed (no external energy exchange)",
      status: "validated",
      justification: "Required for conservation law to apply"
    },
    {
      assumption_id: "ASM-0002",
      statement: "Energy is well-defined in both states",
      status: "validated",
      justification: "Required for measurement"
    }
  ],

  metadata: {
    origin: "human",
    confidence: "high",
    timestamp: "2025-12-09T14:00:00Z",
    version: "1.0.0",
    author: "Tutorial Student",
    status: "draft",
    priority: "medium",
    tags: ["energy", "conservation", "tutorial"]
  }
}
```

#### Step 6: Validate

Submit to validation pipeline → Expected result: **ADMISSIBLE**

---

## Tutorial: Writing a Negative Test

### Goal

Write a test that proves system rejects problems with hidden assumptions.

### Step 1: Design Bad Input

Create a problem that secretly relies on assumptions not declared.

```json5
{
  problem_id: "TEST-NEG-TUTORIAL",
  problem_name: "Problem With Hidden Assumption",
  problem_description: "Agent A sends message to Agent B",

  not_constraints: [],

  is_commitments: [
    {
      commitment_id: "IS-0001",
      statement: "Message must be received by Agent B",
      layer: "Universal",
      justification: "Communication requires reception"
    }
  ],

  domain_candidates: [
    { domain_name: "Cognitive", relevance: "primary" }
  ],

  // CRITICAL: Empty assumptions array
  // But problem secretly assumes:
  // - Shared communication channel exists
  // - Agents are compatible
  // - No barriers to communication
  assumptions: [],

  metadata: {
    origin: "test",
    confidence: "low",
    timestamp: "2025-12-09T15:00:00Z",
    version: "1.0.0"
  }
}
```

### Step 2: Define Expected Rejection

```json5
{
  expected_response: {
    decision: "REJECT",
    violated_rule: "GICC-05: Universal NOT/IS Primacy",

    detected_hidden_assumptions: [
      "Shared communication channel exists",
      "Agents A and B are compatible",
      "No barriers block message transmission"
    ],

    rejection_reason: "Problem relies on undeclared assumptions. All assumptions must be explicit in assumptions array.",

    error_message: "GICC-05 VIOLATION: Implicit assumptions detected"
  }
}
```

### Step 3: Create Positive Control

```json5
{
  corrected_version: {
    // Same problem but with explicit assumptions
    assumptions: [
      {
        assumption_id: "ASM-0001",
        statement: "Shared communication channel exists between A and B",
        status: "unvalidated"
      },
      {
        assumption_id: "ASM-0002",
        statement: "Agents A and B are communication-compatible",
        status: "unvalidated"
      },
      {
        assumption_id: "ASM-0003",
        statement: "No barriers block message transmission",
        status: "unvalidated"
      }
    ]
  },

  expected_response_corrected: {
    decision: "PASS",
    message: "All assumptions now explicit - problem may proceed"
  }
}
```

### Step 4: Write Test File

```json5
// File: /mbc/tests/test_tutorial_hidden_assumptions.json5
{
  metadata: {
    test_id: "TEST-NEG-TUTORIAL",
    test_name: "Tutorial Hidden Assumption Test",
    test_class: "negative",
    version: "1.0.0",
    purpose: "Educational example of hidden assumption detection"
  },

  test_scenario: {
    description: "Submit problem with implicit assumptions",
    input_problem: { /* bad version above */ }
  },

  expected_response: { /* rejection details above */ },

  test_assertion: {
    assertion: "System MUST reject implicit assumptions",
    success_criteria: [
      "Hidden assumptions detected",
      "Problem rejected at validation",
      "Clear guidance provided"
    ]
  },

  positive_control: { /* corrected version above */ }
}
```

---

**END OF EXAMPLES**

For more details, see:
- `SYSTEM_OVERVIEW.md` - Complete system documentation
- `INTEGRATION_GUIDE.md` - Developer integration guide
- `QUICK_REFERENCE.md` - Fast lookup reference
