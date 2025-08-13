import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Download,
  Play,
  FileText,
  Calculator,
  TrendingUp,
  Shield,
  PiggyBank,
  Calendar,
  Star
} from "lucide-react";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Resources = () => {
  const videos = [
    {
      title: "SIP vs Lump Sum: Which is Better?",
      duration: "12:45",
      views: "45K",
      category: "Investment Basics",
      thumbnail: "🎯"
    },
    {
      title: "How to Read Annual Reports",
      duration: "18:30",
      views: "32K",
      category: "Stock Analysis",
      thumbnail: "📊"
    },
    {
      title: "Understanding Life Insurance",
      duration: "15:20",
      views: "28K",
      category: "Insurance",
      thumbnail: "🛡️"
    },
    {
      title: "Market Trends 2024",
      duration: "22:15",
      views: "67K",
      category: "Market Analysis",
      thumbnail: "📈"
    }
  ];

  const guides = [
    {
      title: "Complete Guide to Mutual Fund Investing",
      description: "Learn the fundamentals of mutual fund investing, from SIP to lump sum strategies.",
      category: "Investment",
      downloadCount: "2.5K",
      rating: 4.8,
      icon: PiggyBank
    },
    {
      title: "Tax Planning Strategies for 2024",
      description: "Comprehensive guide to save taxes under various sections and optimize your returns.",
      category: "Tax Planning",
      downloadCount: "1.8K",
      rating: 4.9,
      icon: Calculator
    },
    {
      title: "IPO Investment Guide",
      description: "Everything you need to know about investing in Initial Public Offerings.",
      category: "IPO",
      downloadCount: "3.2K",
      rating: 4.7,
      icon: TrendingUp
    },
    {
      title: "Insurance Planning Handbook",
      description: "Choose the right insurance policies for complete financial protection.",
      category: "Insurance",
      downloadCount: "1.5K",
      rating: 4.6,
      icon: Shield
    }
  ];

  const reports = [
    {
      title: "Monthly Market Outlook - January 2024",
      date: "Jan 15, 2024",
      type: "Market Report",
      pages: "25 pages",
      icon: TrendingUp
    },
    {
      title: "Top Performing Mutual Funds Q4 2023",
      date: "Jan 10, 2024",
      type: "Performance Report",
      pages: "18 pages",
      icon: Star
    },
    {
      title: "Insurance Sector Analysis 2024",
      date: "Jan 5, 2024",
      type: "Sector Report",
      pages: "32 pages",
      icon: Shield
    },
    {
      title: "Tax Saving Investment Options",
      date: "Dec 28, 2023",
      type: "Tax Guide",
      pages: "15 pages",
      icon: Calculator
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-16 h-16 text-primary mr-4" />
              <h1 className="section-title">Study Materials</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Enhance your financial knowledge with our comprehensive collection of guides,
              videos, and market reports designed to help you make informed investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="reports" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="calculators">Tools</TabsTrigger>
            </TabsList>

            {/* Investment Guides */}
            <TabsContent value="guides">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Investment Guides</h2>
                  <p className="text-muted-foreground">
                    Comprehensive guides to help you understand different investment options
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {guides.map((guide, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                            <guide.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{guide.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                        <CardDescription>{guide.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                            {guide.category}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {guide.downloadCount} downloads
                          </span>
                        </div>
                        <Button className="w-full btn-finance">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Video Tutorials */}
            <TabsContent value="videos">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Video Tutorials</h2>
                  <p className="text-muted-foreground">
                    Learn from our experts through detailed video explanations
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {videos.map((video, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 mb-4">
                          <div className="text-6xl text-center">{video.thumbnail}</div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <Play className="w-8 h-8 text-white ml-1" />
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                        <CardDescription>{video.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-muted-foreground">
                            Duration: {video.duration}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {video.views} views
                          </span>
                        </div>
                        <Button className="w-full btn-finance">
                          <Play className="w-4 h-4 mr-2" />
                          Watch Video
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Market Reports */}
            <TabsContent value="reports">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Market Reports</h2>
                  <p className="text-muted-foreground">
                    Stay updated with our latest market analysis and research reports
                  </p>
                </div>

                <div className="space-y-6">
                  {reports.map((report, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                              <report.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{report.title}</h3>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {report.date}
                                </span>
                                <span>{report.type}</span>
                                <span>{report.pages}</span>
                              </div>
                            </div>
                          </div>
                          <Button className="btn-finance">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Financial Tools */}
            <TabsContent value="calculators">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Financial Calculators</h2>
                  <p className="text-muted-foreground">
                    Use our interactive tools to plan your investments and financial goals
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calculator className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle>SIP Calculator</CardTitle>
                      <CardDescription>
                        Calculate returns from systematic investment plans
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full btn-finance">Use Calculator</Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <PiggyBank className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle>Goal Planner</CardTitle>
                      <CardDescription>
                        Plan investments for your financial goals
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full btn-finance">Plan Goals</Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle>Retirement Planner</CardTitle>
                      <CardDescription>
                        Calculate how much you need for retirement
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full btn-finance">Plan Retirement</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <WhatsAppFloat />

      <Footer />
    </div>
  );
};

export default Resources;