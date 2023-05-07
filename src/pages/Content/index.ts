console.log("content loaded");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import("./components/Demo");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scan") {
    const body = document.querySelector("body");
    const app = document.createElement("div");
    app.className = "overlay";

    if (body) {
      body.prepend(app);
    }
  }
});
