import React, { useState } from 'react';
import { FaSearch, FaUserPlus, FaEdit, FaTrash } from 'react-icons/fa';

const CustomerDetails = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      address: '123 Pickle Street, City',
      totalOrders: 5,
      lastPurchase: '2024-03-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 345 678 901',
      address: '456 Brine Avenue, Town',
      totalOrders: 3,
      lastPurchase: '2024-03-18'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState({
    id: null,
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentCustomer.id) {
      // Update existing customer
      setCustomers(customers.map(customer =>
        customer.id === currentCustomer.id ? currentCustomer : customer
      ));
    } else {
      // Add new customer
      setCustomers([...customers, {
        ...currentCustomer,
        id: customers.length + 1,
        totalOrders: 0,
        lastPurchase: new Date().toISOString().split('T')[0]
      }]);
    }
    setIsModalOpen(false);
    setCurrentCustomer({ id: null, name: '', email: '', phone: '', address: '' });
  };

  const handleEdit = (customer) => {
    setCurrentCustomer(customer);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter(customer => customer.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Customer Management</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search customers..."
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={searchTerm}
                onChange={handleSearch}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 flex items-center gap-2"
            >
              <FaUserPlus /> Add Customer
            </button>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Orders</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Purchase</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map(customer => (
                <tr key={customer.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{customer.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-900">{customer.email}</div>
                    <div className="text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{customer.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{customer.totalOrders}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{customer.lastPurchase}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleEdit(customer)}
                      className="text-emerald-600 hover:text-emerald-900 mr-4"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(customer.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Customer Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-transparent bg-opacity-100 backdrop-blur-sm border-b-black flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl transform transition-all animate-modal">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl text-black font-bold">
                  {currentCustomer.id ? 'Edit Customer' : 'Add New Customer'}
                </h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setCurrentCustomer({ id: null, name: '', email: '', phone: '', address: '' });
                  }}
                  className="text-white hover:text-gray-700 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black">Full Name</label>
                    <input
                      type="text"
                      required
                      className="mt-1 block w-full text-black rounded-md border border-gray-200 p-2"
                      value={currentCustomer.name}
                      onChange={(e) => setCurrentCustomer({...currentCustomer, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">Email</label>
                    <input
                      type="email"
                      required
                      className="mt-1 block w-full rounded-md border text-black border-gray-200 p-2"
                      value={currentCustomer.email}
                      onChange={(e) => setCurrentCustomer({...currentCustomer, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">Phone</label>
                    <input
                      type="tel"
                      className="mt-1 block w-full rounded-md border text-black border-gray-200 p-2"
                      value={currentCustomer.phone}
                      onChange={(e) => setCurrentCustomer({...currentCustomer, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black">Address</label>
                    
                    <textarea
                      className="mt-1 block w-full rounded-md border text-black border-gray-200 p-2"
                      value={currentCustomer.address}
                      onChange={(e) => setCurrentCustomer({...currentCustomer, address: e.target.value})}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                  >
                    {currentCustomer.id ? 'Update' : 'Save'} Customer
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;