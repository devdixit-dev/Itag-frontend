import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ServiceHighlights from "@/components/ServiceHighlights";
import Testimonials from "@/components/Testimonials";
import FinancialCalculators from "@/components/FinancialCalculators";
import PartnerSliders from "@/components/PartnerSliders";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      
      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Welcome to I Tag Financials</h2>
          <p className="section-subtitle max-w-4xl mx-auto">
            At I Tag Financials, we are committed to empowering your financial journey with expert guidance, 
            innovative solutions, and personalized service. Whether you're planning for retirement, 
            seeking investment opportunities, or protecting your family's future, we're here to help 
            you make informed financial decisions that align with your goals.
          </p>
        </div>
      </section>

      <ServiceHighlights />
      <Testimonials />
      <FinancialCalculators />
      <PartnerSliders />
      <AppDownload />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
