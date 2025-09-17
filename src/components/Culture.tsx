import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Music, Palette, Calendar, Sparkles, Heart } from "lucide-react";

const culturalElements = [
  {
    id: 1,
    title: "Tribal Festivals",
    description: "Experience vibrant celebrations of Sohrai, Karma, and Tusu festivals with traditional dances",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=500",
    icon: Music,
    category: "Festivals",
    season: "Year Round"
  },
  {
    id: 2,
    title: "Traditional Arts",
    description: "Discover beautiful Paitkar paintings, Dokra metal craft, and intricate tribal artwork",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    icon: Palette,
    category: "Arts & Crafts",
    season: "Always Available"
  },
  {
    id: 3,
    title: "Folk Music & Dance",
    description: "Witness mesmerizing Chhau dance, Jhumair folk songs, and traditional drum beats",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500",
    icon: Music,
    category: "Performance",
    season: "Cultural Events"
  },
  {
    id: 4,
    title: "Tribal Communities",
    description: "Meet 32 diverse tribal groups including Santhal, Oraon, Munda, and Ho communities",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500",
    icon: Users,
    category: "Heritage",
    season: "Year Round"
  }
];

const Culture = () => {
  return (
    <section id="culture" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(var(--primary)) 10px, hsl(var(--primary)) 11px)`
             }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-tribal/10 border-tribal/20 text-tribal">
            <Heart className="w-4 h-4 mr-2" />
            Rich Heritage
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Living
            <span className="block bg-gradient-sunrise bg-clip-text text-transparent">
              Cultural Tapestry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in the vibrant traditions of Jharkhand's tribal communities, 
            where ancient customs blend seamlessly with contemporary expressions.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {culturalElements.map((element, index) => (
            <Card 
              key={element.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-up bg-card border-border/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-2/5 overflow-hidden">
                  <img
                    src={element.image}
                    alt={element.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-tribal/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <element.icon className="w-6 h-6 text-tribal-foreground" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="md:w-3/5 p-6 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-secondary/50">
                      {element.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {element.season}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {element.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {element.description}
                  </p>
                  
                  <Button variant="tribal" size="sm" className="self-start group">
                    <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Learn More
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Cultural Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-forest rounded-xl text-primary-foreground">
            <div className="text-3xl md:text-4xl font-bold mb-2">32</div>
            <div className="text-primary-foreground/80">Tribal Groups</div>
          </div>
          <div className="text-center p-6 bg-accent rounded-xl text-accent-foreground">
            <div className="text-3xl md:text-4xl font-bold mb-2">200+</div>
            <div className="text-accent-foreground/80">Folk Songs</div>
          </div>
          <div className="text-center p-6 bg-tribal rounded-xl text-tribal-foreground">
            <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
            <div className="text-tribal-foreground/80">Art Forms</div>
          </div>
          <div className="text-center p-6 bg-gradient-earth rounded-xl text-foreground">
            <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
            <div className="text-muted-foreground">Years Heritage</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-tribal/5 to-accent/5 p-8 rounded-2xl border border-border/50">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Experience Living Culture
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join cultural tours, participate in traditional festivals, and learn from 
            indigenous communities who have preserved their heritage for generations.
          </p>
          <Button variant="tribal" className="group">
            <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Book Cultural Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Culture;