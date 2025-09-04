import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Play, 
  Headphones, 
  Download, 
  Search, 
  Filter,
  Globe,
  Clock,
  Heart,
  Brain,
  Moon,
  Zap
} from "lucide-react";

const ResourcesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Resources", icon: BookOpen },
    { id: "anxiety", name: "Anxiety", icon: Heart },
    { id: "depression", name: "Depression", icon: Brain },
    { id: "sleep", name: "Sleep", icon: Moon },
    { id: "stress", name: "Stress", icon: Zap }
  ];

  const resources = [
    {
      id: 1,
      title: "Deep Breathing for Anxiety",
      type: "video",
      duration: "8 min",
      category: "anxiety",
      language: "English",
      description: "Learn evidence-based breathing techniques to manage anxiety attacks and daily stress.",
      downloads: 1250,
      rating: 4.8
    },
    {
      id: 2,
      title: "Progressive Muscle Relaxation",
      type: "audio",
      duration: "15 min",
      category: "stress",
      language: "English",
      description: "Guided audio to help you release physical tension and achieve deep relaxation.",
      downloads: 980,
      rating: 4.9
    },
    {
      id: 3,
      title: "Sleep Hygiene Guide",
      type: "guide",
      duration: "Read 5 min",
      category: "sleep",
      language: "Multiple",
      description: "Comprehensive guide to improving sleep quality and establishing healthy sleep habits.",
      downloads: 2100,
      rating: 4.7
    },
    {
      id: 4,
      title: "Mindful Study Techniques",
      type: "video",
      duration: "12 min",
      category: "stress",
      language: "English",
      description: "Learn how to study more effectively while maintaining mental wellbeing.",
      downloads: 1850,
      rating: 4.8
    },
    {
      id: 5,
      title: "Understanding Depression",
      type: "guide",
      duration: "Read 10 min",
      category: "depression",
      language: "Multiple",
      description: "Educational resource about depression symptoms, causes, and treatment options.",
      downloads: 1650,
      rating: 4.6
    }
  ];

  const languages = ["English", "Spanish", "French", "Mandarin", "Arabic", "Hindi"];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return <Play className="w-4 h-4" />;
      case "audio": return <Headphones className="w-4 h-4" />;
      case "guide": return <BookOpen className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video": return "bg-primary text-primary-foreground";
      case "audio": return "bg-accent text-accent-foreground";
      case "guide": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Psychoeducational Resources
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Mental Wellness Resource Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access evidence-based videos, audio guides, and educational materials 
            in multiple languages to support your mental health journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <Card className="shadow-gentle">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search resources, topics, or techniques..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className="whitespace-nowrap"
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {category.name}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="shadow-gentle hover:shadow-elevated transition-spring">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(resource.type)}`}>
                          {getTypeIcon(resource.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {resource.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {resource.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Globe className="w-3 h-3" />
                              {resource.language}
                            </div>
                            <div className="flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              {resource.downloads} downloads
                            </div>
                            <div className="flex items-center gap-1">
                              ⭐ {resource.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="shrink-0">
                        <Play className="w-4 h-4 mr-2" />
                        Access
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <Card className="shadow-gentle">
                <CardContent className="p-12 text-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No resources found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or category filters to find relevant resources.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg">Popular This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {resources.slice(0, 3).map((resource) => (
                  <div key={resource.id} className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-smooth cursor-pointer">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getTypeColor(resource.type)}`}>
                      {getTypeIcon(resource.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-foreground truncate">
                        {resource.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {resource.duration} • ⭐ {resource.rating}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg">Available Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <Badge key={language} variant="secondary" className="justify-center">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-gentle bg-gradient-wellness text-white">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <h4 className="font-semibold mb-2">Daily Wellness Tip</h4>
                <p className="text-sm opacity-90 mb-4">
                  Take 5 minutes today to practice deep breathing. Even short mindfulness breaks can significantly reduce stress levels.
                </p>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;