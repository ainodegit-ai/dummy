// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// const RevenueGraph = () => {
//   const data = [
//     { day: "1", amount: 2000 },
//     { day: "2", amount: 3500 },
//     { day: "3", amount: 1800 },
//     { day: "4", amount: 4000 },
//     { day: "5", amount: 2500 },
//   ];

//   return (
//     <div className="bg-white shadow-sm p-3 rounded">
//       <h5 className="mb-3">Revenue Overview</h5>

//       <LineChart width={500} height={300} data={data}>
//         <CartesianGrid stroke="#eee" />
//         <XAxis dataKey="day" />
//         <YAxis />
//         <Tooltip />
//         <Line
//           type="monotone"
//           dataKey="amount"
//           stroke="#4f46e5"
//           strokeWidth={3}
//         />
//       </LineChart>
//     </div>
//   );
// };

// export default RevenueGraph;



import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RevenueGraph = () => {
  const data = [
    { day: "1", amount: 2000 },
    { day: "2", amount: 3500 },
    { day: "3", amount: 1800 },
    { day: "4", amount: 4000 },
    { day: "5", amount: 2500 },
  ];

  return (
    <div className="bg-white shadow-sm p-3 rounded">
      <h5 className="mb-3">Revenue Overview</h5>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid stroke="#eee" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#4f46e5"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueGraph;
