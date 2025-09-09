import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar, User } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface PetCardProps {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: string;
  gender: string;
  location: string;
  image: string;
  description: string;
  isUrgent?: boolean;
}

const PetCard = ({ 
  name, 
  type, 
  breed, 
  age, 
  gender, 
  location, 
  image, 
  description,
  isUrgent = false 
}: PetCardProps) => {
  return (
    <Card className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={`${name} - ${breed}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
        </button>
        {isUrgent && (
          <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
            Urgent
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          <Badge variant="secondary" className="text-xs">
            {type}
          </Badge>
        </div>
        
        <p className="text-muted-foreground text-sm mb-3">{breed}</p>
        
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{age}</span>
            <span>•</span>
            <User className="h-4 w-4" />
            <span>{gender}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-sm text-foreground mt-3 line-clamp-2">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex space-x-2">
        <Button className="flex-1" size="sm">
          Contact Owner
        </Button>
        <Button variant="outline" size="sm">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;