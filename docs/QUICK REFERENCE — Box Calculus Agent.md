# **QUICK REFERENCE — Box Calculus Agent**

Version 1.0

---

## **Core Behaviors**

* Every request is processed through **6 phases**

* Every request **must** produce a log entry

* Every tool call is recorded

* The agent **must** obey GEMINI.md v1.4

* The agent cannot modify files without plan \+ validation

* Unsafe operations require **explicit confirmation**

---

## **Tool Signatures**

read\_file(file\_path)  
→ { content }

write\_file(file\_path, text)  
→ { success: true }

append\_file(file\_path, text)  
→ { success: true }

mkdir\_if\_missing(path)  
→ { success: true }

---

## **Allowed Write Paths**

* scripts/logs/

* tooling/

* toolchain\_generated/

Forbidden:

* node\_modules/

* system directories

* absolute paths

* outside BASE\_DIR

---

## **Log Location**

scripts/logs/agents\_log.md

Log entries must follow:

\#\# Log Entry — \<timestamp\>  
\*\*Request:\*\* ...  
\*\*Plan Summary:\*\* ...  
\*\*Tool Calls:\*\* ...  
\*\*Outcome:\*\* ...  
\---

---

## **Common Commands**

### **Read a file**

"Read scripts/GEMINI.md"

### **Write a new file**

"Write a new schema file at tooling/validators/spec.json5: {...}"

### **Append to log**

(Internal — never needed manually)

### **Generate a tool**

"Create a new operator interpreter at tooling/execution/op\_eval.js"

### **Fix a schema**

"Correct tier\_03\_operator\_pack.json5 according to the canonical schema"

### **List files**

"List all files in tooling/execution"

### **Modify a file (Existing)**

Requires confirmation.

---

## **Confirmations Required For**

* Overwriting files

* Deleting files

* Moving/renaming files

* Bulk code generation

* Schema rewrites to existing files

---

## **Recovery Rules**

* Missing directory → mkdir\_if\_missing

* Missing file → write\_file

* Corrupted log → backup \+ new log \+ log corruption

---

# **3\. AGENT\_BEHAVIOR\_EXAMPLES.md**

# **Box Calculus Agent — Example Interactions**

This document shows **canonical transcripts** of valid agent behavior under GEMINI.md v1.4.

---

# **Example 1 — Summarization (No tools except logging)**

**USER:**  
 “Summarize your purpose.”

**AGENT (Output):**  
 (Condensed summary of purpose)

**AGENT (Logged):**

\#\# Log Entry — 2025-12-01T00:00:00Z  
\*\*Request:\*\* Summarize your purpose.  
\*\*Plan Summary:\*\* Read log, append entry, generate summary.  
\*\*Tool Calls:\*\*  
\- read\_file("scripts/logs/agents\_log.md") → success  
\- append\_file("scripts/logs/agents\_log.md", …) → success  
\*\*Outcome:\*\* Summary returned and logged.  
\---

---

# **Example 2 — Creating a New File**

**USER:**  
 “Create a validator at tooling/validators/schema\_v2.js.”

**AGENT PLAN:**

1. mkdir\_if\_missing(tooling/validators)

2. write\_file(schema\_v2.js)

3. log entry

**AGENT OUTPUT:**  
 “File created successfully.”

**AGENT LOG ENTRY:**  
 Shows both tool calls.

---

# **Example 3 — Overwriting a File (Confirmation Required)**

**USER:**  
 “Overwrite tooling/utils/trace\_engine.js with a new version.”

**AGENT:**  
 “This is a destructive operation. Confirm? (yes/no)”

**USER:**  
 “yes”

**AGENT executes plan.**

---

# **Example 4 — Multi-Step Schema Fix**

**USER:**  
 “Fix tier\_02\_operator\_pack.json5 according to the official schema.”

**AGENT:**

1. reads schema

2. reads target file

3. repairs content

4. writes updated file (asks confirmation if overwriting)

5. validates

6. logs

---

# **Example 5 — Log Corruption Recovery**

If log is malformed:

Agent:

1. backs up corrupt log

2. creates new clean log

3. writes recovery entry

4. proceeds normally

---

# **Example 6 — Sandbox Violation Attempt**

**USER:**  
 “Write to C:/Windows/System32/drivers/etc/hosts”

**AGENT:**  
 “This path violates sandbox rules. Operation aborted and logged.”

---

# **MCP HOSTING AND SETUP GUIDE**

Version 1.0

This guide explains how to install, run, and register the **MBC-FS MCP Toolhost**.

---

# **1\. Requirements**

* Node.js 18+

* Gemini with Extensions support

* Your project directory containing:

  * gemini-extension.json

  * mcp-servers/

  * scripts/logs/

---

# **2\. Directory Layout**

project/  
  gemini-extension.json  
  GEMINI.md  
  mcp-servers/  
    mbc-fs/  
      server.js  
      package.json  
      tools/  
        readFile.js  
        writeFile.js  
        appendFile.js  
        mkdirIfMissing.js  
  scripts/  
    logs/  
      agents\_log.md  
  tooling/

---

# **3\. Install the MCP Server**

From:

project/mcp-servers/mbc-fs

Run:

npm install

Since this server has no dependencies, this simply initializes node\_modules.

---

# **4\. Run Manually (Optional)**

npm start

You should see no output — MCP servers are silent.

---

# **5\. Register with Gemini**

Open `gemini-extension.json`:

{  
  "name": "mbc-toolhost",  
  "mcpServers": {  
    "mbc-fs": {  
      "command": "node",  
      "args": \["./mcp-servers/mbc-fs/server.js"\]  
    }  
  },  
  "contextFileName": "GEMINI.md"  
}

Gemini automatically loads MCP servers listed here.

---

# **6\. Testing Tool Availability**

In Gemini, run:

list tools

Expected response:

read\_file  
write\_file  
append\_file  
mkdir\_if\_missing

---

# **7\. Troubleshooting**

### **Server doesn’t start**

Check paths in gemini-extension.json. They must be relative.

### **Tools don’t appear**

Verify:

* extension is enabled

* server.js executes

* tool names match spec

### **Writes fail**

Check that the directory exists or that mkdir\_if\_missing is called.

### **Logging fails**

Ensure:

* scripts/logs exists

* append\_file is implemented

* paths are sandboxed under BASE\_DIR

---

