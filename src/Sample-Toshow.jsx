import React, { useState } from 'react';
import { Search, Calendar, MapPin, Clock, User, Star, ChevronRight, QrCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

const ServiceBookingApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  
  const popularServices = [
    { id: 1, name: 'AC Repair', icon: '❄️', price: '$50-150' },
    { id: 2, name: 'Electrical', icon: '⚡', price: '$40-200' },
    { id: 3, name: 'Cleaning', icon: '🧹', price: '$30-100' },
  ];

  const ServiceCard = ({ service }) => (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => {
      setSelectedService(service);
      setCurrentPage('serviceDetails');
    }}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{service.icon}</span>
            <div>
              <h3 className="font-medium">{service.name}</h3>
              <p className="text-sm text-gray-500">{service.price}</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </CardContent>
    </Card>
  );

  const HomePage = () => (
    <div className="space-y-6 p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search services..."
          className="w-full p-3 pr-10 rounded-lg border border-gray-200"
        />
        <Search className="absolute right-3 top-3 text-gray-400" />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Popular Services</h2>
        <div className="grid gap-4">
          {popularServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );

  const ServiceDetails = () => (
    <div className="p-4 space-y-6">
      <button 
        onClick={() => setCurrentPage('home')}
        className="text-blue-600 flex items-center space-x-2"
      >
        ← Back
      </button>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{selectedService.name}</h1>
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span>4.8 (120 reviews)</span>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Service Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-gray-500" />
              <span>Duration: 1-2 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span>Service at your location</span>
            </div>
            <button 
              className="w-full bg-blue-600 text-white p-3 rounded-lg"
              onClick={() => setCurrentPage('booking')}
            >
              Book Now
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const BookingPage = () => (
    <div className="p-4 space-y-6">
      <button 
        onClick={() => setCurrentPage('serviceDetails')}
        className="text-blue-600 flex items-center space-x-2"
      >
        ← Back
      </button>

      <Card>
        <CardHeader>
          <CardTitle>Schedule Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Select Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Select Time</label>
            <select className="w-full p-2 border rounded">
              <option>9:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
            </select>
          </div>
          <button 
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
            onClick={() => setCurrentPage('tracking')}
          >
            Confirm Booking
          </button>
        </CardContent>
      </Card>
    </div>
  );

  const TrackingPage = () => (
    <div className="p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Service Status</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <User className="h-12 w-12 p-2 bg-gray-100 rounded-full" />
            <div>
              <h3 className="font-medium">John Smith</h3>
              <p className="text-sm text-gray-500">Service Professional</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Estimated Arrival</span>
              <span className="font-medium">10:30 AM</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Service Status</span>
              <span className="font-medium text-blue-600">On the way</span>
            </div>
          </div>
          <div className="flex justify-center">
            <QrCode className="h-32 w-32 text-gray-400" />
          </div>
          <p className="text-sm text-center text-gray-500">
            Show this QR code to your service professional
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'serviceDetails':
        return <ServiceDetails />;
      case 'booking':
        return <BookingPage />;
      case 'tracking':
        return <TrackingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {renderPage()}
    </div>
  );
};

export default ServiceBookingApp;