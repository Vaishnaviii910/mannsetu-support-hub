import { useState } from "react";
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
    { title: "Mental Health Checkup", url: "/student/mental-health-checkup", icon: Brain },
    { title: "AI Chatbot", url: "/student/chatbot", icon: MessageCircle },
    { title: "Book Session", url: "/student/book-session", icon: Calendar },
    { title: "Peer Support", url: "/student/peer-support", icon: Users },
    { title: "Resources Hub", url: "/student/resources", icon: BookOpen },
  ];

  const [selectedMood, setSelectedMood] = useState<number>(7);
  const [todaysFocus, setTodaysFocus] = useState<string>("Practice mindfulness for 10 minutes");
  
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

  const moodData = [
    { day: "Mon", mood: 7 },
    { day: "Tue", mood: 6 },
    { day: "Wed", mood: 8 },
    { day: "Thu", mood: 7 },
    { day: "Fri", mood: 9 },
    { day: "Sat", mood: 8 },
    { day: "Sun", mood: selectedMood },
  ];

  const moodOptions = [
    { value: 1, label: "Very Sad", color: "bg-destructive", emoji: "😢" },
    { value: 2, label: "Sad", color: "bg-destructive/70", emoji: "😟" },
    { value: 3, label: "Down", color: "bg-warning", emoji: "😕" },
    { value: 4, label: "Okay", color: "bg-warning/70", emoji: "😐" },
    { value: 5, label: "Neutral", color: "bg-muted", emoji: "😶" },
    { value: 6, label: "Good", color: "bg-success/70", emoji: "🙂" },
    { value: 7, label: "Happy", color: "bg-success", emoji: "😊" },
    { value: 8, label: "Great", color: "bg-primary/70", emoji: "😄" },
    { value: 9, label: "Excellent", color: "bg-primary", emoji: "😁" },
    { value: 10, label: "Amazing", color: "bg-accent", emoji: "🤩" },
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

        {/* Daily Mood Tracker */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-gradient-to-br from-card to-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Daily Mood Tracker
              </CardTitle>
              <CardDescription>
                Track your daily mood and see weekly patterns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">How are you feeling today?</h4>
                <div className="grid grid-cols-5 gap-2">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.value}
                      onClick={() => setSelectedMood(mood.value)}
                      className={`p-3 rounded-lg border text-center transition-all hover:shadow-soft ${
                        selectedMood === mood.value 
                          ? `${mood.color} border-current shadow-soft scale-105` 
                          : 'border-border hover:border-border/80'
                      }`}
                    >
                      <div className="text-2xl mb-1">{mood.emoji}</div>
                      <div className="text-xs font-medium">{mood.value}</div>
                    </button>
                  ))}
                </div>
                <div className="text-center mt-2">
                  <Badge variant="outline">
                    Today's Mood: {moodOptions.find(m => m.value === selectedMood)?.label}
                  </Badge>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" domain={[1, 10]} />
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

          <Card className="bg-gradient-to-br from-accent-soft/50 to-accent-soft/20 border-accent/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                Today's Focus
              </CardTitle>
              <CardDescription>
                Your wellness goal for today
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-accent-soft/30 border border-accent/20">
                <p className="font-medium text-accent">{todaysFocus}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Quick Actions</h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Activity className="h-4 w-4 mr-2" />
                    Log mood check-in
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Brain className="h-4 w-4 mr-2" />
                    Take mental health checkup
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Practice self-care
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium">Update today's focus:</label>
                <input
                  type="text"
                  value={todaysFocus}
                  onChange={(e) => setTodaysFocus(e.target.value)}
                  className="w-full mt-1 p-2 text-sm border rounded-md"
                  placeholder="Set your wellness goal..."
                />
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