import { LineChart } from "../Charts";

const months = [
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

const LineCharts = () => {
  return (
    <div className="flex">
      <main className="flex-1 bg-white p-16 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Line Charts</h1>

        <section className="mb-16 w-4/5 mx-auto">
          <LineChart
            data={[
              200, 444, 444, 556, 778, 455, 990, 1444, 256, 447, 1000, 1200,
            ]}
            label="Users"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255, 0.5)"
            labels={months}
          />
          <h2 className="text-xl text-center mt-8 mb-4">Active Users</h2>
        </section>

        <section className="mb-16 w-4/5 mx-auto">
          <LineChart
            data={[40, 60, 244, 100, 143, 120, 41, 47, 50, 56, 32]}
            backgroundColor={"hsla(269,80%,40%,0.4)"}
            borderColor={"hsl(269,80%,40%)"}
            label="Products"
            labels={months}
          />
          <h2 className="text-xl text-center mt-8 mb-4">Total Products (SKU)</h2>
        </section>

        <section className="mb-16 w-4/5 mx-auto">
          <LineChart
            data={[
              24000, 14400, 24100, 34300, 90000, 20000, 25600, 44700, 99000,
              144400, 100000, 120000,
            ]}
            backgroundColor={"hsla(129,80%,40%,0.4)"}
            borderColor={"hsl(129,80%,40%)"}
            label="Revenue"
            labels={months}
          />
          <h2 className="text-xl text-center mt-8 mb-4">Total Revenue</h2>
        </section>

        <section className="mb-16 w-4/5 mx-auto">
          <LineChart
            data={[
              9000, 12000, 12000, 9000, 1000, 5000, 4000, 1200, 1100, 1500,
              2000, 5000,
            ]}
            backgroundColor={"hsla(29,80%,40%,0.4)"}
            borderColor={"hsl(29,80%,40%)"}
            label="Discount"
            labels={months}
          />
          <h2 className="text-xl text-center mt-8 mb-4">Discount Allotted</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
