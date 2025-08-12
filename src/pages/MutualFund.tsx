import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import bgImage from "../assets/finance/man-riding-a-rocket.svg";

const MutualFund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-primary">
            Mutual Funds – Your Guide to Smart Investing
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn how to grow your wealth with mutual funds, a professionally
            managed investment option for beginners and experienced investors alike.
          </p>
        </div>
      </section>

      {/* What is Mutual Fund */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What is a Mutual Fund?</h2>
            <p className="mb-6 text-muted-foreground">
              A mutual fund pools money from multiple investors to invest in a
              diversified portfolio of assets such as stocks, bonds, gold, or a
              mix of these. Each investor owns units of the fund, and their value
              changes with market performance.
            </p>
            <p className="mb-6 text-muted-foreground">
              These funds are managed by expert fund managers who make investment
              decisions on your behalf, ensuring diversification and professional
              oversight.
            </p>

            <h3 className="text-xl font-medium mb-3">Key Benefits:</h3>
            <ul className="space-y-2">
              {[
                "Diversification reduces investment risk.",
                "Expert fund management.",
                "Flexible investment amounts.",
                "Suitable for both beginners and experienced investors.",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img src={bgImage} alt="Mutual Fund Illustration" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* How to Invest */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            How to Invest in Mutual Funds
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lumpsum */}
            <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">1. Lumpsum Investment</h3>
              <p className="text-muted-foreground mb-4">
                Invest a large amount in a mutual fund at one time. Best suited
                for those with significant capital ready to invest and aiming to
                benefit from potential market growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  Potential for higher returns if the market performs well.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  Ideal for long-term goals like retirement or property purchase.
                </li>
              </ul>
            </div>

            {/* SIP */}
            <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">
                2. SIP (Systematic Investment Plan)
              </h3>
              <p className="text-muted-foreground mb-4">
                Invest a fixed amount regularly (monthly, quarterly, etc.) into a
                mutual fund. Ideal for disciplined, gradual wealth creation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  Reduces market timing risk through cost averaging.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  Builds a habit of regular investing.
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  Affordable starting from ₹500/month.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you're a beginner or an experienced investor, mutual funds
            offer a smart way to grow your wealth. Let’s get started today.
          </p>
          <Button size="lg" variant="secondary">
            Get Expert Guidance <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section> */}

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default MutualFund;
