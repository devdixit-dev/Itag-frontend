import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertCircle, CheckCircle2, XCircle, Info } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Scale className="w-16 h-16 text-primary mr-4" />
              <h1 className="section-title">Terms of Service</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Please read these Terms of Service carefully before using our financial services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: August 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Acceptance of Terms */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and using I Tag Financial services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you and I Tag Financial. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Our Services</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Financial Advisory Services</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Investment planning and portfolio management</li>
                    <li>• Mutual fund investment advisory</li>
                    <li>• Insurance planning and policy recommendations</li>
                    <li>• Tax planning and optimization strategies</li>
                    <li>• IPO advisory and application services</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-6 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Info className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Important Notice</h4>
                      <p className="text-muted-foreground text-sm">
                        I Tag Financial is a SEBI-registered investment advisor and IRDAI-licensed insurance broker. 
                        All our recommendations are based on thorough research and analysis, but investments 
                        are subject to market risks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">User Responsibilities</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Account Security</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Maintain confidentiality of login credentials</li>
                    <li>• Notify us immediately of unauthorized access</li>
                    <li>• Use strong passwords and enable two-factor authentication</li>
                    <li>• Log out from shared or public devices</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Information Accuracy</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Provide accurate and complete information</li>
                    <li>• Update personal and financial details promptly</li>
                    <li>• Verify all transaction details before confirmation</li>
                    <li>• Report any discrepancies immediately</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Investment Risks & Disclaimers */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-accent mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Investment Risks & Disclaimers</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-accent/10 to-destructive/5 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Risk Warning</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>• All investments are subject to market risks and may result in loss of capital</p>
                    <p>• Past performance does not guarantee future returns</p>
                    <p>• Mutual fund investments are subject to market fluctuations</p>
                    <p>• Insurance products carry specific terms, conditions, and exclusions</p>
                    <p>• Tax implications may vary based on individual circumstances</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">No Guarantee</h3>
                  <p className="text-muted-foreground">
                    I Tag Financial does not guarantee any specific returns or profits from investments. 
                    All financial decisions should be made after careful consideration of your risk appetite, 
                    financial goals, and investment horizon.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I Tag Financial's liability is limited to the advisory fees paid by you. We shall not be 
                  liable for any direct, indirect, incidental, or consequential damages arising from:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Market fluctuations and investment losses</li>
                  <li>• Technical issues or system downtime</li>
                  <li>• Third-party service provider failures</li>
                  <li>• Force majeure events</li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <XCircle className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Termination</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Either party may terminate this agreement with 30 days written notice. 
                  Upon termination:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Your access to our services will be discontinued</li>
                  <li>• Outstanding fees and charges will be settled</li>
                  <li>• Your personal data will be handled as per our Privacy Policy</li>
                  <li>• Existing investments will continue as per respective terms</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card-finance bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center mb-6">
                <Info className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  For any questions regarding these Terms of Service, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground">Email:</p>
                    <p className="text-muted-foreground">advisory@itagfin.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone:</p>
                    <p className="text-muted-foreground">+91 75750 24455</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Business Hours: Monday to Friday, 9:00 AM - 5:00 PM IST
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;