// import Image from "next/image";
import { Line, Doughnut, 
  // Bar
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
  // TooltipItem,
  ChartData,
  ChartOptions,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation"; // Import the annotation plugin

// Register the necessary Chart.js components and the annotation plugin
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
  // Data for Total Sales Line Chart
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

  // Data for Orders Summary Doughnut Chart
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

  
  // Data for Teams Shifts Bar Chart
  // const shiftsData: ChartData<"bar"> = {
  //   labels: ["Week 1 (20-4)", "Week 2 (5-11)", "Week 3 (12-18)", "Week 4 (19-25)", "Week 5 (19-25)"],
  //   datasets: [
  //     {
  //       label: "Shifts (Progress)", 
  //       data: [45000, 50000, 20000, 50000 ,55000],
  //       backgroundColor: "#6ABC35", 
  //       borderRadius: { bottomRight: 20, bottomLeft: 20,},
  //       borderSkipped: false,
  //       barThickness: 35,
  //       barPercentage: 0.5,
  //       categoryPercentage: 1.0,
  //       order: 1,
  //     },
  //     {
  //       label: "Shifts (Base)",
  //       data: [60000, 60000, 60000,60000,60000],
  //       backgroundColor: "#E0F1D5 ",
  //       borderWidth: 0,
  //       borderSkipped: false,
  //       borderRadius: { topRight: 20, topLeft: 20, },
  //       barThickness: 35,
  //       barPercentage: 0.5,
  //       categoryPercentage: 1.0,
  //       order: 2,
  //     },
      
      
  //   ],
  // };
  // const shiftsOptions: ChartOptions<"bar"> = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       display: true,
  //       labels: {
  //         font: { weight: "bold", size: 8},
  //         color: "#374151",
  //       },
  //     },
  //     tooltip: {
  //       enabled: true,
  //       backgroundColor: "#FFF",
  //       titleColor: "#000",
  //       titleFont: { weight: "bold" },
  //       bodyColor: "#000",
  //       bodyFont: { weight: "bold" },
  //       borderColor: "#E5E7EB",
  //       borderWidth: 1,
  //       padding: 8,
  //       displayColors: true,
  //       callbacks: {
  //         label: (context: TooltipItem<"bar">) => {
  //           return `N${context.parsed.y.toLocaleString()}`;
  //         },
  //       },
  //     },
  //   },
  //   scales: {
  //     x: {
  //       stacked: true,
  //       grid: { display: false },
  //       ticks: {
  //         color: "#374151",
  //         font: { size: 8, weight: "bold" },
  //         maxRotation: 0,
  //         minRotation: 0,
          
  //       },
  //     },
  //     y: {
  //       stacked: true,
  //       beginAtZero: true,
  //       grid: { display: false }, 
  //       ticks: {
  //         color: "#374151",
  //         font: { weight: "bold", size: 12 },
  //         callback: (value: string | number) => `${(Number(value) / 1000)}K`,
  //       },
  //     },
  //   },
  // };



  return (
    <div className=" bg-gray-100">
        <h2 className="bg-[#340260] text-[#C2C2C2] p-2 font-bold text-xl rounded-md">Welcome Onboard, Daniel</h2>

          <div className="grid md:grid-cols-2 gap-3 mt-3">
            {/* Total Sales */}
            <div className=" bg-white p-8 rounded-lg shadow-sm">
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
              <div className="w-full mt-4 bg-gray-100 rounded-lg py-6 px-6">
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

              {/* Inventory Alerts */}
              {/* <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-row justify-between items-center" >
                  <h2 className="text-lg font-semibold text-gray-800">Inventory Alerts (7 items) </h2>
                  <img
                    src="/arrow-icon.png"
                    alt="Arrow Icon"
                    width={5}
                    height={5}
                    className="w-5 h-5"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Mango (60)</span>
                    <span className="text-sm text-yellow-500">Warning</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Cups (10)</span>
                    <span className="text-sm text-yellow-500">Warning</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Straws (5)</span>
                    <span className="text-sm text-green-500">Normal</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
             {/* <div className="flex flex-1 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">March 2025</h2>
                <div className="mt-4 w-[400px] h-[220px]">
                  <Bar data={shiftsData} options={shiftsOptions} /> 
                </div>
              </div>
               <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">Team and Shifts</h2>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Morning 7:30 AM - 3:00 PM</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center">
                        <span className="w-4 h-4 mr-2 flex items-center justify-center bg-green-500 rounded-full text-white text-xs">✓</span>
                        <span className="text-sm text-gray-600">Sarah (On Shift)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Next Shift 3:00 PM - 9:00 PM</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center">
                        <span className="w-4 h-4 mr-2 flex items-center justify-center bg-gray-400 rounded-full text-white text-xs">🕒</span>
                        <span className="text-sm text-gray-600">Michael (Not Yet Clocked In)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 mr-2 flex items-center justify-center bg-yellow-400 rounded-full text-white text-xs">⚠</span>
                        <span className="text-sm text-gray-600">Clara (Pending Start)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

        {/* <div className="flex flex-col gap-6 w-full md:w-[300px]">
          <div className="bg-white py-2 px-2 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">Top Products</h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-start">
                <span className="w-8 h-8 bg-gray-200 rounded mr-2"></span>
                <div className="flex flex-col flex-1">
                  <span className="text-sm text-gray-600">Crunchy Carrots</span>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-green-500">N30,000</span>
                    <span className="text-sm text-green-500">10 sold</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-8 h-8 bg-gray-200 rounded mr-2"></span>
                <div className="flex flex-col flex-1">
                  <span className="text-sm text-gray-600">Crunchy Pear</span>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-500">N15,000</span>
                    <span className="text-sm text-green-500">5 sold</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-8 h-8 bg-gray-200 rounded mr-2"></span>
                <div className="flex flex-col flex-1">
                  <span className="text-sm text-gray-600">Crunchy Apple</span>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-500">N10,000</span>
                    <span className="text-sm text-green-500">3 sold</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-8 h-8 bg-gray-200 rounded mr-2"></span>
                <div className="flex flex-col flex-1">
                  <span className="text-sm text-gray-600">Crunchy Banana</span>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-500">N5,000</span>
                    <span className="text-sm  text-green-500">2 sold</span>
                  </div>
                </div>
              </div>

            </div>
            <button
              className="text-sm mt-10 w-full py-2 bg-[#FFE1E2] text-[#FF6700] rounded-full hover:bg-[#FFD1D2] transition-colors"
            >
              See all
            </button>
          </div> */}

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