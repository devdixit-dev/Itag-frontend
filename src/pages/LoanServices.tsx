import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import bgImage from "../assets/finance/loan-services.svg"

const LoanServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-primary">
            Loan Services – Your Guide to Borrowing Smart
          </h1>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how loan services can help you achieve your financial goals
            without disturbing your savings. From buying a home to funding
            education or expanding a business, smart borrowing can make it possible.
          </p>
        </div>
      </section>

      {/* What are Loan Services */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What are Loan Services?</h2>
            <p className="mb-6 text-muted-foreground">
              Loan services help individuals and businesses access funds to meet
              personal, professional, or financial needs. These loans are offered
              by banks, NBFCs, and other financial institutions with specific
              repayment terms, interest rates, and eligibility criteria.
            </p>
            <p className="mb-6 text-muted-foreground">
              By using loan services wisely, you can achieve goals like buying a
              home, funding education, expanding your business, or meeting urgent
              expenses without disrupting your savings.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={bgImage} alt="Loan Services Illustration" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Types of Loans */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Types of Loans We Assist With
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Home Loan */}
            <div className="bg-card p-6 rounded-xl shadow-2xl border-gray-100 border-2 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">1. Home Loan</h3>
              <p className="text-muted-foreground mb-4">
                A home loan is used to purchase, construct, or renovate a house.
              </p>
              <ul className="space-y-2">
                {[
                  "Long repayment tenures (up to 30 years).",
                  "Lower interest rates compared to other loans.",
                  "Tax benefits under Sections 80C & 24(b)"
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Loan */}
            <div className="bg-card p-6 rounded-xl shadow-2xl border-gray-100 border-2 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">2. Business Loan</h3>
              <p className="text-muted-foreground mb-4">
                Designed to meet working capital requirements, expansion, or new ventures.
              </p>
              <ul className="space-y-2">
                {[
                  "Available for startups and established businesses.",
                  "Flexible repayment options.",
                  "Can be secured or unsecured."
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education Loan */}
            <div className="bg-card p-6 rounded-xl shadow-2xl border-gray-100 border-2 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">3. Education Loan</h3>
              <p className="text-muted-foreground mb-4">
                Helps fund higher education in India or abroad.
              </p>
              <ul className="space-y-2">
                {[
                  "Covers tuition fees, living expenses, and other costs.",
                  "Moratorium period before repayment starts.",
                  "Interest subsidies available for eligible students."
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default LoanServices;