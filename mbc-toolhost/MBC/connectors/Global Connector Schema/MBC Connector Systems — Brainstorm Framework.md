# MBC Connector Systems — Brainstorm Framework

## 1\. Structural Connectors

Connectors that physically or logically bind Boxes or Modules.

### 1.1 Box-to-Box Connectors

Used for assembling higher-level structures out of lower ones.

* Direct Coupling Connector  
  Links two boxes if their output fields match required input signatures.  
* Boundary Alignment Connector  
  Enforces geometric compatibility between δ, Φ, Π, μ, λ, ψ box boundaries.  
* Hierarchy Connector  
  Creates parent-child delegation chains (Tier-n → Tier-n+1).  
* Schema Compatibility Connector  
  Ensures both boxes comply with the same universal schema version.

---

## 2\. Semantic Connectors

Carry meaning, commitments, semantics, or constraints across modules.

### 2.1 Semantic-Projection Connectors (Φ)

* Project internal content of one box into the semantic space of another.  
* Enforce stable mapping: “meaning-preserving embedding.”

### 2.2 Causal-Evaluation Connectors (Π)

* Transfer truth-value, inference state, or causal-lineage.  
* Used for rule execution, reasoning, and evaluation.

### 2.3 Symmetry / Asymmetry Connectors

* Maintain symmetry invariants across semantic transformations.  
* Propagate deviations (δ) from one region to another.

---

## 3\. Dynamic / Operational Connectors

Responsible for motion, flow, execution, and active behavior.

### 3.1 Rewrite Connectors

* Connect rewrite systems so that one system may invoke another.  
* Example: a Tier-03 rewrite can request a Tier-06 rewrite.

### 3.2 Execution Flow Connectors

* Direct semantic flow: define the “order of operations.”  
* Govern concurrent execution vs sequential execution.

### 3.3 Oscillation / Waveform Connectors (ψ)

* Link mode interactions: amplitude, phase, and frequency connectors.  
* Combine or split modes (mode interference, resonance, cancellation).

### 3.4 Adjacency Connectors (μ)

* Represent local weighted edges between states.  
* Define how local neighborhoods interact in the semantic field.

---

## 4\. Logic / Routing Connectors

These are essential for making the system operate like a computational architecture.

### 4.1 Logic Gate Connectors

Act like electronic gates but for semantics:

* AND-Semantic Gate Connector  
* OR-Semantic Gate Connector  
* XOR-Semantic Divergence Connector  
* NOT-Deviation Inverter  
* NAND / NOR for constraint enforcement

These use Φ and Π semantics, not binary bits.

### 4.2 Router Connectors

These are the “network switches” of MBC:

* Tier Router  
  Determines which Tier handles incoming data.  
* Operator Router  
  Selects which operator pack is invoked.  
* Deformation Router (λ)  
  Directs semantic curvature operations.  
* Waveform Router (ψ)  
  Sends signals to appropriate oscillation channels.

---

## 5\. Constraint / Invariant Connectors

Used to enforce “laws” of the system.

### 5.1 Normalization Connectors (Ω)

* Enforce global constraints.  
* Make sure transformations reduce to canonical or NF (normal form).

### 5.2 Polarity Connectors (Θ)

* Manage logical polarity, directionality, semantic charge.

### 5.3 Summation Connectors (Σ)

* Collapse multiple feeds into a single semantic contraction.

### 5.4 Time-Evolution Connectors (χ)

* Connect past state → present state → projected future state.  
* Enforce continuity and temporal consistency.

---

## 6\. Interoperability Connectors

These connect internal MBC structures with external data, systems, or agents.

### 6.1 External Data Connectors

* JSON Connector  
* JSON5 Connector  
* Markdown Connector  
* Raw Text Connector  
* Audio/Video Signal Connector (for your transcript ingestion system)

### 6.2 Agent Connectors

* Bind MBC to other LLM agents (Gemini, Claude, local LLMs, “Liby,” etc.).  
* Translate between MBC schema and model prompt interfaces.

