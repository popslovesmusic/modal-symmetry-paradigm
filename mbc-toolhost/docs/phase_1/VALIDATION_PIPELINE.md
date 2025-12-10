# VALIDATION PIPELINE FLOWCHART

**Detailed Step-by-Step Processing Guide**

Version: 1.0.0
Date: 2025-12-09

---

## Complete Validation Flow

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    START: USER SUBMITS PROBLEM                    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────┐
│ STEP 1: INTAKE & SCHEMA VALIDATION                               │
│ Location: problem_object.schema.json5                            │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ Checks:                                                           │
│ ☐ problem_id format valid? (PRB-YYYYMMDD-XXXXXX)                 │
│ ☐ not_constraints array present? (may be empty)                  │
│ ☐ is_commitments array present? (may be empty)                   │
│ ☐ domain_candidates array present? (min 1 item)                  │
│ ☐ assumptions array present? (may be empty)                      │
│ ☐ metadata complete? (origin, confidence, timestamp, version)    │
│                                                                   │
│ Validation:                                                       │
│ • Each constraint has: ID, statement, layer, justification       │
│ • Each commitment has: ID, statement, layer, justification       │
│ • Each domain has: name, relevance                               │
│ • Each assumption has: ID, statement, status                     │
│                                                                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
            ┌───────────┴──────────┐
            │                      │
            ▼ VALID                ▼ INVALID
    ┌──────────────┐        ┌──────────────────┐
    │ Proceed to   │        │ Schema Error     │
    │ Step 2       │        │ Return to user   │
    └──────┬───────┘        │ with details     │
           │                └──────────────────┘
           │
           ▼
┌───────────────────────────────────────────────────────────────────┐
│ STEP 2: MATH INTERDICTION CHECK                                  │
│ Location: math_interdiction_profile.json5                        │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ IF problem contains mathematical objects:                        │
│                                                                   │
│ 2.1 CLASSIFICATION CHECK                                         │
│     ☐ Has classification tag?                                    │
│     ☐ Tag is permitted? ([Symbolic/Geometric/Dynamical Tool])    │
│     ☐ Tag is NOT forbidden? (NOT Foundational/Ontological/etc.)  │
│                                                                   │
│ 2.2 ENTRY POINT VALIDATION                                       │
│     ☐ Entry point matches classification?                        │
│       • Symbolic → MBC Operator Interface                        │
│       • Geometric → DFVM Field Interface                         │
│       • Dynamical → SATP Dynamics Interface                      │
│                                                                   │
│ 2.3 FORBIDDEN ACTIONS CHECK                                      │
│     ☐ Makes ontological claims? ──→ FORBIDDEN                    │
│     ☐ Makes modal claims? ──→ FORBIDDEN                          │
│     ☐ Makes causal claims? ──→ FORBIDDEN                         │
│     ☐ Overrides NOT constraints? ──→ FORBIDDEN                   │
│     ☐ Overrides IS commitments? ──→ FORBIDDEN                    │
│     ☐ Replaces δ-Φ-Π structure? ──→ FORBIDDEN                    │
│                                                                   │
│ 2.4 ENFORCEMENT RULES                                            │
│     ☐ Must be executable? ✓                                      │
│     ☐ Must preserve invariants? ✓                                │
│     ☐ Must terminate? ✓                                          │
│                                                                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
            ┌───────────┴──────────┐
            │                      │
            ▼ PASS                 ▼ REJECT
    ┌──────────────┐        ┌──────────────────────┐
    │ Proceed to   │        │ Interdiction Violation│
    │ Step 3       │        │ Reason: [specific]    │
    └──────┬───────┘        │ Return to user        │
           │                └──────────────────────┘
           │
           ▼
