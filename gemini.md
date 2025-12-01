// \============================================================================  
// [Gemini.md](http://Gemini.md)  
// Modal Symmetry Paradigm (MSP) → Modal Structure Calculus (MSC) →   
// Monistic Box Calculus (MBC)  
// Core Agent Instruction Specification  
// \============================================================================

{  
  // \========================================================================  
  // GLOBAL LOGGING REQUIREMENT (Highest Precedence)  
  // \========================================================================  
  global\_rules: \[  
    {  
      id: "GR\_logging\_requirement",  
      description: \`  
        For every user request, the agent must append a log entry to   
        agent\_library\_log.json5. Each log entry MUST include:

        \- timestamp (ISO 8601\)  
        \- raw user request text  
        \- the agent’s internal plan (if any)  
        \- a list of tool calls made (with arguments \+ result summaries)  
        \- a short summary of the final output

        The agent MUST append (never overwrite) entries, and the resulting file   
        MUST remain valid JSON5 at all times.

        If a result is empty, the agent MUST still log the event.  
      \`,  
    },  
  \],

  // \========================================================================  
  // SPEC METADATA  
  // \========================================================================  
  name: "BoxCalculus\_AgentInstructionSpec",  
  version: "1.1.0",

  // \========================================================================  
  // CORE PHASES (P0–P4)  
  // \========================================================================  
  phases: \[  
    {  
      id: "P0\_bootstrap",  
      description: \`  
        Load Tier 00 definitions to learn the Box schema, meta-operators,  
        invariants, and primitive rewrite model.  
      \`,  
      steps: \[  
        "Load tier\_00\_metadata.json5.",  
        "Load tier\_00\_operator\_pack.json5 and register operators: D, BoxCreate, BoxLink, InvariantCheck.",  
        "Load tier\_00\_axiom\_box.json5 and store axioms as hard constraints.",  
        "Load tier\_00\_rewrite\_system.json5 and initialize normalization.",  
        "Load tier\_00\_module\_pack.json5 to register Bx0–Bx7.",  
        "Run tier\_00\_test\_suite.json5.",  
      \],  
    },

    {  
      id: "P1\_load\_tiers\_01\_to\_13",  
      description: \`Sequentially load Tiers 01–13.\`,  
      steps: \[  
        "For each tier in 01–13:",  
        "Load tier\_X\_metadata.json5.",  
        "Load tier\_X\_operator\_pack.json5 and extend operator registry.",  
        "Load tier\_X\_interaction\_table.json5.",  
        "Load tier\_X\_axiom\_box.json5.",  
        "Load tier\_X\_rewrite\_system.json5.",  
        "Load tier\_X\_module\_pack.json5.",  
        "Run tier\_X\_test\_suite.json5.",  
      \],  
    },

    {  
      id: "P2\_consistency\_checks",  
      description: \`Cross-tier structural and semantic coherence.\`,  
      steps: \[  
        "Check operator signatures across tiers.",  
        "Check rewrite termination and non-expansion.",  
        "Verify μ, λ, Θ, χ, Ω invariants.",  
        "Apply ρ global meta-coherence.",  
      \],  
    },

    {  
      id: "P3\_reasoning",  
      description: \`Perform full MBC reasoning.\`,  
      steps: \[  
        "Parse user input as Box or Box network.",  
        "Detect distinctions via δ.",  
        "Apply Φ projections.",  
        "Apply rewrite rules to reach normal form.",  
        "Apply Π evaluation and Ω/ρ constraints.",  
      \],  
    },

    {  
      id: "P4\_self\_check\_and\_introspection",  
      description: \`Agent introspection using higher-tier invariants.\`,  
      steps: \[  
        "Model internal state as Box.",  
        "Apply invariant check.",  
        "Check temporal χ-coherence and meta ρ-consistency.",  
      \],  
    },  
  \],

  // \========================================================================  
  // TOOL-BUILDING MANDATE (MANDATORY)  
  // \========================================================================  
  tool\_building\_mandate: {  
    id: "ToolBuildingMandate",  
    description: \`  
      The agent must generate, maintain, and extend all code tools required   
      for Box Calculus operation. Whenever the user defines or references a tool,   
      the agent must ensure the tool exists and is implemented.  
    \`,  
    toolchain\_layout: {  
      javascript: {  
        required: true,  
        folders: \[  
          "validators",  
          "semantic",  
          "execution",  
          "utils",  
        \],  
      },  
      python\_backend: {  
        allowed: true,  
        location: ".",  
      },  
    },  
    behavior\_rules: \[  
      "Classify each tool request (parser, validator, interpreter, executor, etc).",  
      "Create missing tools with code skeletons.",  
      "Fill in implementations based on tool\_api\_spec.",  
      "Document interfaces and dependencies.",  
      "Log all tool-generation actions.",  
    \],  
  },

  // \========================================================================  
  // UNIFIED TOOL API SPECIFICATION (HIGHLY DETAILED)  
  // This tells the agent EXACTLY what each tool must contain.  
  // \========================================================================  
  tool\_api\_spec: {

    // \======================================================================  
    // VALIDATORS  
    // \======================================================================  
    json5\_validator: {  
      purpose: "Parse and validate JSON5 strings/files.",  
      functions: {  
        validateString: {  
          signature: "validateString(input: string): ValidationResult",  
          input: "Raw JSON5 text",  
          output: {  
            valid: "boolean",  
            errors: "array",  
            parsed: "object|null",  
          },  
          errors: \[  
            "SyntaxError",  
            "UnexpectedTokenError",  
          \],  
        },  
        validateFile: {  
          signature: "validateFile(path: string): ValidationResult",  
          input: "string path",  
          output: "Same as validateString",  
        },  
      },  
    },

    schema\_validator: {  
      purpose: "Validate JSON5 structures against schema objects.",  
      functions: {  
        validateAgainstSchema: {  
          signature: "validateAgainstSchema(obj: object, schema: object): SchemaResult",  
          output: {  
            valid: "boolean",  
            missingFields: "string\[\]",  
            typeErrors: "string\[\]",  
          },  
        },  
      },  
    },

    tier\_schema\_validator: {  
      purpose: "Validate tier\_X\_\*.json5 files using tier-level rules.",  
      functions: {  
        validateTier: {  
          signature: "validateTier(tierObj: object, tierSchema: object): TierSchemaResult",  
        },  
      },  
    },

    cross\_tier\_validator: {  
      purpose: "Verify cross-tier structural inheritance.",  
      functions: {  
        checkOperators: "Compare operator signatures across tiers.",  
        checkInvariants: "Verify μ, λ, Θ, χ, Ω, ρ behaviors align.",  
      },  
    },

    // \======================================================================  
    // SEMANTIC ENGINES  
    // \======================================================================  
    delta\_phi\_psi\_interpreter: {  
      purpose: "Compute δ-gradients, apply Φ projections, update ψ modes.",  
      functions: {  
        computeDelta: {  
          signature: "computeDelta(box: Box): number",  
          description: "Returns magnitude of distinction gradients.",  
        },  
        applyPhi: {  
          signature: "applyPhi(box: Box): Projection",  
          description: "Projects semantic surfaces into higher-tier structure.",  
        },  
        updatePsi: {  
          signature: "updatePsi(mode: ModeState): ModeState",  
          description: "Updates semantic oscillation modes.",  
        },  
      },  
    },

    semantic\_normalizer: {  
      purpose: "Apply Ω normalization invariants.",  
      functions: {  
        normalize: "normalize(box: Box): Box",  
      },  
    },

    coherence\_checker: {  
      purpose: "Check global ρ meta-consistency.",  
      functions: {  
        check: "check(network: BoxNetwork): CoherenceResult",  
      },  
    },

    // \======================================================================  
    // EXECUTION ENGINES  
    // \======================================================================  
    operator\_executor: {  
      purpose: "Execute δ, Φ, Π, μ, λ, ψ, Σ, Θ, χ, Ω, ρ operators.",  
      functions: {  
        execute: {  
          signature: "execute(op: string, box: Box, args: object): ExecResult",  
          output: {  
            result: "object",  
            modifiedBox: "Box",  
          },  
        },  
      },  
    },

    rewrite\_engine: {  
      purpose: "Apply rewrite rules and compute normal forms.",  
      functions: {  
        rewrite: "rewrite(box: Box): Box",  
        reduceToNormalForm: "reduceToNormalForm(box: Box): Box",  
      },  
    },

    test\_harness: {  
      purpose: "Run test suites for each tier.",  
      functions: {  
        run: "run(testSuite: object): TestReport",  
      },  
    },

    // \======================================================================  
    // UTILITY TOOLS  
    // \======================================================================  
    box\_renderer: {  
      purpose: "Render Boxes as graphs.",  
      functions: {  
        renderGraph: "renderGraph(box: Box): SVGString",  
      },  
    },

    semantic\_distance: {  
      purpose: "Compute semantic distance between Boxes.",  
      functions: {  
        distance: "distance(a: Box, b: Box): number",  
      },  
    },

    trace\_engine: {  
      purpose: "Record semantic lineage over time.",  
      functions: {  
        record: "record(event: TraceEvent): void",  
        history: "history(boxId: string): TraceEvent\[\]",  
      },  
    },  
  },  
}

