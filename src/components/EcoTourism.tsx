import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Trees, Recycle, Sun, Droplets, Bird, Shield } from "lucide-react";

const ecoInitiatives = [
  {
    id: 1,
    title: "Sustainable Forest Treks",
    description: "Guided eco-friendly hiking trails with zero-waste principles and local guide employment",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
    icon: Trees,
    impact: "Protected 500+ acres",
    category: "Conservation"
  },
  {
    id: 2,
    title: "Community-Based Tourism",
    description: "Stay with tribal families, learn traditional crafts, and support local economies directly",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    icon: Shield,
    impact: "Supporting 200+ families",
    category: "Community"
  },
  {
    id: 3,
    title: "Wildlife Conservation Tours",
    description: "Responsible wildlife watching with conservation education and habitat protection funding",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=500",
    icon: Bird,
    impact: "Monitoring 15+ species",
    category: "Wildlife"
  },
  {
    id: 4,
    title: "Green Transportation",
    description: "Electric vehicles and bicycles for low-impact exploration of natural areas",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    icon: Leaf,
    impact: "60% carbon reduction",
    category: "Transport"
  }
];

const principles = [
  {
    icon: Leaf,
    title: "Leave No Trace",
    description: "Minimize environmental impact through responsible travel practices"
  },
  {
    icon: Recycle,
    title: "Waste Free",
    description: "Zero waste tourism with comprehensive recycling and composting"
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Solar-powered accommodations and sustainable infrastructure"
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Rainwater harvesting and responsible water usage in all facilities"
  }
];

const EcoTourism = () => {
  return (
    <section id="eco-tourism" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-primary/10 border-primary/20 text-primary">
            <Leaf className="w-4 h-4 mr-2" />
            Responsible Travel
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sustainable
            <span className="block text-primary">Eco-Tourism</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Jharkhand's natural beauty while contributing to conservation efforts 
            and supporting local communities through responsible tourism practices.
          </p>
        </div>

        {/* Eco Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <principle.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{principle.title}</h3>
              <p className="text-muted-foreground text-sm">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Eco Initiatives Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {ecoInitiatives.map((initiative, index) => (
            <Card
              key={initiative.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-slide-up border-primary/10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    <initiative.icon className="w-3 h-3 mr-1" />
                    {initiative.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-primary/90 text-primary-foreground border-primary">
                    {initiative.impact}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {initiative.description}
                </p>
                <Button variant="nature" size="sm" className="group">
                  <Leaf className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 p-8 rounded-2xl border border-primary/20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Our Conservation Impact</h3>
            <p className="text-muted-foreground">Together, we're making a difference for Jharkhand's environment</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">2,500+</div>
              <div className="text-muted-foreground text-sm">Acres Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">50+</div>
              <div className="text-muted-foreground text-sm">Species Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-tribal mb-1">300+</div>
              <div className="text-muted-foreground text-sm">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">75%</div>
              <div className="text-muted-foreground text-sm">Carbon Reduced</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Be Part of Sustainable Tourism
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Choose eco-friendly packages that protect Jharkhand's natural heritage 
            while creating meaningful experiences and supporting local communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="hero" className="group">
              <Trees className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Browse Eco Packages
            </Button>
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              <Shield className="w-5 h-5 mr-2" />
              Conservation Partnership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoTourism;