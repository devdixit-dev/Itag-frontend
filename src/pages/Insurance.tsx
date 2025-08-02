import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Heart, 
  Car, 
  Home, 
  Plane, 
  Briefcase,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Star,
  Phone
} from "lucide-react";

const Insurance = () => {
  const insuranceTypes = [
    {
      id: "life",
      icon: Heart,
      title: "Life Insurance",
      description: "Protect your family's financial future with comprehensive life coverage",
      coverage: "₹50 Lakh - ₹5 Crore",
      premium: "₹500/month onwards",
      features: [
        "Term life insurance",
        "Whole life insurance",
        "ULIP (Unit Linked Insurance Plans)",
        "Endowment policies",
        "Money-back policies"
      ],
      benefits: [
        "Financial security for family",
        "Tax benefits under Section 80C",
        "Maturity benefits",
        "Loan against policy"
      ],
      badge: "Essential",
      color: "primary"
    },
    {
      id: "health",
      icon: Shield,
      title: "Health Insurance",
      description: "Comprehensive healthcare coverage for you and your family",
      coverage: "₹3 Lakh - ₹1 Crore",
      premium: "₹300/month onwards",
      features: [
        "Individual health plans",
        "Family floater plans",
        "Senior citizen plans",
        "Critical illness cover",
        "Maternity coverage"
      ],
      benefits: [
        "Cashless treatment",
        "Pre & post hospitalization",
        "Day care procedures",
        "Tax benefits under 80D"
      ],
      badge: "Most Popular",
      color: "accent"
    },
    {
      id: "motor",
      icon: Car,
      title: "Motor Insurance",
      description: "Complete protection for your vehicles against damages and theft",
      coverage: "As per vehicle value",
      premium: "₹200/month onwards",
      features: [
        "Two-wheeler insurance",
        "Four-wheeler insurance",
        "Commercial vehicle insurance",
        "Comprehensive coverage",
        "Third-party liability"
      ],
      benefits: [
        "Own damage coverage",
        "Third-party liability",
        "Personal accident cover",
        "Zero depreciation add-on"
      ],
      badge: "Mandatory",
      color: "secondary"
    },
    {
      id: "home",
      icon: Home,
      title: "Home Insurance",
      description: "Protect your home and belongings from unforeseen damages",
      coverage: "₹5 Lakh - ₹2 Crore",
      premium: "₹150/month onwards",
      features: [
        "Structure coverage",
        "Contents insurance",
        "Personal belongings",
        "Temporary accommodation",
        "Loss of rent"
      ],
      benefits: [
        "Fire and allied perils",
        "Burglary and theft",
        "Natural disasters",
        "Public liability"
      ],
      badge: "Recommended",
      color: "primary"
    },
    {
      id: "travel",
      icon: Plane,
      title: "Travel Insurance",
      description: "Travel worry-free with comprehensive travel protection",
      coverage: "₹1 Lakh - ₹50 Lakh",
      premium: "₹50/day onwards",
      features: [
        "Domestic travel insurance",
        "International travel insurance",
        "Student travel plans",
        "Family travel plans",
        "Annual multi-trip plans"
      ],
      benefits: [
        "Medical emergency coverage",
        "Trip cancellation",
        "Baggage loss",
        "Flight delay compensation"
      ],
      badge: "Travel Safe",
      color: "accent"
    },
    {
      id: "business",
      icon: Briefcase,
      title: "Business Insurance",
      description: "Comprehensive protection for your business operations",
      coverage: "Customized",
      premium: "₹1000/month onwards",
      features: [
        "Professional indemnity",
        "Public liability",
        "Product liability",
        "Directors & officers",
        "Cyber liability"
      ],
      benefits: [
        "Business continuity",
        "Legal protection",
        "Employee coverage",
        "Asset protection"
      ],
      badge: "Business Shield",
      color: "secondary"
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Expert Guidance",
      description: "Certified insurance advisors to help you choose the right coverage"
    },
    {
      icon: Clock,
      title: "Quick Claims",
      description: "Fast and hassle-free claim settlement process"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your insurance needs"
    },
    {
      icon: Shield,
      title: "Trusted Partners",
      description: "Partnerships with top-rated insurance companies in India"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title mb-6">Insurance Solutions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive insurance coverage to protect what matters most. 
              From life and health to motor and travel - we've got you covered.
            </p>
            <Button size="lg" className="btn-finance">
              Get Insurance Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Types Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Insurance Products</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from our wide range of insurance products designed to protect every aspect of your life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance) => (
              <Card key={insurance.id} className="card-finance hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <insurance.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="absolute -top-2 -right-2">
                      {insurance.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{insurance.title}</CardTitle>
                  <CardDescription className="text-base">{insurance.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center space-y-2">
                    <div>
                      <div className="text-sm text-muted-foreground">Coverage Amount</div>
                      <div className="text-lg font-semibold text-primary">{insurance.coverage}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Premium Starting</div>
                      <div className="text-lg font-semibold text-accent">{insurance.premium}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Coverage Options</h4>
                    <div className="space-y-2">
                      {insurance.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                      <div className="text-sm text-muted-foreground">+{insurance.features.length - 3} more options</div>
                    </div>
                  </div>
                  
                  <Button className="w-full btn-finance group-hover:scale-105 transition-transform">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose ITagFin for Insurance?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We make insurance simple, accessible, and reliable for everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Simple Claims Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Filing a claim is easy with our streamlined process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Report Claim", desc: "Notify us about the incident immediately" },
              { step: 2, title: "Submit Documents", desc: "Upload required documents online" },
              { step: 3, title: "Claim Assessment", desc: "Our experts review your claim" },
              { step: 4, title: "Settlement", desc: "Receive your claim amount quickly" }
            ].map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get Protected Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don't wait for tomorrow. Secure your family's future with the right insurance coverage today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Shield className="w-5 h-5 mr-2" />
              Get Insurance Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Talk to Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insurance;