import { LogOut, LayoutDashboard, ShoppingCart, DollarSign, Settings, User, Users } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [user, setUser] = useState(null); // State to hold user info
  const navigate = useNavigate();

  // Check if user is logged in by reading from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData)); // Parse user data if available
    //   console.log(userData);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col p-4 border-r border-gray-800">
        {/* Top - Profile Section */}
        <div className="mb-8 p-4 text-center">
          {user ? (
            <div className="flex items-center justify-center space-x-2">
              <User className="h-6 w-6 text-gray-300" />
              <span className="text-gray-300">{user.firstName}</span>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <User className="mr-2 h-5 w-5 text-gray-300" />
              Login
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col space-y-1">
          <a href="/dashboard" className="flex items-center p-3 w-full text-left rounded-lg hover:bg-gray-900 transition-all duration-200 group">
            <LayoutDashboard className="mr-3 h-5 w-5 text-gray-300 group-hover:text-white" />
            <span className="text-gray-300 group-hover:text-white">Dashboard</span>
          </a>

          <a href="/inventory" className="flex items-center p-3 w-full text-left rounded-lg hover:bg-gray-900 transition-all duration-200 group">
            <ShoppingCart className="mr-3 h-5 w-5 text-gray-300 group-hover:text-white" />
            <span className="text-gray-300 group-hover:text-white">Inventory</span>
          </a>

          <a href="/menu" className="flex items-center p-3 w-full text-left rounded-lg hover:bg-gray-900 transition-all duration-200 group">
            <DollarSign className="mr-3 h-5 w-5 text-gray-300 group-hover:text-white" />
            <span className="text-gray-300 group-hover:text-white">Menu</span>
          </a>

          <a href="/customers" className="flex items-center p-3 w-full text-left rounded-lg hover:bg-gray-900 transition-all duration-200 group">
            <Users className="mr-3 h-5 w-5 text-gray-300 group-hover:text-white" />
            <span className="text-gray-300 group-hover:text-white">Customers</span>
          </a>
          <a href="/settings" className="flex items-center p-3 w-full text-left rounded-lg hover:bg-gray-900 transition-all duration-200 group">
            <Settings className="mr-3 h-5 w-5 text-gray-300 group-hover:text-white" />
            <span className="text-gray-300 group-hover:text-white">Settings</span>
          </a>
        </nav>

        {/* Bottom - Logout Section */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          {user && (
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full hover:bg-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <LogOut className="mr-2 h-5 w-5 text-gray-300" />
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
