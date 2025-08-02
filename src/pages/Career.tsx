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
      title: 'Senior Financial Advisor',
      department: 'Advisory Services',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for an experienced financial advisor to join our team and help clients achieve their financial goals through comprehensive planning and investment strategies.',
      requirements: [
        'Bachelor\'s degree in Finance, Economics, or related field',
        'Certified Financial Planner (CFP) certification preferred',
        '3+ years of experience in financial advisory',
        'Strong analytical and communication skills',
        'Knowledge of investment products and tax planning'
      ],
      responsibilities: [
        'Provide comprehensive financial planning services',
        'Analyze client financial situations and goals',
        'Develop customized investment strategies',
        'Monitor and review client portfolios',
        'Maintain client relationships and provide ongoing support'
      ]
    },
    {
      id: 2,
      title: 'Investment Research Analyst',
      department: 'Research',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Join our research team to analyze market trends, evaluate investment opportunities, and provide insights to support our advisory services.',
      requirements: [
        'Master\'s degree in Finance, Economics, or MBA',
        'CFA Level 1 or higher preferred',
        'Strong analytical and research skills',
        'Proficiency in financial modeling',
        'Knowledge of equity and debt markets'
      ],
      responsibilities: [
        'Conduct fundamental analysis of securities',
        'Prepare research reports and recommendations',
        'Monitor market trends and economic indicators',
        'Support investment decision-making process',
        'Present findings to senior management'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '2-3 years',
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
              Build your career with ITagFin and help shape the future of financial services
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
                      <CardDescription className="text-base">{job.description}</CardDescription>
                    </div>
                    {/* <Badge variant="secondary">{job.type}</Badge> */}
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