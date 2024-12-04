import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { MapPin, Clock, Star, Search, Filter, Calendar, Bell, PieChart, Users, Settings, Download, Upload, PhoneCall } from 'lucide-react';

const ServiceHome = () => {
  const [services] = useState([
    {
      id: 1,
      title: 'AC Repair',
      description: 'Not cooling properly, strange noise',
      customer: 'John Doe',
      address: '123 Main St, City',
      status: 'pending',
      urgency: 'high',
      price: 150,
      time: '2:30 PM',
      agentAssigned: null,
      customerPhone: '+1-234-567-8900'
    },
    {
      id: 2,
      title: 'Electrical Work',
      description: 'Circuit installation',
      customer: 'Jane Smith',
      address: '456 Oak Ave, City',
      status: 'assigned',
      urgency: 'medium',
      price: 200,
      time: '4:00 PM',
      agentAssigned: 'Mike Wilson',
      customerPhone: '+1-234-567-8901'
    }
  ]);

  const [activeTab, setActiveTab] = useState('all');
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Top Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Today's Jobs</p>
                <h3 className="text-2xl font-bold">24</h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Active Agents</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Pending</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Total Revenue</p>
                <h3 className="text-2xl font-bold">$2.4k</h3>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <PieChart className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('all')}
          >
            All Jobs
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'assigned' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
            onClick={() => setActiveTab('assigned')}
          >
            Assigned
          </button>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-100 p-2 rounded-lg" title="Import">
            <Upload className="w-5 h-5" />
          </button>
          <button className="bg-gray-100 p-2 rounded-lg" title="Export">
            <Download className="w-5 h-5" />
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            New Service
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by service, customer, or agent..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
        <button className="bg-gray-100 px-4 py-2 rounded-lg flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
        <button 
          className="bg-gray-100 px-4 py-2 rounded-lg flex items-center space-x-2"
          onClick={() => setShowAnalytics(!showAnalytics)}
        >
          <PieChart className="w-5 h-5" />
          <span>Analytics</span>
        </button>
      </div>

      {/* Service Cards */}
      <div className="grid gap-4">
        {services.map(service => (
          <Card key={service.id} className="bg-white hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-lg">{service.title}</h3>
                    {service.urgency === 'high' && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  service.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                }`}>
                  {service.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{service.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{service.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneCall className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{service.customerPhone}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <span className="font-medium">${service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">{service.customer}</span>
                  {service.agentAssigned && (
                    <span className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded ml-2">
                      {service.agentAssigned}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  {!service.agentAssigned && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                      Assign Agent
                    </button>
                  )}
                  <button className="bg-gray-100 px-4 py-2 rounded-lg text-sm">
                    View Details
                  </button>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-1">
                    <PhoneCall className="w-4 h-4" />
                    <span>Call</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceHome;