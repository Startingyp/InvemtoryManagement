import React, { useState } from 'react';
import { FaCog, FaSave, FaBusinessTime, FaCreditCard, FaUserShield, FaBell, FaDatabase } from 'react-icons/fa';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    businessInfo: {
      shopName: "The Pickle Jar",
      address: "123 Pickle Street, City",
      contact: "+1 234 567 890",
      email: "info@picklejar.com"
    },
    businessHours: {
      monday: { open: "09:00", close: "18:00" },
      tuesday: { open: "09:00", close: "18:00" },
      wednesday: { open: "09:00", close: "18:00" },
      thursday: { open: "09:00", close: "18:00" },
      friday: { open: "09:00", close: "18:00" },
      saturday: { open: "10:00", close: "16:00" },
      sunday: { open: "", close: "" }
    },
    paymentSettings: {
      acceptedMethods: ['cash', 'credit_card', 'online'],
      taxRate: 10,
      taxNumber: "TAX-123456"
    },
    notifications: {
      newOrder: true,
      lowStock: true,
      promotions: false
    }
  });

  const handleChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleTimeChange = (day, type, time) => {
    setSettings(prev => ({
      ...prev,
      businessHours: {
        ...prev.businessHours,
        [day]: {
          ...prev.businessHours[day],
          [type]: time
        }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add save to backend logic here
    alert('Settings saved successfully!');
  };

  const SectionHeader = ({ icon, title }) => (
    <div className="flex items-center mb-4 border-b pb-2">
      {icon}
      <h2 className="text-xl font-semibold ml-2">{title}</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <FaCog className="text-3xl mr-2 text-black" />
          <h1 className="text-3xl font-bold text-gray-800">Shop Settings</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Business Information Section */}
          <div className="bg-white text-black p-6 rounded-lg shadow">
            <SectionHeader 
              icon={<FaBusinessTime className="text-black" />} 
              title="Business Information" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-black font-medium mb-1">Shop Name</label>
                <input
                  type="text"
                  value={settings.businessInfo.shopName}
                  onChange={(e) => handleChange('businessInfo', 'shopName', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <input
                  type="email"
                  value={settings.businessInfo.email}
                  onChange={(e) => handleChange('businessInfo', 'email', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Number</label>
                <input
                  type="tel"
                  value={settings.businessInfo.contact}
                  onChange={(e) => handleChange('businessInfo', 'contact', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <textarea
                  value={settings.businessInfo.address}
                  onChange={(e) => handleChange('businessInfo', 'address', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="bg-white text-black p-6 rounded-lg shadow">
            <SectionHeader 
              icon={<FaBusinessTime className="text-black" />} 
              title="Business Hours" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(settings.businessHours).map(([day, hours]) => (
                <div key={day} className="flex items-center gap-2">
                  <div className="w-24 capitalize">{day}</div>
                  <input
                    type="time"
                    value={hours.open}
                    onChange={(e) => handleTimeChange(day, 'open', e.target.value)}
                    className="p-1 border rounded"
                  />
                  <span>-</span>
                  <input
                    type="time"
                    value={hours.close}
                    onChange={(e) => handleTimeChange(day, 'close', e.target.value)}
                    className="p-1 border rounded"
                    disabled={!hours.open}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Payment Settings Section */}
          <div className="bg-white text-black p-6 rounded-lg shadow">
            <SectionHeader 
              icon={<FaCreditCard className="text-black" />} 
              title="Payment Settings" 
            />
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Accepted Payment Methods</label>
                <div className="flex flex-wrap gap-4">
                  {['cash', 'credit_card', 'online'].map(method => (
                    <label key={method} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={settings.paymentSettings.acceptedMethods.includes(method)}
                        onChange={(e) => {
                          const methods = [...settings.paymentSettings.acceptedMethods];
                          if (e.target.checked) {
                            methods.push(method);
                          } else {
                            const index = methods.indexOf(method);
                            if (index > -1) methods.splice(index, 1);
                          }
                          handleChange('paymentSettings', 'acceptedMethods', methods);
                        }}
                      />
                      <span className="capitalize">{method.replace('_', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Tax Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={settings.paymentSettings.taxRate}
                    onChange={(e) => handleChange('paymentSettings', 'taxRate', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tax Number</label>
                  <input
                    type="text"
                    value={settings.paymentSettings.taxNumber}
                    onChange={(e) => handleChange('paymentSettings', 'taxNumber', e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 flex items-center gap-2"
            >
              <FaSave /> Save Changes
            </button>
          </div>
        </form>

        {/* Additional Sections (Security, Data Management) */}
        <div className="mt-8 space-y-8">
          {/* Security Settings */}
          

          {/* Data Management */}
          <div className="bg-white text-black p-6 rounded-lg shadow">
            <SectionHeader 
              icon={<FaDatabase className="text-black" />} 
              title="Data Management" 
            />
            <div className="space-y-4">
              <button className="bg-blue-100 text-white px-4 py-2 rounded hover:bg-blue-200">
                Export All Data
              </button>
              <button className="bg-red-100 text-white px-4 py-2 rounded hover:bg-red-200 ml-4">
                Reset System
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;