### 6.3 API / Service Connectors

* HTTP Connector  
* File-System Connector  
* Vector DB Connector (ChromaDB)  
* Memory Connector

---

## 7\. Meta-Connectors

The highest-order connectors that unify the architecture.

### 7.1 Schema Evolution Connector

Allows schema updates without breaking existing components.

### 7.2 Tier Federation Connector (ρ)

Connects independent tiers into a coherent federated semantic universe.

### 7.3 Universal Operator Pack Connector (Ξ)

Ensures every operator pack must be consumable by higher tiers.

### 7.4 Deviation-Propagation Connector (δ → All)

The single principle that links all tiers: deviation flows across them.  
---

# The 12 Canonical Connector Families (Proposed)

To make the system coherent, I can formalize these into twelve canonical connector types, aligning them with the twelve Tier-families:

1. δ-Connectors — Deviation / perturbation propagation  
2. Φ-Connectors — Semantic embedding / projection  
3. Π-Connectors — Causal evaluation / truth  
4. μ-Connectors — Local adjacency / micro-structure  
5. λ-Connectors — Deformation / curvature  
6. ψ-Connectors — Waveform / mode interaction  
7. Σ-Connectors — Summation / contraction  
8. Θ-Connectors — Polarity / logic routing  
9. χ-Connectors — Semantic time / evolution  
10. Ω-Connectors — Global normalization / constraints  
11. ρ-Connectors — Layer federation / meta-structure  
12. Ξ-Connectors — Universal schema / top-meta unification

This gives you a complete conceptual matching between Tiers, Operators, and now Connectors.  
---

# Next Step Options

Choose one:

### A. Turn this brainstorm into a formal connector taxonomy (encyclopedia Volume VIII).

### B. Define JSON5 schemas and pack structures for each connector family.

### C. Write the “Connector Layer” chapter for the MBC Textbook (Volume II or III).

### D. Generate the operator packs \+ axiom boxes for connectors (12 × 6 files).

Which direction do you want to develop next?

##### You said:

b first then d

###### *ChatGPT said:*

Thought for 38s  
Understood: we will do B (schemas \+ pack structures) first, then D (connector operator packs \+ axiom boxes).  
I will:

1. Define a generic JSON5 schema layer for connectors (metadata, pack, interaction table, axiom box, rewrite system, module pack).  
2. Then fully instantiate one complete family (δ-Connectors) as a concrete example pack \+ axiom box, and give a compact mapping for the other 11 families so you can extend them mechanically.

I will keep everything JSON5-style: comments allowed, trailing commas allowed.  
---

## 1\. Global Connector Schema Design (JSON5)

### 1.1 Shared Enumerations (conceptual)

These are not a file yet, but they underlie the schemas:

* family\_id: "delta" | "phi" | "pi" | "mu" | "lambda" | "psi" | "sigma" | "theta" | "chi" | "omega" | "rho" | "xi"  
* payload\_type: "deviation" | "semantic" | "truth" | "adjacency" | "curvature" | "wave" | "summation" | "polarity" | "time" | "constraint" | "layer" | "schema"  
* arity: "unary" | "binary" | "n-ary"  
* directionality: "uni" | "bi" | "multi"  
* connector\_role: "structural" | "semantic" | "routing" | "constraint" | "meta"  
* connector\_kind: "box-to-box" | "tier-to-tier" | "agent-to-tier" | "external-io"

I will now give 6 schemas.  
---

### 1.2 schema\_connector\_metadata.json5