┌───────────────────────────────────────────────────────────────────┐
│ STEP 3: GATE 1 - NOT-MODAL (MSP)                                 │
│ Location: gate_not_modal.json5                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ Purpose: Enforce absolute prohibitions                           │
│ Symbol: ⊬                                                         │
│ Layer: MSP (Modal Symmetry Paradigm)                             │
│                                                                   │
│ Algorithm:                                                        │
│   violations = []                                                │
│   FOR EACH constraint IN not_constraints:                        │
│     IF constraint.layer IN ["MSP", "Universal"]:                 │
│       IF EVALUATE(constraint.statement, box, action) == TRUE:    │
│         # Forbidden condition is happening!                      │
│         violations.append(constraint)                            │
│                                                                   │
│   IF violations.is_empty():                                      │
│     RETURN PASS                                                  │
│   ELSE:                                                           │
│     RETURN BLOCK(violations)                                     │
│                                                                   │
│ Example Checks:                                                  │
│ ☐ "Information may not be deleted" → Check info conservation    │
│ ☐ "Identity may not be undefined" → Check identity exists       │
│ ☐ "Contradictions may not be asserted" → Check A ∧ ¬A           │
│                                                                   │
│ Logging:                                                         │
│ • Which NOT constraints were violated                            │
│ • Why each was violated                                          │
│ • Severity: CRITICAL (all NOT violations are critical)           │
│                                                                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
            ┌───────────┴──────────┐
            │                      │
            ▼ PASS                 ▼ BLOCK
    ┌──────────────┐        ┌──────────────────────┐
    │ Proceed to   │        │ NOT Constraint        │
    │ Step 4       │        │ Violation(s):         │
    └──────┬───────┘        │ [list violations]     │
           │                │ Return to user        │
           │                └──────────────────────┘
           ▼
┌───────────────────────────────────────────────────────────────────┐
│ STEP 4: GATE 2 - IS-NECESSITY (MSP)                              │
│ Location: gate_is_necessity.json5                                │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ Purpose: Enforce necessary commitments                           │
│ Symbol: ⊨                                                         │
│ Layer: MSP (Modal Symmetry Paradigm)                             │
│                                                                   │
│ Algorithm:                                                        │
│   unsatisfied = []                                               │
│   FOR EACH commitment IN is_commitments:                         │
│     IF commitment.layer IN ["MSP", "Universal"]:                 │
│       IF EVALUATE(commitment.statement, box, action) == FALSE:   │
│         # Required condition is missing!                         │
│         unsatisfied.append(commitment)                           │
│                                                                   │
│   IF unsatisfied.is_empty():                                     │
│     RETURN PASS                                                  │
│   ELSE:                                                           │
│     RETURN BLOCK(unsatisfied)                                    │
│                                                                   │
│ Example Checks:                                                  │
│ ☐ "All boxes must have well-defined identity" → Check identity  │
│ ☐ "Stability must be evaluable" → Check evaluation possible     │
│ ☐ "Propagation must respect χₛ" → Check speed limit honored     │
│                                                                   │
│ Logging:                                                         │
│ • Which IS commitments were unsatisfied                          │
│ • Why each was unsatisfied                                       │
│ • Severity: CRITICAL (all IS failures are critical)              │
│                                                                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
            ┌───────────┴──────────┐
            │                      │
            ▼ PASS                 ▼ BLOCK
    ┌──────────────┐        ┌──────────────────────┐
    │ Proceed to   │        │ IS Commitment         │
    │ Step 5       │        │ Unsatisfied:          │
    └──────┬───────┘        │ [list unsatisfied]    │
           │                │ Return to user        │
           │                └──────────────────────┘
           ▼
