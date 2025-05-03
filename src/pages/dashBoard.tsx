import { useState } from "react";
import Chart from "../features/chart";
import SideBar from "../components/sideBar";
import Header from "../components/header";
import Expense from "../features/expense";
import Transactions from "../features/Transactions";

const DashBoard = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const getHeaderTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard";
      case "expenses":
        return "Expenses";
      case "transactions":
        return "Transactions ";
      case "inventory":
        return "Inventory";
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Chart />;
      case "expenses":
        return <Expense />;
      case "transactions":
        return <Transactions />
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-lg">
              Content for this tab is coming soon!
            </p>
          </div>
        );
    }
  };
  return (
    <div className="flex">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-full">
        <Header title={getHeaderTitle() || "Header"} activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-3 bg-gray-100 ">
          {renderContent()}
        </main>
      </div>
      </div>
  )
}

export default DashBoard;