import { useState } from "react";
import { Search, Filter, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import PetCard from "@/components/PetCard";
import Header from "@/components/Header";

// Extended mock data for browsing
const allPets = [
  {
    id: "1",
    name: "Bella",
    type: "Dog",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "Female",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
    description: "Bella is a gentle and loving Golden Retriever who adores children and other pets. She's house-trained and knows basic commands.",
    isUrgent: false
  },
  {
    id: "2", 
    name: "Whiskers",
    type: "Cat",
    breed: "Maine Coon",
    age: "2 years",
    gender: "Male",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    description: "Whiskers is a majestic Maine Coon with a playful personality. He loves to chase toys and curl up for cuddles.",
    isUrgent: true
  },
  {
    id: "3",
    name: "Charlie",
    type: "Dog", 
    breed: "Labrador Mix",
    age: "5 years",
    gender: "Male",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    description: "Charlie is an energetic Lab mix who loves outdoor adventures. He's great with kids and would make an excellent hiking companion.",
    isUrgent: false
  },
  {
    id: "4",
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: "1 year",
    gender: "Female",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop",
    description: "Luna is a playful Siamese kitten with striking blue eyes. She's very social and loves attention.",
    isUrgent: false
  },
  {
    id: "5",
    name: "Max",
    type: "Dog",
    breed: "German Shepherd",
    age: "4 years",
    gender: "Male",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop",
    description: "Max is a loyal German Shepherd who needs an experienced owner. He's protective and intelligent.",
    isUrgent: true
  },
  {
    id: "6",
    name: "Milo",
    type: "Cat",
    breed: "Orange Tabby",
    age: "3 years",
    gender: "Male",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop",
    description: "Milo is a friendly orange tabby who gets along with everyone. He's calm and perfect for families.",
    isUrgent: false
  }
];

const BrowsePets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [filteredPets, setFilteredPets] = useState(allPets);

  const handleFilter = () => {
    let filtered = allPets.filter(pet => {
      const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === "all" || pet.type.toLowerCase() === selectedType.toLowerCase();
      const matchesLocation = selectedLocation === "all" || pet.location.includes(selectedLocation);
      
      return matchesSearch && matchesType && matchesLocation;
    });
    setFilteredPets(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Find Your Perfect Companion</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our loving pets waiting for their forever homes. Use the filters below to find your ideal match.
            </p>
          </div>

          {/* Filter Section */}
          <div className="bg-card rounded-lg p-6 mb-8 shadow-sm border">
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or breed..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Pet Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="dog">Dogs</SelectItem>
                  <SelectItem value="cat">Cats</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="San Francisco">San Francisco</SelectItem>
                  <SelectItem value="Portland">Portland</SelectItem>
                  <SelectItem value="Seattle">Seattle</SelectItem>
                  <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                </SelectContent>
              </Select>

              <Button onClick={handleFilter} className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Showing {filteredPets.length} pets in your search area</span>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-foreground">Available Pets</h2>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                  Urgent
                </Badge>
                <span className="text-sm text-muted-foreground">= Needs immediate attention</span>
              </div>
            </div>
          </div>

          {/* Pet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} {...pet} />
            ))}
          </div>

          {filteredPets.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No pets found matching your criteria.</p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
                setSelectedLocation("all");
                setFilteredPets(allPets);
              }} className="mt-4">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BrowsePets;