┌───────────────────────────────────────────────────────────────────┐
│ STEP 5: GATE 3 - STABILITY (MSC)                                 │
│ Location: gate_stability.json5                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ Purpose: Check structural cohesion and identity persistence      │
│ Symbol: ⊳                                                         │
│ Layer: MSC (Modal Structural Cohesion)                           │
│                                                                   │
│ Algorithm:                                                        │
│   # Step 1: Compute semantic cohesion                            │
│   cohesion_μₛ = COMPUTE_COHESION(box)                            │
│                                                                   │
│   # Step 2: Check identity continuity                            │
│   identity_continuous = CHECK_IDENTITY_CONTINUITY(box, action)   │
│                                                                   │
│   # Step 3: Analyze perturbation response                        │
│   perturbation = ESTIMATE_PERTURBATION(action)                   │
│   response_bounded = (perturbation < threshold)                  │
│                                                                   │
│   # Step 4: Apply stability criteria                             │
│   IF cohesion_μₛ < cohesion_threshold:                           │
│     RETURN UNSTABLE("Cohesion too low - will dissolve")          │
│                                                                   │
│   IF NOT identity_continuous:                                    │
│     RETURN UNSTABLE("Identity discontinuity detected")           │
│                                                                   │
│   IF NOT response_bounded:                                       │
│     RETURN UNSTABLE("Perturbation exceeds bounds")               │
│                                                                   │
│   # Passed all checks                                            │
│   stability_margin = cohesion_μₛ - cohesion_threshold            │
│   RETURN STABLE(cohesion_μₛ, stability_margin)                   │
│                                                                   │
│ Stability Metrics:                                               │
│ ☐ Cohesion μₛ ≥ threshold                                        │
│ ☐ Identity continuous under small perturbations                  │
│ ☐ Bounded perturbation response                                  │
│ ☐ No runaway instabilities                                       │
│                                                                   │
│ Failure Modes:                                                   │
│ • Dissolution (μₛ < critical)                                    │
│ • Identity fragmentation                                         │
│ • Structural collapse                                            │
│ • Runaway instability                                            │
│                                                                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
            ┌───────────┴──────────┐
            │                      │
            ▼ STABLE               ▼ UNSTABLE
    ┌──────────────┐        ┌──────────────────────┐
    │ Proceed to   │        │ Instability Detected: │
    │ Step 6       │        │ • Mode: [type]        │
    └──────┬───────┘        │ • Cohesion: [μₛ]      │
           │                │ • Margin: [negative]  │
           │                │ Return to user        │
           │                └──────────────────────┘
           ▼
┌───────────────────────────────────────────────────────────────────┐
│ STEP 6: GATE 4 - EXECUTABILITY (MBC)                             │
│ Location: gate_executability.json5                               │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ Purpose: Validate symbolic consistency and executability         │
│ Symbol: ⊢                                                         │
│ Layer: MBC (Monistic Box Calculus)                               │
│                                                                   │
│ Algorithm:                                                        │
│   blocking_issues = []                                           │
│                                                                   │
│   # Check 1: Logical consistency                                 │
│   IF CONTAINS_CONTRADICTION(box, operation):                     │
│     blocking_issues.append("Logical contradiction")              │
│                                                                   │
│   # Check 2: Termination guarantee                               │
│   IF NOT PROVES_TERMINATION(operation, bound):                   │
│     blocking_issues.append("Non-termination risk")               │
│                                                                   │
│   # Check 3: Operator availability                               │
│   required = EXTRACT_REQUIRED_OPERATORS(operation)               │
│   IF NOT ALL_AVAILABLE(required, context):                       │
│     blocking_issues.append("Missing operators")                  │
│                                                                   │
│   # Check 4: Invariant preservation                              │
│   IF NOT PRESERVES_INVARIANTS(operation, invariants):            │
│     blocking_issues.append("Invariant violation")                │
│                                                                   │
│   # Check 5: Type correctness                                    │
│   IF NOT TYPE_CHECK(operation):                                  │
│     blocking_issues.append("Type error")                         │
│                                                                   │
│   IF blocking_issues.is_empty():                                 │
│     execution_plan = GENERATE_EXECUTION_TRACE(operation)         │
│     RETURN EXECUTABLE(execution_plan)                            │
│   ELSE:                                                           │
│     RETURN NON_EXECUTABLE(blocking_issues)                       │
│                                                                   │
│ Executability Checks:                                            │
│ ☐ No contradictions (A ∧ ¬A forbidden)                           │
│ ☐ Termination provable                                           │
│ ☐ All operators defined                                          │
│ ☐ Types consistent                                               │
│ ☐ Invariants preserved                                           │
│                                                                   │
│ Blocking Issues:                                                 │
│ • Contradiction detected                                         │
│ • Infinite loop / non-termination                                │
│ • Undefined operator                                             │
│ • Type mismatch                                                  │
│ • Invariant broken                                               │
│                                                                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
            ┌───────────┴──────────┐
            │                      │
            ▼ EXECUTABLE           ▼ NON-EXECUTABLE
    ┌──────────────┐        ┌──────────────────────┐
    │ ALL GATES    │        │ Execution Blocked:    │
    │ PASSED ✓     │        │ [list issues]         │
    │ Proceed to   │        │ Return to user        │
    │ Step 7       │        └──────────────────────┘
    └──────┬───────┘
           │
           ▼
