/**
 * @typedef {object} TraceEvent
 * @property {string} boxId
 * @property {number} timestamp
 * @property {object} eventData
 */

const historyStore = {};

/**
 * Records a trace event for a given box.
 *
 * @param {TraceEvent} event - The event to record.
 */
function record(event) {
  if (!event.boxId) {
    console.error("Trace event must have a boxId.");
    return;
  }
  if (!historyStore[event.boxId]) {
    historyStore[event.boxId] = [];
  }
  historyStore[event.boxId].push(event);
  console.log(`Recorded event for box ${event.boxId}:`, event);
}

/**
 * Retrieves the history of trace events for a given box.
 *
 * @param {string} boxId - The ID of the box to retrieve the history for.
 * @returns {TraceEvent[]} - An array of trace events.
 */
function history(boxId) {
  return historyStore[boxId] || [];
}

/**
 * Clears the history for a given box ID, or all history if no ID is provided.
 * @param {string} [boxId] - The ID of the box to clear history for.
 */
function clearHistory(boxId) {
  if (boxId) {
    delete historyStore[boxId];
  } else {
    for (const id in historyStore) {
      delete historyStore[id];
    }
  }
}

module.exports = {
  record,
  history,
  clearHistory,
};
