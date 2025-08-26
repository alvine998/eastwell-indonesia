import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Image,
  Users,
  Building2,
  Contact2,
  FileArchive,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-200 text-gray-800 flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Eastwell CMS</h2>
      <nav className="flex-1 space-y-2">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-300"
        >
          <LayoutDashboard className="w-5 h-5" /> Dashboard
        </Link>
        <Link
          href="/admin/profile"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-300"
        >
          <Building2 className="w-5 h-5" /> Profile
        </Link>
        <Link
          href="/admin/contact"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-300"
        >
          <Contact2 className="w-5 h-5" /> Contact
        </Link>
        <Link
          href="/admin/careers"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-300"
        >
          <FileArchive className="w-5 h-5" /> Careers
        </Link>
        <Link
          href="/admin/articles"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-300"
        >
          <FileText className="w-5 h-5" /> Articles
        </Link>
        <Link
          href="/admin/gallery"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-300"
        >
          <Image className="w-5 h-5" /> Gallery
        </Link>
        <Link
          href="/admin/users"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-300"
        >
          <Users className="w-5 h-5" /> Users
        </Link>
      </nav>
    </aside>
  );
}
