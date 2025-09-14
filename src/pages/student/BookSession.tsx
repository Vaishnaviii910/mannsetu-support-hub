import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Heart, 
  MessageCircle, 
  Users,
  Brain,
  CheckCircle,
  Star,
  Video,
  MapPin
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

const BookSession = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCounselor, setSelectedCounselor] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [description, setDescription] = useState("");
  
  const { toast } = useToast();

  const sidebarItems = [
    { title: "Dashboard", url: "/student-dashboard", icon: Heart },
    { title: "AI Chatbot", url: "/student/chatbot", icon: MessageCircle },
    { title: "Book Session", url: "/student/book-session", icon: CalendarIcon, isActive: true },
    { title: "Peer Support", url: "/student/peer-support", icon: Users },
    { title: "Resources Hub", url: "/student/resources", icon: Brain },
  ];

  const counselors = [
    {
      id: "1",
      name: "Dr. Sarah Wilson",
      specialization: "Anxiety & Depression",
      rating: 4.9,
      experience: "8 years",
      availability: "Available",
      nextSlot: "Today 2:00 PM"
    },
    {
      id: "2", 
      name: "Dr. Michael Chen",
      specialization: "Academic Stress & ADHD",
      rating: 4.8,
      experience: "6 years",
      availability: "Available", 
      nextSlot: "Tomorrow 10:00 AM"
    },
    {
      id: "3",
      name: "Dr. Priya Sharma", 
      specialization: "Relationship & Social Issues",
      rating: 4.9,
      experience: "10 years",
      availability: "Busy",
      nextSlot: "Monday 3:00 PM"
    },
    {
      id: "4",
      name: "Dr. James Rodriguez",
      specialization: "Crisis Intervention",
      rating: 5.0,
      experience: "12 years", 
      availability: "Available",
      nextSlot: "Today 4:00 PM"
    }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedCounselor || !sessionType || !urgency) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your session.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Session Booked Successfully!",
      description: `Your appointment has been scheduled for ${selectedDate.toLocaleDateString()} at ${selectedTime}.`,
    });

    // Reset form
    setSelectedTime("");
    setSelectedCounselor("");
    setSessionType("");
    setUrgency("");
    setDescription("");
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} userType="student" userName="Alex Johnson">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-success to-primary rounded-lg flex items-center justify-center">
              <CalendarIcon className="h-5 w-5 text-white" />
            </div>
            Book Counseling Session
          </h1>
          <p className="text-muted-foreground">
            Schedule a confidential session with our qualified mental health professionals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Booking Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Session Details
              </CardTitle>
              <CardDescription>
                Fill in the details to book your counseling session
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Session Type & Urgency */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sessionType">Session Type *</Label>
                  <Select value={sessionType} onValueChange={setSessionType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select session type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual Counseling</SelectItem>
                      <SelectItem value="group">Group Therapy</SelectItem>
                      <SelectItem value="assessment">Initial Assessment</SelectItem>
                      <SelectItem value="followup">Follow-up Session</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level *</Label>
                  <Select value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Regular (Within a week)</SelectItem>
                      <SelectItem value="medium">Moderate (Within 2-3 days)</SelectItem>
                      <SelectItem value="high">Urgent (Same day)</SelectItem>
                      <SelectItem value="emergency">Emergency (Immediate)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Counselor Selection */}
              <div className="space-y-4">
                <Label>Select Counselor *</Label>
                <div className="grid gap-3">
                  {counselors.map((counselor) => (
                    <div
                      key={counselor.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedCounselor === counselor.id
                          ? "border-primary bg-primary-soft"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedCounselor(counselor.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{counselor.name}</h3>
                            <p className="text-sm text-muted-foreground">{counselor.specialization}</p>
                            <div className="flex items-center gap-4 mt-1">
                              <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-warning text-warning" />
                                <span className="text-xs">{counselor.rating}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">{counselor.experience}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={counselor.availability === "Available" ? "default" : "secondary"}
                          >
                            {counselor.availability}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{counselor.nextSlot}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Select Date *</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                    className="rounded-md border"
                  />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="timeSlot">Available Time Slots *</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="justify-start"
                        >
                          <Clock className="h-3 w-3 mr-2" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Session Format</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="justify-start">
                        <Video className="h-3 w-3 mr-2" />
                        Video Call
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start">
                        <MapPin className="h-3 w-3 mr-2" />
                        In-Person
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">What would you like to discuss? (Optional)</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly describe what you'd like to talk about in your session..."
                  className="min-h-[100px]"
                />
              </div>

              {/* Book Button */}
              <Button onClick={handleBooking} className="w-full" size="lg">
                <CheckCircle className="h-4 w-4 mr-2" />
                Book Session
              </Button>
            </CardContent>
          </Card>

          {/* Quick Info & Emergency */}
          <div className="space-y-6">
            {/* Emergency Support */}
            <Card className="border-destructive/20 bg-destructive-foreground">
              <CardHeader>
                <CardTitle className="text-destructive text-sm flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Crisis Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  If you're in immediate crisis or having thoughts of self-harm:
                </p>
                <Button variant="destructive" size="sm" className="w-full">
                  Emergency Helpline
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  Campus Security
                </Button>
              </CardContent>
            </Card>

            {/* Booking Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Booking Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <div className="space-y-2">
                  <h4 className="font-medium">Before your session:</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Arrive 5 minutes early</li>
                    <li>• Prepare any questions</li>
                    <li>• Ensure privacy for video calls</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Cancellation Policy:</h4>
                  <p className="text-muted-foreground">
                    Cancel at least 2 hours before your scheduled session.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-sm">Dr. Sarah Wilson</p>
                      <p className="text-xs text-muted-foreground">Individual Session</p>
                      <p className="text-xs text-primary">Tomorrow, 2:00 PM</p>
                    </div>
                    <Badge variant="secondary">Confirmed</Badge>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  View All Sessions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookSession;