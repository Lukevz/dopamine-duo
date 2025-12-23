import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import config from '../content/config/config.json'

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: config.seo.title,
		description: config.seo.description,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate ? new Date(post.data.pubDate) : new Date(),
			description: post.data.title, // Use title as fallback since posts don't have description
			link: `/posts/${post.id}/`,
		})),
	});
}
