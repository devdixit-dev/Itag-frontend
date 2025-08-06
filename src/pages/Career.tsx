import { useState } from 'react';
import { MapPin, Clock, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useToast } from '@/hooks/use-toast';

const Career = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Wealth Advisor',
      department: 'Wealth Management / Financial Advisory',
      location: 'Vadodara, India',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'We are looking for an experienced financial advisor to join our team and help clients achieve their financial goals through comprehensive planning and investment strategies.',
      requirements: [
        'Graduate (Commerce, Finance) or MBA (preferred)',
        'NISM VA / NISM XA & XB / CFP / CFA (preferred)',
        '1+ years of experience in wealth management, banking or advisory',
        'Strong analytical and communication skills',
        'Knowledge of investment products and tax planning'
      ],
      responsibilities: [
        'Assess client financial situation, goals, and risk tolerance',
        'Prepare customized financial plans (retirement, tax, education, etc..)',
        'Recommend mutual funds, equities, bonds, insurance, PMS, and structured products',
        'Monitor market trends and adjust client portfolios accordingly',
        'Identify and onboard new HNI/retail clients',
        'Network through referrals, events, and cold outreach',
        'Build and maintain long-term client relationships',
        'Conduct regular portfolio reviews and update clients',
        'Handle client queries with timely follow-up',
        'Ensure all advisory follows SEBI/RBI/IRDA guidelines',
        'Maintain accurate documentation and CRM updates'
      ]
    },
    {
      id: 2,
      title: 'Junior Wealth Advisor',
      department: 'Wealth Management / Financial Advisory',
      location: 'Vadodara, India',
      type: 'Full-time',
      experience: '0-1 years',
      description: 'We are looking for an experienced financial advisor to join our team and help clients achieve their financial goals through comprehensive planning and investment strategies.',
      requirements: [
        'Graduate (Commerce, Finance)',
        'NISM VA / NISM VII (preferred)',
      ],
      responsibilities: [
        'Assist senior advisors in managing client relationships',
        'Schedule meetings, prepare follow-up notes, and maintain client records',
        'Support in the preparation of financial plans based on client goals and risk profiles',
        'Help in building proposals using financial planning software/tools',
        'Prepare portfolio review reports for client meetings',
        'Maintain accurate and up-to-date CRM records',
        'Coordinate with operations/back-office for account opening, KYC, and transaction support',
        'Stay informed about market trends, investment products, and industry regulations',
        'Attend training sessions and certifications as required (e.g., NISM, CFP modules)'
      ]
    },
    {
      id: 3,
      title: 'Wealth Advisor - Intern',
      department: 'Stock Market / Equity Research / Trading Support',
      location: 'Vadodara, India',
      type: 'Full-time',
      experience: 'Not required',
      description: 'Join our research team to analyze market trends, evaluate investment opportunities, and provide insights to support our advisory services.',
      requirements: [
        'Pursuing or recently completed B. Com, BBA or MBA in Finance',
        'Basic understanding of stock market, equities, and financial statements',
        'Good working knowledge of Excel and PowerPoint',
        'Strong analytical mindset and eagerness to learn',
        'Good communication and time management skills'
      ],
      responsibilities: [
        'Monitor NSE/BSE indices, sector performance, and global market cues',
        'Help prepare research notes and company analysis based on quarterly/annual reports',
        'Maintain and update stock watchlists, track earnings calendars, and organize historical price data',
        'Create market summary reports, investment case studies, and sector snapshots for internal or client use',
        'Observe trade executions and help with order management, confirmations, and compliance records',
        'Summarize relevant economic and company-specific news and its potential market impact',
        'Help track demo portfolios or real-time client portfolios and generate performance summaries',
        'Gain exposure to financial platforms such as Money control, NSE/BSE websites, Trading view, or brokerage platforms'
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Vadodara, India',
      type: 'Full-time',
      experience: '0-1 years',
      description: 'Drive our digital marketing initiatives to enhance brand visibility and generate leads for our financial services.',
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, or related field',
        'Experience with digital marketing platforms',
        'Knowledge of SEO, SEM, and social media marketing',
        'Proficiency in Google Analytics and marketing tools',
        'Creative thinking and problem-solving skills'
      ],
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media presence and content',
        'Optimize website for search engines',
        'Analyze campaign performance and ROI',
        'Collaborate with design and content teams'
      ]
    }
  ];

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "✅ Application Submitted Successfully!",
      description: "Thank you for your interest! We will review your application and get back to you within 2-3 business days.",
    });
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build your career with I Tag Financials and help shape the future of financial services
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Great Team</h3>
                <p className="text-muted-foreground">Work with passionate professionals</p>
              </div>
              <div className="text-center">
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">Advance your career with us</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-muted-foreground">Flexible working arrangements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Current Openings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities and join our mission to transform financial services
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.experience}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Requirements:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {job.responsibilities.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button onClick={() => handleApply(job)} className="w-full">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" type="tel" required />
            </div>
            <div>
              <Label htmlFor="intro">Short Introduction</Label>
              <Textarea id="intro" rows={3} required />
            </div>
            <div>
              <Label htmlFor="resume">CV/Resume (PDF)</Label>
              <Input id="resume" type="file" accept=".pdf" required />
            </div>
            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Career;