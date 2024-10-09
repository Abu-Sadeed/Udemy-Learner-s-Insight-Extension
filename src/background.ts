'use strict';

function assignBadgeText(enabled: boolean) {
  const text = enabled ? 'ON' : 'OFF';
  void chrome.action.setBadgeText({ text: text });
}

function startUp() {
  chrome.storage.sync.get('enabled', (data: { enabled: boolean }) => {
    assignBadgeText(!!data.enabled);
  });
}

// Ensure the background script always runs.
chrome.runtime.onStartup.addListener(startUp);
chrome.runtime.onInstalled.addListener(startUp);
