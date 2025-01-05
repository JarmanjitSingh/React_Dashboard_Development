import { BarChart } from "../Charts";

// Define the months array with a tuple type
const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BarCharts: React.FC = () => {
  return (
    <div className="flex bg-gray-100">
      <main className="flex-1 bg-white p-16 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-20 ml-8">Bar Charts</h1>

        <section className="mb-16 w-4/5 mx-auto shadow-lg rounded-lg p-8">
          <BarChart
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1="Products"
            title_2="Users"
            bgColor_1="hsl(260,50%,30%)"
            bgColor_2="hsl(360,90%,90%)"
          />
          <h2 className="text-xl text-center mt-8 mb-4">
            Top Selling Products & Top Customers
          </h2>
        </section>

        <section className="mb-16 w-4/5 mx-auto shadow-lg rounded-lg p-8">
          <BarChart
            horizontal={true}
            data_1={[
              200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1="hsl(180, 40%, 50%)"
            bgColor_2=""
            labels={months}
          />
          <h2 className="text-xl text-center mt-8 mb-4">
            Orders throughout the year
          </h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
