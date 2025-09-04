import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  MessageCircle, 
  Calendar,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Filter
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Active Users",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "AI Chat Sessions",
      value: "3,891",
      change: "+18%",
      trend: "up", 
      icon: MessageCircle,
      color: "text-accent"
    },
    {
      title: "Counseling Sessions",
      value: "156",
      change: "+8%",
      trend: "up",
      icon: Calendar,
      color: "text-success"
    },
    {
      title: "Crisis Interventions",
      value: "23",
      change: "-15%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-warning"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "high-risk",
      message: "Student flagged for crisis intervention keywords",
      timestamp: "5 minutes ago",
      status: "pending"
    },
    {
      id: 2,
      type: "system",
      message: "AI chat system response time increased",
      timestamp: "2 hours ago",
      status: "resolved"
    },
    {
      id: 3,
      type: "counselor",
      message: "Dr. Smith requested additional resources",
      timestamp: "4 hours ago",
      status: "in-progress"
    }
  ];

  const trendingTopics = [
    { topic: "Exam Anxiety", mentions: 145, change: "+23%" },
    { topic: "Sleep Issues", mentions: 89, change: "+15%" },
    { topic: "Academic Pressure", mentions: 76, change: "+8%" },
    { topic: "Social Isolation", mentions: 54, change: "-5%" },
    { topic: "Financial Stress", mentions: 43, change: "+12%" }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case "high-risk": return "border-destructive bg-destructive/5";
      case "system": return "border-warning bg-warning/5";
      case "counselor": return "border-primary bg-primary/5";
      default: return "border-muted bg-muted/5";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-warning text-warning-foreground";
      case "resolved": return "bg-success text-success-foreground";
      case "in-progress": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            Administrative Dashboard
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Mental Health Analytics & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Anonymous data analytics to help administrators recognize trends, 
            plan interventions, and improve mental health support services.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
            return (
              <Card key={index} className="shadow-gentle">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}>
                      <TrendIcon className="w-4 h-4" />
                      {stat.change}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.title}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Alerts */}
          <div className="lg:col-span-2">
            <Card className="shadow-elevated">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Recent Alerts & Notifications</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="font-medium text-foreground mb-1">
                          {alert.message}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {alert.timestamp}
                        </div>
                      </div>
                      <Badge className={getStatusColor(alert.status)}>
                        {alert.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm">
                        Take Action
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Usage Trends Chart Placeholder */}
            <Card className="shadow-gentle mt-6">
              <CardHeader>
                <CardTitle className="text-xl">Service Usage Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-calm rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-primary mx-auto mb-3" />
                    <div className="text-lg font-semibold text-foreground mb-2">Interactive Charts</div>
                    <div className="text-sm text-muted-foreground">
                      Real-time usage analytics and trend visualization
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg">Trending Mental Health Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-smooth">
                    <div className="flex-1">
                      <div className="font-medium text-foreground text-sm">
                        {topic.topic}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {topic.mentions} mentions
                      </div>
                    </div>
                    <div className={`text-xs font-medium ${
                      topic.change.startsWith("+") ? "text-success" : "text-destructive"
                    }`}>
                      {topic.change}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg">System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">AI Response Time</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium">1.2s avg</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Booking System</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Community Forum</span>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    <span className="text-sm font-medium">High Load</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Crisis Detection</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm font-medium">Active</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-gentle bg-primary/5 border-primary">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Privacy Notice</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  All data is anonymized and aggregated. Individual user information is never displayed or stored in analytics.
                </p>
                <Button variant="outline" size="sm" className="border-primary text-primary">
                  Privacy Policy
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;