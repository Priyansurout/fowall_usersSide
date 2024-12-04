import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Clock, Users, ClipboardCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Checkbox } from "./components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";

const ShopRegistration = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    location: {
      street: '',
      city: '',
      pinCode: ''
    },
    shopDetails: {
      name: '',
      type: [],
      regNumber: '',
      ownerName: '',
      phone: '',
      email: '',
      startTime: '',
      endTime: '',
      serviceRadius: ''
    },
    personnel: [{
      fullName: '',
      phone: '',
      aadharNumber: '',
      panCard: '',
      skills: []
    }]
  });

  const services = [
    'Electrical Repair',
    'AC Maintenance',
    'Cleaning',
    'Plumbing',
    'Carpentry'
  ];

  const serviceRadiusOptions = [
    '5 km',
    '10 km',
    '15 km',
    '20 km'
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const addWorker = () => {
    setFormData(prev => ({
      ...prev,
      personnel: [
        ...prev.personnel,
        {
          fullName: '',
          phone: '',
          aadharNumber: '',
          panCard: '',
          skills: []
        }
      ]
    }));
  };

  const steps = [
    {
      title: 'Shop Location',
      icon: <MapPin className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="street">Street Address</Label>
            <Input
              id="street"
              value={formData.location.street}
              onChange={(e) => handleInputChange('location', 'street', e.target.value)}
              placeholder="Enter street address"
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={formData.location.city}
              onChange={(e) => handleInputChange('location', 'city', e.target.value)}
              placeholder="Enter city"
            />
          </div>
          <div>
            <Label htmlFor="pinCode">PIN Code</Label>
            <Input
              id="pinCode"
              value={formData.location.pinCode}
              onChange={(e) => handleInputChange('location', 'pinCode', e.target.value)}
              placeholder="Enter PIN code"
            />
          </div>
        </div>
      )
    },
    {
      title: 'Shop Details',
      icon: <Clock className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div>
            <Label htmlFor="shopName">Shop Name</Label>
            <Input
              id="shopName"
              value={formData.shopDetails.name}
              onChange={(e) => handleInputChange('shopDetails', 'name', e.target.value)}
              placeholder="Enter shop name"
            />
          </div>
          <div>
            <Label>Services Offered</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={formData.shopDetails.type.includes(service)}
                    onCheckedChange={(checked) => {
                      const newTypes = checked
                        ? [...formData.shopDetails.type, service]
                        : formData.shopDetails.type.filter(t => t !== service);
                      handleInputChange('shopDetails', 'type', newTypes);
                    }}
                  />
                  <Label htmlFor={service}>{service}</Label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="serviceRadius">Service Radius</Label>
            <Select 
              value={formData.shopDetails.serviceRadius}
              onValueChange={(value) => handleInputChange('shopDetails', 'serviceRadius', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select service radius" />
              </SelectTrigger>
              <SelectContent>
                {serviceRadiusOptions.map((radius) => (
                  <SelectItem key={radius} value={radius}>
                    {radius}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )
    },
    {
      title: 'Personnel Details',
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          {formData.personnel.map((worker, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">Worker {index + 1}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Full Name</Label>
                  <Input
                    value={worker.fullName}
                    onChange={(e) => {
                      const newPersonnel = [...formData.personnel];
                      newPersonnel[index].fullName = e.target.value;
                      setFormData(prev => ({ ...prev, personnel: newPersonnel }));
                    }}
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input
                    value={worker.phone}
                    onChange={(e) => {
                      const newPersonnel = [...formData.personnel];
                      newPersonnel[index].phone = e.target.value;
                      setFormData(prev => ({ ...prev, personnel: newPersonnel }));
                    }}
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <Label>Skills</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {services.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${skill}-${index}`}
                          checked={worker.skills.includes(skill)}
                          onCheckedChange={(checked) => {
                            const newPersonnel = [...formData.personnel];
                            newPersonnel[index].skills = checked
                              ? [...worker.skills, skill]
                              : worker.skills.filter(s => s !== skill);
                            setFormData(prev => ({ ...prev, personnel: newPersonnel }));
                          }}
                        />
                        <Label htmlFor={`${skill}-${index}`}>{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={addWorker}
            className="w-full"
          >
            Add Another Worker
          </Button>
        </div>
      )
    },
    {
      title: 'Review',
      icon: <ClipboardCheck className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Location Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Street: {formData.location.street}</p>
              <p>City: {formData.location.city}</p>
              <p>PIN Code: {formData.location.pinCode}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shop Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Name: {formData.shopDetails.name}</p>
              <p>Services: {formData.shopDetails.type.join(', ')}</p>
              <p>Service Radius: {formData.shopDetails.serviceRadius}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Personnel Details</CardTitle>
            </CardHeader>
            <CardContent>
              {formData.personnel.map((worker, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-medium">Worker {index + 1}</h4>
                  <p>Name: {worker.fullName}</p>
                  <p>Phone: {worker.phone}</p>
                  <p>Skills: {worker.skills.join(', ')}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )
    }
  ];

  const handleSubmit = () => {
    // Here you would typically send the formData to your backend
    console.log('Form submitted:', formData);
    setCurrentStep(steps.length); // Move to success state
  };

  if (currentStep === steps.length) {
    return (
      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="text-center py-8">
          <div className="mb-4 text-green-500">
            <ClipboardCheck className="w-12 h-12 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Thank You for Registering!</h2>
          <p className="text-gray-600">
            We are reviewing your details and will notify you once verification is complete.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index === currentStep ? 'text-primary' : 'text-gray-400'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2 ${
                    index === currentStep ? 'border-primary' : 'border-gray-200'
                  }`}>
                    {step.icon}
                  </div>
                  <span className="text-sm">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-full h-px bg-gray-200 mx-4" />
                )}
              </div>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          {steps[currentStep].content}
          
          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(prev => prev - 1)}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              type="button"
              onClick={() => {
                if (currentStep === steps.length - 1) {
                  handleSubmit();
                } else {
                  setCurrentStep(prev => prev + 1);
                }
              }}
            >
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopRegistration;