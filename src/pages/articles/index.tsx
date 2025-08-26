import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn the basics of Next.js and how to build fast, modern web applications with React.",
    date: "August 20, 2025",
  },
  {
    id: 2,
    title: "Tailwind CSS Best Practices",
    excerpt:
      "Tips and tricks for writing clean and maintainable styles with Tailwind CSS.",
    date: "August 22, 2025",
  },
  {
    id: 3,
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into React Server Components and how they improve performance.",
    date: "August 25, 2025",
  },
];

export default function ArticlesPage() {
  return (
    <div className="p-6 lg:p-12">
      <h1 className="text-2xl font-bold mb-8">📚 Articles</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow rounded-2xl border border-gray-200 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-500 mb-4">{article.date}</p>
              <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
            </div>
            <Link
              href={`/articles/${article.id}`}
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
