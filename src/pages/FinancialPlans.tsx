import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {Link} from 'react-router-dom';
import {
  Target,
  GraduationCap,
  Home,
  Car,
  Plane,
  Heart,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Calendar,
  Gem,
  School
} from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const FinancialPlans = () => {
  const plans = [
    {
      id: "retirement",
      icon: Target,
      title: "Retirement Planning",
      description: "Secure your golden years with strategic retirement planning",
      price: "₹50,000+",
      duration: "25-30 years",
      features: [
        "Retirement corpus calculation",
        "Tax-efficient investment strategies",
        "Inflation-adjusted planning",
        "Pension and EPF optimization",
        "Regular portfolio reviews"
      ],
      badge: "Most Popular",
      color: "primary"
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Child Education Planning",
      description: "Ensure your child's bright future with education planning",
      price: "₹25,000+",
      duration: "10-18 years",
      features: [
        "Education cost estimation",
        "Step-up SIP planning",
        "Education loan alternatives",
        "International education funding",
        "Milestone-based investments"
      ],
      badge: "Family Focused",
      color: "accent"
    },
    {
      id: "home",
      icon: Home,
      title: "Home Purchase Planning",
      description: "Turn your dream home into reality with smart planning",
      price: "₹75,000+",
      duration: "5-10 years",
      features: [
        "Down payment planning",
        "Home loan pre-approval",
        "EMI affordability analysis",
        "Property investment guidance",
        "Registration cost planning"
      ],
      badge: "Dream Home",
      color: "secondary"
    },
    {
      id: "car",
      icon: Car,
      title: "Vehicle Purchase Planning",
      description: "Drive your dream car with planned financing",
      price: "₹15,000+",
      duration: "2-5 years",
      features: [
        "Vehicle loan planning",
        "Down payment savings",
        "Insurance cost planning",
        "Maintenance fund creation",
        "Upgrade planning strategy"
      ],
      badge: "Quick Goal",
      color: "primary"
    },
    {
      id: "vacation",
      icon: Plane,
      title: "Vacation Planning",
      description: "Travel the world without financial stress",
      price: "₹10,000+",
      duration: "1-3 years",
      features: [
        "Destination cost analysis",
        "Currency fluctuation planning",
        "Travel insurance guidance",
        "Emergency fund creation",
        "Seasonal planning strategies"
      ],
      badge: "Travel Dreams",
      color: "accent"
    },
    {
      id: "emergency",
      icon: Shield,
      title: "Emergency Fund Planning",
      description: "Be prepared for life's unexpected moments",
      price: "₹5,000+",
      duration: "1-2 years",
      features: [
        "6-12 months expense calculation",
        "Liquid investment options",
        "Quick access strategies",
        "Risk-free investment planning",
        "Regular fund monitoring"
      ],
      badge: "Essential",
      color: "secondary"
    },
    {
      id: "wedding",
      icon: Gem,
      title: "Wedding Plan",
      description: "Simplify your wedding with smart, goal-based planning",
      features: [
        "Wedding Budget Estimation",
        "Monthly SIP / Savings Plan",
        "Venue & Vendor Cost Planning",
        "Jewelry & Apparel Allocation",
        "Emergency & Post-Marriage Fund Setup"
      ],
      badge: "Life Event",
      color: "secondary"
    },
    {
      id: "renovation",
      icon: School,
      title: "Home Renovation Plan",
      description: "Upgrade your home with smart budgeting and planned savings",
      features: [
        "Renovation Budget Estimation",
        "Monthly SIP / Savings Plan",
        "Contractor & Material Cost Planning",
        "Furniture & Appliance Allocation",
        "Emergency & Contingency Fund Setup"
      ],
      badge: "Living Upgrade",
      color: "secondary"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Goal Assessment",
      description: "We analyze your financial goals, timeline, and risk appetite"
    },
    {
      step: 2,
      title: "Strategy Design",
      description: "Custom financial plan created based on your specific needs"
    },
    {
      step: 3,
      title: "Implementation",
      description: "Start investing with systematic and disciplined approach"
    },
    {
      step: 4,
      title: "Regular Reviews",
      description: "Periodic monitoring and adjustments to stay on track"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title mb-6">Financial Plans</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Achieve your life goals with our comprehensive financial planning services.
              From retirement to education, we help you plan and invest systematically.
            </p>
            <Link to="/financial-journey" className="btn-finance">
              Start Your Financial Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Financial Goal</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Select from our range of goal-based financial plans designed to help you achieve your dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className="card-finance hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="absolute -top-2 -right-2">
                      {plan.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{plan.title}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full btn-finance group-hover:scale-105 transition-transform">
                    Get Connect
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our simple 4-step process to achieve your financial goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppFloat />

      <Footer />
    </div>
  );
};

export default FinancialPlans;