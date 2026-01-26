import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | AutoMitra AI`,
    description: post.contentParagraphs.slice(0, 3).join(" "),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (all other posts, excluding current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug);

  return (
    <main className="min-h-screen bg-cream-500 pt-32">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 text-sm">
          <span className="uppercase font-bold tracking-wide text-gray-600">
            {post.category}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">{post.dateDisplay}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 lg:mb-12 uppercase tracking-tight text-center leading-tight">
          {post.title}
        </h1>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 lg:mb-16 border-4 border-black rounded-lg overflow-hidden comic-shadow-lg">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.contentParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg sm:text-xl leading-relaxed text-gray-800 mb-6 font-normal"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 lg:mt-24 pt-12 border-t-4 border-black">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 uppercase tracking-tight">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="bg-white border-4 border-black rounded-lg overflow-hidden comic-shadow transition-all duration-300 hover:comic-shadow-lg hover:-translate-y-1 cursor-pointer">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl sm:text-2xl font-black text-gray-900 uppercase leading-tight">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
