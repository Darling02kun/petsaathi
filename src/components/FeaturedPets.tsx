import PetCard from "./PetCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock data - in a real app this would come from your database
const featuredPets = [
  {
    id: "1",
    name: "Daisy",
    type: "Dog",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Female",
    location: "Ghaziabad, UP",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    description: "Bella is a gentle and loving Golden Retriever who adores children and other pets. She's house-trained and knows basic commands.",
    isUrgent: false
  },
  {
    id: "2", 
    name: "Billu",
    type: "Cat",
    breed: "Maine Coon",
    age: "2 years",
    gender: "Male",
    location: "Shahdra, DL",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    description: "Whiskers is a majestic Maine Coon with a playful personality. He loves to chase toys and curl up for cuddles.",
    isUrgent: true
  },
  {
    id: "3",
    name: "Bhura",
    type: "Dog", 
    breed: "Labrador Mix",
    age: "5 years",
    gender: "Male",
    location: "Muradnagar, UP",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    description: "Charlie is an energetic Lab mix who loves outdoor adventures. He's great with kids and would make an excellent hiking companion.",
    isUrgent: false
  }
];

const FeaturedPets = () => {
  return (
    <section className="py-16 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Pets Looking for Love
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These special pets are ready to find their forever homes. Each one has a unique personality and so much love to give.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredPets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Pets
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;