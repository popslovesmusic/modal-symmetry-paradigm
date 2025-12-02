---

---

# **USAGE\_GUIDE.md** 

# **Box Calculus Agent — Usage & Interaction Guide**

# **\========================================**

## **1\. Overview**

This guide explains how to interact with the **Box Calculus Agent**, how to issue requests, how tool calls are performed, how logs are written, and how the agent behaves according to *GEMINI.md v1.4*.

This is the **primary user- and developer-focused document**.

---

# **2\. How to Use the Agent**

The agent is invoked through the Gemini environment.  
 Every message you send to the agent is processed through:

1. Interpretation

2. Planning

3. Tool execution (if required)

4. Validation

5. Logging

6. Final output

You simply **ask for tasks**, and the agent follows the full execution model automatically.

Examples:

"Summarize the purpose of the operator executor."  
"Generate a rewrite rule for Tier 03 and save it to tooling/execution/rewrite\_engine.js."  
"List all files under tooling/utils."  
"Fix the schema for tier\_02\_operator\_pack.json5."

The agent determines:

* whether tool calls are required

* whether confirmation is required

* how logging occurs

---

# **3\. File Operations**

The agent can:

* **read** files

* **write** new files

* **append** to logs

* **create directories**

It **cannot**:

* delete files (without explicit confirmation)

* move or rename files (without confirmation)

* write outside the allowed sandbox

* overwrite logs

### **Safe write example**

Create a new JSON5 schema at tooling/validators/new\_schema.json5 with the following structure: {...}

Agent response:

* Requests confirmation if file already exists

* Creates directory if missing

* Writes file

* Logs action

---

# **4\. Logging Behavior**

Logs are written to:

scripts/logs/agents\_log.md

Every interaction generates a log entry containing:

* timestamp

* user request

* plan summary

* each tool call

* outcome

If logging fails:

* agent warns

* retries once

* logs failure in next session

---

# **5\. Tool Calls (Manual requests)**

You can directly request tool-level actions by asking:

"Read file scripts/GEMINI.md."  
"Append a note to scripts/logs/agents\_log.md: 'test entry'."  
"Make directory tooling/new\_module."

The agent will:

* generate a plan

* execute the necessary tools

* log everything

---

# **6\. Confirmation Rules**

The agent **must** ask for confirmation before any irreversible action:

### **Requires confirmation:**

* overwriting files with `write_file`

* deleting files (if implemented later)

* renaming or moving files

* restructuring directories

* overwriting schemas or operator definitions

* large auto-generated code bundles

### **Does NOT require confirmation:**

* pure read\_file

* appending to logs

* creating missing directories

* writing brand-new files

* generating new schemas in fresh files

---

# **7\. Asking the Agent to Generate Tools**

The agent can generate new tools or modules if you ask:

"Generate a new semantic analyzer in tooling/semantic/semantic\_classifier.js."  
"Create a JSON5 validator for Tier 04 using your tool API."  
"Write a script to list all rewrites across tiers."

The agent will:

* plan

* validate directory structure

* write the file

* log

---

# **8\. How to Ask for Multi-Step Operations**

Example:

1\. Read tier\_03\_operator\_pack.json5  
2\. Add a new operator Π\_unify  
3\. Save updated file  
4\. Log everything

Just ask:

"Add operator Π\_unify to tier\_03\_operator\_pack.json5 with signature {...}."

The agent will generate the correct multi-step plan automatically.

---

# **9\. Error Handling**

### **If a file is missing**

Agent creates it.

### **If a directory is missing**

Agent uses `mkdir_if_missing`.

### **If log is corrupted**

Agent:

1. Backs it up

2. Recreates the log

3. Logs the corruption event

### **If tool fails unexpectedly**

Agent:

1. Logs the failure

2. Explains the issue

3. Suggests repair

4. Re-attempts safely if possible

---

# **10\. Sandbox & Allowed Paths**

The agent may only operate under:

BASE\_DIR/

Safe write paths include:

* `scripts/logs/`

* `tooling/`

* `toolchain_generated/`

Forbidden:

* `node_modules/`

* absolute paths

* user directories

* system paths

---

# **11\. Best Practices for Using the Agent**

1. **Be explicit.** The agent thrives on clear intent.

2. **Chunk tasks.** Break complex goals into multi-step requests.

3. **Use confirmation when needed.** Safety is built in.

4. **Review logs.** They show exactly what the agent did.

5. **Keep GEMINI.md v1.4 stable.** It is your canonical control layer.

---

