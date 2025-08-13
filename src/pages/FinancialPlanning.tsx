import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import bgImage from "../assets/finance/man-riding-a-rocket.svg"; // replace with your image

const FinancialPlanning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-primary">
            Financial Planning – Secure Your Future, Achieve Your Goals
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Create a clear roadmap to manage income, expenses, investments, and debt so you can meet
            short-term and long-term goals with confidence. Balance wealth creation, risk protection,
            and tax efficiency—while adapting to life and market changes.
          </p>
        </div>
      </section>

      {/* What is Financial Planning */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What is Financial Planning?</h2>
            <p className="mb-6 text-muted-foreground">
              Financial planning is the process of evaluating your current finances, defining where
              you want to be, and mapping how to get there efficiently. It aligns income, savings,
              investments, insurance, and debt so you can progress toward life milestones without
              unnecessary risk or last-minute stress.
            </p>
            <p className="mb-6 text-muted-foreground">
              A solid plan balances growth, protection, and tax optimization—and evolves as your
              career, family, and the economy change.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={bgImage}
              alt="Financial Planning Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Key Objectives of Financial Planning
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Wealth Growth: Build assets through disciplined investing.",
              "Risk Management: Protect against unexpected life events.",
              "Tax Efficiency: Legally minimize tax liabilities.",
              "Goal Achievement: Align investments with life milestones.",
              "Financial Independence: Reduce debt dependency for a comfortable lifestyle.",
              "Liquidity: Maintain emergency funds for unplanned needs."
            ].map((objective, i) => (
              <div key={i} className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  <span>{objective}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components of Financial Planning */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Components of Financial Planning
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Budgeting & Cash Flow",
                text:
                  "Track income and expenses, prioritize needs over wants, and create a surplus for investing."
              },
              {
                title: "Investment Planning",
                text:
                  "Choose the right asset mix—equities, mutual funds, fixed income—based on goals and risk profile."
              },
              {
                title: "Insurance Planning",
                text:
                  "Safeguard health, life, and assets to protect your plan from unforeseen events."
              },
              {
                title: "Retirement Planning",
                text:
                  "Build a corpus that sustains your lifestyle and accounts for inflation after you stop earning."
              },
              {
                title: "Estate Planning",
                text:
                  "Ensure smooth transfer of assets with nominations, wills, and clear documentation."
              },
              {
                title: "Debt Management",
                text:
                  "Optimize EMIs, reduce high-interest debt, and maintain a healthy credit profile."
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

      {/* Steps to Create a Financial Plan */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Steps to Create a Financial Plan
          </h2>
          <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
            <ol className="space-y-4 list-decimal list-inside">
              {[
                "Assess current financial situation: net worth, income, expenses, liabilities, and insurance.",
                "Set clear, realistic goals: emergency fund, education, home, retirement—define amount and timeline.",
                "Identify suitable investment avenues: map products to goals and risk tolerance.",
                "Create a balanced portfolio: diversify across assets and rebalance periodically.",
                "Review and adjust regularly: track progress, update for life changes, and optimize taxes."
              ].map((step, i) => (
                <li key={i} className="pl-1 text-muted-foreground">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits of Professional Planning */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Benefits of Professional Financial Planning
          </h2>
          <ul className="space-y-4">
            {[
              "Clear direction and discipline with goal-based roadmaps.",
              "Better decisions on savings, investments, and expenses.",
              "Enhanced savings rate and long-term wealth growth.",
              "Reduced stress during emergencies with adequate buffers and cover."
            ].map((benefit, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Optional CTA (uncomment if needed)
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Build Your Plan?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Get a customized financial plan aligned to your goals, risk profile, and timelines.
          </p>
          <Button size="lg" variant="secondary">
            Get Expert Guidance <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
      */}

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default FinancialPlanning;