import React from "react";
import Card from "../ui/Card";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-gray-100 p-6 overflow-auto">
      {/* Header */}
      
        <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Dashboard</h1>
        


      {/* Dashboard Cards Section */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">Total Sales</h2>
          <p className="text-3xl font-bold text-blue-500">xxx</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">
            Purchased Items
          </h2>
          <p className="text-3xl font-bold text-green-500">xxx</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700">
            Total Revenue generated
          </h2>
          <p className="text-3xl font-bold text-yellow-500">Rs. xxx</p>
        </div>
      </div>

      <h1 className="mt-4 text-2xl font-semibold text-gray-800 mb-4 text-center">Pickles Details</h1>
      {/* Show pickles details */}
      <div className="mt-4 w-full flex justify-center flex-wrap gap-3">
      <Card
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3bV8j7Dm6AudA81jQ-a4CHFF-qO2UhIioQ&s"
        title="Card 1"
        description="Description for card 1"
        ManufacturedDate="xxxx-xx-xx"
        ExpiryDate="xxxx-xx-xx"
      />
      <Card
        imageSrc="https://www.ticklingpalates.com/wp-content/uploads/2022/05/mango-pickle.jpg"
        title="Card 2"
        description="Description for card 2"
        ManufacturedDate="xxxx-xx-xx"
        ExpiryDate="xxxx-xx-xx"
      />
      <Card
        imageSrc="https://t4.ftcdn.net/jpg/02/65/85/53/360_F_265855393_kzrVPRxea0LWcWjtDfbajBZUc3YwryiR.jpg"
        title="Card 3"
        description="Description for card 3"
        ManufacturedDate="xxxx-xx-xx"
        ExpiryDate="xxxx-xx-xx"
      />
      <Card
        imageSrc="https://png.pngtree.com/thumb_back/fh260/background/20220708/pngtree-mango-pickle-in-glass-bowl-with-spices-on-black-surface-photo-image_37704484.jpg"
        title="Card 4"
        description="Description for card 4"
        ManufacturedDate="xxxx-xx-xx"
        ExpiryDate="xxxx-xx-xx"
      />
    </div>

      {/* Activity Feed Section */}
      <div className="mt-6 flex justify-center">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Recent Activity
          </h2>
          <ul className="space-y-4 w-1/2 mx-auto">
            <li className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-700">
                User "John Doe" made a purchase of $500
              </p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-700">
                User "Jane Smith" completed a sale of $300
              </p>
              <p className="text-sm text-gray-500">4 hours ago</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-lg">
              <p className="text-gray-700">Admin updated the settings</p>
              <p className="text-sm text-gray-500">1 day ago</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
