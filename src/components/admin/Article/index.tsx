"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

type Article = {
  id: number;
  title: string;
  author: string;
  date: string;
  status: "Published" | "Draft";
};

export default function AdminArticles() {
  const router = useRouter();
  const [articles] = useState<Article[]>([
    {
      id: 1,
      title: "Getting Started with Next.js",
      author: "John Doe",
      date: "2025-08-01",
      status: "Published",
    },
    {
      id: 2,
      title: "Understanding Tailwind CSS",
      author: "Jane Smith",
      date: "2025-08-10",
      status: "Draft",
    },
    {
      id: 3,
      title: "Deploying on Vercel",
      author: "Alex Johnson",
      date: "2025-08-20",
      status: "Published",
    },
  ]);

  const columns: TableColumn<Article>[] = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Author",
      selector: (row) => row.author,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Status",
      cell: (row) => (
        <span
          className={`px-2 py-1 text-xs rounded ${
            row.status === "Published"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {row.status}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit
          </button>
          <button className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold mb-4">Manage Articles</h2>
        <button
          type="button"
          onClick={() => {
            router.push("/admin/articles/create");
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Article
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <DataTable
          columns={columns}
          data={articles}
          pagination
          highlightOnHover
          striped
          responsive
        />
      </div>
    </div>
  );
}
