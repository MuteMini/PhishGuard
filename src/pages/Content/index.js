console.log("Content script works!");
console.log("Must reload extension for modifications to take effect.");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scan") {
        var style = document.createElement("style");
        style.innerHTML = "html { filter: brightness(0.5); }";
        document.head.appendChild(style);
    }
});