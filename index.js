import chalk from "chalk"
import fs from "fs"
import prompts from "prompts"

const main = async () => {
	const response = await multipleChoice()
	console.log("Final response", response)
	return
}

const multipleChoice = async () => {
	const response = await prompts([
		{
			type: "text",
			name: "name",
			message: "Name",
		},
		{
			type: "select",
			name: "color",
			message: (prev) => (prev === "" ? "Pick colors" : "sroloc kciP"),
			choices: (p, v) =>
				p == "Joe"
					? [{ title: "color test", value: "eoJ" }]
					: [
							{ title: "Red", value: "#ff0000" },
							{ title: "Green", value: "#00ff00" },
							{ title: "Blue", value: "#0000ff" },
					  ],
		},
	])

	return response
}

main()
