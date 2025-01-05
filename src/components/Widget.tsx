import React from "react";

interface DashboardWidgetProps {
  heading: string;
  subtitle: string;
  amount: string | number;
  percentage: number;
}

const DashboardWidget: React.FC<DashboardWidgetProps> = ({
  heading,
  subtitle,
  amount,
  percentage,
}) => {
  // Dynamic styles based on percentage
  const percentageColor = percentage > 0 ? "text-green-700" : "text-red-700";
  const percentageBgColor =
    percentage > 0 ? "bg-green-500/20" : "bg-red-500/20";

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {heading}
          </h2>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          {subtitle}
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            {amount}
          </div>
          <div
            className={`text-sm font-medium ${percentageColor} px-1.5 ${percentageBgColor} rounded-full`}
          >
            {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;
