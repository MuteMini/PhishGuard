chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scan") {
        const body = document.querySelector("body")
       
        const app = document.createElement("div");
        app.className = "overlay"

        if(body) { body.prepend(app) }
    }
});