import React, { useState } from "react";
import Card from "../ui/Card";
import { FaQrcode, FaTimes } from 'react-icons/fa';

const AutoBillReceipt = ({ items, onAddItem, pickles }) => {
  const [selectedPickle, setSelectedPickle] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [qrCodeImage, setQrCodeImage] = useState(null);

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleAddItem = () => {
    const selected = pickles.find(p => p.id === parseInt(selectedPickle));
    if (selected) {
      onAddItem({
        id: selected.id,
        name: selected.name,
        price: selected.price,
        quantity: parseInt(quantity)
      });
    }
  };

  const handleQrCodeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setQrCodeImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveQrCode = () => {
    setQrCodeImage(null);
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg h-[85vh] sticky top-4 overflow-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">Generate Bill</h2>
      
      {/* Order Items */}
      <div className="mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <div>
              <span className="font-medium text-black">{item.name}</span>
              <span className="text-sm text-black ml-2">x{item.quantity}</span>
            </div>
            <div className="text-black">Rs. {(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      {/* Add Item Form */}
      <div className="mb-6 border-t pt-4">
        <div className="mb-4">
          <label className="block text-black text-sm font-medium mb-2">Select Pickle</label>
          <select
            className="w-full p-2 border rounded text-black"
            value={selectedPickle}
            onChange={(e) => setSelectedPickle(e.target.value)}
          >
            <option value="">Select an item</option>
            {pickles.map(pickle => (
              <option key={pickle.id} value={pickle.id}>
                {pickle.name} - Rs. {pickle.price}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm text-black font-medium mb-2">Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 border rounded text-black"
          />
        </div>

        <button
          onClick={handleAddItem}
          className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition"
        >
          Add Item
        </button>
      </div>

      {/* Totals */}
      <div className="border-t pt-4">
        <div className="flex justify-between mb-2 text-black">
          <span>Subtotal:</span>
          <span>Rs. {calculateTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 text-black">
          <span>VAT (13%):</span>
          <span>Rs. {(calculateTotal() * 0.13).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-black">
          <span>Total:</span>
          <span>Rs. {(calculateTotal() * 1.13).toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full mt-6 bg-gray-800 text-white py-3 rounded hover:bg-gray-900 transition">
        Print Receipt
      </button>

      {/* QR Code Section */}
      <div className="mt-6 pt-4 border-t">
        <h3 className="text-lg font-semibold mb-4 text-black">QR Code Payment</h3>
        
        <div className="flex flex-col items-center gap-4">
          {qrCodeImage ? (
            <div className="relative">
              <img 
                src={qrCodeImage} 
                alt="QR Code" 
                className="w-48 h-48 object-contain border-2 border-dashed border-emerald-200 rounded-lg"
              />
              <button
                onClick={handleRemoveQrCode}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-emerald-600 rounded-lg border-2 border-dashed border-emerald-200 hover:border-emerald-400 cursor-pointer">
              <FaQrcode className="w-8 h-8 mb-2" />
              <span className="text-center">Upload QR Code Image</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleQrCodeUpload}
                className="hidden"
              />
            </label>
          )}
          
          <p className="text-sm text-gray-500 text-center">
            Supported formats: PNG, JPG, JPEG. Max size: 5MB
          </p>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const [billItems, setBillItems] = useState([]);
  const [pickles] = useState([
    {
      id: 1,
      name: "Spicy Garlic Pickle",
      price: 8.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3bV8j7Dm6AudA81jQ-a4CHFF-qO2UhIioQ&s",
      description: "Authentic spicy garlic flavor",
      ManufacturedDate: "2024-01-15",
      ExpiryDate: "2025-01-15"
    },
    {
      id: 2,
      name: "Mango Pickle",
      price: 9.99,
      image: "https://www.ticklingpalates.com/wp-content/uploads/2022/05/mango-pickle.jpg",
      description: "Traditional sweet and sour mango",
      ManufacturedDate: "2024-02-01",
      ExpiryDate: "2025-02-01"
    },
    {
      id: 3,
      name: "Lemon Pickle",
      price: 7.99,
      image: "https://t4.ftcdn.net/jpg/02/65/85/53/360_F_265855393_kzrVPRxea0LWcWjtDfbajBZUc3YwryiR.jpg",
      description: "Tangy lemon flavor",
      ManufacturedDate: "2024-03-01",
      ExpiryDate: "2025-03-01"
    }
  ]);

  const handleAddItem = (newItem) => {
    setBillItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prevItems, newItem];
    });
  };

  return (
    <div className="w-full h-screen bg-gray-100 p-6 overflow-auto flex gap-6">
      {/* Menu Items */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">
          Pickles Menu Details
        </h1>
        
        <div className="mt-4 w-full flex justify-center flex-wrap gap-3">
          {pickles.map(pickle => (
            <Card
              key={pickle.id}
              imageSrc={pickle.image}
              title={pickle.name}
              description={pickle.description}
              ManufacturedDate={pickle.ManufacturedDate}
              ExpiryDate={pickle.ExpiryDate}
              price={pickle.price}
            />
          ))}
        </div>
      </div>

      {/* Bill Receipt */}
      <AutoBillReceipt 
        items={billItems} 
        onAddItem={handleAddItem}
        pickles={pickles}
      />
    </div>
  );
};

export default Menu;