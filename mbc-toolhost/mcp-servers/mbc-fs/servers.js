const fs = require("fs");
const path = require("path");

// === Load tool functions ===
const readFileTool = require("./tools/readFile.js");
const writeFileTool = require("./tools/writeFile.js");

const mkdirIfMissingTool = require("./tools/mkdirIfMissing.js");

// === JSON-RPC server ===

process.stdin.setEncoding("utf8");
let buffer = "";

process.stdin.on("data", chunk => {
  buffer += chunk;
  let idx;
  while ((idx = buffer.indexOf("\n")) >= 0) {
    const line = buffer.slice(0, idx).trim();
    buffer = buffer.slice(idx + 1);
    if (line) handleMessage(line);
  }
});

function sendResponse(id, result, error) {
  const message = { jsonrpc: "2.0", id };
  if (error) message.error = error;
  else message.result = result;

  process.stdout.write(JSON.stringify(message) + "\n");
}

function resolvePath(base, p) {
  const full = path.resolve(base, p);
  if (!full.startsWith(base)) {
    throw new Error("Path outside BASE_DIR not allowed");
  }
  return full;
}

const BASE_DIR = process.cwd();

// === Tool registry ===
const tools = {
  readFile: args => readFileTool({ ...args, BASE_DIR }),
  writeFile: args => writeFileTool({ ...args, BASE_DIR }),

  mkdirIfMissing: args => mkdirIfMissingTool({ ...args, BASE_DIR })
};

// === Handle JSON-RPC messages ===
async function handleMessage(line) {
  let msg;
  try {
    msg = JSON.parse(line);
  } catch {
    return;
  }

  const { id, method, params } = msg;

  if (method === "tools/list") {
    sendResponse(id, {
      tools: Object.keys(tools).map(name => ({ name }))
    });
    return;
  }

  if (method === "tools/call") {
    const { name, arguments: args } = params || {};
    const fn = tools[name];
    if (!fn) {
      sendResponse(id, null, { code: -32601, message: "Unknown tool: " + name });
      return;
    }
    try {
      const result = await fn(args || {});
      sendResponse(id, { result });
    } catch (err) {
      sendResponse(id, null, { code: -32000, message: err.message });
    }
    return;
  }

  sendResponse(id, null, { code: -32601, message: "Unknown method: " + method });
}
