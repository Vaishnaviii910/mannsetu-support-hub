import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  FileText, 
  Clock, 
  CheckCircle,
  AlertCircle,
  TrendingUp,
  MessageCircle
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const CounselorDashboard = () => {
  const sidebarItems = [
    { title: "Dashboard", url: "/counselor-dashboard", icon: Calendar, isActive: true },
    { title: "Bookings", url: "/counselor/bookings", icon: Clock },
    { title: "Session Records", url: "/counselor/records", icon: FileText },
    { title: "Students", url: "/counselor/students", icon: Users },
  ];

  const todaysSchedule = [
    { time: "10:00 AM", student: "Student #2024001", type: "Initial Assessment", status: "upcoming" },
    { time: "11:30 AM", student: "Student #2024015", type: "Follow-up", status: "upcoming" },
    { time: "2:00 PM", student: "Student #2024032", type: "Crisis Support", status: "priority" },
    { time: "3:30 PM", student: "Student #2024008", type: "Regular Session", status: "completed" },
  ];

  const recentRequests = [
    { student: "Student #2024045", urgency: "high", reason: "Anxiety Support", time: "30 mins ago" },
    { student: "Student #2024023", urgency: "medium", reason: "Academic Stress", time: "2 hours ago" },
    { student: "Student #2024067", urgency: "low", reason: "General Counseling", time: "4 hours ago" },
  ];

  const stats = [
    { title: "Today's Sessions", value: "6", change: "+2 from yesterday", icon: Calendar },
    { title: "Active Students", value: "24", change: "+3 this week", icon: Users },
    { title: "Completion Rate", value: "94%", change: "+5% this month", icon: CheckCircle },
    { title: "Avg. Session", value: "45min", change: "Standard duration", icon: Clock },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems} userType="counselor" userName="Dr. Sarah Wilson">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Good morning, Dr. Wilson!</h1>
          <p className="text-muted-foreground">
            You have 4 sessions scheduled today. 1 high-priority student needs attention.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Today's Schedule
              </CardTitle>
              <CardDescription>
                Your counseling sessions for today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysSchedule.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="text-sm font-medium min-w-[80px]">{session.time}</div>
                      <div className="flex-1">
                        <p className="font-medium">{session.student}</p>
                        <p className="text-sm text-muted-foreground">{session.type}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={
                        session.status === "priority" ? "destructive" :
                        session.status === "completed" ? "default" : "secondary"
                      }
                    >
                      {session.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View Full Calendar
              </Button>
            </CardContent>
          </Card>

          {/* Recent Booking Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Recent Booking Requests
              </CardTitle>
              <CardDescription>
                New appointment requests from students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentRequests.map((request, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        request.urgency === "high" ? "bg-destructive" :
                        request.urgency === "medium" ? "bg-warning" : "bg-success"
                      }`} />
                      <div>
                        <p className="font-medium">{request.student}</p>
                        <p className="text-sm text-muted-foreground">{request.reason}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{request.time}</p>
                      <Button size="sm" variant="outline" className="mt-1">
                        Respond
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View All Requests
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Session Notes</h3>
                <p className="text-sm text-muted-foreground">Review and update session records</p>
              </div>
              <Button variant="outline" className="w-full">Access Records</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-success-soft rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">Student Management</h3>
                <p className="text-sm text-muted-foreground">View assigned students and their progress</p>
              </div>
              <Button variant="outline" className="w-full">Manage Students</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Analytics</h3>
                <p className="text-sm text-muted-foreground">View your counseling effectiveness metrics</p>
              </div>
              <Button variant="outline" className="w-full">View Insights</Button>
            </CardContent>
          </Card>
        </div>

        {/* Priority Alerts */}
        <Card className="border-destructive/20 bg-destructive-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              Priority Alerts
            </CardTitle>
            <CardDescription>
              Students requiring immediate attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  <div>
                    <p className="font-medium">Student #2024032 - Crisis Support Needed</p>
                    <p className="text-sm text-muted-foreground">Scheduled for 2:00 PM today. Review emergency protocols.</p>
                  </div>
                </div>
                <Button variant="destructive" size="sm">Review Case</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CounselorDashboard;