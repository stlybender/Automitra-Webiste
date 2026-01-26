"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  // Derive categories dynamically from posts
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(blogPosts.map((post) => post.category))
    );
    return ["All", ...uniqueCategories];
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(query);
        const categoryMatch = post.category.toLowerCase().includes(query);
        const contentMatch = post.contentParagraphs.some((p) =>
          p.toLowerCase().includes(query)
        );
        return titleMatch || categoryMatch || contentMatch;
      });
    }

    // Filter by category
    if (selectedCategory !== "All") {
      posts = posts.filter((post) => post.category === selectedCategory);
    }

    // Sort by date
    posts = [...posts].sort((a, b) => {
      if (sortOrder === "latest") {
        return b.dateISO.localeCompare(a.dateISO);
      } else {
        return a.dateISO.localeCompare(b.dateISO);
      }
    });

    return posts;
  }, [searchQuery, selectedCategory, sortOrder]);

  return (
    <main className="min-h-screen bg-cream-500 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Perspectives
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 font-medium">
            Thoughts on AI, growth, and modern work
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search perspectives"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 border-4 border-black rounded-lg text-lg font-medium focus:outline-none focus:ring-4 focus:ring-accent-500 comic-shadow-sm"
            />
          </div>

          {/* Category and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 border-3 border-black rounded-lg font-bold text-sm uppercase tracking-wide transition-all ${
                    selectedCategory === category
                      ? "bg-accent-500 comic-shadow-sm"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "latest" | "oldest")}
              className="px-4 py-2 border-3 border-black rounded-lg font-bold text-sm uppercase tracking-wide bg-white cursor-pointer hover:bg-gray-100"
            >
              <option value="latest">Latest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl font-bold text-gray-900">
              No posts found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-white border-4 border-black rounded-lg overflow-hidden comic-shadow transition-all duration-300 hover:comic-shadow-lg hover:-translate-y-1 cursor-pointer">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900 uppercase leading-tight">
                      {post.title}
                    </h2>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
