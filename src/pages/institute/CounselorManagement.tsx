import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  UserCheck, 
  Plus, 
  Search, 
  Users, 
  Calendar,
  TrendingUp,
  Settings,
  BarChart3,
  Star,
  Clock,
  Phone,
  Mail,
  Edit,
  MoreHorizontal,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const CounselorManagement = () => {
  const sidebarItems = [
    { title: "Dashboard", url: "/institute-dashboard", icon: BarChart3 },
    { title: "Counselor Management", url: "/institute/counselors", icon: UserCheck, isActive: true },
    { title: "Analytics", url: "/institute/analytics", icon: TrendingUp },
    { title: "Students", url: "/institute/students", icon: Users },
    { title: "Settings", url: "/institute/settings", icon: Settings },
  ];

  const counselors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      email: "s.wilson@institute.edu",
      phone: "+1 (555) 0123",
      specialization: "Anxiety & Depression",
      experience: "8 years",
      qualification: "PhD Clinical Psychology",
      status: "Active",
      caseload: 24,
      maxCaseload: 30,
      rating: 4.9,
      sessionsThisMonth: 68,
      availability: "Full-time",
      joinDate: "2019-08-15",
      lastActive: "Online now"
    },
    {
      id: 2,
      name: "Dr. Michael Chen", 
      email: "m.chen@institute.edu",
      phone: "+1 (555) 0124",
      specialization: "Academic Stress & ADHD",
      experience: "6 years", 
      qualification: "PhD Counseling Psychology",
      status: "Active",
      caseload: 28,
      maxCaseload: 30,
      rating: 4.8,
      sessionsThisMonth: 72,
      availability: "Full-time",
      joinDate: "2020-01-10",
      lastActive: "2 hours ago"
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      email: "p.sharma@institute.edu", 
      phone: "+1 (555) 0125",
      specialization: "Relationship & Social Issues",
      experience: "10 years",
      qualification: "PhD Clinical Psychology",
      status: "Active", 
      caseload: 22,
      maxCaseload: 25,
      rating: 4.9,
      sessionsThisMonth: 54,
      availability: "Part-time",
      joinDate: "2018-03-22",
      lastActive: "1 day ago"
    },
    {
      id: 4,
      name: "Dr. James Rodriguez",
      email: "j.rodriguez@institute.edu",
      phone: "+1 (555) 0126", 
      specialization: "Crisis Intervention",
      experience: "12 years",
      qualification: "PhD Clinical Psychology",
      status: "On Leave",
      caseload: 0,
      maxCaseload: 20,
      rating: 5.0,
      sessionsThisMonth: 0,
      availability: "Medical Leave",
      joinDate: "2017-09-05",
      lastActive: "2 weeks ago"
    }
  ];

  const recentActivity = [
    {
      type: "new_hire",
      message: "Dr. Amanda Foster joined as Crisis Counselor",
      time: "3 days ago"
    },
    {
      type: "certification",
      message: "Dr. Sarah Wilson completed EMDR certification",
      time: "1 week ago"
    },
    {
      type: "capacity",
      message: "Dr. Michael Chen reached 90% caseload capacity",
      time: "2 weeks ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "default";
      case "On Leave": return "secondary";
      case "Inactive": return "destructive";
      default: return "secondary";
    }
  };

  const getCaseloadColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage >= 90) return "text-destructive";
    if (percentage >= 75) return "text-warning";
    return "text-success";
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} userType="institute" userName="IIT Delhi">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-success to-primary rounded-lg flex items-center justify-center">
                  <UserCheck className="h-5 w-5 text-white" />
                </div>
                Counselor Management
              </h1>
              <p className="text-muted-foreground">
                Manage your counseling team, track performance, and oversee workload distribution
              </p>
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add New Counselor
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search counselors by name, specialization, or status..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Team Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="schedules">Schedules</TabsTrigger>
            <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Overview Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Counselors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{counselors.length}</div>
                  <p className="text-xs text-muted-foreground">+1 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Counselors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{counselors.filter(c => c.status === "Active").length}</div>
                  <p className="text-xs text-muted-foreground">Currently available</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Avg Caseload</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Math.round(counselors.reduce((acc, c) => acc + c.caseload, 0) / counselors.filter(c => c.status === "Active").length)}
                  </div>
                  <p className="text-xs text-muted-foreground">Students per counselor</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Sessions This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {counselors.reduce((acc, c) => acc + c.sessionsThisMonth, 0)}
                  </div>
                  <p className="text-xs text-muted-foreground">Total sessions</p>
                </CardContent>
              </Card>
            </div>

            {/* Counselors List */}
            <div className="space-y-4">
              {counselors.map((counselor) => (
                <Card key={counselor.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                            {counselor.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-xl">{counselor.name}</h3>
                          <p className="text-muted-foreground">{counselor.specialization}</p>
                          <p className="text-sm text-muted-foreground">{counselor.qualification}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant={getStatusColor(counselor.status)}>
                              {counselor.status}
                            </Badge>
                            <Badge variant="outline">{counselor.availability}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-warning text-warning" />
                              <span className="text-sm">{counselor.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-4">
                      <div>
                        <h4 className="font-medium text-sm mb-3">Contact Information</h4>
                        <div className="space-y-2 text-sm">
                          <p className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            {counselor.email}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            {counselor.phone}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-3">Caseload Status</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Current: {counselor.caseload}/{counselor.maxCaseload}</span>
                            <span className={getCaseloadColor(counselor.caseload, counselor.maxCaseload)}>
                              {Math.round((counselor.caseload / counselor.maxCaseload) * 100)}%
                            </span>
                          </div>
                          <Progress 
                            value={(counselor.caseload / counselor.maxCaseload) * 100} 
                            className="h-2"
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-3">Activity Summary</h4>
                        <div className="space-y-1 text-sm">
                          <p>Sessions this month: <span className="font-medium">{counselor.sessionsThisMonth}</span></p>
                          <p>Experience: <span className="font-medium">{counselor.experience}</span></p>
                          <p>Last active: <span className="font-medium">{counselor.lastActive}</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-sm text-muted-foreground">
                        Joined: {new Date(counselor.joinDate).toLocaleDateString()}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Schedule
                        </Button>
                        <Button variant="outline" size="sm">
                          Performance Report
                        </Button>
                        <Button size="sm">
                          Assign Students
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>
                  Track counselor effectiveness and student satisfaction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  Performance analytics dashboard would be implemented here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Management</CardTitle>
                <CardDescription>
                  Manage counselor availability and shift assignments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  Schedule management interface would be implemented here
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recruitment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recruitment Pipeline</CardTitle>
                <CardDescription>
                  Manage hiring process and onboard new counselors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  Recruitment management system would be implemented here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'new_hire' ? 'bg-success-soft' :
                    activity.type === 'certification' ? 'bg-primary-soft' : 'bg-warning-soft'
                  }`}>
                    {activity.type === 'new_hire' ? <CheckCircle className="h-4 w-4 text-success" /> :
                     activity.type === 'certification' ? <Star className="h-4 w-4 text-primary" /> :
                     <AlertTriangle className="h-4 w-4 text-warning" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CounselorManagement;