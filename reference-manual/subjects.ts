import pMap from "p-map"
import { basename, dirname, sep } from "path"

export async function get() {
	// Import all .svx files in the directory
	const modules = import.meta.glob("./**/*.svelte.md");

	// Run a map over each module

	// Check out the docs for p-map if this looks confusing, it's  basically
	// Array.map(...) but for promises
	const posts = await pMap(
		Object.entries(modules),
		async function ([filename, module]) {
			// Import the component. The metadata here is added by MDSveX and mirrors
			// the front matter.

			const { metadata } = await module()

			const file = basename(filename, ".svelte.md");
			const parent = basename(dirname(filename))

			// build path for relevant SEO information
			let path = '';
			if(file == 'index'){
				path = '/support/' + parent;
			} else {
				if(parent == '.'){
					path = '/support/' + file;
				} else {
					path = '/support/' + parent + '/' + file ; 
				}
			}

      const pos = (parent) => {
        if(parent == 'grid-functions'){
          return 0
        }
        if(parent == 'control-element-functions'){
          return 1
        }
      }

			//slugify
			return {
				title: metadata.title,
        group: {pos: pos(parent), parent: parent, name: metadata.group},
				date: new Date(metadata.date),
				headings: metadata.headings,
				readingTime: metadata.readingTime,
				description: metadata.description,
				path: path,
				slug: basename(filename, ".svelte.md") // Generate a slug we can link to
			}
		}
	)

	// Sort posts by descending date
	posts.sort((a, b) => (a.date > b.date ? -1 : 1))

  let fileStructure = [];

  posts.forEach(post => {
    if(Object.keys(post.group).length !== 0 && post.slug !== 'index'){
      fileStructure[post.group.pos] = {category: post.group.name, parent: post.group.parent, articles: []};
    }
  })

  posts.forEach(post => {
    if(Object.keys(post.group).length !== 0 && post.slug !== 'index'){
      fileStructure[post.group.pos].articles.push({title: post.title, slug: post.slug});
    }
  })

	return {
		body: { posts, fileStructure }
	}
}