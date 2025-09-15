import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  CheckCircle,
  XCircle,
  MessageCircle,
  Phone,
  Video,
  MapPin,
  AlertTriangle,
  Users,
  FileText
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useToast } from "@/hooks/use-toast";
import { RejectBookingDialog } from "@/components/ui/dialog-reject";

const Bookings = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { toast } = useToast();

  const sidebarItems = [
    { title: "Dashboard", url: "/counselor-dashboard", icon: CalendarIcon },
    { title: "Bookings", url: "/counselor/bookings", icon: Clock, isActive: true },
    { title: "Session Records", url: "/counselor/records", icon: FileText },
  ];

  const pendingRequests = [
    {
      id: 1,
      studentId: "2024001",
      studentName: "Anonymous Student",
      requestTime: "2 hours ago",
      urgency: "high",
      sessionType: "Crisis Support",
      preferredDate: "Today",
      preferredTime: "Any available slot",
      description: "Experiencing severe anxiety about upcoming exams. Need immediate support.",
      format: "video"
    },
    {
      id: 2,
      studentId: "2024015",
      studentName: "Anonymous Student",
      requestTime: "5 hours ago", 
      urgency: "medium",
      sessionType: "Follow-up",
      preferredDate: "Tomorrow",
      preferredTime: "Morning (10-12 AM)",
      description: "Follow-up session to discuss progress with stress management techniques.",
      format: "in-person"
    },
    {
      id: 3,
      studentId: "2024032",
      studentName: "Anonymous Student",
      requestTime: "1 day ago",
      urgency: "low",
      sessionType: "Initial Assessment",
      preferredDate: "This week",
      preferredTime: "Afternoon preferred",
      description: "First-time counseling request. Looking for general mental health support.",
      format: "video"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      time: "10:00 AM - 11:00 AM",
      studentId: "2024008",
      type: "Individual Session",
      format: "Video Call",
      status: "confirmed",
      notes: "Regular check-in, progress with anxiety management"
    },
    {
      id: 2,
      time: "2:00 PM - 3:00 PM",
      studentId: "2024012",
      type: "Crisis Support",
      format: "In-Person",
      status: "priority",
      notes: "High priority - academic stress and panic attacks"
    },
    {
      id: 3,
      time: "4:00 PM - 5:00 PM",
      studentId: "2024025",
      type: "Follow-up",
      format: "Video Call",
      status: "confirmed",
      notes: "Review sleep hygiene plan and coping strategies"
    }
  ];

  const handleApproveRequest = (requestId: number) => {
    toast({
      title: "Session Approved",
      description: "The session has been scheduled and the student has been notified.",
    });
  };

  const handleRejectRequest = (requestId: number, reason: string) => {
    toast({
      title: "Session Rejected",
      description: `Request rejected. Reason: ${reason}`,
      variant: "destructive"
    });
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} userType="counselor" userName="Dr. Sarah Wilson">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-success to-primary rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-white" />
            </div>
            Appointment Management
          </h1>
          <p className="text-muted-foreground">
            Manage booking requests and view your appointment schedule
          </p>
        </div>

        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="requests">Pending Requests (3)</TabsTrigger>
            <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Requests List */}
              <div className="lg:col-span-2 space-y-4">
                {pendingRequests.map((request) => (
                  <Card key={request.id} className="border-l-4 border-l-warning">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          {request.studentName}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={
                              request.urgency === "high" ? "destructive" :
                              request.urgency === "medium" ? "default" : "secondary"
                            }
                          >
                            {request.urgency} priority
                          </Badge>
                          <Badge variant="outline">
                            {request.format === "video" ? (
                              <Video className="h-3 w-3 mr-1" />
                            ) : (
                              <MapPin className="h-3 w-3 mr-1" />
                            )}
                            {request.format}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription>
                        Requested {request.requestTime} • Student ID: {request.studentId}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-1">Session Type</h4>
                          <p className="text-sm text-muted-foreground">{request.sessionType}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm mb-1">Preferred Timing</h4>
                          <p className="text-sm text-muted-foreground">
                            {request.preferredDate} - {request.preferredTime}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-1">Description</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {request.description}
                        </p>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button 
                          onClick={() => handleApproveRequest(request.id)}
                          className="flex-1"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve & Schedule
                        </Button>
                        <RejectBookingDialog onReject={(reason) => handleRejectRequest(request.id, reason)}>
                          <Button variant="destructive">
                            <XCircle className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                        </RejectBookingDialog>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions Sidebar */}
              <div className="space-y-6">
                <Card className="border-destructive/20 bg-destructive-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive text-sm">
                      <AlertTriangle className="h-4 w-4" />
                      High Priority Requests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      1 crisis support request requires immediate attention
                    </p>
                    <Button variant="destructive" size="sm" className="w-full">
                      Review Crisis Request
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Block Time Slot
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency Session
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Today's Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-primary">6</div>
                      <p className="text-xs text-muted-foreground">Total Sessions</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="p-2 rounded bg-muted">
                        <div className="text-sm font-medium">4</div>
                        <div className="text-xs text-muted-foreground">Confirmed</div>
                      </div>
                      <div className="p-2 rounded bg-warning-soft">
                        <div className="text-sm font-medium">2</div>
                        <div className="text-xs text-muted-foreground">Pending</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Today's Schedule - {new Date().toLocaleDateString()}
                </CardTitle>
                <CardDescription>
                  Your confirmed appointments and available time slots
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="text-sm font-medium min-w-[140px]">
                          {appointment.time}
                        </div>
                        <div>
                          <h3 className="font-semibold">Student #{appointment.studentId}</h3>
                          <p className="text-sm text-muted-foreground">{appointment.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={appointment.status === "priority" ? "destructive" : "default"}
                        >
                          {appointment.status}
                        </Badge>
                        <Badge variant="outline">
                          {appointment.format === "Video Call" ? (
                            <Video className="h-3 w-3 mr-1" />
                          ) : (
                            <MapPin className="h-3 w-3 mr-1" />
                          )}
                          {appointment.format}
                        </Badge>
                      </div>
                    </div>
                    {appointment.notes && (
                      <p className="text-sm text-muted-foreground pl-[140px]">
                        Notes: {appointment.notes}
                      </p>
                    )}
                    <div className="flex gap-2 mt-3 pl-[140px]">
                      <Button size="sm">
                        {appointment.format === "Video Call" ? (
                          <Video className="h-4 w-4 mr-2" />
                        ) : (
                          <MapPin className="h-4 w-4 mr-2" />
                        )}
                        Start Session
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Select Date</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border-0"
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Schedule for {selectedDate?.toLocaleDateString()}
                    </CardTitle>
                    <CardDescription>
                      Time slots and appointments for the selected date
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {/* Time slots would be dynamically generated based on selected date */}
                      <div className="grid grid-cols-4 gap-2">
                        {["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
                          <div 
                            key={time}
                            className="p-3 rounded border text-center hover:bg-muted cursor-pointer"
                          >
                            <div className="text-sm font-medium">{time}</div>
                            <div className="text-xs text-muted-foreground">Available</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Bookings;