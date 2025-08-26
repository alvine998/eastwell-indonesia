import Link from "next/link";
import { useRouter } from "next/router";

export default function ArticleDetail() {
  const router = useRouter();
  const { query: { id } } = router;

  return (
    <div className="p-6 lg:p-12 max-w-3xl mx-auto">
      <Link href="/articles" className="text-sm text-gray-500 hover:underline">
        ← Back to Articles
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-6">Article Title {id}</h1>
      <p className="text-gray-600 mb-4">Published on August 26, 2025</p>
      <p className="leading-relaxed text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
        justo non nulla euismod, in vehicula neque dapibus. In aliquet, augue a
        malesuada gravida, ligula lacus pharetra nisi, eget ullamcorper sapien
        lorem sed nisi.
      </p>
    </div>
  );
}
