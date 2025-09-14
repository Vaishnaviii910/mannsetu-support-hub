import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Search, 
  Filter,
  Download,
  BarChart3,
  UserCheck,
  TrendingUp,
  Settings,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Brain,
  Heart,
  GraduationCap,
  MapPin
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Students = () => {
  const sidebarItems = [
    { title: "Dashboard", url: "/institute-dashboard", icon: BarChart3 },
    { title: "Counselor Management", url: "/institute/counselors", icon: UserCheck },
    { title: "Analytics", url: "/institute/analytics", icon: TrendingUp },
    { title: "Students", url: "/institute/students", icon: Users, isActive: true },
    { title: "Settings", url: "/institute/settings", icon: Settings },
  ];

  const studentOverview = {
    totalStudents: 2847,
    activeInSupport: 734,
    screeningCompleted: 2421,
    highRiskStudents: 45,
    moderateRisk: 189,
    lowRisk: 2613
  };

  const departmentStats = [
    {
      name: "Engineering",
      totalStudents: 1234,
      inSupport: 287,
      avgWellness: 68,
      riskDistribution: { high: 18, medium: 89, low: 1127 }
    },
    {
      name: "Medical Sciences", 
      totalStudents: 567,
      inSupport: 176,
      avgWellness: 65,
      riskDistribution: { high: 12, medium: 45, low: 510 }
    },
    {
      name: "Liberal Arts",
      totalStudents: 423,
      inSupport: 98,
      avgWellness: 75,
      riskDistribution: { high: 6, medium: 28, low: 389 }
    },
    {
      name: "Business",
      totalStudents: 389,
      inSupport: 89,
      avgWellness: 72,
      riskDistribution: { high: 5, medium: 18, low: 366 }
    },
    {
      name: "Sciences",
      totalStudents: 234,
      inSupport: 84,
      avgWellness: 70,
      riskDistribution: { high: 4, medium: 9, low: 221 }
    }
  ];

  const yearWiseData = [
    { year: "1st Year", students: 756, support: 198, wellness: 69 },
    { year: "2nd Year", students: 698, support: 167, wellness: 72 },
    { year: "3rd Year", students: 734, support: 189, wellness: 68 },
    { year: "4th Year", students: 659, support: 180, wellness: 74 }
  ];

  const recentConcerns = [
    {
      category: "Academic Stress",
      count: 234,
      trend: "up",
      description: "Exam-related anxiety and performance pressure"
    },
    {
      category: "Social Adjustment",
      count: 156,
      trend: "stable", 
      description: "Difficulty with peer relationships and social integration"
    },
    {
      category: "Financial Stress",
      count: 89,
      trend: "up",
      description: "Economic pressures affecting mental health"
    },
    {
      category: "Career Anxiety",
      count: 134,
      trend: "down",
      description: "Future planning and job market concerns"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-destructive" />;
      case "down": return <TrendingUp className="h-4 w-4 text-success rotate-180" />;
      case "stable": return <CheckCircle className="h-4 w-4 text-warning" />;
      default: return <CheckCircle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <DashboardLayout sidebarItems={sidebarItems} userType="institute" userName="IIT Delhi">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                Student Mental Health Overview
              </h1>
              <p className="text-muted-foreground">
                Comprehensive view of student mental health status and support utilization
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by department, year, or support status..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentOverview.totalStudents.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Enrolled this semester</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Heart className="h-4 w-4 text-success" />
                In Support Program
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentOverview.activeInSupport}</div>
              <p className="text-xs text-success">
                {Math.round((studentOverview.activeInSupport / studentOverview.totalStudents) * 100)}% utilization
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Brain className="h-4 w-4 text-accent" />
                Screening Complete
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentOverview.screeningCompleted}</div>
              <p className="text-xs text-muted-foreground">
                {Math.round((studentOverview.screeningCompleted / studentOverview.totalStudents) * 100)}% completion rate
              </p>
            </CardContent>
          </Card>

          <Card className="border-destructive/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                High Risk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{studentOverview.highRiskStudents}</div>
              <p className="text-xs text-destructive">Immediate attention required</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="departments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="departments">By Department</TabsTrigger>
            <TabsTrigger value="years">By Academic Year</TabsTrigger>
            <TabsTrigger value="concerns">Common Concerns</TabsTrigger>
            <TabsTrigger value="trends">Wellness Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="departments" className="space-y-6">
            <div className="grid gap-6">
              {departmentStats.map((dept) => (
                <Card key={dept.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        {dept.name} Department
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="outline">{dept.totalStudents} students</Badge>
                        <Badge variant="secondary">{dept.inSupport} in support</Badge>
                        <div className="flex items-center gap-1">
                          <span className="text-muted-foreground">Avg Wellness:</span>
                          <span className="font-semibold">{dept.avgWellness}%</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Support Utilization</h4>
                        <Progress 
                          value={(dept.inSupport / dept.totalStudents) * 100} 
                          className="h-3 mb-2"
                        />
                        <p className="text-sm text-muted-foreground">
                          {Math.round((dept.inSupport / dept.totalStudents) * 100)}% of students using support services
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Risk Distribution</h4>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-3 rounded bg-success-soft">
                            <div className="text-lg font-bold text-success">{dept.riskDistribution.low}</div>
                            <div className="text-xs text-muted-foreground">Low Risk</div>
                          </div>
                          <div className="p-3 rounded bg-warning-soft">
                            <div className="text-lg font-bold text-warning">{dept.riskDistribution.medium}</div>
                            <div className="text-xs text-muted-foreground">Medium</div>
                          </div>
                          <div className="p-3 rounded bg-destructive-soft">
                            <div className="text-lg font-bold text-destructive">{dept.riskDistribution.high}</div>
                            <div className="text-xs text-muted-foreground">High Risk</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="years" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {yearWiseData.map((year) => (
                <Card key={year.year}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-accent" />
                      {year.year}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{year.students}</div>
                        <div className="text-xs text-muted-foreground">Total Students</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success">{year.support}</div>
                        <div className="text-xs text-muted-foreground">In Support</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">{year.wellness}%</div>
                        <div className="text-xs text-muted-foreground">Avg Wellness</div>
                      </div>
                    </div>
                    <Progress 
                      value={(year.support / year.students) * 100}
                      className="h-2"
                    />
                    <p className="text-sm text-muted-foreground text-center">
                      {Math.round((year.support / year.students) * 100)}% utilization rate
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="concerns" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {recentConcerns.map((concern) => (
                <Card key={concern.category}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{concern.category}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{concern.count} cases</Badge>
                        {getTrendIcon(concern.trend)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{concern.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Trend: {concern.trend === 'up' ? 'Increasing' : concern.trend === 'down' ? 'Decreasing' : 'Stable'}
                      </span>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Wellness Score Trends</CardTitle>
                <CardDescription>
                  Track overall student mental wellness over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  Comprehensive wellness trend charts would be implemented here
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Items */}
        <Card className="border-warning/20 bg-warning-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning">
              <AlertTriangle className="h-5 w-5" />
              Recommended Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Engineering Department - High Stress Levels</p>
              <p className="text-sm text-muted-foreground">
                Consider implementing targeted stress management workshops during exam periods.
              </p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">1st Year Students - Support Outreach</p>
              <p className="text-sm text-muted-foreground">
                Lower utilization rate suggests need for better awareness programs for new students.
              </p>
            </div>
            <div className="p-3 rounded-lg border">
              <p className="font-medium">Financial Stress - Rising Concern</p>
              <p className="text-sm text-muted-foreground">
                Coordinate with financial aid office to address economic pressures affecting mental health.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Students;