import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AiChatSection from "@/components/AiChatSection";
import BookingSection from "@/components/BookingSection";
import ResourcesSection from "@/components/ResourcesSection";
import CommunitySection from "@/components/CommunitySection";
import AdminDashboard from "@/components/AdminDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AiChatSection />
        <BookingSection />
        <ResourcesSection />
        <CommunitySection />
        <AdminDashboard />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MW</span>
                </div>
                <span className="font-bold text-foreground">MindWell</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Supporting student mental health with compassionate, evidence-based digital solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>AI Support Chat</div>
                <div>Counseling Sessions</div>
                <div>Resource Library</div>
                <div>Peer Community</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Crisis Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>24/7 Crisis Hotline</div>
                <div>Emergency Contacts</div>
                <div>Campus Counseling</div>
                <div>National Resources</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Privacy</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>HIPAA Compliant</div>
                <div>Anonymous Support</div>
                <div>Data Protection</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 MindWell Student Mental Health Platform. All rights reserved.</p>
            <p className="mt-2">If you're in crisis, please contact emergency services or call the national suicide prevention lifeline.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
