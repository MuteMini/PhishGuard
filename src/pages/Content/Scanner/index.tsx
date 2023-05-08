import { createRoot } from "react-dom/client";
import App from "@src/pages/Content/Scanner/App";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/Content/Scanner");

let cropOn = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (
    request.action === "scan" &&
    document.getElementsByClassName("scanner-shadow-ext").length <= 0
  ) {
    const root = document.createElement("div");
    root.className = "scanner-shadow-ext";
    document.body.append(root);
    document.body.classList.add("no-scroll");

    createRoot(root).render(<App />);
    cropOn = true;
  }
});
