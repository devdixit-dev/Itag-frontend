import Layout from "@/components/Layout";
import InvestorDetailsForm from "@/components/InvestorDetailsForm";

const InvestorDetails = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-finance-blue mb-4">
              Investor Details
            </h1>
            <p className="text-lg text-gray-600">
              Please provide your complete financial information to help us create a personalized investment strategy for you.
            </p>
          </div>
          <InvestorDetailsForm />
        </div>
      </div>
    </Layout>
  );
};

export default InvestorDetails;