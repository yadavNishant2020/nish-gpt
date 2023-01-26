// 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
const { Configuration, OpenAIApi }= require("openai");
const configuration = new Configuration({
    organization: "org-RncNb0vy89sF0j37W3d4UnZ3",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
    "model": "text-davinci-003",
    "prompt": "Say this is a test",
    "max_tokens": 7,
    "temperature": 0,
  });
  