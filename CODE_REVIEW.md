# Code Review Report

## Scope & Approach
Reviewed the existing simulation implementation (`satp_engine.py`) and the policy/configuration documents under `mbc/` and `docs/`. Focused on runtime risks, maintainability, and compliance alignment. No automated tests or builds were executed for this review.

## Strengths
- Clear parameterization and descriptive comments in `satp_engine.py` make the simulation intent discoverable without external context.
- Recent governance documents (`mbc/agents/agents.md`, `docs/engine/DASE_INTEGRATION.md`, and `mbc/operator_packs/op_pack_dase_satp.json5`) consistently articulate dispatch and compliance boundaries, reducing ambiguity for integrators.

## Findings & Recommendations

### 1) Simulation side effects on import (High)
`satp_engine.py` executes printing, figure creation, animation wiring, and `plt.show()` at module import time, which blocks headless environments and prevents programmatic reuse. Add a `main()` entry point and guard (`if __name__ == "__main__":`) so importing the module does not start the UI; include a CLI flag to skip plotting when running in batch contexts.【F:satp_engine.py†L114-L194】

### 2) Unused damping factor (Medium)
A `damping_factor` variable is computed but never applied to the update step, so the documented damping does not influence the integrator. Either remove the dead calculation or incorporate the factor into the Verlet update to ensure the intended energy dissipation is modeled.【F:satp_engine.py†L162-L166】

### 3) Missing stability and termination controls (Medium)
The Courant condition is printed but not enforced, and `T_max` is unused in the stepping loop. Add guardrails (e.g., raise when `dt/dx >= 1` and stop iterating once `t` exceeds `T_max`) to prevent runaway or unstable simulations, especially when parameters are tuned experimentally.【F:satp_engine.py†L9-L188】

### 4) Minimal error handling and telemetry validation (Low)
Functions such as `get_kink_center` and `engine_control_law` assume well-behaved inputs and silently return defaults when the kink is lost. Consider emitting warnings or structured telemetry when zero crossings disappear or gate inputs are invalid, to help diagnose divergence without relying solely on plots.【F:satp_engine.py†L52-L105】【F:satp_engine.py†L137-L190】

### 5) Vendor binaries tracked in git (Low)
`mbc-toolhost/node_modules` includes numerous modified or deleted binaries in the working tree, which obscures meaningful diffs and slows reviews. Move dependencies out of version control or pin via a lockfile and clean install step to reduce noise in future changes.【F:mbc-toolhost/node_modules/json5/lib/cli.js†L1-L40】【F:mbc-toolhost/node_modules/js-beautify/js/bin/js-beautify.js†L1-L80】

## Next Steps
- Refactor `satp_engine.py` into a reusable module with optional visualization and enforced stability limits.
- Reintroduce or correct damping behavior and add basic diagnostics for kink loss and gate inputs.
- Untrack generated `node_modules` artifacts and rely on reproducible dependency installation.
- Add lightweight automated checks (linting/formatting and a smoke test) to prevent regressions in simulation parameters and policy documents.
