// import React from "react";

// const RecentPayments = () => {
//   const recent = [
//     { name: "Rahul Sharma", service: "Homa", amount: "₹1500", status: "Success", date: "2025-01-12" },
//     { name: "Anjali Verma", service: "Muhurta", amount: "₹999", status: "Pending", date: "2025-01-11" },
//     { name: "Sandeep Rao", service: "Vastu", amount: "₹2500", status: "Success", date: "2025-01-10" },
//   ];

//   return (
//     <div className="bg-white shadow-sm p-3 rounded mt-4">
//       <h5 className="mb-3">Recent Payments</h5>

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Service</th>
//             <th>Amount</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {recent.map((item, i) => (
//             <tr key={i}>
//               <td>{item.name}</td>
//               <td>{item.service}</td>
//               <td>{item.amount}</td>
//               <td>
//                 <span
//                   className={
//                     item.status === "Success"
//                       ? "text-success fw-bold"
//                       : "text-warning fw-bold"
//                   }
//                 >
//                   {item.status}
//                 </span>
//               </td>
//               <td>{item.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default RecentPayments;


import React from "react";

const RecentPayments = () => {
  const recent = [
    { name: "Rahul Sharma", service: "Homa", amount: "₹1500", status: "Success", date: "2025-01-12" },
    { name: "Anjali Verma", service: "Muhurta", amount: "₹999", status: "Pending", date: "2025-01-11" },
    { name: "Sandeep Rao", service: "Vastu", amount: "₹2500", status: "Success", date: "2025-01-10" },
  ];

  return (
    <div className="bg-white shadow-sm p-3 rounded mt-4">
      <h5 className="mb-3">Recent Payments</h5>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.service}</td>
                <td>{item.amount}</td>
                <td>
                  <span
                    className={
                      item.status === "Success"
                        ? "text-success fw-bold"
                        : "text-warning fw-bold"
                    }
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentPayments;
