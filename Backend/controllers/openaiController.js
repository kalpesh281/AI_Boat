const dotenv = require("dotenv");
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.summaryController = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this \n${text}`,
            max_tokens: 2000,
            temperature: 0.5,
        
        });
        if (data && data.choices[0].text) {
            return res.status(200).json({
                summary:data.choices[0].text
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: err.message,
        });
    }
};