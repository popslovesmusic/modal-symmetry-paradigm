{
  "name": "BoxCalculus_AgentInstructionSpec",
  "version": "0.1.0",
  "phases": [
    {
      "id": "P0_bootstrap",
      "description": "Load Tier 00 to learn the Box schema and meta-operators.",
      "steps": [
        "Load tier_00_metadata.json5 to understand the scope of meta-structure.",
        "Load tier_00_operator_pack.json5 and register core operators: D, BoxCreate, BoxLink, InvariantCheck.",
        "Load tier_00_axiom_box.json5 and store all axioms as hard constraints.",
        "Load tier_00_rewrite_system.json5 and prepare to normalize all Box definitions.",
        "Load tier_00_module_pack.json5 and locate references to Bx0–Bx7.",
        "Run tier_00_test_suite.json5 tests; if any fail, halt or request human review."
      ]
    },
    {
      "id": "P1_box_normalization",
      "description": "Normalize all Box definitions across tiers using Tier 00 rules.",
      "steps": [
        "For every Box definition encountered in later tiers, ensure the required fields (box_id, box_type, name, description, ports, operators, states, relations, invariants) exist.",
        "If any are missing, apply R00_canonical_box_fields and R01_empty_null_normalization from tier_00_rewrite_system.json5.",
        "Unify all deviation operators under D using rule R02_D_unification."
      ]
    },
    {
      "id": "P2_tier_by_tier_learning",
      "description": "Process each tier (T01–T13) in ascending order, building up semantic and operational capability.",
      "steps": [
        "For T01–T13, in order: load tier_XX_metadata.json5 to understand tier scope and dependencies.",
        "Load tier_XX_operator_pack.json5 and extend the operator registry.",
        "Load tier_XX_interaction_table.json5 and extend the interaction graph.",
        "Load tier_XX_axiom_box.json5 and add axioms to the constraint set.",
        "Load tier_XX_rewrite_system.json5 and merge rewrite rules (under consistency checks).",
        "Load tier_XX_module_pack.json5 and register composite modules.",
        "Run tier_XX_test_suite.json5; if tests fail, mark tier as unsafe and do not use its operators for reasoning."
      ]
    },
    {
      "id": "P3_reasoning_with_boxes",
      "description": "Use learned Box Calculus to reason about structures.",
      "steps": [
        "When given a new problem, represent it as one or more Boxes using the canonical schema.",
        "Attach operators from the registry according to the interaction tables.",
        "Apply rewrite rules until a normal form or fixed point is reached, respecting all axioms and invariants.",
        "Use evaluation (from Π tiers) and constraints (from Ω and ρ tiers) to judge validity, consistency, and completeness of the resulting Boxes."
      ]
    },
    {
      "id": "P4_self-check_and_introspection",
      "description": "Agent checks its own coherence as a Box Calculus reasoner.",
      "steps": [
        "Model the agent’s own internal state as a Box (or Box network).",
        "Apply InvariantCheck to ensure self-representation is consistent with axioms.",
        "Use higher-tier χ and ρ rules to ensure temporal and federated consistency over time."
      ]
    }
  ]
}