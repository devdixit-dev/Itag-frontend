import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Shield, HeartPulse, Car } from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import insuranceImage from "../assets/finance/man-riding-a-rocket.svg";

const InsuranceServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-primary">
            Insurance Solutions – Your Complete Protection Guide
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Secure your future with the right insurance plan. Protect yourself,
            your family, and your assets from unexpected events with
            comprehensive coverage.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Insurance Matters</h2>
            <p className="mb-6 text-muted-foreground">
              Insurance acts as a financial safety net, protecting individuals and
              businesses from unforeseen circumstances. By paying a regular
              premium, you ensure that you or your beneficiaries receive financial
              assistance in case of emergencies, accidents, or loss of life.
            </p>
            <p className="mb-6 text-muted-foreground">
              Choosing the right insurance plan is essential for securing your
              family’s financial stability and ensuring peace of mind.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={insuranceImage}
              alt="Insurance Protection"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Term Insurance */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">1. Term Insurance</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              A type of life insurance that provides coverage for a fixed term.
              If the policyholder passes away during this period, the nominee
              receives the assured sum. It’s an affordable way to ensure your
              family’s financial stability.
            </p>
            <h4 className="text-lg font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              {[
                "High coverage at low premium rates.",
                "Financial protection for your dependents.",
                "Flexible policy terms (10, 20, 30 years, etc.).",
                "Additional riders for critical illness or accidental death.",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Health Insurance */}
          <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition mb-10">
            <div className="flex items-center gap-3 mb-4">
              <HeartPulse className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">2. Health Insurance</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Covers medical expenses due to illness, accidents, or
              hospitalization. Ensures access to quality healthcare without
              exhausting your savings.
            </p>
            <h4 className="text-lg font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              {[
                "Covers hospitalization, surgeries, and treatment costs.",
                "Cashless treatment at network hospitals.",
                "Tax benefits under Section 80D of the Income Tax Act.",
                "Option to add family members under one plan (Family Floater).",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Motor Insurance */}
          <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-4">
              <Car className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">3. Motor Insurance</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Provides financial protection against vehicle damage or third-party
              liabilities from accidents. It is mandatory in India for all vehicle
              owners.
            </p>
            <h4 className="text-lg font-medium mb-2">Types:</h4>
            <ul className="list-disc ml-6 mb-4 text-muted-foreground">
              <li>Third-Party Insurance – Covers damage or injury to third parties.</li>
              <li>
                Comprehensive Insurance – Covers third-party liabilities and own
                vehicle damage.
              </li>
              <li>Own Damage Cover – Covers damage to your vehicle only.</li>
            </ul>
            <h4 className="text-lg font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              {[
                "Coverage for accident-related damages.",
                "Protection against natural disasters, theft, and fire.",
                "Cashless repairs at authorized garages.",
                "Legal compliance with Indian motor laws.",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-success mt-1 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
};

export default InsuranceServices;
