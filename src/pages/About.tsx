import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Users, Shield, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">PawMatch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe every pet deserves a loving home, and every family deserves the perfect companion. 
            PawMatch connects hearts and paws to create lifelong bonds.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
              To reduce pet homelessness by creating an easy, safe, and transparent platform where 
              pet owners can rehome their beloved companions and families can find their perfect match. 
              Every successful adoption through PawMatch means one less pet in need and one more family complete.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Compassion</h3>
              <p className="text-muted-foreground">
                Every pet deserves love and care, regardless of age, breed, or background.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">
                Building connections between pet lovers in local communities.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Safety</h3>
              <p className="text-muted-foreground">
                Ensuring safe and responsible pet adoptions through verification.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Providing the best possible experience for both pets and families.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Making a Difference</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-muted-foreground">Pets Rehomed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
                <div className="text-muted-foreground">Happy Families</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Cities Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p className="mb-4">
                PawMatch was founded in 2023 by a team of pet lovers who experienced firsthand 
                the challenges of pet rehoming. When our founder Sarah had to rehome her beloved 
                Golden Retriever due to a cross-country move, she struggled to find a platform 
                that prioritized both pet welfare and owner peace of mind.
              </p>
              <p className="mb-4">
                Traditional pet adoption sites focused primarily on shelter animals, leaving 
                individual pet owners with limited options. Social media groups were unreliable, 
                and classified ads felt impersonal and risky. There had to be a better way.
              </p>
              <p>
                Today, PawMatch serves thousands of pets and families across the country, 
                providing a safe, reliable platform for responsible pet rehoming. Every success 
                story reminds us why we started this journey – because every pet deserves a 
                loving home, and every family deserves to find their perfect companion.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;