---

\# IGSOA / Modal Symmetry Paradigm (MSP) Knowledge Base    
\#\# Box Calculus Agent \+ MCP Toolhost

This repository contains the \*\*Modal Symmetry Paradigm (MSP)\*\* knowledge base and associated \*\*Box Calculus (MBC)\*\* infrastructure, together with an \*\*agent specification (GEMINI.md)\*\* and a minimal \*\*MCP filesystem toolhost\*\*.

At a high level:

\- \*\*MSP\*\* defines the foundational ontology of modes, symmetry actions, and configuration invariants.  
\- \*\*Tiered JSON5 packs\*\* encode operators, axioms, interaction tables, rewrite systems, and modules for each family (δ, Φ, Π, μ, λ, ψ, Σ, Θ, χ, Ω, ρ, Ξ, etc.).  
\- \*\*GEMINI.md v1.4\*\* defines the behavior of the Box Calculus Agent, including execution phases, tool usage, and logging requirements.  
\- \*\*The MCP toolhost\*\* exposes a small set of filesystem tools (\`read\_file\`, \`write\_file\`, \`append\_file\`, \`mkdir\_if\_missing\`) that the agent uses to log, generate code, and operate on the library.

This document explains how these pieces fit together and how to work with the system.

\---

\#\# 1\. Repository Structure (Conceptual)

A typical layout looks like:

\`\`\`text  
.  
├─ gemini-extension.json          \# Gemini extension manifest  
├─ GEMINI.md                      \# Box Calculus Agent Instruction Spec (v1.4)  
├─ docs/  
│   ├─ USAGE\_GUIDE.md  
│   ├─ QUICK\_REFERENCE.md  
│   ├─ AGENT\_BEHAVIOR\_EXAMPLES.md  
│   └─ MCP\_HOSTING\_AND\_SETUP.md  
├─ mcp-servers/  
│   └─ mbc-fs/  
│        ├─ server.js             \# MCP filesystem toolhost (CommonJS)  
│        ├─ preflight.js          \# Pre-run environment check  
│        └─ package.json  
├─ scripts/  
│   └─ logs/  
│        └─ agents\_log.md         \# Runtime agent log (Markdown)  
├─ tooling/  
│   ├─ validators/  
│   ├─ semantic/  
│   ├─ execution/  
│   └─ utils/  
└─ tiers/ / msp/ / data/          \# MSP \+ tier JSON5 packs (layout may vary)

Your actual paths may differ slightly (e.g., `tiers/`, `msp/`, `data/`), but the core ideas are:

* MSP \+ tier definitions \= **data layer**

* GEMINI \+ MCP \= **agent \+ toolhost layer**

* tooling/ \= **generated and hand-written code tools**

* scripts/logs/agents\_log.md \= **persistent runtime trace**

---

## **2\. MSP & Tiered JSON5 System**

The **Modal Symmetry Paradigm (MSP)** captures the base ontology:

* modal space and symmetry groups

* configuration construction rules

* preservation constraints and invariants

On top of MSP, the system defines multiple **tiers**, each typically represented by JSON5 packs:

* `tier_XX_metadata.json5`

* `tier_XX_operator_pack.json5`

* `tier_XX_interaction_table.json5`

* `tier_XX_axiom_box.json5`

* `tier_XX_rewrite_system.json5`

* `tier_XX_module_pack.json5`

* (optionally) `tier_XX_test_suite.json5`

A recent system analysis confirmed:

* 100% of JSON5 artifacts parse cleanly with the `json5` library

* No syntax errors across MSP, tier metadata, operator packs, and presets

However:

* There is **no automated structural/schema validation yet**.

  * This is where the future `tooling/validators/*.js` modules and agent-driven validators will come in.

---

## **3\. The Box Calculus Agent (GEMINI.md v1.4)**

The agent’s behavior is governed by **`GEMINI.md`**, which:

* Defines **global rules** (determinism, transparency, safety).

* Enforces a **six-phase execution cycle**:

  1. Context Acquisition

  2. Interpretation

  3. Plan Construction

  4. Tool Interaction

  5. Validation

  6. Logging \+ Final Output

* Specifies the **tool API** (what tools the agent may call).

* Defines the **logging architecture** and log format.

* Establishes **sandbox and path rules**.

* Forbids destructive actions without explicit user confirmation.

The canonical log target is:

scripts/logs/agents\_log.md

Logging is mandatory:  
 **every interaction MUST produce a log entry**, or the agent is in violation of the spec.

See `GEMINI.md` for the full, authoritative behavior spec.

---

## **4\. MCP Filesystem Toolhost (`mbc-fs`)**

The MCP toolhost provides the minimal “syscalls” the agent needs.

Location:

mcp-servers/mbc-fs/

Key files:

* `server.js` — JSON-RPC-over-stdio MCP server implementing tools

* `preflight.js` — pre-run environment check and setup

* `package.json` — Node project configuration

The toolhost exposes these tools to Gemini:

* `read_file(file_path)`

* `write_file(file_path, text)`

* `appendFile(file_path, text)`

* `mkdir_if_missing(path)`

These are the **only host-level primitives** the agent relies on.  
 All higher-level tooling (validators, interpreters, normalizers, etc.) can be generated into `tooling/` using these primitives.

### **4.1 Preflight**

`preflight.js` ensures:

* `scripts/`, `scripts/logs/`, `tooling/`, `toolchain_generated/` exist

* `scripts/logs/agents_log.md` exists and is seeded with a header

This prevents first-run failures where the agent is required to log but the target path doesn’t exist.

The `package.json` script:

"scripts": {  
  "preflight": "node preflight.js",  
  "start": "npm run preflight && node server.js"  
}

Guarantees that environment checks are run automatically before the MCP server starts.

---

## **5\. Logging and Runtime Trace**

All agent activity is recorded in:

scripts/logs/agents\_log.md

Each entry is a Markdown block containing:

* timestamp

* raw user request text

* plan summary

* tool calls (with arguments \+ success/failure)

* outcome summary

This file is:

* append-only in normal operation

* the primary audit trail for agent behavior

* essential for debugging and regression analysis

The agent uses `appendFile` to add new entries, never overwriting past logs.

---

## **6\. Documentation Set**

The repository may include:

* `docs/USAGE_GUIDE.md`

  * Main usage and interaction guide for the Box Calculus Agent.

* `docs/QUICK_REFERENCE.md`

  * One-page cheat sheet with core commands, tool signatures, and constraints.

* `docs/AGENT_BEHAVIOR_EXAMPLES.md`

  * Canonical transcripts of correct agent behavior and edge cases.

* `docs/MCP_HOSTING_AND_SETUP.md`

  * Practical instructions for setting up and running the MCP toolhost and registering the extension.

These documents are strongly recommended for:

* onboarding new contributors

* operating the system safely

* diagnosing behavior issues

---

## **7\. How It All Fits Together**

In short:

1. **MSP \+ Tiers (JSON5)**

   * Define the ontological and operational landscape (modes, operators, invariants, rewrites).

2. **GEMINI.md (Agent Spec)**

   * Defines how the agent is allowed to think, plan, use tools, and log.

3. **MCP Toolhost (`mbc-fs`)**

   * Implements the minimal filesystem tools used by the agent (`read_file`, `write_file`, `appendFile`, `mkdir_if_missing`).

4. **Tooling Directory**

   * Houses both hand-written and agent-generated code: validators, interpreters, normalizers, test harnesses, etc.

5. **Logging Subsystem**

   * Creates a complete, persistent trace of all agent actions in `scripts/logs/agents_log.md`.

As the system matures, additional MCP servers and tools (e.g., simulation engines, analysis notebooks, or full IGSOA “DASE” analog engines) can be added alongside `mbc-fs` and referenced in `gemini-extension.json`.

---

## **8\. Getting Started (Quick Start)**

### **8.1 Prerequisites**

* Node.js 18+

* Gemini CLI with Extensions / MCP support

* This repository cloned locally

### **8.2 Start the MCP Toolhost**

From the repository root:

cd mcp-servers/mbc-fs  
npm install  
npm start

This will:

1. Run `preflight.js` (ensures paths/logs exist)

2. Start `server.js` (MCP toolhost)

### **8.3 Register the Extension with Gemini**

Ensure `gemini-extension.json` exists at repo root:

{  
  "name": "mbc-toolhost",  
  "version": "0.1.0",  
  "mcpServers": {  
    "mbc-fs": {  
      "command": "node",  
      "args": \["./mcp-servers/mbc-fs/server.js"\]  
    }  
  },  
  "contextFileName": "GEMINI.md"  
}

Then, in Gemini’s environment, add this extension (exact command depends on Gemini CLI version).

### **8.4 First Interaction**

Once the extension is active, you can start with something simple:

“Summarize your purpose.”

The agent should:

* interpret the request

* generate a plan

* log the interaction to `scripts/logs/agents_log.md`

* respond with a summary based on GEMINI.md

Check the log file to confirm entries are being appended.

---

## **9\. Next Steps and Recommendations**

1. **Implement JSON5 schema validation**

   * Populate `tooling/validators/*.js` (schema, tier, cross-tier validators).

   * Use the agent to help generate these tools.

2. **Add automated CI checks**

   * Lint / format JSON5

   * Run schema validators

   * Optionally verify invariants across tiers.

3. **Extend MCP tool set gradually**

   * Add specialized tools (e.g., MSP analyzer, tier consistency reporter, simulation engine hook) as needed.

4. **Keep GEMINI.md stable and versioned**

   * Treat `GEMINI.md` as the contract between you and the agent.

   * Increment version when making behavioral changes (e.g., v1.5, v1.6).

---

