import { categories } from "../../assets/data.json";
import { DoughnutChart, PieChart } from "../Charts";

const PieCharts: React.FC = () => {
  return (
    <div className="flex bg-gray-100">
      <main className="flex-1 bg-white p-16 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-20 ml-8">Pie & Doughnut Charts</h1>

        <section className="mb-16 w-4/5 mx-auto">
          <div className="max-w-lg mx-auto">
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              backgroundColor={[
                "hsl(110,80%, 80%)",
                "hsl(110,80%, 50%)",
                "hsl(110,40%, 50%)",
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2 className="text-xl text-center mt-8 mb-4">
            Order Fulfillment Ratio
          </h2>
        </section>

        <section className="mb-16 w-4/5 mx-auto">
          <div className="max-w-lg mx-auto">
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 4},${i.value}%, 50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2 className="text-xl text-center mt-8 mb-4">
            Product Categories Ratio
          </h2>
        </section>

        <section className="mb-16 w-4/5 mx-auto">
          <div className="max-w-lg mx-auto">
            <DoughnutChart
              labels={["In Stock", "Out Of Stock"]}
              data={[40, 20]}
              backgroundColor={["hsl(269,80%,40%)", "rgb(53, 162, 255)"]}
              legends={false}
              offset={[0, 80]}
              cutout="70%"
            />
          </div>
          <h2 className="text-xl text-center mt-8 mb-4">Stock Availability</h2>
        </section>

        <section className="mb-16 w-4/5 mx-auto">
          <div className="max-w-lg mx-auto">
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53, 162, 255)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2 className="text-xl text-center mt-8 mb-4">
            Revenue Distribution
          </h2>
        </section>

        <section className="mb-16 w-4/5 mx-auto">
          <div className="max-w-lg mx-auto">
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult (20-40)",
                "Older (above 40)",
              ]}
              data={[30, 250, 70]}
              backgroundColor={[
                "hsl(10, 80%, 80%)",
                "hsl(10, 80%, 50%)",
                "hsl(10, 40%, 50%)",
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2 className="text-xl text-center mt-8 mb-4">Users Age Group</h2>
        </section>

        <section className="w-4/5 mx-auto">
          <div className="max-w-lg mx-auto">
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={["hsl(335, 100%, 38%)", "hsl(44, 98%, 50%)"]}
              offset={[0, 80]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
