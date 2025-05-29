import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem"

export default async function Posts() {
  const posts = await getPostsMeta()

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>
  }

  const imageMap: Record<string, string> = {
    "weekend": "img1.jpg",
    "more": "img2.jpg",
    "another": "img3.jpg",
    "new": "img4.jpg",
    "ssg-ssr": "img5.jpg",
    "pre-rendering": "img6.jpg",
  }

  return (
    <section className="mt-6 mx-auto max-w-7xl px-4">
      <h2 className="text-4xl text-center font-bold mb-8">My Articles</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <ListItem
            key={post.id}
            post={{
              ...post,
              image: imageMap[post.id] || "placeholder.jpg",
            }}
          />
        ))}
      </ul>
    </section>
  )
}
