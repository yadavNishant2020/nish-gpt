// 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
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')

const configuration = new Configuration({
    organization: "org-RncNb0vy89sF0j37W3d4UnZ3",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// express api to call above function

const app = express()
const port = 3080

app.post('/', async(req, res) => {
    const response =  await openai.createCompletion({
        "model": "text-davinci-003",
        "prompt": "Say this is a test",
        "max_tokens": 7,
        "temperature": 0,
      });
      console.log(response.data.choices[0].text)
      res.json({
        data: response.data
      })
});