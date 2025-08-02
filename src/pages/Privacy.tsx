import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText, UserCheck, AlertTriangle } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-primary mr-4" />
              <h1 className="section-title">Privacy Policy</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Information We Collect */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Name, email address, and phone number</li>
                    <li>• Financial information (income, investments, goals)</li>
                    <li>• Identity verification documents</li>
                    <li>• Bank account and payment information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Technical Information</h3>
                  <ul className="space-y-2 ml-4">
                    <li>• Device information and IP address</li>
                    <li>• Browser type and operating system</li>
                    <li>• Usage patterns and preferences</li>
                    <li>• Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <UserCheck className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Service Provision</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Provide financial advisory services</li>
                    <li>• Process transactions and investments</li>
                    <li>• Maintain your investment portfolio</li>
                    <li>• Offer personalized recommendations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Communication</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Send account updates and statements</li>
                    <li>• Provide market insights and newsletters</li>
                    <li>• Respond to customer inquiries</li>
                    <li>• Send important security notifications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Data Protection & Security</h2>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">SSL Encryption</h3>
                    <p className="text-sm text-muted-foreground">All data transmission is encrypted using 256-bit SSL</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                    <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Secure Storage</h3>
                    <p className="text-sm text-muted-foreground">Data stored in encrypted databases with restricted access</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
                    <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Access Control</h3>
                    <p className="text-sm text-muted-foreground">Strict authentication and authorization protocols</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="card-finance">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Data Rights</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Access your personal data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request data deletion</li>
                    <li>• Data portability</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Communication Preferences</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Opt-out of marketing communications</li>
                    <li>• Control notification settings</li>
                    <li>• Update contact preferences</li>
                    <li>• Manage consent settings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card-finance bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-bold text-foreground">Contact Us About Privacy</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or how we handle your data, 
                  please contact our Data Protection Officer:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground">Email:</p>
                    <p className="text-muted-foreground">privacy@itagfin.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone:</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  We will respond to your privacy-related inquiries within 30 days.
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

export default Privacy;