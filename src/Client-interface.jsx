import React, { useState, useEffect } from 'react';
import { Search, MapPin, Star, Clock, ArrowRight, Bell, Heart, User, Calendar, Menu, Filter, PhoneCall, Shield, Award, ThumbsUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import AlertComponents from './components/ui/alert';
const { Alert, AlertTitle, AlertDescription } = AlertComponents;

const popularServices = [
  { id: 1, name: 'AC Repair & Service', icon: '❄️', rating: 4.8, price: 'From $49', discount: '20% OFF', bookings: 1200, response: '30 min', verified: true },
  { id: 2, name: 'Electrical Installation', icon: '⚡', rating: 4.7, price: 'From $39', discount: '15% OFF', bookings: 980, response: '25 min', verified: true },
  { id: 3, name: 'Deep Home Cleaning', icon: '🧹', rating: 4.9, price: 'From $29', discount: '10% OFF', bookings: 1500, response: '45 min', verified: true },
  { id: 4, name: 'Professional Plumbing', icon: '🔧', rating: 4.6, price: 'From $59', bookings: 850, response: '20 min', verified: true }
];

const categories = [
  'Home Cleaning', 'Appliance Repair', 'Electrician', 'Plumbing', 'Painting',
  'Carpentry', 'Pest Control', 'Gardening', 'Interior Design', 'Home Security'
];

const ServiceCard = ({ service }) => (
  <Card className="group hover:shadow-xl transition-all duration-300 border-transparent hover:border-blue-200">
    <CardHeader className="space-y-2">
      <div className="flex justify-between items-start">
        <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
        <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
      </div>
      <CardTitle className="flex justify-between items-start gap-2">
        <span className="text-lg font-semibold">{service.name}</span>
        {service.verified && (
          <Badge variant="secondary" className="bg-blue-50 text-blue-700">
            <Shield className="h-3 w-3 mr-1" /> Verified
          </Badge>
        )}
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="font-medium">{service.rating}</span>
        <span className="text-sm text-gray-500">({service.bookings}+ bookings)</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-1 text-gray-600">
          <Clock className="h-4 w-4" /> {service.response} response
        </span>
        {service.discount && (
          <Badge className="bg-green-50 text-green-700">
            {service.discount}
          </Badge>
        )}
      </div>
      <div className="pt-2 border-t">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">{service.price}</span>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Book Now
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const HomePage = () => {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPromo, setShowPromo] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-blue-600">fooWall</div>
              <div className="hidden md:flex items-center gap-6">
                {['Home', 'Services', 'How it Works', 'About'].map(item => (
                  <Button key={item} variant="ghost">{item}</Button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hidden md:flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                24/7 Support
              </Button>
              <Button variant="ghost" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center">2</Badge>
              </Button>
              <Button variant="ghost">
                <Heart className="h-5 w-5" />
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <User className="h-5 w-5 mr-2" />
                Sign In
              </Button>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Promo Alert */}
      {showPromo && (
        <Alert className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-100">
          <AlertDescription className="flex justify-between items-center container mx-auto px-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎉</span>
              <span>New users: Get 25% off your first booking with code <span className="font-bold">WELCOME25</span></span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setShowPromo(false)}>
              ✕
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:16px]" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Your One-Stop Solution for Professional Home Services
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Book verified experts for all your home service needs in minutes
            </p>
            <Card className="backdrop-blur-sm bg-white/95 shadow-xl">
              <CardContent className="p-2">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 flex gap-2 items-center">
                    <MapPin className="text-blue-600" />
                    <Input 
                      placeholder="Your location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="border-0 focus:ring-0"
                    />
                  </div>
                  <div className="flex-1 flex gap-2 items-center">
                    <Search className="text-blue-600" />
                    <Input 
                      placeholder="What service do you need?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border-0 focus:ring-0"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6">
                    Find Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Browse Categories</h2>
            <p className="text-gray-600">Find the perfect service for your needs</p>
          </div>
          <Button variant="outline" className="text-blue-600">
            All Categories <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-4 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Popular Services */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Most Popular Services</h2>
            <p className="text-gray-600">Top-rated services by our community</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="hidden md:flex">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
            <Button variant="outline" className="text-blue-600">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Why Choose ServiceHub?</h2>
            <p className="text-gray-600">Join thousands of satisfied customers who trust us</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, number: '10,000+', label: 'Verified Professionals' },
              { icon: Award, number: '4.8/5', label: 'Customer Rating' },
              { icon: ThumbsUp, number: '100,000+', label: 'Jobs Completed' },
              { icon: Clock, number: '30 min', label: 'Average Response' }
            ].map((stat, index) => (
              <Card key={index} className="text-center bg-white/50 hover:bg-white transition-colors duration-300">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mb-4 mx-auto text-blue-600" />
                  <div className="text-2xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;