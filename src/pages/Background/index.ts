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

  //WOULD PUT COHERE MODEL STUFF HERE
  if (type === "text") {
    promise = classifyText(
      text,
      "APIKEY",
      "lMQh1Ns3QkF91ecXnse8DFtd60SdtrYDBQAbqolF"
    );
  }
  if (type === "email") {
    promise = classifyText(
      text,
      "APIKEY",
      "zfchGu7X0Vys0hAy4CNNAVWQurKxcK4GXNjv1Tu9"
    );
  }
  
  promise.then((val) => console.log(`${JSON.stringify(val)}`));
}