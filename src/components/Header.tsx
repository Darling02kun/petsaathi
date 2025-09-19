import { Heart, PawPrintIcon, PlusCircle, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <PawPrintIcon className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">PetSaathi</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/browse" className="text-foreground hover:text-primary transition-colors">
            Browse Pets
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Success Stories
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <a href="/list">
              <PlusCircle className="h-4 w-4 mr-2" />
              List Pet
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="/auth">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;