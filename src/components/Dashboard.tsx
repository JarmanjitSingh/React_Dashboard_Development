import React from "react";
import DashboardWidget from "./Widget";
import { widgetData } from "../config/data";
import { BiMaleFemale } from "react-icons/bi";
import { BarChart, DoughnutChart } from "./Charts";
import data from "../assets/data.json";
import BarCharts from "./charts/BarCharts";
import PieCharts from "./charts/PieCharts";
import LineCharts from "./charts/LineCharts";
import DashboardTable from "./table/DashboardTable";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {widgetData.map((widget, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <DashboardWidget
              heading={widget.heading}
              subtitle={widget.subtitle}
              amount={widget.amount}
              percentage={widget.percentage}
            />
          </div>
        ))}
      </div>

      <section className="flex flex-col lg:flex-row gap-8">
        {/* Revenue & Transaction Chart */}
        <div className="bg-white rounded-lg w-full lg:w-3/4 p-8 shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-8">
            Revenue & Transaction
          </h2>
          <BarChart
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            title_1="Revenue"
            title_2="Transaction"
            bgColor_1="rgb(0,115,255)"
            bgColor_2="rgba(53,162,235,0.8)"
          />
        </div>

        {/* Inventory Section */}
        <div className="bg-white rounded-lg w-full lg:w-1/4 flex flex-col items-center pb-8 shadow-lg">
          <h2 className="text-center text-2xl font-bold my-6">Inventory</h2>
          <div className="overflow-y-auto pl-2 w-full">
            {data.categories.map((i) => (
              <CategoryItem
                key={i.heading}
                heading={i.heading}
                value={i.value}
                color={`hsl(${i.value * 4}, ${i.value}%, 50%)`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[30rem]">
        {/* Gender Ratio Section */}
        <div className="bg-white rounded-lg w-full lg:w-1/4 p-4 relative shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-8">Gender Ratio</h2>

          {/* Centered Icon */}
          <div className="absolute inset-0 flex items-center justify-center mb-8">
            <p className="text-4xl text-gray-500">
              <BiMaleFemale />
            </p>
          </div>

          {/* Doughnut Chart */}
          <DoughnutChart
            labels={["Female", "Male"]}
            data={[12, 19]}
            backgroundColor={["hsl(340, 82%, 56%)", "rgba(53,162,235,0.8)"]}
            cutout={90}
          />
        </div>

        {/* Dashboard Table */}
        <div className="bg-white rounded-lg w-full lg:w-3/4 p-4 overflow-x-auto shadow-lg">
          <DashboardTable data={data.transaction} />
        </div>
      </section>

      <BarCharts />
      <PieCharts />
      <LineCharts />
    </div>
  );
};

export default Dashboard;

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="flex flex-row justify-between items-center w-full p-4">
    <h5 className="text-sm font-light tracking-wide">{heading}</h5>
    <div className="w-24 h-2 bg-gray-300 rounded-full ml-auto">
      <div
        style={{ backgroundColor: color, width: `${value}%` }}
        className="h-full rounded-full"
      ></div>
    </div>
    <span className="text-xs font-bold">{value}%</span>
  </div>
);
