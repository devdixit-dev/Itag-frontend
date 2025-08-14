import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import bgImage from "../assets/finance/tax-planning.svg";

const TaxPlanning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-primary">
            Tax Planning – Maximize Savings, Stay Compliant
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Organize your finances smartly to reduce tax liability, stay compliant,
            and make the most of legal tax-saving opportunities to secure your
            financial future.
          </p>
        </div>
      </section>

      {/* What is Tax Planning */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What is Tax Planning?</h2>
            <p className="mb-6 text-muted-foreground">
              Tax planning is the process of organizing your finances and
              investments in a way that minimizes your tax liability while ensuring
              compliance with applicable tax laws. The goal is to use legal
              tax-saving opportunities to retain more of your earnings.
            </p>
            <p className="mb-6 text-muted-foreground">
              Proper tax planning helps individuals and businesses optimize
              expenses, increase savings, and achieve long-term financial goals
              without the last-minute rush during tax season.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={bgImage} alt="Tax Planning Illustration" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Objectives of Tax Planning */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Objectives of Tax Planning
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Reduce Tax Liability: Use available exemptions, deductions, and rebates.",
              "Ensure Compliance: Avoid penalties and legal issues by adhering to tax laws.",
              "Wealth Creation: Redirect tax savings into profitable investments.",
              "Financial Efficiency: Plan income and expenses strategically."
            ].map((objective, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  <span>{objective}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tax-Saving Strategies */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Popular Tax-Saving Strategies in India
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Section 80C Investments: ELSS Mutual Funds, Life Insurance Premiums, PPF, EPF, and NSC (Up to ₹1.5 lakh deduction).",
              "Health Insurance Premiums: Deductions under Section 80D.",
              "Home Loan Benefits: Interest deduction under Section 24(b) and principal repayment under Section 80C.",
              "NPS (National Pension System): Additional deduction under Section 80CCD(1B).",
              "Tax-Free Allowances: HRA, LTA, and standard deductions for salaried employees."
            ].map((strategy, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  <span>{strategy}</span>
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

export default TaxPlanning;
