import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import pdf from '../../downloads/Aug Month.pdf'
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
import { useEffect, useState } from "react";
import axios from "axios";
import IPOServices from "./IpoServices";

const Resources = () => {
  const videos = [
    {
      title: "SIP vs Lump Sum: Which is Better?",
      duration: "12:45",
      category: "Investment Basics",
      thumbnail: "🎯"
    },
    {
      title: "How to Read Annual Reports",
      duration: "18:30",
      category: "Stock Analysis",
      thumbnail: "📊"
    },
    {
      title: "Understanding Life Insurance",
      duration: "15:20",
      category: "Insurance",
      thumbnail: "🛡️"
    },
    {
      title: "Market Trends 2024",
      duration: "22:15",
      category: "Market Analysis",
      thumbnail: "📈"
    }
  ];

  const [fetchReports, setFetchReports] = useState<any[]>([]);
  const [fetchGuides, setFetchGuides] = useState<any[]>([]);
  const [fetchVideos, setFetchVideos] = useState<any[]>([]);

  useEffect(() => {
    const getReports = async () => {
      const response = await (await axios.get(`${import.meta.env.VITE_DEV_URL}/admin/reports`)).data
      setFetchReports(response.reports);
    }
    getReports();

    const getGuides = async () => {
      const response = (await axios.get(`${import.meta.env.VITE_DEV_URL}/admin/guides`)).data
      setFetchGuides(response.guides);
    }
    getGuides();

    const getVideos = async () => {
      const response = (await axios.get(`${import.meta.env.VITE_DEV_URL}/admin/videos`)).data
      setFetchVideos(response.videos);
    }
    getVideos();
  }, [])

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
                  {fetchGuides.map((guide, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{guide.name}</CardTitle>
                        <CardDescription>{guide.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                            {guide.category}
                          </span>
                        </div>
                        <a href={guide.fileLink} className="btn-finance flex items-center justify-center" target="_blank">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
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
                  {fetchVideos.map((video, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{video.name}</CardTitle>
                        <CardDescription>{video.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-muted-foreground">
                            Duration: {video.duration} Min
                          </span>
                        </div>
                        <a href={video.videoLink} className="btn-finance flex items-center justify-center" target="_blank">
                            <Play className="w-4 h-4 mr-2" />
                            Watch Video
                          </a>
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
                  {fetchReports.map((report, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground">{report.name}</h3>
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span>{report.type}</span>
                              </div>
                            </div>
                          </div>
                          <a href={report.fileLink} className="btn-finance flex items-center" target="_blank">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
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