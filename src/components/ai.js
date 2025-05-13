// import { InferenceClient } from '@huggingface/inference'
import OpenAI from 'openai'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

// Make sure you set an environment variable in Scrimba
// for HF_ACCESS_TOKEN
// const hf = new HfInference(process.env.HF_ACCESS_TOKEN)
export async function getRecipeFromMistral(ingredientsArr) {
	const ingredientsString = ingredientsArr.join(", ")

	const openai = new OpenAI({
		baseURL: "https://openrouter.ai/api/v1",
		apiKey: import.meta.env.VITE_HF_API_TOKEN,
		dangerouslyAllowBrowser: true,
	})

	try {
		const completion = await openai.chat.completions.create({
			model: "qwen/qwen3-0.6b-04-28:free",
			messages: [
				{ role: "system", content: SYSTEM_PROMPT },
				{ role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
			]
		})

		console.log(completion.choices[0].message);
	  const data = completion.choices[0].message;
	  return data;

	} catch (err) {
		console.error(err.message)
	}

}