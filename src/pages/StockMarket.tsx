import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import bgImage from "../assets/finance/stock-market.svg";

const StockMarket = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-primary">
            Stock Market – Understanding the Basics
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn how the stock market works, its role in the economy, and how you
            can participate to grow your wealth through smart investing.
          </p>
        </div>
      </section>

      {/* What is the Stock Market */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What is the Stock Market?</h2>
            <p className="mb-6 text-muted-foreground">
              The stock market is a marketplace where buyers and sellers trade
              shares of publicly listed companies. It enables businesses to raise
              capital and allows investors to participate in a company’s growth.
            </p>
            <p className="mb-6 text-muted-foreground">
              Shares represent partial ownership in a company. By owning shares,
              investors are entitled to a portion of the company’s profits, often
              paid as dividends.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={bgImage} alt="Stock Market Illustration" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            How Does the Stock Market Work?
          </h2>
          <div className="bg-card p-6 rounded-xl shadow-2xl border-gray-100 border-2 hover:shadow-lg transition max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-4">
              The stock market operates on the principles of demand and supply:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "If more investors want to buy a stock than sell it, the price rises.",
                "If more investors want to sell than buy, the price falls."
              ].map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  {point}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mb-4">The process works like this:</p>
            <ul className="space-y-2">
              {[
                "Companies list their shares on exchanges via an Initial Public Offering (IPO).",
                "Investors trade these shares through brokers using online platforms.",
                "Stock prices fluctuate based on market news, company results, and economic factors.",
                "Regulatory bodies like SEBI ensure fair and transparent trading."
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

      {/* Key Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Key Information about the Indian Stock Market
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Two main exchanges: Bombay Stock Exchange (BSE) and National Stock Exchange (NSE).",
              "SEBI regulates the market to protect investor interests.",
              "Major indices: Sensex (BSE) and Nifty 50 (NSE).",
              "Trading hours: Monday to Friday, 9:15 AM – 3:30 PM IST.",
              "Market segments: Equity, Debt, Derivatives, and Commodities."
            ].map((info, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl shadow-2xl border-gray-100 border-2 hover:shadow-lg transition"
              >
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  <span>{info}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl font-semibold mb-6">
            Why is the Stock Market Important?
          </h2>
          <ul className="space-y-4 text-left">
            {[
              "Helps companies raise funds for growth and expansion.",
              "Offers investors opportunities to grow wealth over time.",
              "Serves as a barometer of economic health.",
              "Encourages savings and investment habits among individuals."
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

export default StockMarket;