import React, { useState } from 'react';
import { FaTrash, FaPlus, FaTag, FaDollarSign, FaBoxOpen, FaBarcode, FaCalendarAlt, FaListUl,  FaInfoCircle,  FaChevronDown } from 'react-icons/fa';

const PickleInventoryAdmin = () => {
  const [pickles, setPickles] = useState([
    {
      id: 1,
      name: 'Spicy Garlic',
      price: 8.99,
      stock: 15,
      batch: '#231',
      expiry: '2024-12-01',
      ingredients: 'Cucumber, Garlic, Chili',
      status: 'available'
    },
    {
      id: 2,
      name: 'Sweet Mango',
      price: 9.99,
      stock: 0,
      batch: '#245',
      expiry: '2025-01-15',
      ingredients: 'Mango, Turmeric, Mustard',
      status: 'out-of-stock'
    },
    {
      id: 3,
      name: 'Honey Lemon',
      price: 10.99,
      stock: 25,
      batch: '#250',
      expiry: '2025-03-20',
      ingredients: 'Lemon, Honey, Cumin',
      status: 'upcoming'
    }
  ]);

  const [newPickle, setNewPickle] = useState({
    name: '',
    price: '',
    stock: '',
    batch: '',
    expiry: '',
    ingredients: '',
    status: 'available'
  });

  const handleAddPickle = (e) => {
    e.preventDefault();
    if (
      !newPickle.name ||
      !newPickle.price ||
      !newPickle.stock ||
      !newPickle.batch ||
      !newPickle.expiry
    ) {
      alert('Please fill all required fields');
      return;
    }

    const pickle = {
      id: pickles.length + 1,
      ...newPickle,
      price: parseFloat(newPickle.price),
      stock: parseInt(newPickle.stock)
    };

    setPickles([...pickles, pickle]);
    setNewPickle({
      name: '',
      price: '',
      stock: '',
      batch: '',
      expiry: '',
      ingredients: '',
      status: 'available'
    });
  };

  const handleDelete = (id) => {
    setPickles(pickles.filter(pickle => pickle.id !== id));
  };

  const renderTable = (title, filter) => (
    <div className="mb-8">
      <h2 className="text-2xl-black font-bold mb-4 text-black">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-black">
            <tr>
              <th className="py-3 text-white px-4 text-left">Name</th>
              <th className="py-3 text-white px-4 text-left">Price</th>
              <th className="py-3 text-white px-4 text-left">Stock</th>
              <th className="py-3 text-white px-4 text-left">Batch</th>
              <th className="py-3 text-white px-4 text-left">Expiry</th>
              <th className="py-3 text-white px-4 text-left">Ingredients</th>
              <th className="py-3 text-white px-4 text-left">Status</th>
              <th className="py-3 text-white px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pickles.filter(pickle => {
              if (filter === 'available') return pickle.stock > 0 && pickle.status === 'available';
              if (filter === 'out-of-stock') return pickle.stock === 0 || pickle.status === 'out-of-stock';
              if (filter === 'upcoming') return pickle.status === 'upcoming';
              return true;
            }).map((pickle) => (
              <tr key={pickle.id} className="border-b border-emerald-50 hover:bg-emerald-50">
                <td className="py-3 px-4 text-black">{pickle.name}</td>
                <td className="py-3 px-4 text-black">${pickle.price}</td>
                <td className="py-3 px-4 text-black">{pickle.stock}</td>
                <td className="py-3 px-4 text-black">{pickle.batch}</td>
                <td className="py-3 px-4 text-black">{pickle.expiry}</td>
                <td className="py-3 px-4 text-black">{pickle.ingredients}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    pickle.status === 'available' ? 'bg-green-100 text-green-800' :
                    pickle.status === 'out-of-stock' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {pickle.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button 
                    onClick={() => handleDelete(pickle.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8 text-center">Pickle Inventory</h1>

      {renderTable('Available Pickles', 'available')}
      {renderTable('Out of Stock Pickles', 'out-of-stock')}
      {renderTable('Upcoming Pickles', 'upcoming')}

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-50">
  <h2 className="text-3xl font-bold mb-6 text-emerald-800 flex items-center gap-2">
    <FaPlus className="w-6 h-6" />
    Add New Pickle Product
  </h2>
  <form onSubmit={handleAddPickle} className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Name Field */}
    <div className="relative">
      <label className="block text-sm font-medium text-black mb-2 ml-1">
        Product Name
      </label>
      <div className="relative">
        <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
        <input
          type="text"
          value={newPickle.name}
          onChange={(e) => setNewPickle({...newPickle, name: e.target.value})}
          className="w-full pl-10 pr-4 py-3 text-black rounded-lg border-2 border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all"
          placeholder="Ex: Spicy Garlic Pickle"
          required
        />
      </div>
    </div>

    {/* Price Field */}
    <div className="relative">
      <label className="block text-sm font-medium text-black mb-2 ml-1">
        Price
      </label>
      <div className="relative">
        <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
        <input
          type="number"
          step="0.01"
          value={newPickle.price}
          onChange={(e) => setNewPickle({...newPickle, price: e.target.value})}
          className="w-full pl-10 pr-4 py-3 text-black rounded-lg border-2 border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all"
          placeholder="0.00"
          required
        />
      </div>
    </div>

    {/* Stock Field */}
    <div className="relative">
      <label className="block text-sm font-medium text-black mb-2 ml-1">
        Stock Quantity
      </label>
      <div className="relative">
        <FaBoxOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
        <input
          type="number"
          value={newPickle.stock}
          onChange={(e) => setNewPickle({...newPickle, stock: e.target.value})}
          className="w-full pl-10 pr-4 py-3 text-black rounded-lg border-2 border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all"
          placeholder="Enter stock quantity"
          required
        />
      </div>
    </div>

    {/* Batch Field */}
    <div className="relative">
      <label className="block text-sm font-medium text-black mb-2 ml-1">
        Batch Number
      </label>
      <div className="relative">
        <FaBarcode className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
        <input
          type="text"
          value={newPickle.batch}
          onChange={(e) => setNewPickle({...newPickle, batch: e.target.value})}
          className="w-full pl-10 pr-4 py-3 text-black rounded-lg border-2 border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all"
          placeholder="Ex: #231"
          required
        />
      </div>
    </div>

    {/* Expiry Date Field */}
    <div className="relative">
      <label className="block text-sm font-medium text-black mb-2 ml-1">
        Expiry Date
      </label>
      <div className="relative">
        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
        <input
          type="date"
          value={newPickle.expiry}
          onChange={(e) => setNewPickle({...newPickle, expiry: e.target.value})}
          className="w-full pl-10 pr-4 py-3 text-black rounded-lg border-2 border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all [&::-webkit-calendar-picker-indicator]:invert-0"
          required
        />
      </div>
    </div>

    {/* Ingredients Field */}
    <div className="relative">
      <label className="block text-sm font-medium text-black mb-2 ml-1">
        Ingredients
      </label>
      <div className="relative">
        <FaListUl className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
        <input
          type="text"
          value={newPickle.ingredients}
          onChange={(e) => setNewPickle({...newPickle, ingredients: e.target.value})}
          className="w-full pl-10 pr-4 py-3 text-black rounded-lg border-2 border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 transition-all"
          placeholder="Comma separated ingredients"
        />
      </div>
    </div>

    {/* Status Field */}
    <div className="relative">
      <label className="block text-sm font-medium text-black mb-2 ml-1">
        Product Status
      </label>
      <div className="relative">
        <FaInfoCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-600" />
        <select
          value={newPickle.status}
          onChange={(e) => setNewPickle({...newPickle, status: e.target.value})}
          className="w-full pl-10 pr-10 py-3 text-black rounded-lg border-2 border-emerald-100 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 appearance-none bg-white transition-all"
        >
          <option value="available">Available</option>
          <option value="out-of-stock">Out of Stock</option>
          <option value="upcoming">Upcoming</option>
        </select>
        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-600 text-sm" />
      </div>
    </div>

    {/* Submit Button */}
    <div className="md:col-span-2 mt-4">
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-600 transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-emerald-200 flex items-center justify-center gap-3"
      >
        <FaPlus className="w-5 h-5" />
        Add New Pickle Product
      </button>
    </div>
  </form>
</div>
    </div>
  );
};

export default PickleInventoryAdmin;