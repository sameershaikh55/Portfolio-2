import { createClient } from "contentful";

export const gettingData = async () => {
	const client = createClient({
		space: "ogpxa58tw2r7",
		accessToken: "qWp0yma-rd28xMEV5dT_auwG9ayJRjad4w2VJxSqbqI",
	});

	const res = await client.getEntries({ content_type: "projects" });

	return res.items.sort((a, b) => b.fields.rating - a.fields.rating);
};
