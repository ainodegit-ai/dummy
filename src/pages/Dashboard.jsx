// import React from "react";
// import AdminLayout from "../components/AdminLayout";
// import RevenueGraph from "../components/charts/RevenueGraph";
// import ServiceAnalytics from "../components/charts/ServiceAnalytics";
// import RecentPayments from "../components/payments/RecentPayments";
// import TrendingServices from "../components/trending/TrendingServices";

// const Dashboard = () => {
//   return (
//     <AdminLayout>
//       <div className="container mt-4">

//         {/* Top Cards Section */}
//         <div className="row g-3 mb-4">
//           <div className="col-md-3">
//             <div className="p-3 bg-white shadow-sm rounded">
//               <h6>Today's Revenue</h6>
//               <h4 className="text-success">₹2,400</h4>
//             </div>
//           </div>

//           <div className="col-md-3">
//             <div className="p-3 bg-white shadow-sm rounded">
//               <h6>Total Revenue</h6>
//               <h4>₹56,000</h4>
//             </div>
//           </div>

//           <div className="col-md-3">
//             <div className="p-3 bg-white shadow-sm rounded">
//               <h6>Total Payments</h6>
//               <h4>134</h4>
//             </div>
//           </div>

//           <div className="col-md-3">
//             <div className="p-3 bg-white shadow-sm rounded">
//               <h6>New Users Today</h6>
//               <h4>12</h4>
//             </div>
//           </div>
//         </div>

//         {/* Graphs Section */}
//         <div className="row g-3">
//           <div className="col-md-6">
//             <RevenueGraph />
//           </div>

//           <div className="col-md-6">
//             <ServiceAnalytics />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <RecentPayments />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <TrendingServices />
//           </div>
//         </div>



//       </div>
//     </AdminLayout>
//   );
// };

// export default Dashboard;



import React from "react";
import AdminLayout from "../components/AdminLayout";
import RevenueGraph from "../components/charts/RevenueGraph";
import ServiceAnalytics from "../components/charts/ServiceAnalytics";
import RecentPayments from "../components/payments/RecentPayments";
import TrendingServices from "../components/trending/TrendingServices";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="container-fluid mt-4">

        {/* Top Cards Section */}
        <div className="row g-3 mb-4">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-3 bg-white shadow-sm rounded h-100">
              <h6>Today's Revenue</h6>
              <h4 className="text-success">₹2,400</h4>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-3 bg-white shadow-sm rounded h-100">
              <h6>Total Revenue</h6>
              <h4>₹56,000</h4>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-3 bg-white shadow-sm rounded h-100">
              <h6>Total Payments</h6>
              <h4>134</h4>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-3 bg-white shadow-sm rounded h-100">
              <h6>New Users Today</h6>
              <h4>12</h4>
            </div>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <div className="bg-white p-3 shadow-sm rounded h-100">
              <RevenueGraph />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="bg-white p-3 shadow-sm rounded h-100">
              <ServiceAnalytics />
            </div>
          </div>
        </div>

        {/* Recent Payments */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="bg-white p-3 shadow-sm rounded">
              <RecentPayments />
            </div>
          </div>
        </div>

        {/* Trending Services */}
        <div className="row mt-3 mb-4">
          <div className="col-12">
            <div className="bg-white p-3 shadow-sm rounded">
              <TrendingServices />
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Dashboard;
