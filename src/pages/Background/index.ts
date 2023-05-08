import reloadOnUpdate from "virtual:reload-on-update-in-background-script";


import cohere from "cohere-ai";

reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/Content/style.scss");

console.log("background loaded");

async function classifyText(text: string, modelId: string, apiKey: string): Promise<any> {
  cohere.init(apiKey);
  const response = await cohere.classify({
    model: modelId,
    inputs: [text],
  });
  return response.body.classifications;
}

function getPrediction(text, type) {
  let promise: Promise<any>;

  if (type === "text") {
    promise = classifyText(
      text,
      "d79d8bde-a425-4ddc-8594-58bc0c4b6539-ft",
      "lMQh1Ns3QkF91ecXnse8DFtd60SdtrYDBQAbqolF"
    );
  }
  if (type === "email") {
    promise = classifyText(
      text,
      "de27de20-de96-43f8-9d86-97cc711c25c1-ft",
      "zfchGu7X0Vys0hAy4CNNAVWQurKxcK4GXNjv1Tu9"
    );
  }
  
  promise.then((val) => console.log(`${JSON.stringify(val)}`));
}