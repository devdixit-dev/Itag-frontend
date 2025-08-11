import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import {
  Building,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Download,
  FileText,
  Play,
  PhoneCall,
  X,
  BellIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

import axios from "axios";


const Footer = () => {
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const currentYear = new Date().getFullYear();
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [callbackForm, setCallbackForm] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: ''
  });

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "📞 Callback Request Received!",
      description: "Our financial expert will call you back within 24 hours. Thank you for choosing ITagFin!",
    });
    setIsCallbackOpen(false);
    // Reset form
    setCallbackForm({ name: '', phone: '', email: '', preferredTime: '' });
  };

  const handleNewsletterEmail = async () => {
    const getEmail = await (await axios.post(`${import.meta.env.VITE_DEV_URL}/newsletter`, { email: newsletterEmail })).data

    if (getEmail.status === 200) {
      toast({
        title: "🎉 Email subscription added"
      });
      setNewsletterEmail('');
    }
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Financial Plans", href: "/financial-plans" },
    { name: "Career", href: "/career" },
    { name: "Blog", href: "/blog" }
  ];

  const studyMaterials = [
    { name: "Investment Guides", href: "/resources", icon: FileText },
    { name: "Video Tutorials", href: "/resources", icon: Play },
    { name: "Market Reports", href: "/resources", icon: Download },
    { name: "Tax Planning PDFs", href: "/resources", icon: FileText },
    { name: "SIP Calculator Guide", href: "/resources", icon: Download }
  ];

  const services = [
    { name: "Mutual Funds", href: "/services#mutual-funds" },
    { name: "Insurance", href: "/services#insurance" },
    { name: "IPO Services", href: "/services#ipo" },
    { name: "Equity Trading", href: "/services#equity" },
    { name: "Loans", href: "/services#loans" },
    { name: "Tax Planning", href: "/services#tax" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="logo" width={10} className="w-full rounded-xl" />
              </div>
              <span className="text-2xl font-bold">I Tag Financials</span>
            </div>

            <p className="text-white/80 leading-relaxed">
              Your trusted partner in financial growth. We provide comprehensive
              financial solutions to help you achieve your life goals and secure
              your future.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white/80">advisory@itagfin.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white/80">+91 75750 24455</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/60" />
                <span className="text-white/80">India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="block text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <h4 className="text-lg font-semibold mt-8 mb-4">Our Services</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="block text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Study Materials */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Study Materials</h3>
            <div className="space-y-3">
              {studyMaterials.map((material, index) => (
                <Link
                  key={index}
                  to={material.href}
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  <material.icon className="w-4 h-4 text-white/60 group-hover:text-white" />
                  <span>{material.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Newsletter</h4>
                <p className="text-sm text-white/80 mb-3">
                  Get latest financial insights delivered to your inbox
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-primary rounded-md hover:bg-white/90 transition-colors font-medium"
                    onClick={handleNewsletterEmail}
                  >
                    <BellIcon width={18} />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold mb-3">Downloads</h4>
                <div className="flex flex-col space-y-2">
                  <a
                    href="/will-form.xlsx"
                    download
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Will Form Template</span>
                  </a>
                  <a
                    href="/financial-planning.xlsx"
                    download
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Financial Planning Sheet</span>
                  </a>
                </div>
              </div>

              <Dialog open={isCallbackOpen} onOpenChange={setIsCallbackOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30">
                    <PhoneCall className="w-4 h-4 mr-2" />
                    Request Expert Callback
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Request Expert Callback</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCallbackSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="callback-name">Full Name</Label>
                      <Input
                        id="callback-name"
                        value={callbackForm.name}
                        onChange={(e) => setCallbackForm({ ...callbackForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="callback-phone">Phone Number</Label>
                      <Input
                        id="callback-phone"
                        type="tel"
                        value={callbackForm.phone}
                        onChange={(e) => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="callback-email">Email</Label>
                      <Input
                        id="callback-email"
                        type="email"
                        value={callbackForm.email}
                        onChange={(e) => setCallbackForm({ ...callbackForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="callback-time">Preferred Time</Label>
                      <Input
                        id="callback-time"
                        value={callbackForm.preferredTime}
                        onChange={(e) => setCallbackForm({ ...callbackForm, preferredTime: e.target.value })}
                        placeholder="e.g., Morning 10-12 PM"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>

            <div className="flex space-x-4 mb-8">
              <a
                href="https://facebook.com/itagfinancials"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/itagfinancials"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/itagfinancials/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="http://www.linkedin.com/in/i-tag-financials-29681a375"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Business Hours</h4>
                <div className="text-sm text-white/80 space-y-1">
                  <div>Monday - Friday: 9:00 AM - 5:00 PM</div>
                  <div>Saturday: 10:00 AM - 5:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Certifications</h4>
                <div className="text-sm text-white/80">
                  AMFI Registered Investment Advisor<br />
                  ARN - 319081 <br />
                  IRDAI Licensed Insurance Broker<br />
                  NSE & BSE Certified
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-center md:text-left">
              {/* © {currentYear} I Tag Financials. All rights reserved */}
              <div className="flex gap-4">
                <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy </Link> |
                <Link to="/terms" className="hover:text-white ml-1">Terms of Service</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-white/80">
              <span>© {currentYear} I Tag Financials</span>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Made by <a href="https://github.com/devdixit-dev" className="border-b border-green-500" target="_blank">Dev Dixit</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;