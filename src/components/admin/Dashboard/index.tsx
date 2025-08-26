"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2, FileText, DollarSign } from "lucide-react";
import AnalyticsChart from "./AnalyticsChart";

export default function DashboardContent() {
  const stats = [
    { label: "Total Users", value: "1,245", icon: Users },
    { label: "Properties", value: "312", icon: Building2 },
    { label: "Applications", value: "89", icon: FileText },
    { label: "Revenue", value: "$24,500", icon: DollarSign },
  ];

  const recent = [
    {
      id: 1,
      user: "John Doe",
      action: "Applied for Property A",
      date: "Aug 24, 2025",
    },
    {
      id: 2,
      user: "Sarah Lee",
      action: "Created Account",
      date: "Aug 23, 2025",
    },
    {
      id: 3,
      user: "Michael Tan",
      action: "Booked Viewing",
      date: "Aug 23, 2025",
    },
  ];

  return (
    <div className="space-y-8 p-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="shadow rounded-2xl">
            <CardContent className="flex items-center gap-4 p-6">
              <stat.icon className="w-10 h-10 text-gray-600" />
              <div>
                <h3 className="text-sm text-gray-500">{stat.label}</h3>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Placeholder */}
      <Card className="shadow rounded-2xl">
        <CardContent className="p-6">
          <AnalyticsChart />
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="shadow rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 border">User</th>
                  <th className="px-4 py-2 border">Action</th>
                  <th className="px-4 py-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{item.user}</td>
                    <td className="px-4 py-2 border">{item.action}</td>
                    <td className="px-4 py-2 border">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