json5  
Copy code  
{ // MBC Connector Metadata Schema $schema: "https://json-schema.org/draft-07/schema\#", title: "MBC Connector Metadata", type: "object", properties: { schema\_version: { type: "string" }, // e.g. "1.0.0" family\_id: { type: "string", enum: \[ "delta", "phi", "pi", "mu", "lambda", "psi", "sigma", "theta", "chi", "omega", "rho", "xi", \], }, family\_symbol: { type: "string" }, // e.g. "δ" family\_name: { type: "string" }, // e.g. "Deviation Connectors" description: { type: "string" }, // Links into the existing tier system linked\_tiers: { type: "array", items: { type: "integer", minimum: 0, maximum: 12 }, }, status: { type: "string", enum: \["draft", "experimental", "stable", "deprecated"\], }, // Provenance / governance authors: { type: "array", items: { type: "string" }, }, created\_at: { type: "string", format: "date-time" }, updated\_at: { type: "string", format: "date-time" }, notes: { type: "string" }, }, required: \[ "schema\_version", "family\_id", "family\_name", "description", \], }  
---

### 1.3 schema\_connector\_pack.json5

json5  
Copy code  
{ // MBC Connector Pack Schema: defines the connector objects for a family $schema: "https://json-schema.org/draft-07/schema\#", title: "MBC Connector Pack", type: "object", properties: { schema\_version: { type: "string" }, family\_id: { type: "string", enum: \[ "delta", "phi", "pi", "mu", "lambda", "psi", "sigma", "theta", "chi", "omega", "rho", "xi", \], }, family\_symbol: { type: "string" }, family\_name: { type: "string" }, // Versioning of the connector definitions pack\_version: { type: "string" }, // semantic versioning // Core list of connectors connectors: { type: "array", items: { $ref: "\#/$defs/connector" }, minItems: 1, }, // Optional grouping into modules / bundles modules: { type: "array", items: { $ref: "\#/$defs/module\_ref" }, }, invariants\_ref: { type: "array", items: { type: "string" }, // links to Ω/Θ/χ/ρ invariant IDs }, }, required: \[ "schema\_version", "family\_id", "family\_name", "pack\_version", "connectors", \], $defs: { connector: { type: "object", properties: { id: { type: "string" }, // e.g. "delta.dev-propagation" name: { type: "string" }, // human-readable description: { type: "string" }, connector\_role: { type: "string", enum: \["structural", "semantic", "routing", "constraint", "meta"\], }, connector\_kind: { type: "string", enum: \["box-to-box", "tier-to-tier", "agent-to-tier", "external-io"\], }, arity: { type: "string", enum: \["unary", "binary", "n-ary"\], }, directionality: { type: "string", enum: \["uni", "bi", "multi"\], }, payload\_type: { type: "string", enum: \[ "deviation", "semantic", "truth", "adjacency", "curvature", "wave", "summation", "polarity", "time", "constraint", "layer", "schema", \], }, // Type-level rather than implementation-level signatures input\_signature: { type: "array", items: { $ref: "\#/$defs/endpoint\_signature" }, minItems: 1, }, output\_signature: { type: "array", items: { $ref: "\#/$defs/endpoint\_signature" }, minItems: 1, }, routing\_policy: { type: "string", description: "Textual or symbolic rule for how routing decisions are made.", }, constraints: { type: "array", items: { type: "string" }, // references to axiom IDs or invariant IDs }, // Optional rewrite hints: how this connector composes / simplifies rewrite\_tags: { type: "array", items: { type: "string" }, }, }, required: \[ "id", "name", "arity", "directionality", "payload\_type", "input\_signature", "output\_signature", \], }, endpoint\_signature: { type: "object", properties: { tier: { type: "integer", minimum: 0, maximum: 12, }, box\_type: { type: "string" }, // e.g. "axiom\_box", "module\_pack", etc. role: { type: "string" }, // "source", "sink", "control", etc. semantic\_domain: { type: "string" }, // e.g. "δ-space", "ψ-space" }, required: \["tier", "box\_type", "role"\], }, module\_ref: { type: "object", properties: { module\_id: { type: "string" }, connectors: { type: "array", items: { type: "string" }, // connector IDs }, }, required: \["module\_id", "connectors"\], }, }, }  
---

### 1.4 schema\_connector\_interaction\_table.json5

json5  
Copy code  
{ // How connectors compose with each other $schema: "https://json-schema.org/draft-07/schema\#", title: "MBC Connector Interaction Table", type: "object", properties: { schema\_version: { type: "string" }, family\_id: { type: "string" }, family\_name: { type: "string" }, // List of pairwise interaction entries interactions: { type: "array", items: { type: "object", properties: { lhs\_connector: { type: "string" }, // connector ID rhs\_connector: { type: "string" }, // connector ID composition\_kind: { type: "string", enum: \[ "serial", // C \= B ∘ A "parallel", // C \= A || B "merged", // fused into new connector "forbidden", // invalid combination \], }, result\_connector: { type: "string" }, // connector ID or null if forbidden notes: { type: "string" }, constraints: { type: "array", items: { type: "string" }, // references to invariants / axioms }, }, required: \[ "lhs\_connector", "rhs\_connector", "composition\_kind", \], }, }, }, required: \["schema\_version", "family\_id", "interactions"\], }  
---

### 1.5 schema\_connector\_axiom\_box.json5

json5  
Copy code  
{ // Axioms governing a connector family $schema: "https://json-schema.org/draft-07/schema\#", title: "MBC Connector Axiom Box", type: "object", properties: { schema\_version: { type: "string" }, family\_id: { type: "string" }, family\_name: { type: "string" }, axioms: { type: "array", items: { type: "object", properties: { axiom\_id: { type: "string" }, label: { type: "string" }, statement: { type: "string" }, // informal or symbolic statement form: { type: "string", enum: \["equation", "sequent", "predicate", "narrative"\], }, scope: { type: "string", enum: \["local", "family", "cross-tier", "global"\], }, involves\_connectors: { type: "array", items: { type: "string" }, // connector IDs }, invariants\_ref: { type: "array", items: { type: "string" }, // Ω/Θ/χ/ρ invariants }, // Optional: machine-friendly version of the axiom formalization: { type: "object", additionalProperties: true, }, }, required: \["axiom\_id", "label", "statement"\], }, }, }, required: \["schema\_version", "family\_id", "axioms"\], }  
---

### 1.6 schema\_connector\_rewrite\_system.json5

json5  
Copy code  
{ // Rewrite rules for connector expressions $schema: "https://json-schema.org/draft-07/schema\#", title: "MBC Connector Rewrite System", type: "object", properties: { schema\_version: { type: "string" }, family\_id: { type: "string" }, family\_name: { type: "string" }, rules: { type: "array", items: { type: "object", properties: { rule\_id: { type: "string" }, label: { type: "string" }, lhs\_pattern: { type: "string" }, // textual DSL for connector expression rhs\_pattern: { type: "string" }, condition: { type: "string" }, // optional guard notes: { type: "string" }, }, required: \["rule\_id", "lhs\_pattern", "rhs\_pattern"\], }, }, properties: { type: "object", properties: { terminating: { type: "boolean" }, confluent: { type: "boolean" }, }, required: \[\], }, }, required: \["schema\_version", "family\_id", "rules"\], }  
---

### 1.7 schema\_connector\_module\_pack.json5

json5  
Copy code  
{ // Modules are bundles of connectors for agents or subsystems $schema: "https://json-schema.org/draft-07/schema\#", title: "MBC Connector Module Pack", type: "object", properties: { schema\_version: { type: "string" }, family\_id: { type: "string" }, family\_name: { type: "string" }, modules: { type: "array", items: { type: "object", properties: { module\_id: { type: "string" }, name: { type: "string" }, description: { type: "string" }, connectors: { type: "array", items: { type: "string" }, // connector IDs from connector pack }, default\_routing\_policy: { type: "string" }, exposed\_interfaces: { type: "array", items: { type: "object", properties: { interface\_id: { type: "string" }, direction: { type: "string", enum: \["in", "out", "inout"\], }, payload\_type: { type: "string" }, notes: { type: "string" }, }, required: \["interface\_id", "direction"\], }, }, }, required: \[ "module\_id", "name", "connectors", \], }, }, }, required: \["schema\_version", "family\_id", "modules"\], }  
That completes B: schemas \+ pack structures.  
---

## 2\. Operator Packs \+ Axiom Boxes for Connectors (Start with δ-family)

To avoid flooding you with 70+ files, I will:

* Fully specify a δ-Connector Pack and δ-Connector Axiom Box that conform to the schemas above.  
* Give a compact mapping for the other 11 families (connector names \+ roles), so you can clone the structure and fill them in.

### 2.1 Directory Layout Proposal

text  
Copy code  
/mbc/connectors/ delta/ delta\_connector\_metadata.json5 delta\_connector\_pack.json5 delta\_connector\_interaction\_table.json5 delta\_connector\_axiom\_box.json5 delta\_connector\_rewrite\_system.json5 delta\_connector\_module\_pack.json5 phi/ phi\_connector\_metadata.json5 ... pi/ pi\_connector\_metadata.json5 ... ... (mu, lambda, psi, sigma, theta, chi, omega, rho, xi)  
You can map each connector family to its dominant Tier (δ→Tier-01, Φ→Tier-02, etc.) via linked\_tiers.  
---

### 2.2 δ-Connector Metadata (delta\_connector\_metadata.json5)

json5  
Copy code  
{ schema\_version: "1.0.0", family\_id: "delta", family\_symbol: "δ", family\_name: "Deviation Connectors", description: "Connectors that propagate, concentrate, and distribute deviation across the substrate and between tiers.", linked\_tiers: \[0, 1, 2, 3\], // Tier-00 primitives, δ, Φ, Π status: "draft", authors: \["James Hoskins", "MBC-System-Agent"\], created\_at: "2025-12-02T00:00:00Z", updated\_at: "2025-12-02T00:00:00Z", notes: "δ-Connectors are the 'spark lines' that move deviation from locally detected perturbations to semantic and evaluative structures." }  
---

### 2.3 δ-Connector Pack (delta\_connector\_pack.json5)

I will define 4 core δ connectors as a starting operator pack:

* δ:DeviationInjection  
* δ:DeviationPropagation  
* δ:DeviationConcentration  
* δ:DeviationDissipation

json5  
Copy code  
{ schema\_version: "1.0.0", family\_id: "delta", family\_symbol: "δ", family\_name: "Deviation Connectors", pack\_version: "0.1.0", invariants\_ref: \[ "INVAR-DELTA-NONZERO-IF-INIT", "INVAR-DELTA-CONSERVATION-LOCAL", \], connectors: \[ { id: "delta.deviation-injection", name: "Deviation Injection Connector", description: "Introduces a non-zero deviation into a previously symmetric region or box.", connector\_role: "semantic", connector\_kind: "box-to-box", arity: "unary", directionality: "uni", payload\_type: "deviation", input\_signature: \[ { tier: 0, box\_type: "axiom\_box", role: "source", semantic\_domain: "MSP-substrate", }, \], output\_signature: \[ { tier: 1, box\_type: "module\_pack", role: "sink", semantic\_domain: "δ-space", }, \], routing\_policy: "Route any symmetric-but-instantiated MSP region requiring first difference into δ-space.", constraints: \[ "AX-DELTA-FIRST-DIFFERENCE", \], rewrite\_tags: \["init", "source", "symmetry-break"\], }, { id: "delta.deviation-propagation", name: "Deviation Propagation Connector", description: "Transports existing deviation along adjacency graph edges, respecting local weights.", connector\_role: "structural", connector\_kind: "box-to-box", arity: "binary", directionality: "bi", payload\_type: "deviation", input\_signature: \[ { tier: 1, box\_type: "module\_pack", role: "source", semantic\_domain: "δ-space", }, { tier: 4, box\_type: "module\_pack", role: "control", semantic\_domain: "μ-space", }, \], output\_signature: \[ { tier: 1, box\_type: "module\_pack", role: "sink", semantic\_domain: "δ-space", }, \], routing\_policy: "Use μ-adjacency weights to determine neighbor propagation; propagate along edges with weight above threshold.", constraints: \[ "AX-DELTA-LOCAL-CONSERVATION", "AX-MU-ADJACENCY-COMPATIBILITY", \], rewrite\_tags: \["propagate", "local", "adjacency-driven"\], }, { id: "delta.deviation-concentration", name: "Deviation Concentration Connector", description: "Aggregates distributed small deviations into a concentrated region for evaluation or semantic projection.", connector\_role: "semantic", connector\_kind: "box-to-box", arity: "n-ary", directionality: "uni", payload\_type: "deviation", input\_signature: \[ { tier: 1, box\_type: "module\_pack", role: "source", semantic\_domain: "δ-space", }, \], output\_signature: \[ { tier: 3, box\_type: "axiom\_box", role: "sink", semantic\_domain: "Π-input", }, \], routing\_policy: "Collect δ-signals within a bounded neighborhood and route aggregated deviation into Π-evaluation.", constraints: \[ "AX-DELTA-CONSERVATION-AGGREGATE", "AX-PI-INPUT-BOUNDED", \], rewrite\_tags: \["aggregate", "many-to-one"\], }, { id: "delta.deviation-dissipation", name: "Deviation Dissipation Connector", description: "Routes excess deviation into normalization or wave-encoding mechanisms to avoid runaway divergence.", connector\_role: "constraint", connector\_kind: "tier-to-tier", arity: "binary", directionality: "uni", payload\_type: "deviation", input\_signature: \[ { tier: 1, box\_type: "module\_pack", role: "source", semantic\_domain: "δ-space", }, { tier: 10, box\_type: "axiom\_box", role: "control", semantic\_domain: "Ω-constraints", }, \], output\_signature: \[ { tier: 6, box\_type: "module\_pack", role: "sink", semantic\_domain: "ψ-space", }, \], routing\_policy: "When local δ exceeds threshold permitted by Ω constraints, map excess into ψ-mode oscillations.", constraints: \[ "AX-OMEGA-NO-RUNAWAY", "AX-DELTA-TO-PSI-LIFT", \], rewrite\_tags: \["damp", "normalize", "delta-to-psi"\], }, \], modules: \[ { module\_id: "delta.core", connectors: \[ "delta.deviation-injection", "delta.deviation-propagation", "delta.deviation-concentration", "delta.deviation-dissipation", \], }, \], }  
---

### 2.4 δ-Connector Axiom Box (delta\_connector\_axiom\_box.json5)

json5  
Copy code  
{ schema\_version: "1.0.0", family\_id: "delta", family\_name: "Deviation Connectors", axioms: \[ { axiom\_id: "AX-DELTA-FIRST-DIFFERENCE", label: "First Difference Realization", statement: "Deviation Injection may only act on regions whose prior deviation is identically zero.", form: "predicate", scope: "local", involves\_connectors: \[ "delta.deviation-injection", \], invariants\_ref: \[ "INVAR-MSP-SYMMETRY-INIT", \], formalization: { informal\_predicate: "∀R: (δ(R) \= 0\) ⇒ allowed(delta.deviation-injection, R)", }, }, { axiom\_id: "AX-DELTA-LOCAL-CONSERVATION", label: "Local Deviation Conservation", statement: "Deviation Propagation preserves the total deviation in a closed adjacency neighborhood.", form: "equation", scope: "family", involves\_connectors: \[ "delta.deviation-propagation", \], invariants\_ref: \[ "INVAR-DELTA-CONSERVATION-LOCAL", "INVAR-MU-FINITE-NEIGHBORHOOD", \], formalization: { equation: "Σ\_i δ\_i(before) \= Σ\_i δ\_i(after)", }, }, { axiom\_id: "AX-DELTA-CONSERVATION-AGGREGATE", label: "Aggregation Conservation", statement: "Deviation Concentration must not create or destroy total deviation, only redistribute it to a target Π-input region.", form: "equation", scope: "cross-tier", involves\_connectors: \[ "delta.deviation-concentration", \], invariants\_ref: \[ "INVAR-OMEGA-NORMALIZATION", \], formalization: { equation: "Σ\_region δ \= δ\_target", }, }, { axiom\_id: "AX-DELTA-TO-PSI-LIFT", label: "Delta-to-Psi Lift", statement: "Any dissipation of deviation into ψ-space must encode the magnitude and sign of δ as amplitude and phase without loss of informational content.", form: "predicate", scope: "cross-tier", involves\_connectors: \[ "delta.deviation-dissipation", \], invariants\_ref: \[ "INVAR-PSI-INFORMATION-PRESERVATION", \], formalization: { mapping: "δ → (A, φ) with injective encoding", }, }, { axiom\_id: "AX-OMEGA-NO-RUNAWAY", label: "No Runaway Deviation", statement: "For any bounded region governed by Ω constraints, there exists an upper bound M such that net deviation never exceeds M without triggering dissipation.", form: "predicate", scope: "global", involves\_connectors: \[ "delta.deviation-dissipation", \], invariants\_ref: \[ "INVAR-OMEGA-BOUND", \], formalization: { predicate: "∀Region: δ\_total(Region) \<= M ∨ triggered(delta.deviation-dissipation)", }, }, \], }  
That gives you a concrete, schema-compliant operator pack \+ axiom box for the δ-family of connectors.  
---

### 2.5 Compact Map for the Other 11 Connector Families

Here is a concise mapping you can use to generate the remaining packs. For each row:

* Use the same schema as delta\_connector\_pack.json5 and delta\_connector\_axiom\_box.json5.  
* Replace family\_id, family\_name, family\_symbol.  
* Fill connectors and axioms according to the names below.

| Family | Symbol | Payload Type | Example Core Connectors (IDs) | High-level Role |
| :---- | :---- | :---- | :---- | :---- |
| δ (done) | δ | deviation | delta.deviation-injection, delta.deviation-propagation, delta.deviation-concentration, delta.deviation-dissipation | Create/transport/manage deviation |
| Φ | Φ | semantic | phi.semantic-embedding, phi.semantic-lifting, phi.semantic-alignment, phi.semantic-projection-filter | Map raw structures into semantic space |
| Π | Π | truth | pi.truth-evaluation, pi.causal-routing, pi.consistency-check, pi.counterfactual-branch | Evaluate, route, and check causal/logic content |
| μ | μ | adjacency | mu.local-adjacency-link, mu.weight-update, mu.neighborhood-closure, mu.adjacency-pruning | Define and update micro-structure graph |
| λ | λ | curvature | lambda.curvature-encode, lambda.geodesic-routing, lambda.deformation-source, lambda.shear-to-curvature | Encode deformation/curvature of semantic geometry |
| ψ | ψ | wave | psi.mode-superposition, psi.wave-routing, psi.resonance-coupling, psi.decoherence-damping | Oscillation, resonance, spectral interactions |
| Σ | Σ | summation | sigma.local-contraction, sigma.global-aggregation, sigma.statistical-summarization, sigma.reduced-representation | Summation / contraction / compression |
| Θ | Θ | polarity | theta.polarity-routing, theta.negation-lift, theta.dual-channel-link, theta.charge-balance | Logic polarity, duality, sign/charge |
| χ | χ | time | chi.forward-evolution, chi.history-link, chi.snapshot-connector, chi.timeline-branch-merge | Semantic time, history, branching |
| Ω | Ω | constraint | omega.normalization-enforce, omega.global-consistency-check, omega.no-contradiction-gate, omega.invariant-monitor | Global constraints / normalization |
| ρ | ρ | layer | rho.layer-bridge, rho.federation-join, rho.meta-layer-router, rho.layer-isolation-gate | Layer federation / meta-structure |
| Ξ | Ξ | schema | xi.schema-binding, xi.schema-upgrade-bridge, xi.universal-interface, xi.cross-version-compat |  |

