import { createRoot } from "react-dom/client";
import App from "@src/pages/Content/Scanner/App";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/Content/Scanner");

const root = document.createElement("div");
root.className = "scanner-shadow-ext";
document.body.append(root);

createRoot(root).render(<App />);
