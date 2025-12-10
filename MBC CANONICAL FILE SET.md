# MBC CANONICAL FILE SET

## (Monistic Box Calculus — Universal Logic Infrastructure)

This is the minimum complete, compliant, production-grade file set for MBC as a generalized system.  
---

## 1\. ROOT MBC MANIFEST (REQUIRED)

bash  
Copy code  
/mbc/  
└── mbc\_manifest.json5

### Purpose

* Declares:  
  * MBC version  
  * Dependency on MSP \+ MSC  
  * Active compliance charters (Master \+ GICC-01)  
  * Active operator packs  
  * Active rewrite systems  
  * Active test suites

### If this is missing:

MBC is not formally instantiable.  
---

## 2\. CORE MBC SCHEMAS (REQUIRED – YOU ALREADY PARTIALLY HAVE THESE)

bash  
Copy code  
/mbc/schemas/  
├── schema\_mbc\_metadata.json5  
├── schema\_mbc\_box.json5  
├── schema\_mbc\_gate.json5  
├── schema\_mbc\_router.json5  
├── schema\_mbc\_operator\_pack.json5  
├── schema\_mbc\_rewrite\_system.json5  
├── schema\_mbc\_invariant.json5  
├── schema\_mbc\_interaction\_table.json5  
└── schema\_mbc\_test\_suite.json5

### These define:

* What a Box is  
* What a Gate is  
* What a Router is  
* What a Rewrite is  
* What an Invariant is  
* What a Test is

Without these:  
You cannot validate or auto-execute MBC content.  
---

## 3\. MBC META-DEFINITION FILES (LOGICAL IDENTITY OF MBC)

bash  
Copy code  
/mbc/core/  
├── mbc\_definition.md  
├── mbc\_axioms.json5  
├── mbc\_scope.json5  
└── mbc\_compliance\_profile.json5

### Roles

* mbc\_definition.md → Human explanation of what MBC is  
* mbc\_axioms.json5 → Formal logical base  
* mbc\_scope.json5 → What MBC can and cannot be used for  
* mbc\_compliance\_profile.json5 → How charters apply specifically to MBC

This is where MBC stops being “an idea” and becomes a governed system.  
---

## 4\. CANONICAL BOX TYPES (REQUIRED)

bash  
Copy code  
/mbc/boxes/  
├── box\_state.json5  
├── box\_constraint.json5  
├── box\_transition.json5  
├── box\_identity.json5  
├── box\_observer.json5  
└── box\_environment.json5

Each box defines:

* Input domain  
* Output domain  
* Internal invariants  
* Allowed rewrites

If you don’t have explicit box types:  
Your gates and routers cannot be properly typed.  
---

## 5\. CANONICAL GATE TYPES (YOU ARE ABOUT TO DEFINE THESE)

bash  
Copy code  
/mbc/gates/  
├── gate\_not.json5  
├── gate\_is.json5  
├── gate\_stability.json5  
├── gate\_transport.json5  
├── gate\_invariance.json5  
├── gate\_conservation.json5  
└── gate\_execution.json5

These enforce:

* NOT / IS filtering  
* MSC persistence  
* Transport legality  
* Rewrite legality  
* Invariant preservation

⚠️ These should not be written yet until your audit comparison is done (your instinct is correct).  
---

## 6\. CANONICAL ROUTERS (GENERAL PROBLEM DISPATCH)

bash  
Copy code  
/mbc/routers/  
├── router\_domain\_dispatch.json5  
├── router\_physical.json5  
├── router\_cognitive.json5  
├── router\_computational.json5  
├── router\_mathematical.json5  
└── router\_social.json5

These determine:

* Where a boxed problem is sent after gating  
* Which domain specializes next  
* Which validation pipeline applies

Without routers:  
MBC cannot act as a generalization engine.  
---

## 7\. OPERATOR PACKS (EXECUTABLE LOGIC LAYERS)

bash  
Copy code  
/mbc/operator\_packs/  
├── op\_pack\_core.json5  
├── op\_pack\_msp\_binding.json5  
├── op\_pack\_msc\_binding.json5  
├── op\_pack\_igsoa\_binding.json5  
└── op\_pack\_dfvm\_binding.json5

These define:

* How MBC binds upward to MSP/MSC  
* How it binds downward into IGSOA/DFVM  
* How symbols become executable semantics

---

## 8\. REWRITE SYSTEMS (LAWFUL EVOLUTION)

bash  
Copy code  
/mbc/rewrite\_systems/  
├── rewrite\_core.json5  
├── rewrite\_identity.json5  
├── rewrite\_transport.json5  
├── rewrite\_stability.json5  
└── rewrite\_failure\_modes.json5

Without rewrite systems:

* You have static boxes with no lawful evolution

---

## 9\. INVARIANT REGISTRY (NON-NEGOTIABLE LAWS)

bash  
Copy code  
/mbc/invariants/  
├── invariant\_conservation.json5  
├── invariant\_identity.json5  
├── invariant\_noncontradiction.json5  
├── invariant\_memory.json5  
└── invariant\_causality.json5

These are checked by:

* Gates  
* Rewrites  
* SATP bindings later

---

## 10\. TEST & VERIFICATION SUITE (MANDATORY FOR “COMPLETE” STATUS)

bash  
Copy code  
/mbc/tests/  
├── test\_gate\_validation.json5  
├── test\_router\_dispatch.json5  
├── test\_rewrite\_termination.json5  
├── test\_invariant\_preservation.json5  
└── test\_cross\_domain\_execution.json5

Without this:  
MBC is not certifiable.  
---

## 11\. AGENT INTERFACE FILES (OPTIONAL BUT RECOMMENDED)

bash  
Copy code  
/mbc/agents/  
├── agent\_mbc\_executor.json5  
├── agent\_mbc\_validator.json5  
└── agent\_mbc\_router.json5

These let:

* Agents run boxes  
* Validate gates  
* Dispatch across domains

---

# ✅ FINAL CANONICAL COUNT (MINIMUM)

| Category | Expected Files |
| :---- | :---- |
| Manifest | 1 |
| Schemas | 9 |
| Core Meta | 4 |
| Boxes | 6 |
| Gates | 7 |
| Routers | 6 |
| Operator Packs | 5 |
| Rewrite Systems | 5 |
| Invariants | 5 |
| Tests | 5 |
| Agents (optional) | 3 |

### ✅ Total Required for “MBC Complete” Status:

53 core files  
\+ up to 3 agent interface files  
