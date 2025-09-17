import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/jharkhand-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-background/20 backdrop-blur-sm rounded-full border border-background/30">
            <MapPin className="w-4 h-4 mr-2 text-accent" />
            <span className="text-background font-medium">Discover India's Green Heart</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background leading-tight">
            Experience
            <span className="block bg-gradient-sunrise bg-clip-text text-transparent">
              Wild Jharkhand
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-3xl mx-auto">
            Immerse yourself in pristine forests, cascading waterfalls, and rich tribal culture. 
            Your eco-adventure awaits in India's most unspoiled destination.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button variant="hero" size="lg" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur-sm border-background/30 text-background hover:bg-background/30">
              <Calendar className="w-5 h-5" />
              Plan Your Trip
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-background/20">
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-background/80 text-sm">Tourist Spots</div>
            </div>
            <div className="text-center p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-background/20">
              <div className="text-3xl font-bold text-accent mb-1">12</div>
              <div className="text-background/80 text-sm">National Parks</div>
            </div>
            <div className="text-center p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-background/20">
              <div className="text-3xl font-bold text-accent mb-1">32</div>
              <div className="text-background/80 text-sm">Tribal Groups</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;