import { Button } from "@/components/ui/button";
import { Heart, Search } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Find Your Perfect
              <span className="block text-primary-glow">Furry Friend</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Connect with loving pets in your area who need forever homes. 
              Every adoption creates space for another rescue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Search className="h-5 w-5 mr-2" />
                Browse Pets
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Heart className="h-5 w-5 mr-2" />
                List a Pet
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-primary-foreground/80">
              <div className="text-center">
                <div className="text-2xl font-bold">2.5K+</div>
                <div className="text-sm">Pets Adopted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1.2K+</div>
                <div className="text-sm">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Active Listings</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card-hover">
              <img 
                src={heroImage} 
                alt="Happy pets in a loving home"
                className="w-full h-[500px] object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-card animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Luna adopted!</div>
                  <div className="text-sm text-muted-foreground">Just found her forever home</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;