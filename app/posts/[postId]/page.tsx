import getFormattedDate from "@/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/github-dark-dimmed.min.css'

// Update the import path below to the correct relative path for AuthorProfile
import AuthorProfile from "../../components/AuthorProfile"
import ShareButtons from "../../components/ShareButtons"
export const revalidate = 86400

type Props = {
    params: {
        postId: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta()
    if (!posts) return []
    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params: { postId } }: Props) {
    const post = await getPostByName(`${postId}.mdx`)
    if (!post) {
        return { title: 'Post Not Found' }
    }
    return {
        title: post.meta.title,
    }
}

export default async function Post({ params: { postId } }: Props) {
    const post = await getPostByName(`${postId}.mdx`)
    if (!post) notFound()

    const { meta, content } = post
    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
        <Link
            key={i}
            href={`/tags/${tag}`}
            className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 transition"
        >
            #{tag}
        </Link>
    ))

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 flex gap-12">
            {/* Left sidebar - AuthorProfile */}
            <aside className="hidden md:block flex-shrink-0">
                <AuthorProfile />
            </aside>

            {/* Main content */}
            <main className="flex-grow max-w-3xl">
                <h1 className="text-4xl font-bold mb-2 leading-tight">{meta.title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{pubDate}</p>

                <article className="prose dark:prose-invert prose-lg prose-img:rounded-xl prose-pre:bg-gray-900 prose-a:text-blue-600 dark:prose-a:text-blue-400">
                    {content}
                </article>

                <section className="mt-12">
                    <h3 className="text-lg font-semibold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {tags}
                    </div>
                </section>

                {/* Share button below content */}
                <div className="flex justify-center">
                    <ShareButtons title={meta.title} />
                </div>

                <div className="mt-12">
                    <Link
                        href="/"
                        className="inline-block text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                        ← Back to home
                    </Link>
                </div>
            </main>
        </div>
    )
}
