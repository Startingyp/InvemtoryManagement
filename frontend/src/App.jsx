import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/SideBarNav";
import AppRoutes from "./Routes";

function App() {
  return (
    <Router>
      <div className="flex h-screen w-screen">
        {/* Sidebar - Fixed Width */}
        <Sidebar />

        {/* Main Content - Full Width */}
        <div className="flex-1 w-full overflow-auto bg-gray-100">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
