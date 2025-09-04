import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  MessageSquare, 
  Heart, 
  Shield, 
  Plus,
  TrendingUp,
  Clock,
  Star,
  Flag
} from "lucide-react";

const CommunitySection = () => {
  const [selectedTopic, setSelectedTopic] = useState("all");

  const topics = [
    { id: "all", name: "All Topics", count: 156 },
    { id: "anxiety", name: "Anxiety Support", count: 42 },
    { id: "depression", name: "Depression", count: 38 },
    { id: "academic", name: "Academic Stress", count: 28 },
    { id: "relationships", name: "Relationships", count: 24 },
    { id: "sleep", name: "Sleep Issues", count: 16 }
  ];

  const posts = [
    {
      id: 1,
      title: "Feeling overwhelmed with finals - anyone else?",
      author: "StudentHelper23",
      topic: "academic",
      replies: 14,
      likes: 28,
      timeAgo: "2 hours ago",
      isPopular: true,
      preview: "I'm having trouble managing my anxiety around final exams. Would love to hear how others are coping...",
      tags: ["finals", "anxiety", "study-tips"]
    },
    {
      id: 2,
      title: "Small wins thread - share your daily victories!",
      author: "PositiveVibes",
      topic: "general",
      replies: 31,
      likes: 67,
      timeAgo: "4 hours ago",
      isPopular: true,
      preview: "Let's celebrate the small things that made us smile today. I'll start - I actually got out of bed before 10am!",
      tags: ["positivity", "daily-wins", "motivation"]
    },
    {
      id: 3,
      title: "Meditation resources for beginners?",
      author: "MindfulStudent",
      topic: "anxiety",
      replies: 8,
      likes: 15,
      timeAgo: "6 hours ago",
      isPopular: false,
      preview: "New to meditation and looking for good apps or techniques specifically for students...",
      tags: ["meditation", "beginners", "resources"]
    },
    {
      id: 4,
      title: "How to talk to parents about mental health",
      author: "ConcernedFreshman",
      topic: "relationships",
      replies: 22,
      likes: 34,
      timeAgo: "1 day ago",
      isPopular: true,
      preview: "My parents don't really understand mental health issues. Has anyone successfully had this conversation?",
      tags: ["family", "communication", "support"]
    }
  ];

  const moderators = [
    {
      name: "Dr. Sarah M.",
      role: "Licensed Counselor",
      specialization: "Anxiety & Depression",
      online: true
    },
    {
      name: "Alex Chen",
      role: "Peer Volunteer",
      specialization: "Academic Stress",
      online: true
    },
    {
      name: "Jordan K.",
      role: "Peer Volunteer", 
      specialization: "LGBTQ+ Support",
      online: false
    }
  ];

  const filteredPosts = selectedTopic === "all" 
    ? posts 
    : posts.filter(post => post.topic === selectedTopic);

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Peer Support Community
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Connect with Fellow Students
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our moderated peer support community where students share experiences, 
            offer support, and learn from each other in a safe environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-success" />
                  <span>Moderated 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>Be kind & supportive</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Flag className="w-4 h-4 text-warning" />
                  <span>Report inappropriate content</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-accent" />
                  <span>Respect anonymity</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg">Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {topics.map((topic) => (
                  <Button
                    key={topic.id}
                    variant={selectedTopic === topic.id ? "default" : "ghost"}
                    className="w-full justify-between"
                    onClick={() => setSelectedTopic(topic.id)}
                  >
                    <span>{topic.name}</span>
                    <Badge variant="secondary" className="ml-2">
                      {topic.count}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg">Online Moderators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {moderators.map((mod, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {mod.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-card ${
                        mod.online ? 'bg-success' : 'bg-muted'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground truncate">
                        {mod.name}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {mod.specialization}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">
                Recent Discussions
              </h3>
              <Button className="bg-primary hover:bg-primary-hover">
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="shadow-gentle hover:shadow-elevated transition-spring cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {post.author.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-foreground">{post.author}</div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.timeAgo}
                          </div>
                        </div>
                      </div>
                      {post.isPopular && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>

                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-muted-foreground mb-4">
                      {post.preview}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {post.replies} replies
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes} likes
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Join Discussion
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Community Stats */}
            <Card className="shadow-gentle bg-gradient-wellness text-white">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold">1,247</div>
                    <div className="text-sm opacity-90">Active Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">3,891</div>
                    <div className="text-sm opacity-90">Helpful Posts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-sm opacity-90">Positive Feedback</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;