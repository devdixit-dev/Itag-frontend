import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Shield, 
  PiggyBank, 
  CreditCard, 
  Calculator,
  Building2,
  Landmark,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Services = () => {
  const services = [
    {
      id: "ipo",
      icon: Landmark,
      title: "IPO Services",
      description: "Get exclusive access to Initial Public Offerings with expert guidance",
      features: [
        "IPO application assistance",
        "Pre-IPO research and analysis",
        "Investment timing guidance",
        "Portfolio allocation advice",
        "Post-listing performance tracking"
      ],
      benefits: [
        "Early access to promising companies",
        "Expert selection criteria",
        "Risk assessment and mitigation",
        "Potential for high returns"
      ]
    },
    {
      id: "mutual-funds",
      icon: PiggyBank,
      title: "Mutual Funds",
      description: "Diversified investment portfolios managed by expert fund managers",
      features: [
        "SIP (Systematic Investment Plan)",
        "Goal-based investing",
        "Tax-saving ELSS funds",
        "Portfolio rebalancing",
        "Regular performance reviews"
      ],
      benefits: [
        "Professional fund management",
        "Diversification across assets",
        "Liquidity and flexibility",
        "Tax efficiency"
      ]
    },
    {
      id: "insurance",
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive protection plans for life, health, and assets",
      features: [
        "Life insurance policies",
        "Health insurance coverage",
        "Motor insurance",
        "Home insurance",
        "Travel insurance"
      ],
      benefits: [
        "Financial security for family",
        "Tax benefits under 80C",
        "Cashless claim settlements",
        "24/7 customer support"
      ]
    },
    {
      id: "equity",
      icon: Building2,
      title: "Equity Trading",
      description: "Advanced stock market trading with research-backed recommendations",
      features: [
        "Stock market research",
        "Portfolio management",
        "Real-time market analysis",
        "Risk management strategies",
        "Technical and fundamental analysis"
      ],
      benefits: [
        "Potential for high returns",
        "Direct ownership in companies",
        "Dividend income",
        "Long-term wealth creation"
      ]
    },
    {
      id: "loans",
      icon: CreditCard,
      title: "Loan Services",
      description: "Quick and hassle-free loan solutions with competitive rates",
      features: [
        "Personal loans",
        "Home loans",
        "Business loans",
        "Loan against property",
        "Education loans"
      ],
      benefits: [
        "Quick approval process",
        "Competitive interest rates",
        "Minimal documentation",
        "Flexible repayment options"
      ]
    },
    {
      id: "tax",
      icon: Calculator,
      title: "Tax Planning",
      description: "Strategic tax optimization solutions for maximum savings",
      features: [
        "Tax-saving investments",
        "Annual tax planning",
        "Income tax filing",
        "TDS optimization",
        "Capital gains planning"
      ],
      benefits: [
        "Reduced tax liability",
        "Compliance with regulations",
        "Optimized investment structure",
        "Peace of mind"
      ]
    }
  ];

  const handleClickServices = (message: string) => {
    const phoneNumber = '+917575024455'
    const sendMessage = `Get started with ${message}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(sendMessage)}`;
    window.open(url, '_blank');
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title mb-6">Our Financial Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive financial solutions designed to help you achieve your goals, 
              protect your family, and build lasting wealth through expert guidance and 
              innovative investment strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">Benefits</h3>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start space-x-3">
                            <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button onClick={() => handleClickServices(service.title)} className="btn-finance">
                    Get Started with {service.title}
                  </Button>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="card-finance-gradient p-12 text-center">
                    <service.icon className="w-24 h-24 text-primary mx-auto mb-6" />
                    <div className="space-y-4">
                      <div className="text-4xl font-bold text-primary">
                        {index === 0 ? '500+' : index === 1 ? '₹100Cr+' : index === 2 ? '24/7' : 
                         index === 3 ? '₹500Cr+' : index === 4 ? '48hrs' : '80C'}
                      </div>
                      <div className="text-muted-foreground">
                        {index === 0 ? 'IPOs Processed' : index === 1 ? 'AUM in Mutual Funds' : 
                         index === 2 ? 'Claim Support' : index === 3 ? 'Equity Assets' : 
                         index === 4 ? 'Loan Approval' : 'Tax Benefits'}
                      </div>
                    </div>
                  </div>
                </div>
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

export default Services;