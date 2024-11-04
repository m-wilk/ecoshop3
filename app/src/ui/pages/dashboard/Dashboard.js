import Bredcrumb from "../../molecules/bredcrumb/Bredcrumb";
import { Routes, Route } from "react-router-dom";
import DashboardContent from "../dashboardcontent/DashboardContent";
import AddressContent from "../addresscontent/AddressContent";
import { Link } from "react-router-dom";

const Dashboard = ({ databredcrumbsForDashbord }) => {
  return (
    <div className="pb-16">
      <div className="bg-vegetable py-16">
        <div className="container">
          <Bredcrumb databredcrumbs={databredcrumbsForDashbord} />
          <div className="flex items-center justify-center font-bold">
            <h1 className="text-3xl">Become A Seller!</h1>
          </div>
        </div>
      </div>
      <div className="shadow-xl container py-16 px-8 mb-20 mt-10">
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-bold">Change Password</h5>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Switch Dashboard</span>
            {/* switch dashboard */}
            <label>
              <div className="relative">
                <input type="checkbox" className="peer sr-only" />
                <div className="h-8 w-20 rounded-full border peer-checked:bg-primary transition-all duration-500"></div>
                <div className="absolute w-6 h-6 rounded-full bg-black transition-all duration-500 left-1 top-1 peer-checked:translate-x-[3rem] peer-checked:bg-white"></div>
              </div>
            </label>
          </div>
        </div>
        <div className="flex gap-10">
          <ul className="text-gray-500 mt-4 border-e pe-20">
            <li className="mb-6">
              <Link className="flex items-center gap-4" to="/dashboard/">
                <span className="icon-home"></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="mb-6">
              <a className="flex items-center gap-4" href="#">
                <span className="icon-profile"></span>
                <span>Parsonal Info</span>
              </a>
            </li>
            <li className="mb-6">
              <a className="flex items-center gap-4" href="#">
                <span className="icon-home"></span>
                <span>Payment Method</span>
              </a>
            </li>
            <li className="mb-6">
              <a className="flex items-center gap-4" href="#">
                <span className="icon-profile"></span>
                <span>Order</span>
              </a>
            </li>
            <li className="mb-6">
              <a className="flex items-center gap-4" href="#">
                <span className="icon-home"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="mb-6">
              <Link className="flex items-center gap-4" to="/dashboard/addresscontent">
                <span className="icon-profile"></span>
                <span>Address</span>
              </Link>
            </li>
            <li className="mb-6">
              <a className="flex items-center gap-4" href="#">
                <span className="icon-profile"></span>
                <span>Parsonal Info</span>
              </a>
            </li>
            <li className="mb-6">
              <a className="flex items-center gap-4" href="#">
                <span className="icon-home"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="mb-6">
              <a className="flex items-center gap-4" href="#">
                <span className="icon-profile"></span>
                <span>Parsonal Info</span>
              </a>
            </li>
          </ul>
          {/* subpage */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/addresscontent" element={<AddressContent />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
