// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

// const ServiceAnalytics = () => {
//   const chartData = [
//     { name: "Homas", count: 40 },
//     { name: "Muhurtas", count: 25 },
//     { name: "Vastu", count: 12 },
//     { name: "Gallery", count: 50 },
//   ];

//   return (
//     <div className="bg-white shadow-sm p-3 rounded">
//       <h5 className="mb-3">Service Analytics</h5>

//       <BarChart width={500} height={300} data={chartData}>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Bar dataKey="count" fill="#10b981" />
//       </BarChart>
//     </div>
//   );
// };

// export default ServiceAnalytics;



import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ServiceAnalytics = () => {
  const chartData = [
    { name: "Homas", count: 40 },
    { name: "Muhurtas", count: 25 },
    { name: "Vastu", count: 12 },
    { name: "Gallery", count: 50 },
  ];

  return (
    <div className="bg-white shadow-sm p-3 rounded">
      <h5 className="mb-3">Service Analytics</h5>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ServiceAnalytics;
