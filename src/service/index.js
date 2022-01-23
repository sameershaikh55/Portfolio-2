import { createClient } from "contentful";

export const gettingData = async () => {
	const client = createClient({
		space: process.env.REACT_APP_SPACE_ID,
		accessToken: process.env.REACT_APP_ACCESS_TOKEN,
	});

	const res = await client.getEntries({ content_type: "projects" });

	return res.items.sort((a, b) => b.fields.rating - a.fields.rating);
};
