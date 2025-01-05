import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";

const SidebarContent = () => {
  return (
    <div className="flex h-screen relative ">
      {/* Sidebar */}
      <aside className={`"block" bg-white p-4 z-10 w-full`}>
        <h2 className="text-2xl font-semibold">LOGO.</h2>
        <div className="my-8 mx-4">
          <h5 className="text-xl opacity-80 mb-4">Dashboard</h5>
          <ul className="flex flex-col space-y-2">
            <li className="p-2 rounded-xl hover:bg-blue-100">
              <a
                href="/admin/dashboard"
                className="flex items-center text-black hover:text-blue-500"
              >
                <RiDashboardFill className="mr-2" />
                Dashboard
              </a>
            </li>
            <li className="p-2 rounded-xl hover:bg-blue-100">
              <a
                href="/admin/product"
                className="flex items-center text-black hover:text-blue-500"
              >
                <RiShoppingBag3Fill className="mr-2" />
                Product
              </a>
            </li>
            <li className="p-2 rounded-xl hover:bg-blue-100">
              <a
                href="/admin/customer"
                className="flex items-center text-black hover:text-blue-500"
              >
                <IoIosPeople className="mr-2" />
                Customer
              </a>
            </li>
            <li className="p-2 rounded-xl hover:bg-blue-100">
              <a
                href="/admin/transaction"
                className="flex items-center text-black hover:text-blue-500"
              >
                <AiFillFileText className="mr-2" />
                Transaction
              </a>
            </li>
          </ul>
        </div>
        <div className="my-8 mx-4">
          <h5 className="text-xl opacity-80 mb-4">Charts</h5>
          <ul className="flex flex-col space-y-2">
            <li className="p-2 rounded-xl hover:bg-blue-100">
              <a
                href="/admin/chart/bar"
                className="flex items-center text-black hover:text-blue-500"
              >
                <FaChartBar className="mr-2" />
                Bar
              </a>
            </li>
            <li className="p-2 rounded-xl hover:bg-blue-100">
              <a
                href="/admin/chart/pie"
                className="flex items-center text-black hover:text-blue-500"
              >
                <FaChartPie className="mr-2" />
                Pie
              </a>
            </li>
            <li className="p-2 rounded-xl hover:bg-blue-100">
              <a
                href="/admin/chart/line"
                className="flex items-center text-black hover:text-blue-500"
              >
                <FaChartLine className="mr-2" />
                Line
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarContent;