┌───────────────────────────────────────────────────────────────────┐
│ STEP 7: DOMAIN ROUTING                                           │
│ Location: router_domain_dispatch.json5                           │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ Purpose: Determine where validated problem should go next        │
│                                                                   │
│ Algorithm:                                                        │
│   domain_scores = {}                                             │
│                                                                   │
│   FOR EACH candidate IN domain_candidates:                       │
│     domain = LOOKUP_DOMAIN(candidate.domain_name)                │
│     score = 0                                                    │
│                                                                   │
│     # Check routing triggers                                     │
│     FOR EACH trigger IN domain.routing_triggers:                 │
│       IF TRIGGER_MATCHES(box, trigger):                          │
│         score += TRIGGER_WEIGHT                                  │
│                                                                   │
│     # Check characteristics                                      │
│     FOR EACH char IN domain.typical_characteristics:             │
│       IF BOX_HAS_CHARACTERISTIC(box, char):                      │
│         score += CHARACTERISTIC_WEIGHT                           │
│                                                                   │
│     # Apply relevance multiplier                                 │
│     IF candidate.relevance == "primary":                         │
│       score *= 2.0                                               │
│     ELIF candidate.relevance == "secondary":                     │
│       score *= 1.2                                               │
│                                                                   │
│     domain_scores[candidate.domain_name] = score                 │
│                                                                   │
│   # Select top domain(s)                                         │
│   IF domain_scores.is_empty():                                   │
│     RETURN NO_VALID_ROUTE                                        │
│                                                                   │
│   max_score = MAX(domain_scores.values())                        │
│   top_domains = FILTER(domain_scores, score >= 0.8 * max_score)  │
│                                                                   │
│   IF top_domains.length == 1:                                    │
│     RETURN ROUTE(top_domains[0])                                 │
│   ELSE:                                                           │
│     RETURN MULTI_ROUTE(top_domains)                              │
│                                                                   │
│ Supported Domains (11):                                          │
│ 1. Mathematical  6. Social       11. Cross-Domain                │
│ 2. Logical       7. Biological                                   │
│ 3. Physical      8. Engineering                                  │
│ 4. Cognitive     9. Philosophical                                │
│ 5. Computational 10. Abstract                                    │
│                                                                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
        ▼ ROUTE         ▼ MULTI_ROUTE  ▼ NO_VALID_ROUTE
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ Single domain  │ │ Multiple       │ │ Cannot route   │
│ target         │ │ parallel       │ │ Needs          │
│ Proceed to     │ │ targets        │ │ reformulation  │
│ Step 8         │ │ Proceed to     │ │ Return to user │
└────────┬───────┘ │ Step 8         │ └────────────────┘
         │         └────────┬───────┘
         └──────────────────┘
                   │
                   ▼
