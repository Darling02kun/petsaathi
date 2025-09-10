import { useState } from "react";
import { Upload, Camera, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";

const ListPet = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    size: "",
    location: "",
    description: "",
    vaccinated: false,
    spayed: false,
    trained: false,
    urgent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Pet listing submitted:", formData);
    alert("Pet listing submitted successfully! (Demo only)");
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">List Your Pet for Adoption</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Help your beloved pet find their perfect forever home. Fill out the details below to create a listing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Photo Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Pet Photos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">Upload pet photos</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add up to 5 high-quality photos. First photo will be the main image.
                  </p>
                  <Button type="button" variant="outline">
                    Choose Files
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Pet Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter pet's name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Pet Type *</Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select pet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="rabbit">Rabbit</SelectItem>
                        <SelectItem value="bird">Bird</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="breed">Breed</Label>
                    <Input
                      id="breed"
                      value={formData.breed}
                      onChange={(e) => handleInputChange("breed", e.target.value)}
                      placeholder="e.g., Golden Retriever, Mixed"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      placeholder="e.g., 2 years, 6 months"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="size">Size</Label>
                    <Select value={formData.size} onValueChange={(value) => handleInputChange("size", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (0-25 lbs)</SelectItem>
                        <SelectItem value="medium">Medium (25-60 lbs)</SelectItem>
                        <SelectItem value="large">Large (60-100 lbs)</SelectItem>
                        <SelectItem value="extra-large">Extra Large (100+ lbs)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="location">City, State *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="e.g., San Francisco, CA"
                  required
                />
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About Your Pet</CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Tell potential adopters about your pet's personality, habits, favorite activities, and ideal home environment..."
                  className="min-h-[120px]"
                  required
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Be detailed and honest. This helps potential adopters understand if your pet is a good match.
                </p>
              </CardContent>
            </Card>

            {/* Health & Training */}
            <Card>
              <CardHeader>
                <CardTitle>Health & Training Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="vaccinated"
                    checked={formData.vaccinated}
                    onCheckedChange={(checked) => handleInputChange("vaccinated", checked as boolean)}
                  />
                  <Label htmlFor="vaccinated">Up to date on vaccinations</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="spayed"
                    checked={formData.spayed}
                    onCheckedChange={(checked) => handleInputChange("spayed", checked as boolean)}
                  />
                  <Label htmlFor="spayed">Spayed/Neutered</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="trained"
                    checked={formData.trained}
                    onCheckedChange={(checked) => handleInputChange("trained", checked as boolean)}
                  />
                  <Label htmlFor="trained">House trained</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="urgent"
                    checked={formData.urgent}
                    onCheckedChange={(checked) => handleInputChange("urgent", checked as boolean)}
                  />
                  <Label htmlFor="urgent" className="text-destructive">Urgent - Needs immediate rehoming</Label>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6">
              <Button type="submit" size="lg" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                List My Pet for Adoption
              </Button>
              <Button type="button" variant="outline" size="lg">
                Save as Draft
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ListPet;