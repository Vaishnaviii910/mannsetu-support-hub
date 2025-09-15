import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MessageCircle, 
  Calendar, 
  Users, 
  BookOpen, 
  Brain,
  TrendingUp,
  Clock,
  CheckCircle,
  Activity
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from "recharts";

const StudentDashboard = () => {
  const sidebarItems = [
    { title: "Dashboard", url: "/student-dashboard", icon: Heart, isActive: true },
    { title: "AI Chatbot", url: "/student/chatbot", icon: MessageCircle },
    { title: "Book Session", url: "/student/book-session", icon: Calendar },
    { title: "Peer Support", url: "/student/peer-support", icon: Users },
    { title: "Resources Hub", url: "/student/resources", icon: BookOpen },
  ];

  const recentActivities = [
    { type: "session", title: "Counseling session completed", time: "2 days ago", status: "completed" },
    { type: "screening", title: "Monthly wellness check", time: "1 week ago", status: "pending" },
    { type: "resource", title: "Stress management guide viewed", time: "3 days ago", status: "completed" },
  ];

  const wellnessScores = {
    phq9: { score: 8, level: "Mild", color: "bg-warning" },
    gad7: { score: 6, level: "Mild", color: "bg-success" },
    ghq: { score: 12, level: "Moderate", color: "bg-primary" },
  };

  const wellnessTrend = [
    { week: "Week 1", phq9: 12, gad7: 9, ghq: 15 },
    { week: "Week 2", phq9: 10, gad7: 8, ghq: 14 },
    { week: "Week 3", phq9: 9, gad7: 7, ghq: 13 },
    { week: "Week 4", phq9: 8, gad7: 6, ghq: 12 },
  ];

  const activityData = [
    { name: "Sessions", value: 12, color: "#8B9FE8" },
    { name: "Resources", value: 18, color: "#A8C5A5" },
    { name: "Peer Support", value: 8, color: "#DFA8D8" },
    { name: "Self-Care", value: 15, color: "#F0C987" },
  ];

  const moodData = [
    { day: "Mon", mood: 7 },
    { day: "Tue", mood: 6 },
    { day: "Wed", mood: 8 },
    { day: "Thu", mood: 7 },
    { day: "Fri", mood: 9 },
    { day: "Sat", mood: 8 },
    { day: "Sun", mood: 8 },
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems} userType="student" userName="Alex Johnson">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">
            Here's your mental wellness overview. Remember, seeking support is a sign of strength.
          </p>
        </div>

        {/* Wellness Scores */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-primary-soft to-primary-soft/30 border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PHQ-9 Score</CardTitle>
              <Brain className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{wellnessScores.phq9.score}/27</div>
              <Badge variant="secondary" className="mt-2">{wellnessScores.phq9.level}</Badge>
              <Progress value={(wellnessScores.phq9.score / 27) * 100} className="mt-3" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success-soft to-success-soft/30 border-success/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GAD-7 Score</CardTitle>
              <Heart className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{wellnessScores.gad7.score}/21</div>
              <Badge variant="secondary" className="mt-2">{wellnessScores.gad7.level}</Badge>
              <Progress value={(wellnessScores.gad7.score / 21) * 100} className="mt-3" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent-soft to-accent-soft/30 border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GHQ Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{wellnessScores.ghq.score}/36</div>
              <Badge variant="secondary" className="mt-2">{wellnessScores.ghq.level}</Badge>
              <Progress value={(wellnessScores.ghq.score / 36) * 100} className="mt-3" />
            </CardContent>
          </Card>
        </div>

        {/* Wellness Trends & Activity Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-card to-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Wellness Progress
              </CardTitle>
              <CardDescription>
                Your mental health scores over the past month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={wellnessTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px"
                    }} 
                  />
                  <Line type="monotone" dataKey="phq9" stroke="#F0C987" strokeWidth={2} dot={{ fill: "#F0C987", r: 4 }} />
                  <Line type="monotone" dataKey="gad7" stroke="#A8C5A5" strokeWidth={2} dot={{ fill: "#A8C5A5", r: 4 }} />
                  <Line type="monotone" dataKey="ghq" stroke="#8B9FE8" strokeWidth={2} dot={{ fill: "#8B9FE8", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Activity Distribution
              </CardTitle>
              <CardDescription>
                Your engagement across different support services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={activityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {activityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px"
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {activityData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                    <span className="text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Daily Mood Tracker */}
        <Card className="bg-gradient-to-br from-card to-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Daily Mood Tracker
            </CardTitle>
            <CardDescription>
              Your mood patterns throughout the week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Area type="monotone" dataKey="mood" stroke="#DFA8D8" fill="#DFA8D8" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-soft transition-all duration-300 cursor-pointer bg-gradient-to-br from-primary-soft/50 to-primary-soft/20 border-primary/10">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mx-auto shadow-soft">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">AI Support</h3>
                <p className="text-sm text-muted-foreground">Get instant help and coping strategies</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300 cursor-pointer bg-gradient-to-br from-success-soft/50 to-success-soft/20 border-success/10">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-success-soft rounded-xl flex items-center justify-center mx-auto shadow-soft">
                <Calendar className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">Book Session</h3>
                <p className="text-sm text-muted-foreground">Schedule with a counselor</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300 cursor-pointer bg-gradient-to-br from-accent-soft/50 to-accent-soft/20 border-accent/10">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-accent-soft rounded-xl flex items-center justify-center mx-auto shadow-soft">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Peer Support</h3>
                <p className="text-sm text-muted-foreground">Connect with fellow students</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-soft transition-all duration-300 cursor-pointer bg-gradient-to-br from-warning-soft/50 to-warning-soft/20 border-warning/10">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-warning-soft rounded-xl flex items-center justify-center mx-auto shadow-soft">
                <BookOpen className="h-6 w-6 text-warning" />
              </div>
              <div>
                <h3 className="font-semibold">Resources</h3>
                <p className="text-sm text-muted-foreground">Educational content & guides</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Your recent interactions and progress on the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
                  <div className="flex-shrink-0">
                    {activity.status === "completed" ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <Clock className="h-5 w-5 text-warning" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                  <Badge variant={activity.status === "completed" ? "default" : "secondary"}>
                    {activity.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Reminders */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Reminders</CardTitle>
            <CardDescription>
              Don't forget these important activities for your mental wellness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Monthly Wellness Check</p>
                    <p className="text-sm text-muted-foreground">Complete your screening forms</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Complete</Button>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium">Self-Care Activity</p>
                    <p className="text-sm text-muted-foreground">Take 10 minutes for mindfulness</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Start</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;