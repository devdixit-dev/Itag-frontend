import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import bgImage from "../assets/finance/man-riding-a-rocket.svg";

const InvestmentAdvisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-primary">
            Investment Advisory – Expert Guidance for Smarter Investing
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Get personalized, research-backed recommendations on where, when, and how to invest.
            Build a diversified, risk-managed portfolio aligned with your short-term and long-term goals.
          </p>
        </div>
      </section>

      {/* What is Investment Advisory */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What is Investment Advisory?</h2>
            <p className="mb-6 text-muted-foreground">
              Investment advisory is a professional service that provides tailored guidance for your
              investments. Advisors evaluate your current financial position, risk tolerance, goals,
              and market conditions to recommend suitable strategies and products.
            </p>
            <p className="mb-6 text-muted-foreground">
              The focus is on constructing a diversified, profitable, and risk-aware portfolio that
              steadily moves you toward your objectives without unnecessary volatility.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={bgImage}
              alt="Investment Advisory Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Importance */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Importance of Investment Advisory
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Informed Decisions: Access to research-based recommendations.",
              "Goal Alignment: Investments tailored to your financial targets.",
              "Risk Optimization: Balanced approach to growth and safety.",
              "Time Savings: Experts manage strategies so you focus on priorities.",
              "Market Awareness: Stay updated on changes impacting your portfolio.",
              "Discipline: Structured processes for consistent long-term progress."
            ].map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Advisory Services */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Types of Investment Advisory Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mutual Fund Advisory",
                text:
                  "Curated fund selection for your goals, SIP/lumpsum strategies, and periodic reviews."
              },
              {
                title: "Equity & Stock Advisory",
                text:
                  "Guidance on listed shares, sector allocation, and trading or long-term strategies."
              },
              {
                title: "Debt Instrument Advisory",
                text:
                  "Stable options like bonds and debt funds for capital preservation and steady income."
              },
              {
                title: "Portfolio Rebalancing",
                text:
                  "Periodic adjustment of asset mix to maintain target risk and improve outcomes."
              },
              {
                title: "Goal-Based Planning",
                text:
                  "Investments mapped to milestones such as education, home, retirement, and travel."
              },
              {
                title: "Tactical & Strategic Allocation",
                text:
                  "Blend of long-term strategy with short-term tilts based on market conditions."
              }
            ].map(({ title, text }, i) => (
              <div key={i} className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps in Advisory */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Steps in Investment Advisory
          </h2>
        </div>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
            <ol className="space-y-4 list-decimal list-inside">
              {[
                "Understand client’s financial goals, timelines, and constraints.",
                "Assess risk appetite and investment horizon with a risk profile.",
                "Recommend suitable investment products and asset allocation.",
                "Monitor portfolio performance regularly and share progress updates.",
                "Make adjustments as market conditions and life events change."
              ].map((step, i) => (
                <li key={i} className="pl-1 text-muted-foreground">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Benefits of Professional Investment Advisory
          </h2>
          <ul className="space-y-4">
            {[
              "Higher chances of meeting financial targets.",
              "Reduced risk of losses from poor investment choices.",
              "Professional monitoring and periodic portfolio adjustments.",
              "Peace of mind knowing experts are guiding your money."
            ].map((benefit, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                <span>{benefit}</span>
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

export default InvestmentAdvisory;
