import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, Award, TrendingUp, Target, Heart } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your financial security is our top priority. We maintain the highest standards of data protection and regulatory compliance."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Every financial solution is tailored to your unique needs and goals. We believe in building long-term relationships."
    },
    {
      icon: Award,
      title: "Excellence & Expertise",
      description: "Our team of certified financial advisors brings decades of combined experience in the financial services industry."
    },
    {
      icon: TrendingUp,
      title: "Innovation & Growth",
      description: "We leverage cutting-edge technology to provide you with the best tools and insights for financial growth."
    }
  ];

  const team = [
    {
      name: "Sourabh Verma",
      designation: "Founder & CEO",
      experience: "21+ years",
      specialization: "Investment Advisory & Wealth Management"
    },
    {
      name: "Suraj Tiwari",
      designation: "Operations",
      experience: "20+ years",
      specialization: "Compliance"
    },
    {
      name: "Nidhi Prajapati",
      designation: "Wealth Advisor",
      experience: "8+ years",
      specialization: "Equity Broking"
    },
        {
      name: "Dev Patel",
      designation: "Wealth Advisor",
      experience: "3+ years",
      specialization: "Mutual Funds & Portfolio Management"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title mb-6">About I Tag Financials</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded with a vision to democratize financial services, I Tag Financials has been helping 
              individuals and families achieve their financial goals for over a decade. We combine 
              traditional wisdom with modern technology to deliver exceptional financial solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I Tag Financials was born from a simple belief: everyone deserves access to quality 
                  financial advice and services, regardless of their background or investment size. 
                  What started as a small advisory firm has grown into a comprehensive financial 
                  services platform.
                </p>
                <p>
                  Today, we serve thousands of clients across India, helping them navigate the 
                  complex world of investments, insurance, and financial planning. Our commitment 
                  to transparency, innovation, and client success remains unwavering.
                </p>
                <p>
                  We're proud to be AMFI registered investment advisors and IRDAI licensed 
                  insurance brokers, ensuring that our clients receive the highest standards 
                  of professional service.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="card-finance text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">23+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
                <div className="card-finance text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="card-finance text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">₹500Cr+</div>
                  <div className="text-sm text-muted-foreground">Assets Under Management</div>
                </div>
                <div className="card-finance text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do at I Tag Financials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-finance text-center hover-lift">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Expert Team</h2>
            <p className="section-subtitle">
              Experienced professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-finance text-center hover-lift">
                <div className="mx-auto w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.designation}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                <p className="text-sm text-foreground font-medium">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-finance p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To democratize financial services by providing accessible, transparent, and 
                personalized financial solutions that empower individuals and families to 
                achieve their life goals and build lasting wealth.
              </p>
            </div>

            <div className="card-finance p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted financial partner, known for our integrity, 
                innovation, and commitment to client success. We envision a future where 
                every Indian has access to quality financial advice and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />

      <Footer />
    </div>
  );
};

export default About;