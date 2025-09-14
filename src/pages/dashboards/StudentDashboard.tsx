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
  CheckCircle
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

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
          <Card className="bg-gradient-to-br from-primary-soft to-primary-soft/50">
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

          <Card className="bg-gradient-to-br from-success-soft to-success-soft/50">
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

          <Card className="bg-gradient-to-br from-accent-soft to-accent-soft/50">
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

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center mx-auto">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">AI Support</h3>
                <p className="text-sm text-muted-foreground">Get instant help and coping strategies</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-success-soft rounded-lg flex items-center justify-center mx-auto">
                <Calendar className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="font-semibold">Book Session</h3>
                <p className="text-sm text-muted-foreground">Schedule with a counselor</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-accent-soft rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold">Peer Support</h3>
                <p className="text-sm text-muted-foreground">Connect with fellow students</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-warning-soft rounded-lg flex items-center justify-center mx-auto">
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