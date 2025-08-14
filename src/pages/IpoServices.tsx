import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import bgImage from "../assets/finance/ipo.svg"

const IPOServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-primary">
            IPO Services – Your Gateway to New Investment Opportunities
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn how Initial Public Offerings work and discover opportunities
            to invest in promising companies at the very start of their journey
            in the stock market.
          </p>
        </div>
      </section>

      {/* What is an IPO */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What is an IPO?</h2>
            <p className="mb-6 text-muted-foreground">
              An Initial Public Offering (IPO) is the process by which a private
              company offers its shares to the public for the first time to raise
              capital. Investors who buy shares in an IPO become part-owners of
              the company.
            </p>
            <p className="mb-6 text-muted-foreground">
              IPOs give companies access to funds for growth and expansion, while
              offering investors the opportunity to invest in a company at its
              early stage in the stock market.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={bgImage} alt="IPO Services Illustration" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* How Does an IPO Work */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            How Does an IPO Work?
          </h2>
          <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition max-w-4xl mx-auto">
            <ul className="space-y-2">
              {[
                "A company files for an IPO with SEBI (Securities and Exchange Board of India) for approval.",
                "The company works with investment banks to set a price band for its shares.",
                "Investors apply for shares through their Demat & Trading account using ASBA (Application Supported by Blocked Amount).",
                "Shares are allotted based on demand and availability.",
                "The company’s shares get listed on the stock exchange (BSE/NSE) and can be traded freely."
              ].map((step, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Invest in IPOs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6">Why Invest in IPOs?</h2>
          <ul className="space-y-4 text-left">
            {[
              "Opportunity to buy shares at the company’s initial price.",
              "Potential for strong listing gains.",
              "Long-term wealth creation if the company grows.",
              "Diversification of your investment portfolio."
            ].map((reason, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default IPOServices;
