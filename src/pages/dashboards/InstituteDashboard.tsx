import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  TrendingUp, 
  AlertTriangle,
  BarChart3,
  Shield,
  Settings,
  Plus,
  Activity
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from "recharts";

const InstituteDashboard = () => {
  const sidebarItems = [
    { title: "Dashboard", url: "/institute-dashboard", icon: BarChart3, isActive: true },
    { title: "Counselor Management", url: "/institute/counselors", icon: UserCheck },
    { title: "Analytics", url: "/institute/analytics", icon: TrendingUp },
    { title: "Students", url: "/institute/students", icon: Users },
    { title: "Settings", url: "/institute/settings", icon: Settings },
  ];

  const overviewStats = [
    { 
      title: "Total Students", 
      value: "2,847", 
      change: "+12% this semester",
      icon: Users,
      color: "text-primary"
    },
    { 
      title: "Active Counselors", 
      value: "18", 
      change: "+2 hired this month",
      icon: UserCheck,
      color: "text-success"
    },
    { 
      title: "Sessions This Month", 
      value: "432", 
      change: "+25% from last month",
      icon: Calendar,
      color: "text-accent"
    },
    { 
      title: "Support Utilization", 
      value: "68%", 
      change: "+8% increase",
      icon: TrendingUp,
      color: "text-warning"
    },
  ];

  const mentalHealthMetrics = {
    screeningParticipation: 85,
    averageWellnessScore: 72,
    highRiskStudents: 24,
    supportEngagement: 91
  };

  const recentAlerts = [
    { type: "high-risk", message: "5 students flagged for immediate attention", time: "2 hours ago" },
    { type: "capacity", message: "Counseling capacity at 90%", time: "4 hours ago" },
    { type: "screening", message: "Monthly screening completion: 85%", time: "1 day ago" },
  ];

  const counselorWorkload = [
    { name: "Dr. Sarah Wilson", students: 24, sessions: 18, availability: 85 },
    { name: "Dr. Michael Chen", students: 28, sessions: 22, availability: 70 },
    { name: "Dr. Priya Sharma", students: 22, sessions: 16, availability: 95 },
    { name: "Dr. James Rodriguez", students: 26, sessions: 20, availability: 80 },
  ];

  const instituteTrends = [
    { month: "Jan", students: 2456, sessions: 342, utilization: 45 },
    { month: "Feb", students: 2532, sessions: 398, utilization: 52 },
    { month: "Mar", students: 2678, sessions: 445, utilization: 58 },
    { month: "Apr", students: 2743, sessions: 521, utilization: 62 },
    { month: "May", students: 2847, sessions: 587, utilization: 68 },
  ];

  const departmentData = [
    { department: "Engineering", count: 534, utilization: 23 },
    { department: "Medical", count: 423, utilization: 31 },
    { department: "Liberal Arts", count: 298, utilization: 18 },
    { department: "Business", count: 267, utilization: 16 },
    { department: "Sciences", count: 345, utilization: 21 },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems} userType="institute" userName="IIT Delhi">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Institute Overview</h1>
            <p className="text-muted-foreground">
              Mental health support analytics and management for your institution
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Counselor
          </Button>
        </div>

        {/* Overview Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-card to-muted/30 border-border/50">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Institute Growth Trends */}
        <Card className="bg-gradient-to-br from-card to-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Institute Growth & Utilization Trends
            </CardTitle>
            <CardDescription>
              Student enrollment, session volume, and support utilization over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={instituteTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Area type="monotone" dataKey="sessions" stackId="1" stroke="#8B9FE8" fill="#8B9FE8" fillOpacity={0.3} />
                <Area type="monotone" dataKey="utilization" stackId="2" stroke="#A8C5A5" fill="#A8C5A5" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Analytics */}
        <Card className="bg-gradient-to-br from-card to-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Department-wise Support Utilization
            </CardTitle>
            <CardDescription>
              Mental health support usage across different academic departments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="department" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Bar dataKey="utilization" fill="#DFA8D8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mental Health Metrics */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Mental Wellness Metrics
              </CardTitle>
              <CardDescription>
                Anonymized insights into student mental health trends
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Screening Participation</span>
                    <span className="text-sm font-bold">{mentalHealthMetrics.screeningParticipation}%</span>
                  </div>
                  <Progress value={mentalHealthMetrics.screeningParticipation} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Average Wellness Score</span>
                    <span className="text-sm font-bold">{mentalHealthMetrics.averageWellnessScore}%</span>
                  </div>
                  <Progress value={mentalHealthMetrics.averageWellnessScore} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Support Engagement</span>
                    <span className="text-sm font-bold">{mentalHealthMetrics.supportEngagement}%</span>
                  </div>
                  <Progress value={mentalHealthMetrics.supportEngagement} className="h-2" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-warning-soft border border-warning/20">
                  <div className="text-2xl font-bold text-warning">{mentalHealthMetrics.highRiskStudents}</div>
                  <p className="text-sm text-warning-foreground">Students requiring attention</p>
                </div>
                <div className="p-4 rounded-lg bg-success-soft border border-success/20">
                  <div className="text-2xl font-bold text-success">91%</div>
                  <p className="text-sm text-success-foreground">Successfully supported</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                System Alerts
              </CardTitle>
              <CardDescription>
                Important notifications and alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="p-3 rounded-lg border space-y-2">
                    <div className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === "high-risk" ? "bg-destructive" :
                        alert.type === "capacity" ? "bg-warning" : "bg-primary"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Alerts
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Counselor Workload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Counselor Workload Overview
            </CardTitle>
            <CardDescription>
              Current workload and availability of your counseling team
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {counselorWorkload.map((counselor, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary-soft rounded-full flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{counselor.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {counselor.students} students • {counselor.sessions} sessions this month
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant={counselor.availability > 85 ? "default" : counselor.availability > 70 ? "secondary" : "destructive"}>
                      {counselor.availability}% Available
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" className="flex-1">
                Manage Counselors
              </Button>
              <Button className="flex-1">
                View Detailed Analytics
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-soft transition-all duration-300 cursor-pointer bg-gradient-to-br from-primary-soft/50 to-primary-soft/20 border-primary/10">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mx-auto shadow-soft">
                <Plus className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Register Counselor</h3>
                <p className="text-sm text-muted-foreground">Add new mental health professionals</p>
              </div>
              <Button variant="outline" className="w-full">Add Counselor</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300 cursor-pointer bg-gradient-to-br from-success-soft/50 to-success-soft/20 border-success/10">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-success-soft rounded-xl flex items-center justify-center mx-auto shadow-soft">
                <BarChart3 className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">View Analytics</h3>
                <p className="text-sm text-muted-foreground">Detailed mental health insights</p>
              </div>
              <Button variant="outline" className="w-full">View Reports</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300 cursor-pointer bg-gradient-to-br from-accent-soft/50 to-accent-soft/20 border-accent/10">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mx-auto shadow-soft">
                <Settings className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">System Settings</h3>
                <p className="text-sm text-muted-foreground">Configure platform preferences</p>
              </div>
              <Button variant="outline" className="w-full">Configure</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstituteDashboard;