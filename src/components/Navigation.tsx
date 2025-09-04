import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Calendar, BookOpen, Users, BarChart3 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card shadow-gentle border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MindWell</h1>
              <p className="text-sm text-muted-foreground">Student Mental Health Support</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#ai-support" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <MessageCircle className="w-4 h-4" />
              AI Support
            </a>
            <a href="#booking" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <Calendar className="w-4 h-4" />
              Book Session
            </a>
            <a href="#resources" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <BookOpen className="w-4 h-4" />
              Resources
            </a>
            <a href="#community" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <Users className="w-4 h-4" />
              Community
            </a>
            <a href="#dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
              <BarChart3 className="w-4 h-4" />
              Dashboard
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover">
              Get Help Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;