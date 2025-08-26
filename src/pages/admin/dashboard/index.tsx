import DashboardContent from "@/components/admin/Dashboard";
import AdminLayout from "@/components/admin/Layout";

export default function DashboardPage() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
      <DashboardContent />
    </AdminLayout>
  );
}
