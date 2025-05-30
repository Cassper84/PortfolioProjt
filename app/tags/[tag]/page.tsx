import { getPostsMeta } from "@/lib/posts"
import ListItem from "@/app/components/ListItem"
import Link from "next/link"

export const revalidate = 86400

type Props = {
    params: Promise<{
        tag: string
    }>
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}

export async function generateMetadata(props: Props) {
  const params = await props.params;

  const {
    tag
  } = params;

  return {
      title: `Posts about ${tag}`
  }
}

export default async function TagPostList(props: Props) {
  const params = await props.params;

  const {
    tag
  } = params;

  const posts = await getPostsMeta(); // deduped!

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  const imageMap: Record<string, string> = {
    "weekend": "img1.jpg",
    "more": "img2.jpg",
    "another": "img3.jpg",
    "new": "img4.jpg",
    "ssg-ssr": "img5.jpg",
    "pre-rendering": "img6.jpg",
  };

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0 text-center">Results for: #{tag}</h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagPosts.map((post) => (
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
    </>
  );
}