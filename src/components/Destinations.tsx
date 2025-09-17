import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Camera, TreePine, Waves, Mountain } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Netarhat",
    description: "Queen of Chotanagpur, famous for sunrise and sunset views",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    rating: 4.8,
    category: "Hill Station",
    highlights: ["Sunrise Point", "Dense Forests", "Cool Climate"],
    icon: Mountain
  },
  {
    id: 2,
    name: "Hundru Falls",
    description: "Spectacular 320 feet waterfall surrounded by dense forests",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500",
    rating: 4.6,
    category: "Waterfall",
    highlights: ["320ft Drop", "Trekking", "Photography"],
    icon: Waves
  },
  {
    id: 3,
    name: "Betla National Park",
    description: "Rich wildlife sanctuary with tigers, elephants and diverse flora",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=500",
    rating: 4.7,
    category: "Wildlife",
    highlights: ["Bengal Tigers", "Elephant Safari", "Bird Watching"],
    icon: TreePine
  },
  {
    id: 4,
    name: "Ranchi Hill",
    description: "Sacred hill with ancient temples and panoramic city views",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
    rating: 4.5,
    category: "Spiritual",
    highlights: ["Ancient Temples", "City Views", "Peaceful Trek"],
    icon: Mountain
  },
  {
    id: 5,
    name: "Deoghar",
    description: "Holy city with sacred Baidyanath temple and spiritual vibes",
    image: "https://images.unsplash.com/photo-1582632503963-0154a5c6e9d9?w=500",
    rating: 4.9,
    category: "Pilgrimage",
    highlights: ["Baidyanath Temple", "Spiritual Energy", "Religious Festivals"],
    icon: Mountain
  },
  {
    id: 6,
    name: "Hazaribagh",
    description: "Scenic town with beautiful lakes and wildlife sanctuary",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500",
    rating: 4.4,
    category: "Nature",
    highlights: ["Hazaribagh Lake", "Wildlife Sanctuary", "Rock Formations"],
    icon: Waves
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-background/80 backdrop-blur-sm">
            <MapPin className="w-4 h-4 mr-2" />
            Popular Destinations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Explore Nature's
            <span className="block text-primary">Hidden Gems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From misty hill stations to thundering waterfalls, discover the untamed beauty 
            that makes Jharkhand a paradise for nature lovers and adventure seekers.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-slide-up border-0 bg-background/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    <destination.icon className="w-3 h-3 mr-1" />
                    {destination.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-4 h-4 text-accent mr-1 fill-accent" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="p-0 h-auto hover:text-primary">
                    <MapPin className="w-4 h-4 mr-1" />
                    View Location
                  </Button>
                  <Button variant="nature" size="sm" className="group">
                    <Camera className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" className="group">
            View All Destinations
            <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;