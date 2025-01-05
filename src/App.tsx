import React, { useState } from "react";
import Sidebar from "./components/navbar/Sidebar";
import Header from "./components/navbar/Header";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Dashboard */}
        <div className="p-4 flex-1 overflow-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
