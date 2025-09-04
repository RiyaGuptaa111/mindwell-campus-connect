import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Shield, Phone, MessageSquare, Video } from "lucide-react";

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [counselorType, setCounselorType] = useState("");

  const counselors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      specialization: "Anxiety & Depression",
      experience: "8 years",
      rating: 4.9,
      availability: "Available Today",
      type: "In-Person"
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      specialization: "Academic Stress",
      experience: "6 years", 
      rating: 4.8,
      availability: "Next Slot: 2:30 PM",
      type: "Virtual"
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      specialization: "Relationship Issues",
      experience: "10 years",
      rating: 4.9,
      availability: "Available Tomorrow",
      type: "Both"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Confidential Booking
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Book a Counseling Session
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a confidential session with licensed mental health professionals. 
            Available in-person on campus or virtually from anywhere.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-wellness rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  Schedule Your Session
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Student Email</Label>
                  <Input id="email" type="email" placeholder="your.email@university.edu" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Session Type</Label>
                    <Select value={counselorType} onValueChange={setCounselorType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-Person (Campus)</SelectItem>
                        <SelectItem value="virtual">Virtual (Online)</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Date</Label>
                    <Input 
                      type="date" 
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Available Time Slots</Label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className="justify-center"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="concerns">What would you like to discuss? (Optional)</Label>
                  <Input 
                    id="concerns" 
                    placeholder="Brief description of your concerns..."
                    className="h-20"
                  />
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Confidentiality Guarantee:</strong> All sessions are completely confidential and protected by HIPAA. Your information will never be shared without your explicit consent.
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-hover shadow-elevated transition-spring">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Confidential Session
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Available Counselors */}
          <div className="space-y-6">
            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg">Available Counselors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {counselors.map((counselor) => (
                  <div key={counselor.id} className="p-4 border border-border rounded-lg hover:shadow-gentle transition-smooth">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{counselor.name}</h4>
                        <p className="text-sm text-muted-foreground">{counselor.specialization}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        ⭐ {counselor.rating}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        {counselor.experience} experience
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {counselor.availability}
                      </div>
                      <div className="flex items-center gap-2">
                        {counselor.type === "Virtual" ? <Video className="w-3 h-3" /> : 
                         counselor.type === "Both" ? <MessageSquare className="w-3 h-3" /> : 
                         <User className="w-3 h-3" />}
                        {counselor.type}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-gentle bg-primary/5 border-primary">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-primary mb-2">Crisis Hotline</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you need immediate support outside business hours.
                  </p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      Call Campus Crisis Line
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      National Suicide Prevention
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;