┌───────────────────────────────────────────────────────────────────┐
│ STEP 8: DOMAIN-SPECIFIC VALIDATION                               │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ For SINGLE target:                                               │
│   result = target_domain.validate(problem)                       │
│   IF result == PASS:                                             │
│     verdict = ADMISSIBLE                                         │
│   ELSE:                                                           │
│     verdict = INADMISSIBLE(domain-specific reason)               │
│                                                                   │
│ For MULTIPLE targets (parallel):                                 │
│   results = []                                                   │
│   FOR EACH domain IN target_domains:                             │
│     result = domain.validate(problem)                            │
│     results.append((domain, result))                             │
│                                                                   │
│   # Cross-domain consistency check                               │
│   IF ALL results == PASS:                                        │
│     verdict = ADMISSIBLE                                         │
│   ELSE:                                                           │
│     # At least one domain failed                                 │
│     failed_domains = FILTER(results, result == FAIL)             │
│     verdict = INADMISSIBLE(cross-domain contradiction)           │
│     report = LIST(failed_domains with reasons)                   │
│                                                                   │
│ Cross-Domain Consistency Rule:                                   │
│ "A claim is admissible ONLY if it is valid in ALL applicable     │
│  domains. If ANY domain returns FAIL, overall result is REJECT." │
│                                                                   │
└───────────────────────┬───────────────────────────────────────────┘
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼ ALL PASS                      ▼ ANY FAIL
┌────────────────────┐          ┌──────────────────────┐
│ Proceed to Step 9  │          │ Cross-Domain         │
└─────────┬──────────┘          │ Contradiction:       │
          │                     │ • Domain A: PASS     │
          │                     │ • Domain B: FAIL     │
          │                     │ [details]            │
          │                     │ Return to user       │
          │                     └──────────────────────┘
          ▼
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ STEP 9: FINAL VERDICT                                             ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                                                   ┃
┃ validation_state = {                                              ┃
┃   pipeline_stage: "completed",                                    ┃
┃   gates_passed: [                                                 ┃
┃     "NOT-Modal", "IS-Necessity", "Stability", "Executability"     ┃
┃   ],                                                              ┃
┃   gates_failed: [],                                               ┃
┃   router_decisions: [                                             ┃
┃     { router: "domain_dispatch", decision: "ROUTE", target: ... } ┃
┃   ],                                                              ┃
┃   domains_validated: [                                            ┃
┃     { domain: "Mathematical", result: "PASS" }                    ┃
┃   ],                                                              ┃
┃   final_verdict: "ADMISSIBLE",                                    ┃
┃   timestamp: "2025-12-09T..."                                     ┃
┃ }                                                                  ┃
┃                                                                   ┃
┃ RETURN to user:                                                   ┃
┃   ✅ Problem is lawfully admissible across all layers             ┃
┃   ✅ Consistent across all validated domains                      ┃
┃   ✅ Ready for solution exploration (external to this system)     ┃
┃                                                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Rejection Points Summary

The pipeline has **8 distinct rejection points** where a problem can be blocked:

### Rejection Point 1: Schema Validation
- **When:** Problem object doesn't conform to schema
- **Cause:** Missing required fields, invalid format
- **Return:** Schema error details
- **Fix:** Correct problem object structure

### Rejection Point 2: Math Interdiction
- **When:** Mathematical object makes forbidden claims
- **Cause:** Ontological/modal/causal claims, forbidden tags
- **Return:** Interdiction violation with specific rule
- **Fix:** Reclassify math as tool, remove forbidden claims

### Rejection Point 3: NOT-Modal Gate (MSP)
- **When:** Any NOT constraint is violated
- **Cause:** Prohibited condition occurs
- **Return:** List of violated NOT constraints
- **Fix:** Modify problem to satisfy all prohibitions

### Rejection Point 4: IS-Necessity Gate (MSP)
- **When:** Any IS commitment is unsatisfied
- **Cause:** Required condition is missing
- **Return:** List of unsatisfied IS commitments
- **Fix:** Add missing required conditions

### Rejection Point 5: Stability Gate (MSC)
- **When:** Structure cannot persist as stable identity
- **Cause:** Low cohesion, discontinuous identity, unbounded perturbation
- **Return:** Instability report with failure mode
- **Fix:** Increase cohesion, ensure continuity

### Rejection Point 6: Executability Gate (MBC)
- **When:** Operation cannot be formally executed
- **Cause:** Contradiction, non-termination, type error, invariant violation
- **Return:** List of blocking issues
- **Fix:** Resolve contradictions, prove termination, fix types

### Rejection Point 7: Router (No Valid Route)
- **When:** Problem cannot be matched to any domain
- **Cause:** Insufficient structure, unclear domain characteristics
- **Return:** Reformulation needed
- **Fix:** Add domain-specific characteristics, clarify intent

### Rejection Point 8: Cross-Domain Validation
- **When:** Problem passes in some domains but fails in others
- **Cause:** Domain contradiction (valid in logic, invalid in physics)
- **Return:** Cross-domain inconsistency report
- **Fix:** Reformulate to satisfy all domains or restrict scope

---

## Decision Tree

```
Problem Submitted
    │
    ├─→ Schema invalid? ──→ REJECT (Point 1)
    │
    ├─→ Math forbidden? ──→ REJECT (Point 2)
    │
    ├─→ NOT violated? ──→ REJECT (Point 3)
    │
    ├─→ IS unsatisfied? ──→ REJECT (Point 4)
    │
    ├─→ Unstable? ──→ REJECT (Point 5)
    │
    ├─→ Non-executable? ──→ REJECT (Point 6)
    │
    ├─→ No valid route? ──→ REJECT (Point 7)
    │
    ├─→ Domain contradiction? ──→ REJECT (Point 8)
    │
    └─→ All checks pass ──→ ADMISSIBLE ✅
```

---

## Performance Characteristics

### Time Complexity (Sequential Processing)

```
Total Time = T_intake + T_interdiction + T_gates + T_routing + T_domains

Where:
- T_intake ≈ O(n) [n = number of constraints/commitments]
- T_interdiction ≈ O(m) [m = number of math objects]
- T_gates = T_not + T_is + T_stability + T_exec
  - T_not ≈ O(n_not * c_not) [evaluate each NOT constraint]
  - T_is ≈ O(n_is * c_is) [evaluate each IS commitment]
  - T_stability ≈ O(s) [stability analysis, potentially expensive]
  - T_exec ≈ O(e) [executability proof, potentially expensive]
- T_routing ≈ O(d * t) [d = domains, t = triggers]
- T_domains = O(d_selected * v) [v = domain validation cost]

Worst case: O(n + m + s + e + d*v)
Best case (early rejection): O(1) [schema validation fails immediately]
```

### Parallelization Opportunities

**Can Be Parallelized:**
- NOT-Modal and IS-Necessity gates (independent MSP checks)
- Multi-domain validation (each domain validates independently)

**Must Be Sequential:**
- Schema → Interdiction → Gates (dependencies)
- Gate 1-4 evaluation (pipeline order enforced)
- Cross-domain consistency check (requires all domain results)

---

## Logging & Traceability

Every step in the pipeline logs:

```json5
{
  step: "gate_not_modal",
  timestamp: "2025-12-09T10:30:45.123Z",
  input: {
    box_id: "BOX-001",
    not_constraints: [...]
  },
  decision: "PASS",
  violations: [],
  duration_ms: 45,
  trace_id: "TRACE-ABC123"
}
```

**Trace ID** propagates through entire pipeline, allowing full reconstruction of validation path.

---

## Error Recovery

### Soft Failures (Reformulation Possible)
- Schema errors → Fix structure
- Missing fields → Add required information
- Hidden assumptions → Promote to explicit
- Unclear domain → Add characteristics

### Hard Failures (Fundamental Issues)
- NOT constraint violation → Problem is modally illegal
- Logical contradiction → Problem is inconsistent
- Cross-domain contradiction → Problem is impossible

**User Feedback:**
All rejections include:
1. **What failed** (specific gate/check)
2. **Why it failed** (detailed reason)
3. **How to fix** (guidance for reformulation)

---

**END OF VALIDATION PIPELINE FLOWCHART**

For detailed system overview, see: `SYSTEM_OVERVIEW.md`
For architecture diagrams, see: `ARCHITECTURE_DIAGRAMS.md`
For quick reference, see: `QUICK_REFERENCE.md`
For integration guide, see: `INTEGRATION_GUIDE.md`
For examples, see: `EXAMPLES.md`
