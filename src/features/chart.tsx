import { Line, Doughnut, 
 } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  ArcElement,
  BarElement,
  ChartData,
  ChartOptions,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation"; 

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  ArcElement,
  BarElement,
  annotationPlugin
);

 const Chart = () => {
  const salesData: ChartData<"line"> = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Sales",
        data: [10000, 15000, 20000, 25000, 55700],
        borderColor: "#F97316",
        backgroundColor: "#F97316",
        pointBackgroundColor: "#F97316",
        pointBorderColor: "#F97316",
        pointRadius: 0, // No visible points
        pointHoverRadius: 0, // No hover effect on points
        fill: false,
        tension: 0.3,
        borderDash: [], // No dashed lines
      },
    ],
  };

  const salesOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#FFF",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#E5E7EB",
        borderWidth: 1,
        padding: 8,
        displayColors: false,
        callbacks: {
          label: (context) => `N${context.parsed.y.toLocaleString()}`,
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            xMin: "Fri",
            xMax: "Fri",
            yMin: 10000,
            yMax: 55700,
            borderColor: "#F97316",
            borderWidth: 2,
            borderDash: [],
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: true,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
      },
      y: {
        display: true,
        grid: {
          display: true,
          color: "#E5E7EB",
          
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
          callback: (value) => `${Number(value) / 1000}K`,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  const ordersData: ChartData<"doughnut"> = {
    labels: ["Delivered", "Pending", "Overdue"],
    datasets: [
      {
        data: [15, 3, 4],
        backgroundColor: ["#6ABC35", "#FFC823", "#EE2224"],
        borderWidth: 0,
      },
    ],
  };

  const ordersOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };


  return (
    <div className="">
        <h2 className="bg-[#340260] text-[#C2C2C2] p-2 font-bold text-lg rounded-md">Welcome Onboard, Daniel</h2>

          <div className="grid md:grid-cols-2 gap-3 mt-3">
            {/* Total Sales */}
            <div className=" bg-white rounded-lg shadow-sm md:p-6 p-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">Total sales today</h2>
                <div className="flex items-center space-x-2">

                  <a
                    href="#"
                    className="text-sm text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    View details
                  </a>
                  <img
                    src="/arrow-icon.png"
                    alt="Arrow Icon"
                    width={8}
                    height={8}
                    className="w-5 h-5"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <p className="text-3xl font-bold text-gray-900">N55,700</p>
                  <p className="text-sm text-green-500 bg-green-50 px-2 py-1 rounded-full">+80%</p>
                </div>
              </div>
              <div className="md:w-full mt-4 bg-gray-100 rounded-lg py-6 px-6">
                <Line data={salesData} options={salesOptions} />
              </div>

            </div>

            {/* Order Details and Inventory Alerts (stacked) */}
              {/* Order Details */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">Order Details</h2>
                  <div className="flex items-center space-x-2">

                    <a
                      href="#"
                      className="text-sm text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      View details
                    </a>
                    <img
                      src="/arrow-icon.png"
                      alt="Arrow Icon"
                      width={8}
                      height={8}
                      className="w-5 h-5"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-row items-center justify-center space-x-4">
                  <div className="w-32 h-32">
                    <Doughnut data={ordersData} options={ordersOptions} />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-lg font-bold text-gray-800">15</span>
                        <span className="text-sm text-gray-600">Fulfilled</span>
                      </div>

                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        <span className="text-lg font-bold text-gray-800">3</span>
                        <span className="text-sm text-gray-600">Pending</span>
                      </div>

                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        <span className="text-lg font-bold text-gray-800">4</span>
                        <span className="text-sm text-gray-600">Overdue</span>
                      </div>

                    </div>
                  </div>
                </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm px-6">
            <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
            <div className="mt-4 space-y-3">
              <div className="flex gap-3">
              <img
                    src="/money-bag.png"
                    alt="Money Bag Icon"
                    width={5}
                    height={5}
                    className="size-5"
                  />
                  <span className="text-xs text-gray-600">68,900 - 2 Mango Smoothies sold to Tunde at 11:45 AM</span>
              </div>
              <div className="flex gap-3">
                <img
                  src="/money-bag.png"
                  alt="Money Bag Icon"
                  width={5}
                  height={5}
                  className="size-5"
                />
                <span className="text-xs text-gray-600">68,900 - 2 Mango Smoothies sold to Tunde at 11:45 AM</span>
              </div>
              <div className="flex gap-3">
                <img
                  src="/money-bag.png"
                  alt="Money Bag Icon"
                  width={5}
                  height={5}
                  className="size-5"
                />
                <span className="text-xs text-gray-600">Order #46587 10 packs of Straws - Pending Confirmation</span>
             
                
              </div>
              <div className="flex gap-3">
                <img
                  src="/inventory.png"
                  alt="Inventory Icon"
                  width={5}
                  height={5}
                  className="size-5"
                />
                <span className="text-xs text-gray-600">Order #46587 6 bottles of Juice - Delivered Successfully</span>
                </div>
              <div className="flex gap-3">
                <img
                  src="/comment-icon.png"
                  alt="Comment Icon"
                  width={5}
                  height={5}
                  className="size-5"/>

                <span className="text-xs text-gray-500">The juice was fresh and delicious! Rated 5 stars by Esther</span>
                </div>
                
              </div>
            </div>
          </div>
        </div> 

  );
}

export default Chart;