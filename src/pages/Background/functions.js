//functions return prediction and confidence as object values

function getEmailPrediction(text) {
    const cohere = require('cohere-ai');
    cohere.init('zfchGu7X0Vys0hAy4CNNAVWQurKxcK4GXNjv1Tu9'); // This is your trial API key
    (async () => {
        const response = await cohere.classify({
            model: 'de27de20-de96-43f8-9d86-97cc711c25c1-ft',
            inputs: [text]
        });
        myObj = response.body.classifications;
        return {
            prediction: myObj[0].prediction,
            confidence: myObj[0].confidence,
        }
    })();
}

function getTextPredictions(text) {
    const cohere = require('cohere-ai');
    cohere.init('lMQh1Ns3QkF91ecXnse8DFtd60SdtrYDBQAbqolF'); // This is your trial API key
    (async () => {
        const response = await cohere.classify({
            model: 'd79d8bde-a425-4ddc-8594-58bc0c4b6539-ft',
            inputs: [text]
        });
        myObj = response.body.classifications;
        return {
            prediction: myObj[0].prediction,
            confidence: myObj[0].confidence,
        }
    })();
}
