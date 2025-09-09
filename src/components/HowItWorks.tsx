import { Search, Heart, MessageCircle, Home } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Pets",
    description: "Search through hundreds of loving pets in your area using our easy filters."
  },
  {
    icon: Heart,
    title: "Find Your Match",
    description: "Discover pets that fit your lifestyle, living situation, and preferences."
  },
  {
    icon: MessageCircle,
    title: "Connect",
    description: "Chat directly with pet owners to learn more and ask questions."
  },
  {
    icon: Home,
    title: "Adopt",
    description: "Complete the adoption process and welcome your new family member home."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding your perfect pet companion is just a few steps away. Our platform makes the adoption process simple and secure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;