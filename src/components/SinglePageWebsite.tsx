
import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, MapPin, Phone, Mail, Clock, TrendingUp, Shield, Target, Users, BarChart3, FileText, Headphones, Award, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import ImageSlider from './ImageSlider';
import InvestorDetailsForm from './InvestorDetailsForm';

const SinglePageWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About Us', to: 'about' },
    { name: 'Our Mission', to: 'mission' },
    { name: 'How We Work', to: 'how-we-work' },
    { name: 'Investor Details', to: 'investor-details' },
    { name: 'Contact', to: 'contact' },
  ];

  const services = [
    {
      icon: <TrendingUp className="h-12 w-12 text-finance-blue" />,
      title: 'Strategic Financial & Retirement Planning',
      description: 'Personalized plans covering budgeting, saving, investing, and protection—paired with expert retirement strategies to build wealth and ensure lasting post-retirement income.'
    },
    {
      icon: <Shield className="h-12 w-12 text-finance-blue" />,
      title: 'Risk Management & Insurance Solutions',
      description: 'Safeguard your assets with expert risk assessment and tailored coverage, including term life insurance and comprehensive general insurance for complete financial protection.'
    },
    {
      icon: <Target className="h-12 w-12 text-finance-blue" />,
      title: 'Smart Investment & Portfolio Solutions',
      description: 'Get expert guidance with personalized investment strategies, from mutual funds and direct stock advisory to professionally managed PMS-designed to match your goals, risk profile, and wealth ambitions.'
    }
  ];

  const workSteps = [
    {
      icon: <Users className="h-16 w-16 text-finance-blue" />,
      title: 'Understand Your Goals',
      description: 'We begin by listening to your financial aspirations, current situation, and long-term objectives. Our comprehensive consultation helps us understand your unique needs.',
      details: ['Initial consultation', 'Goal assessment', 'Risk tolerance evaluation', 'Timeline planning']
    },
    {
      icon: <BarChart3 className="h-16 w-16 text-finance-blue" />,
      title: 'Analyze Financial Data',
      description: 'Our experts conduct thorough analysis of your financial data, market conditions, and investment opportunities to create a solid foundation for your strategy.',
      details: ['Financial health check', 'Market analysis', 'Risk assessment', 'Opportunity identification']
    },
    {
      icon: <FileText className="h-16 w-16 text-finance-blue" />,
      title: 'Create Customized Plans',
      description: 'Based on our analysis, we develop personalized financial strategies tailored to your specific goals, timeline, and risk preferences.',
      details: ['Strategy development', 'Custom solutions', 'Documentation', 'Action plan creation']
    },
    {
      icon: <TrendingUp className="h-16 w-16 text-finance-blue" />,
      title: 'Monitor & Optimize',
      description: 'We continuously monitor your financial progress and market changes, making strategic adjustments to keep you on track towards your goals.',
      details: ['Performance tracking', 'Regular reviews', 'Strategy adjustments', 'Progress reporting']
    },
    {
      icon: <Headphones className="h-16 w-16 text-finance-blue" />,
      title: 'Ongoing Support',
      description: 'Our relationship doesn\'t end with implementation. We provide continuous support, guidance, and updates to ensure your long-term financial success.',
      details: ['24/7 support', 'Regular check-ins', 'Market updates', 'Strategy refinements']
    }
  ];

  const certificates = [
    {
      name: 'CFA Institute',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=150&fit=crop',
      description: 'Chartered Financial Analyst Certification'
    },
    {
      name: 'Financial Planning Association',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&h=150&fit=crop',
      description: 'Certified Financial Planning Professional'
    },
    {
      name: 'Investment Management',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=150&fit=crop',
      description: 'Investment Management Excellence Award'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation */}
      <nav className="bg-white shadow-lg fixed top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-2">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-finance-blue">ITagFin</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="px-3 py-2 rounded-md text-sm font-medium text-finance-gray hover:text-finance-blue cursor-pointer transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="block px-3 py-2 rounded-md text-base font-medium text-finance-gray hover:text-finance-blue hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-16">
        <ImageSlider />

        {/* Service Highlights */}
        <div className="py-16 bg-finance-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-finance-gray-dark mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-finance-gray max-w-2xl mx-auto">
                We are a comprehensive wealth management advisory firm, committed to helping individuals and families build, protect, and grow their wealth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md group">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-finance-gray-dark mb-4">
                      {service.title}
                    </h3>
                    <p className="text-finance-gray leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-finance-gray-dark mb-4">
              About ITagFin
            </h1>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Your partner in lifelong financial well-being
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop"
                alt="Professional team at ITagFin"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>

            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-finance-gray-dark mb-6">
                Welcome to ITagFin
              </h2>
              <div className="space-y-4 text-finance-gray leading-relaxed">
                <p>
                  At <span className='font-bold'>I TAG Financials</span>, we are more than just wealth advisors — we are your long-term financial partners.
                </p>
                <p>
                  Backed by 20 + years of experience and industry insight, we specialize in crafting personalized financial plans that empower our clients to achieve financial independence and peace of mind.
                </p>
                <p className='font-bold'>We believe that real wealth is built strategically and sustained through trusted advice.</p>
                <p>
                  Our team of certified financial professionals combines traditional wisdom with innovative
                  strategies to deliver personalized financial services. We understand that every client's
                  financial journey is unique, which is why we take the time to understand your specific
                  goals, challenges, and aspirations.
                </p>
              </div>

              <div className='mt-4 flex bg-gray-100 p-4 rounded-md'>
                <h3 className="text-xl font-bold text-finance-gray-dark mb-6">
                  Why Choose Us ?
                  <ol className='mt-2 text-finance-gray text-[16px] font-medium'>
                    <p>• Qualified & Experienced Advisors</p>
                    <p>• End-to-End Financial Services</p>
                    <p>• Personalized Investment & Insurance Strategies</p>
                    <p>• Timely Alerts & Portfolio Monitoring</p>
                    <p>• Compliant, Ethical, and Client-First</p>
                  </ol>
                </h3>
              </div>

              <div className='mt-4 flex bg-gray-100 p-4 rounded-md'>
                <h3 className="text-xl font-bold text-finance-gray-dark mb-6">
                  Our Approach
                  <ol className='mt-2 text-finance-gray text-[16px] font-medium'>
                    <p>• Goal-Based Planning – Everything begins with your personal or business goals.</p>
                    <p>• Holistic Advice – We consider your entire financial picture: assets, liabilities, income, risk, and life stage.</p>
                    <p>• Ongoing Support – Regular reviews, smart alerts, and timely updates keep you on track.</p>
                    <p>• Transparency & Trust – No hidden agendas. Just professional, honest advice.</p>
                  </ol>
                </h3>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-finance-blue mb-2">20+</div>
                  <div className="text-finance-gray">Years Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-finance-blue mb-2">500+</div>
                  <div className="text-finance-gray">Happy Clients</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-finance-blue mb-2">$50M+</div>
                  <div className="text-finance-gray">Assets Managed</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-finance-blue mb-2">100%</div>
                  <div className="text-finance-gray">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-finance-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-finance-gray-dark mb-4">
              Our Certificates, Mission & Vision
            </h1>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Built on trust, certified excellence, and unwavering commitment to your financial success
            </p>
          </div>

          {/* Certificates */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-finance-gray-dark mb-4">
                Our Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-finance-gray-dark mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-finance-gray text-sm">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-finance-blue mr-4" />
                  <h2 className="text-3xl font-bold text-finance-gray-dark">Our Mission</h2>
                </div>
                <p className="text-finance-gray leading-relaxed text-lg">
                  To empower clients through sound financial strategies and build long-term relationships based on trust, transparency, and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-finance-blue mr-4" />
                  <h2 className="text-3xl font-bold text-finance-gray-dark">Our Vision</h2>
                </div>
                <p className="text-finance-gray leading-relaxed text-lg">
                  To be the most trusted and client-centric wealth advisory firm, helping people build, grow, and protect their wealth across generations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-finance-gray-dark mb-4">
              How We Work
            </h1>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our proven 5-step process ensures comprehensive financial management tailored to your needs
            </p>
          </div>

          <div className="space-y-16">
            {workSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                <div className="flex-1 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-finance-blue bg-opacity-10 rounded-full flex items-center justify-center mr-6">
                      <span className="text-2xl font-bold text-finance-blue">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-finance-gray-dark">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-lg text-finance-gray mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-finance-blue rounded-full mr-3"></div>
                        <span className="text-finance-gray">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 animate-slide-in-left">
                  <Card className="p-8 bg-finance-gray-light border-0 shadow-lg">
                    <CardContent className="p-0 flex justify-center">
                      {step.icon}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Details Section */}
      <section id="investor-details" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-finance-gray-dark mb-4">
              Investor Details
            </h1>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Complete your investor profile to receive personalized financial guidance and investment recommendations
            </p>
          </div>

          <InvestorDetailsForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-finance-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-finance-gray-dark mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Ready to start your financial journey? Get in touch with our expert team today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-lg border-0 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-finance-gray-dark">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-finance-gray-dark mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-finance-gray-dark mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-finance-gray-dark mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full min-h-[120px]"
                        placeholder="Tell us about your financial goals and how we can help"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-finance-blue hover:bg-finance-blue-dark text-white py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <div className="space-y-8">
                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-finance-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-finance-gray-dark mb-2">Our Office</h3>
                        <p className="text-finance-gray">
                          5 Samarpan Flat, 26 Hari Bhakti Society<br />
                          Behind Race Course Post office<br />
                          Vadodara, GJ 390007
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-finance-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-finance-gray-dark mb-2">Phone</h3>
                        <p className="text-finance-gray">
                          Tel: 0265-232-4455<br />
                          Mobile: +91 93770 04455
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-finance-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-finance-gray-dark mb-2">Email</h3>
                        <p className="text-finance-gray">
                          General: itagfinancials@gmail.com<br />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-finance-blue mt-1" />
                      <div>
                        <h3 className="font-semibold text-finance-gray-dark mb-2">Business Hours</h3>
                        <p className="text-finance-gray">
                          Monday - Friday: 9:00 AM - 5:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-finance-gray-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-2xl font-bold text-finance-blue mb-4">ITagFin</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Financial Confidence Starts Here. Your trusted partner in financial growth and security.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-gray-300 hover:text-finance-blue transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {['Wealth Planning', 'Risk Analysis', 'Investment Advice', 'Financial Consulting', 'Portfolio Management'].map((service) => (
                  <li key={service} className="text-gray-300">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-finance-blue" />
                  <span className="text-gray-300">
                    5 Samarpan Flat, 26 Hari Bhakti Society<br />
                    Behind Race Course Post office<br />
                    Vadodara, GJ 390007
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-finance-blue" />
                  <span className="text-gray-300">+91 93770 04455</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-finance-blue" />
                  <span className="text-gray-300">itagfinancials@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 ITagFin. All rights reserved.
            </p>
            <p className="text-finance-blue font-medium mt-2 md:mt-0">
              ITagFin – Financial Confidence Starts Here
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SinglePageWebsite;
