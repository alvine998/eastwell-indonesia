import dynamic from "next/dynamic";
import { useState } from "react";
import type { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function AnalyticsChart() {
  const [series] = useState([
    {
      name: "Visitors",
      data: [120, 200, 150, 300, 250, 400, 350],
    },
    {
      name: "Sales",
      data: [80, 100, 90, 200, 180, 250, 300],
    },
  ]);

  const [options] = useState<ApexOptions>({
    chart: {
      type: "line",
      height: 300,
      toolbar: { show: false },
    },
    stroke: { curve: "smooth", width: 3 },
    colors: ["#2563eb", "#f59e0b"],
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      labels: { style: { colors: "#6b7280" } },
    },
    legend: { position: "top" },
    grid: { borderColor: "#e5e7eb" },
  });

  return (
    <div className="bg-white shadow rounded-2xl border border-gray-200 p-6">
      <h2 className="text-lg font-semibold mb-4">Analytics Overview</h2>
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
}
