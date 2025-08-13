import { 
  TrendingUp, 
  Shield, 
  PiggyBank, 
  CreditCard, 
  Calculator,
  Target,
  Building2,
  Landmark
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: TrendingUp,
    title: "Mutual Funds",
    description: "Diversified investment portfolios managed by expert fund managers to maximize your returns with calculated risk management.",
    features: ["SIP Planning", "Goal-based Investing", "SWP Planning"],
    link: '/mutual-funds'
  },
  {
    icon: Shield,
    title: "Insurance Solutions",
    description: "Comprehensive protection plans including life, health, motor, and general insurance to secure your family's future.",
    features: ["Term Insurance", "Health Coverage", "Motor Insurance"],
    link: '/insurance-services'
  },
  {
    icon: Building2,
    title: "Stock Market",
    description: "Advanced stock market trading with research-backed recommendations and real-time market analysis.",
    features: ["Stock Analysis"],
    link: '/stock-market'
  },
  {
    icon: CreditCard,
    title: "Loan Services",
    description: "Quick and hassle-free loan solutions for personal, home, and business needs with competitive interest rates.",
    features: ["Personal Loans", "Home Loans", "Education Loans"],
    link: '/loan-services'
  },
  {
    icon: Landmark,
    title: "IPO Services",
    description: "Get exclusive access to Initial Public Offerings with expert guidance on investment timing and allocation.",
    features: ["IPO Applications"],
    link: '/ipo-services'
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Strategic tax optimization solutions to help you save more while staying compliant with regulations.",
    features: ["Equity Link Saving Scheme", "Investment Planning"],
    link: '/tax-planning'
  },
  {
    icon: Target,
    title: "Financial Planning",
    description: "Comprehensive financial roadmaps tailored to your life goals including retirement, education, and wealth creation.",
    features: ["Retirement Planning", "Goal Setting", "Wealth Management"],
    link: '/financial-planning'
  },
  {
    icon: PiggyBank,
    title: "Investment Advisory",
    description: "Personalized investment strategies based on your risk profile and financial objectives.",
    features: ["Risk Assessment", "Portfolio Design", "Regular Reviews"],
    link: '/investment-advisory'
  }
];

const ServiceHighlights = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Financial Services</h2>
          <p className="section-subtitle">
            Comprehensive financial solutions designed to help you achieve your goals and secure your future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index} 
              className="card-finance-gradient hover-lift group cursor-pointer hover:bg-blue-400"
            >
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                {/* <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-primary font-medium"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;