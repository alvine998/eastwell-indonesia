import AdminLayout from "@/components/admin/Layout";

export default function UsersPage() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      <p className="text-gray-700">Admin can manage user accounts here.</p>
    </AdminLayout>
  );
}
