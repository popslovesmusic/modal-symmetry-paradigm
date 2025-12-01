---

# **MBC ENCYCLOPEDIA — MASTER DEFINITION**

Location:

/mbc/encyclopedia/

The MBC Encyclopedia is the **authoritative, human-facing documentation layer** for the entire IGSOA/MBC infrastructure.  
 It mirrors the operator packs, rewrite systems, tier files, and invariants, but expresses them in a **navigable, educational, structured format**.

This is the **top-level documentation stack** from which agents, humans, and automated systems learn the system.

It is divided into **eight volumes**, each focusing on a core dimension of MBC.

---

# **ENCYCLOPEDIA STRUCTURE**

/mbc/encyclopedia/  
    Volume\_I\_Foundations/  
    Volume\_II\_Operators/  
    Volume\_III\_Boxes/  
    Volume\_IV\_Tiers/  
    Volume\_V\_Rewrites/  
    Volume\_VI\_Invariants/  
    Volume\_VII\_Schemas/  
    Volume\_VIII\_Architecture/

Each volume contains **JSON5 entries**, each defining:

* concepts

* diagrams

* references to tier files

* operator examples

* Box compositions

* invariants

* rewrite principles

The encyclopedia is intentionally **JSON5-based**, not Markdown-based, so agents can:

* index

* search

* cross-link

* perform meta-reasoning

* generate glossaries, references, or textbooks automatically

---

# **VOLUME DEFINITIONS**

Below is the formal definition of each encyclopedia volume.

---

## **Volume I – Foundations**

/mbc/encyclopedia/Volume\_I\_Foundations/

Purpose:  
 Defines the philosophical, mathematical, and structural **first principles** of MSP, MBC, IGSOA.

Contains entries such as:

* MSP primitives

* Proto-operators

* Modal fusion

* Dimensional freedom

* Deviation Geometry foundations

* Tri-Unity and δ–Φ–Π

* Semantic computation principles

* Box calculus basics

This is the **origin layer** of the encyclopedia.

---

## **Volume II – Operators**

/mbc/encyclopedia/Volume\_II\_Operators/

Contains the full human-facing documentation for:

* Proto-operators

* Functional operators

* Tier operator families (δ, Φ, Π, μ, λ, ψ, Σ, Θ, χ, Ω, ρ, Ξ)

* Operator Packs

* Interaction patterns

* Examples and diagrams

---

## **Volume III – Boxes**

/mbc/encyclopedia/Volume\_III\_Boxes/

Documents:

* What Boxes are

* Structural rules

* Preset Box library

* Box composition techniques

* Box-level rewrite behaviors

* Cross-tier routing inside a Box

Each preset Box gets an encyclopedia entry here.

---

## **Volume IV – Tiers**

/mbc/encyclopedia/Volume\_IV\_Tiers/

Describes all 13 tiers:

* Purpose of each tier

* Primitive semantics

* Operator family

* Rewrite system

* Axiom box

* Interaction tables

* Module packs

This volume is effectively your **Tier textbook**.

---

## **Volume V – Rewrites**

/mbc/encyclopedia/Volume\_V\_Rewrites/

Defines:

* Rewrite principles

* Normal forms

* Confluence

* Termination

* Tier rewrite systems explained

* Cross-tier rewrite fusion

* Meta-rewrite cycles

This is the backbone of your formal mathematics engine.

---

## **Volume VI – Invariants**

/mbc/encyclopedia/Volume\_VI\_Invariants/

Contains:

* Each tier’s invariants

* Global invariants

* Rewrite invariants

* Polarity invariants (Θ)

* Wave invariants (ψ)

* Semantic-time invariants (χ)

* Deviation invariants (δ)

This is the **safety layer** of MBC.

---

## **Volume VII – Schemas**

/mbc/encyclopedia/Volume\_VII\_Schemas/

Contains documentation explaining:

* All schema definitions

* Why each schema exists

* How validation works

* File–schema matching rules

* Schema-of-schemas

* Validation examples

This volume turns the schema library into readable documentation.

---

## **Volume VIII – Architecture**

/mbc/encyclopedia/Volume\_VIII\_Architecture/

Documents the **entire MBC system**:

* The MBC stack

* MSP → Proto → Functional → Tier

* JSON5 ecosystem

* Agents (Librarian, Router, Evaluator, etc.)

* Cross-volume and cross-tier architecture

* MBC computational model

* MBC runtime/ISA description

* How Boxes and Operators form a computation pipeline

This is the **big-picture architecture**.

---

# **ENCYCLOPEDIA ENTRY SCHEMA (JSON5)**

Each entry uses this standard structure:

{  
  "id": "Unique\_Entry\_ID",  
  "volume": "Volume\_I\_Foundations",  
  "title": "Concept Title",  
  "description": "Long formal explanation of concept.",

  "related\_files": \[  
    "/mbc/tier\_01/tier\_01\_metadata.json5",  
    "/mbc/operators/Bx\_Integrate.json5"  
  \],

  "definitions": \[  
    "Formal definition 1",  
    "Formal definition 2"  
  \],

  "examples": \[  
    { "example": "Input/Output example", "note": "Explanation" }  
  \],

  "diagrams": \[  
    "ASCII or external diagram identifiers"  
  \],

  "crossrefs": \[  
    "Entry\_ID\_of\_related\_concept",  
    "Entry\_ID\_of\_operator\_family"  
  \]  
}

This is the template for all encyclopedia entries across all volumes.

---

# **INITIAL ENTRY (Volume I Example)**

Here is the first encyclopedia entry, ready for Volume I.

## **`/mbc/encyclopedia/Volume_I_Foundations/Entry_MSP_Primitives.json5`**

{  
  "id": "Entry\_MSP\_Primitives",  
  "volume": "Volume\_I\_Foundations",  
  "title": "MSP Primitives",  
  "description": "MSP Primitives are the irreducible modal entities from which proto-operators arise. They encode modal distinctions before any functional or structural interpretation within MBC.",

  "related\_files": \[  
    "/mbc/proto\_operators/PO\_Integrator.json5",  
    "/mbc/proto\_operators/PO\_Amplifier.json5"  
  \],

  "definitions": \[  
    "MSP primitives are the minimal modal units capable of fusion.",  
    "They precede dimensional formation, semantic projection, and evaluation."  
  \],

  "examples": \[  
    {  
      "example": "Fusion(MSP\_A, MSP\_C) → Proto-Dimensional Axis",  
      "note": "Shows dimensional emergence."  
    }  
  \],

  "crossrefs": \[  
    "Entry\_ProtoOperators",  
    "Entry\_MBC\_Foundations"  
  \]  
}

---

