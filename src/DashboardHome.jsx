import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";
import { Calendar, Clock, MapPin, Settings, User, Users } from 'lucide-react';

const DashboardHome = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data
  const shopData = {
    name: "Expert Repairs",
    todayBookings: 5,
    inProgress: 3,
    completed: 12
  };

  const bookings = [
    { id: 1, customer: "John Doe", service: "AC Repair", time: "10:00 AM", status: "pending" },
    { id: 2, customer: "Jane Smith", service: "Electrical", time: "2:00 PM", status: "confirmed" },
    { id: 3, customer: "Mike Johnson", service: "Plumbing", time: "4:30 PM", status: "completed" }
  ];

  const personnel = [
    { id: 1, name: "Sam Wilson", skills: ["AC Repair", "Electrical"], status: "active" },
    { id: 2, name: "Peter Parker", skills: ["Plumbing"], status: "active" },
    { id: 3, name: "Tony Stark", skills: ["Electrical", "AC Repair"], status: "inactive" }
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{shopData.name}</h1>
          <p className="text-gray-500">Welcome back!</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </div>

      {/* Main Navigation */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="personnel">Personnel</TabsTrigger>
          <TabsTrigger value="shop">Shop Details</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Today's Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{shopData.todayBookings}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{shopData.inProgress}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{shopData.completed}</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Bookings Tab */}
        <TabsContent value="bookings">
          <div className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <User className="h-6 w-6" />
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{booking.customer}</h3>
                      <p className="text-sm text-gray-500">{booking.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{booking.time}</span>
                    </div>
                    <Badge variant={
                      booking.status === 'pending' ? 'secondary' :
                      booking.status === 'confirmed' ? 'default' :
                      'outline'
                    }>
                      {booking.status}
                    </Badge>
                    {booking.status === 'pending' && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="default">Accept</Button>
                        <Button size="sm" variant="outline">Reject</Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Personnel Tab */}
        <TabsContent value="personnel">
          <div className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">Personnel List</h2>
              <Button>
                <Users className="h-4 w-4 mr-2" />
                Add Personnel
              </Button>
            </div>
            {personnel.map((person) => (
              <Card key={person.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <User className="h-6 w-6" />
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{person.name}</h3>
                      <div className="flex gap-2 mt-1">
                        {person.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant={person.status === 'active' ? 'default' : 'secondary'}>
                      {person.status}
                    </Badge>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Shop Details Tab */}
        <TabsContent value="shop">
          <Card>
            <CardHeader>
              <CardTitle>Shop Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-gray-500">123 Main Street, City, 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium">Working Hours</p>
                    <p className="text-sm text-gray-500">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Services Offered</p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">AC Repair</Badge>
                    <Badge variant="outline">Electrical</Badge>
                    <Badge variant="outline">Plumbing</Badge>
                  </div>
                </div>
              </div>
              <Button className="w-full">Edit Shop Details</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardHome;