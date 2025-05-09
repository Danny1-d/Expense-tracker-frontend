

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SideBar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const isActive = (tab: string) => activeTab === tab;

  return (
    <div className="">
        {/* Logo */}

        {/* Navigation Links */}
        <nav className="flex flex-col gap-3 md:block hidden w-[20rem] h-screen p-2 bg-[#340260]">
        <div className="mb-0 mt-4 px-6 text-white font-bold text-xl">
          Danny
        </div>

        <div className="border-b border-gray-100 mb-10 mt-10 hidden md:block"></div>

        <div
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-3 px-2 py-2 rounded-md transition-colors cursor-pointer ${
              isActive("dashboard")
                ? "bg-white text-[#340260] font-semibold"
                : "text-[#C2C2C2] hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <span className="text-sm">Dashboard</span>
          </div>

          <div
            onClick={() => setActiveTab("expenses")}
            className={`flex items-center gap-3 px-2 py-2 rounded-md transition-colors cursor-pointer ${
              isActive("expenses")
                ? "bg-white text-[#340260] font-semibold"
                : "text-[#C2C2C2] hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <span className="text-sm">Expenses</span>
          </div>

          <div
            onClick={() => setActiveTab("transactions")}
            className={`flex items-center gap-3 px-2 py-2 rounded-md transition-colors cursor-pointer ${
              isActive("transactions")
                ? "bg-white text-[#340260] font-semibold"
                : "text-[#C2C2C2] hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <span className="text-sm">Transactions</span>
          </div>  

          <div
            onClick={() => setActiveTab("inventory")}
            className={`flex items-center gap-3 px-2 py-2 rounded-md transition-colors cursor-pointer ${
              isActive("inventory")
                ? "bg-white text-[#340260] font-semibold"
                : "text-[#C2C2C2] hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <span className="text-sm">Inventory</span>
          </div>
        </nav>

        {/* mobile */}

      </div>
  );
}

export default SideBar;