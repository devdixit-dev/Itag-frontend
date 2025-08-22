import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import axios from 'axios';
import {
  PlusCircle,
  Edit,
  Trash2,
  Eye,
  LogOut,
  Calendar,
  User,
  BookOpen,
  Mail,
  Briefcase,
  Download,
  User2,
  Book,
  Delete,
  Loader,
  Loader2,
  FileChartColumnIncreasing
} from 'lucide-react';

const Admin = () => {
  // const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('');
  const [emailSubscribers, setEmailSubscribers] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const [year, setYear] = useState(new Date().getFullYear());

  // Generate years range (e.g., 1980 - 2030)
  const years = Array.from({ length: 4 }, (_, i) => 2025 - i);

  const [studyMaterials, setStudyMaterials] = useState({
    active: 'reports',
    reports: [],
    guides: [],
    videos: []
  });

  const [fetchStudyReports, setFetchStudyReports] = useState([]);
  const [fetchStudyGuides, setFetchStudyGuides] = useState([]);
  const [fetchStudyVideos, setFetchStudyVideos] = useState([]);

  const [report, setReport] = useState({
    name: "",
    type: "",
    file: null,
  });

  const [guide, setGuide] = useState({
    name: '',
    desc: '',
    category: '',
    file: null
  });

  const [video, setVideo] = useState({
    name: '',
    category: '',
    duration: '',
    videoLink: ''
  });

  const formatDate = (isoDate: string) => {
    return new Date(isoDate).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const getYear = (isoDate: string) => {
    return new Date(isoDate).getFullYear();
  }

  const handleSubmitReport = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    if (!report.file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("name", report.name);
    formData.append("type", report.type);
    formData.append("report", report.file, report.file.name);

    try {
      const response = await axios.post(`${import.meta.env.VITE_DEV_URL}/admin/add-report`,
        formData,
        {
          withCredentials: true, headers: { "Content-Type": "multipart/form-data" }
        });
      console.log("Report uploaded:", response.data);
      setLoading(false);
      setReport({ name: '', type: '', file: null });
      setActiveTab('');
      toast({
        title: `${response.data.message} 🎉`,
        duration: 3000
      });
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const handleSubmitGuide = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    if (!guide.file) {
      setLoading(false);
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("name", guide.name);
    formData.append("desc", guide.desc);
    formData.append("category", guide.category);
    formData.append("guide", guide.file, guide.file.name);

    try {
      const response = await axios.post(`${import.meta.env.VITE_DEV_URL}/admin/add-guide`,
        formData,
        {
          withCredentials: true, headers: { "Content-Type": "multipart/form-data" }
        });
      console.log("Guide uploaded:", response.data);
      setLoading(false);
      setGuide({ name: '', desc: '', category: '', file: null });
      setActiveTab('');
      toast({
        title: `${response.data.message} 🎉`,
        duration: 3000
      });
    } catch (err) {
      console.error("Upload failed:", err);
    }
  }

  const handleSubmitVideo = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", video.name);
    formData.append("category", video.category);
    formData.append("duration", video.duration);
    formData.append("videoLink", video.videoLink);

    try {
      const response = await axios.post(`${import.meta.env.VITE_DEV_URL}/admin/add-video`,
        formData,
        {
          withCredentials: true, headers: { "Content-Type": "application/json" }
        });
      console.log("Video uploaded:", response.data);
      setLoading(false);
      setVideo({ name: '', category: '', duration: '', videoLink: '' });
      setActiveTab('');
      toast({
        title: `${response.data.message} 🎉`,
        duration: 3000
      });
    } catch (err) {
      console.error("Video failed:", err);
    }
  }

  const handleDeleteEmails = async (id: string, e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_DEV_URL}/admin/remove/email/${id}`, {}, { withCredentials: true })
      console.log(`Email deleted`, response.data);
      setEmailSubscribers((prev) => prev.filter((subscriber) => subscriber._id !== id));
      toast({
        title: `${response.data.message}`,
        duration: 3000
      });
    }
    catch (err) {
      console.error("Email delete failed:", err);
    }
  }

  const handleDeleteReport = async (id: string, e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_DEV_URL}/admin/remove/report/${id}`, {}, { withCredentials: true })
      console.log(`Report deleted`, response.data);
      setFetchStudyReports((prev) => prev.filter((report) => report._id !== id));
      toast({
        title: `${response.data.message}`,
        duration: 3000
      });
    }
    catch (err) {
      console.error("Video failed:", err);
    }
  }

  const handleDeleteGuide = async (id: string, e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_DEV_URL}/admin/remove/guide/${id}`, {}, { withCredentials: true })
      console.log(`Guide deleted`, response.data);
      setFetchStudyGuides((prev) => prev.filter((guide) => guide._id !== id));
      toast({
        title: `${response.data.message}`,
        duration: 3000
      });
    }
    catch (err) {
      console.error("Guide delete failed:", err);
    }
  }

  const handleDeleteVideo = async (id: string, e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${import.meta.env.VITE_DEV_URL}/admin/remove/video/${id}`, {}, { withCredentials: true })
      console.log(`Video link deleted`, response.data);
      setFetchStudyVideos((prev) => prev.filter((video) => video._id !== id));
      toast({
        title: `${response.data.message}`,
        duration: 3000
      });
    }
    catch (err) {
      console.error("Video link delete failed:", err);
    }
  }

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_DEV_URL}/admin/verify`, { withCredentials: true });
        if (response.status === 200 && response.data.loggedIn) {
          setIsLoggedIn(true);

          const fetchClients = async () => {
            const getClients = await (await axios.get(`${import.meta.env.VITE_DEV_URL}/admin/clients`, { withCredentials: true })).data
            setClients(getClients.clients);
          }
          await fetchClients();

          const fetchEmails = async () => {
            const getEmails = await (await axios.post(`${import.meta.env.VITE_DEV_URL}/admin/emails`, {}, { withCredentials: true })).data
            setEmailSubscribers(getEmails.emails);
          }
          await fetchEmails();

          const fetchJobApps = async () => {
            const getJobApps = await (await axios.get(`${import.meta.env.VITE_DEV_URL}/job-apps`, { withCredentials: true })).data
            setJobApplications(getJobApps.jobApplications);
          }
          await fetchJobApps();

          const fetchReports = async () => {
            const getReports = await (await axios.get(`${import.meta.env.VITE_DEV_URL}/admin/reports`, { withCredentials: true })).data
            setFetchStudyReports(getReports.reports);
          }
          fetchReports();

          const fetchGuides = async () => {
            const getGuides = await (await axios.get(`${import.meta.env.VITE_DEV_URL}/admin/guides`, { withCredentials: true })).data
            setFetchStudyGuides(getGuides.guides);
          }
          fetchGuides();

          const fetchVideos = async () => {
            const getVideos = (await axios.get(`${import.meta.env.VITE_DEV_URL}/admin/videos`, { withCredentials: true })).data
            setFetchStudyVideos(getVideos.videos);
          }
          fetchVideos();
        }
      }
      catch (err) {
        setIsLoggedIn(false);
      }
    }
    checkLogin();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const adminLogin = await axios.post(`${import.meta.env.VITE_DEV_URL}/admin`, {
        username: loginForm.username,
        password: loginForm.password
      }, { withCredentials: true });

      if (adminLogin.status === 200) {
        setIsLoggedIn(true);
        toast({
          title: "🎉 Login Successful!",
          description: "Welcome to the admin panel. You can now manage content and view applications.",
        });
      }
    }
    catch (err) {
      setIsLoggedIn(false);
      if (err.response.status === 400) {
        toast({
          title: "❌ Login Failed",
          description: "Invalid credentials",
        });
      }
      else {
        toast({
          title: "🚨 Error",
          description: "Something went wrong. Please try again later.",
        });
        console.log(`Frontend error - ${err}`);
      }
    }
  };

  const handleLogout = async () => {
    const adminLogout = await axios.post(`${import.meta.env.VITE_DEV_URL}/logout`, {}, { withCredentials: true })
    setIsLoggedIn(false);
    console.log(`Logged out`, adminLogout);
    setLoginForm({ username: '', password: '' });
    toast({
      title: "👋 Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  placeholder="Enter username"
                  required
                  autoComplete='true'
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen min-w-screen bg-background">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => window.location.href = "/"}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Site
              </Button>
              <Button variant="outline" onClick={handleLogout} className="hover:bg-red-500">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container flex w-full gap-10 mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex flex-col text-center justify-start items-start gap-4 mb-8">
          <button
            onClick={() => setActiveTab('emails')}
            className={`px-4 py-2 font-medium ${activeTab === 'emails' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
          >
            <Mail className="w-4 h-4 inline mr-2" />
            Email Subscribers ({emailSubscribers.length})
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-4 py-2 font-medium ${activeTab === 'jobs' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
          >
            <Briefcase className="w-4 h-4 inline mr-2" />
            Job Applications ({jobApplications.length})
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`px-4 py-2 font-medium ${activeTab === 'clients' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
          >
            <User2 className="w-4 h-4 inline mr-2" />
            Client Information ({clients.length})
          </button>
          <button
            onClick={() => setActiveTab('study-materials')}
            className={`px-4 py-2 font-medium ${activeTab === 'study-materials' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
          >
            <Book className="w-4 h-4 inline mr-2" />
            Add Study Materials
          </button>
        </div>

        {/* Email Subscribers Tab */}
        {activeTab === 'emails' && (
          <div className='w-[80%] h-full flex flex-col'>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Email Subscribers</h2>
                <p className="text-muted-foreground">Manage newsletter and form subscribers</p>
              </div>
              <Button onClick={() => {
                const csvContent = emailSubscribers.map(sub => `${sub.email},${sub.source},${sub.timestamp}`).join('\n');
                const blob = new Blob([`Email,Source,Date\n${csvContent}`], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'email_subscribers.csv';
                a.click();
              }}>
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>

            <div className="grid gap-4">
              {emailSubscribers.map((subscriber, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div className='w-full flex justify-between items-center'>
                        <div>
                          <p className="font-medium">Email : {subscriber.email}</p>
                          <span className='text-muted-foreground text-sm'>Source : {subscriber.source}</span>
                        </div>

                        <button onClick={(e) => handleDeleteEmails(subscriber._id, e)} className="flex gap-4 text-sm text-muted-foreground p-1 rounded-md hover:cursor-pointer">
                          <Trash2 className='text-red-500' />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {emailSubscribers.length === 0 && (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-muted-foreground">No email subscribers yet.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Job Applications Tab */}
        {activeTab === 'jobs' && (
          <div className='w-[80%]'>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Job Applications</h2>
                <p className="text-muted-foreground">Manage job applications and resumes</p>
              </div>
              <Button onClick={() => { '/post-job' }}>
                <PlusCircle className="w-4 h-4 mr-2" />
                <a href="/post-job">Post New Job</a>
              </Button>
            </div>

            <div className="grid gap-4">
              {jobApplications.map((application, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{application.fullname}</h3>
                        <p className="text-muted-foreground mb-2">Applied for : {application.appliedForRole}</p>
                        <div className="grid grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Email :</span> {application.email}
                          </div>
                          <div>
                            <span className="font-medium">Phone :</span> {application.phone}
                          </div>
                          <div>
                            <span className="font-medium">Intro :</span> {application.intro}
                          </div>
                          <div>
                            <span className="font-medium">Date :</span> {new Date(application.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      {/* <div className="flex gap-2">
                        {application.resume && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              // In a real app, this would download the actual resume file
                              toast({
                                title: "Resume Download",
                                description: "Resume download feature would be implemented with proper file storage.",
                              });
                            }}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Resume
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
              {jobApplications.length === 0 && (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-muted-foreground">No job applications yet.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Client Details Tab */}
        {activeTab === 'clients' && (
          <div className='w-[80%]'>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Client Details</h2>
                <p className="text-muted-foreground">Manage client details</p>
              </div>
            </div>

            <div className="grid gap-4">
              {clients.map((client, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div>
                      <h3 className='text-xl font-bold mb-2'>Personal & Income Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b-2 pb-6">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input value={`${client.personalDetails.fullName}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input value={`${client.personalDetails.email}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Mobile Number</Label>
                          <Input value={`${client.personalDetails.mobileNumber}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Final Goal Amount</Label>
                          <Input value={`${client.personalDetails.finalGoalAmount}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Employment Type</Label>
                          <Input value={`${client.personalDetails.employmentType}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Primary Source of Income</Label>
                          <Input value={`${client.personalDetails.sourceOfIncome}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Monthly Income</Label>
                          <Input value={`${client.personalDetails.monthlyIncome}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Annual Dividend Income</Label>
                          <Input value={`${client.personalDetails.annualDividendIncome}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Annual Rent/Interest Income</Label>
                          <Input value={`${client.personalDetails.annualRentInterestIncome}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Annual Bonus/Gift Income</Label>
                          <Input value={`${client.personalDetails.annualBonusGiftIncome}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">NPS/Pension Scheme</Label>
                          <Input value={`${client.personalDetails.npsScheme}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Annual NPS Amount</Label>
                          <Input value={`${client.personalDetails.annualNpsAmount}`} readOnly />
                        </div>
                      </div>

                      <h3 className='text-xl font-bold mt-4'>Liabilities</h3>
                      {client.liabilities.map((liability: any, index: any) => (
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 border-b-2 pb-6" key={index}>
                          <div>
                            <Label htmlFor="name">Loan Type</Label>
                            <Input value={`${liability.loanType}`} readOnly />
                          </div>
                          <div>
                            <Label htmlFor="email">Loan Amount</Label>
                            <Input value={`${liability.loanAmount}`} readOnly />
                          </div>
                          <div>
                            <Label htmlFor="name">Monthly EMI</Label>
                            <Input value={`${liability.emi}`} readOnly />
                          </div>
                          <div>
                            <Label htmlFor="name">Duration Left (Years)</Label>
                            <Input value={`${liability.durationLeft}`} readOnly />
                          </div>
                          <div>
                            <Label htmlFor="name">Interest Rate (%)</Label>
                            <Input value={`${liability.interestRate}`} readOnly />
                          </div>
                        </div>
                      ))}

                      <h3 className='text-xl font-bold mt-4'>Investments</h3>
                      {client.investments.map((investment: any, index: any) => (
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 border-b-2 pb-6" key={index}>
                          <div>
                            <Label htmlFor="name">Investment Type</Label>
                            <Input value={`${investment.investmentType}`} readOnly />
                          </div>
                          <div>
                            <Label htmlFor="email">Current Value</Label>
                            <Input value={`${investment.amount}`} readOnly />
                          </div>
                        </div>
                      ))}

                      <h3 className='text-xl font-bold mt-4'>Insurance</h3>
                      {client.insurances.map((insurance: any, index: any) => (
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 border-b-2 pb-6" key={index}>
                          <div>
                            <Label htmlFor="name">Insurance Type</Label>
                            <Input value={`${insurance.insuranceType}`} readOnly />
                          </div>
                          <div>
                            <Label htmlFor="email">Annual Premium</Label>
                            <Input value={`${insurance.premium}`} readOnly />
                          </div>
                          <div>
                            <Label htmlFor="name">Coverage Amount</Label>
                            <Input value={`${insurance.coverage}`} readOnly />
                          </div>
                          <div>
                            <Label htmlFor="email">Additional Details</Label>
                            <Input value={`${insurance.details}`} readOnly />
                          </div>
                        </div>
                      ))}

                      <h3 className='text-xl font-bold mt-4'>Summary</h3>
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4 pb-6" key={index}>
                        <div>
                          <Label htmlFor="name">Buffer Amount</Label>
                          {client.summary.bufferAmount < 0
                            ? <Input className='text-red-500' value={`${client.summary.bufferAmount}`} readOnly />
                            : <Input className='text-green-500 font-medium' value={`${client.summary.bufferAmount}`} readOnly />
                          }
                        </div>
                        <div>
                          <Label htmlFor="email">Total Income</Label>
                          <Input value={`${client.summary.totalIncome}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="name">Total Insurances</Label>
                          <Input value={`${client.summary.totalInsurance}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="email">Total Investments</Label>
                          <Input value={`${client.summary.totalInvestments}`} readOnly />
                        </div>
                        <div>
                          <Label htmlFor="email">Total Liabilities</Label>
                          <Input value={`${client.summary.totalLiabilities}`} readOnly />
                        </div>
                      </div>

                    </div>
                  </CardContent>
                </Card>
              ))}
              {clients.length === 0 && (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-muted-foreground">No clients yet.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Study Materials Tab */}
        {activeTab === 'study-materials' && (
          <div className='w-[80%]'>
            {/* Sub Tabs */}
            <div className="flex gap-4 mb-6 border-b">
              <button
                onClick={() => setStudyMaterials({ ...studyMaterials, active: 'reports' })}
                className={`px-4 py-2 font-medium ${studyMaterials.active === 'reports'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground'
                  }`}
              >
                Market Reports ({fetchStudyReports.length})
              </button>
              <button
                onClick={() => setStudyMaterials({ ...studyMaterials, active: 'guides' })}
                className={`px-4 py-2 font-medium ${studyMaterials.active === 'guides'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground'
                  }`}
              >
                Investment Guides ({fetchStudyGuides.length})
              </button>
              <button
                onClick={() => setStudyMaterials({ ...studyMaterials, active: 'videos' })}
                className={`px-4 py-2 font-medium ${studyMaterials.active === 'videos'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-muted-foreground'
                  }`}
              >
                Videos ({fetchStudyVideos.length})
              </button>
            </div>

            {/* Add Button + Dialog */}
            <div className="flex justify-end mb-6">
              {studyMaterials.active === 'reports' && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" /> Add Market Report
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md" aria-describedby={undefined}>
                    <DialogHeader>
                      <DialogTitle>Add Market Report</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleSubmitReport} encType="multipart/form-data">
                      <div>
                        <Label>Name</Label>
                        <Input name="name" value={report.name} onChange={(e) => setReport({ ...report, name: e.target.value })} required />
                      </div>
                      <div>
                        <Label>Date</Label>
                        <Input type="text" name="date" defaultValue={new Date().toISOString().split("T")[0]} disabled />
                      </div>
                      <div>
                        <Label>Type</Label>
                        <Input name="type" value={report.type} onChange={(e) => setReport({ ...report, type: e.target.value })} required />
                      </div>
                      <div>
                        <Label>Upload File</Label>
                        <Input type="file" name="report" onChange={(e) => setReport({ ...report, file: e.target.files[0] })} required />
                      </div>
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Uploading report" : "Add Report"} <Loader2 className={`${loading ? "animate-spin" : "hidden"}`} />
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              )}

              {studyMaterials.active === 'guides' && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" /> Add Investment Guide
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md" aria-describedby={undefined}>
                    <DialogHeader>
                      <DialogTitle>Add Investment Guide</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleSubmitGuide}>
                      <div>
                        <Label>Name</Label>
                        <Input name="name" value={guide.name} onChange={(e) => setGuide({ ...guide, name: e.target.value })} required />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Textarea name="desc" value={guide.desc} onChange={(e) => setGuide({ ...guide, desc: e.target.value })} rows={2} required />
                      </div>
                      <div>
                        <Label>Category</Label>
                        <Input name="category" value={guide.category} onChange={(e) => setGuide({ ...guide, category: e.target.value })} required />
                      </div>
                      <div>
                        <Label>Upload File</Label>
                        <Input type="file" name="guide" onChange={(e) => setGuide({ ...guide, file: e.target.files[0] })} required />
                      </div>
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Uploading report" : "Add Guide"} <Loader2 className={`${loading ? "animate-spin" : "hidden"}`} />
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              )}

              {studyMaterials.active === 'videos' && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="w-4 h-4 mr-2" /> Add Video Link
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md" aria-describedby={undefined}>
                    <DialogHeader>
                      <DialogTitle>Add Video</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleSubmitVideo}>
                      <div>
                        <Label>Name</Label>
                        <Input name="name" value={video.name} onChange={(e) => setVideo({ ...video, name: e.target.value })} required />
                      </div>
                      <div>
                        <Label>Category</Label>
                        <Input name="category" value={video.category} onChange={(e) => setVideo({ ...video, category: e.target.value })} required />
                      </div>
                      <div>
                        <Label>Duration of Video</Label>
                        <Input name="duration" value={video.duration} onChange={(e) => setVideo({ ...video, duration: e.target.value })} required />
                      </div>
                      <div>
                        <Label>Video Link</Label>
                        <Input type="url" name="videoLink" value={video.videoLink} onChange={(e) => setVideo({ ...video, videoLink: e.target.value })} required />
                      </div>
                      <Button type="submit" className="w-full">Add Video</Button>
                    </form>
                  </DialogContent>
                </Dialog>
              )}
            </div>

            {/* Cards */}
            <div className="grid gap-4">
              {studyMaterials.active === 'reports' &&
                fetchStudyReports?.map((report, index) => (
                  <Card key={report.id || index}>
                    <CardContent className="pt-6 flex justify-between items-center">
                      <div className='flex flex-col gap-2'>
                        <h3 className="font-semibold">{report.name}</h3>
                        <p className="text-muted-foreground text-sm">Type : {report.type}</p>
                        <p className="text-muted-foreground text-sm">Date : {formatDate(report.createdAt)}</p>
                      </div>
                      <div>
                        <Button
                          onClick={(e) => handleDeleteReport(report._id, e)}
                          className='bg-red-500 hover:bg-red-500 hover:opacity-80'
                        >
                          Remove
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )).reverse()
              }

              {studyMaterials.active === 'guides' &&
                fetchStudyGuides?.map((guide, index) => (
                  <Card key={guide.id || index}>
                    <CardContent className="pt-6 flex justify-between items-center">
                      <div className='flex flex-col gap-2'>
                        <h3 className="font-semibold">{guide.name}</h3>
                        <p className='text-muted-foreground'>Description : {guide.desc}</p>
                        <p className="text-muted-foreground text-sm">Category : {guide.category}</p>
                      </div>
                      <div>
                        <Button
                          onClick={(e) => handleDeleteGuide(guide._id, e)}
                          className='bg-red-500 hover:bg-red-500 hover:opacity-80'> Remove </Button>
                      </div>
                    </CardContent>
                  </Card>
                )).reverse()
              }

              {studyMaterials.active === 'videos' &&
                fetchStudyVideos?.map((video, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6 flex justify-between items-center">
                      <div className='flex flex-col gap-2'>
                        <h3 className="font-semibold">{video.name}</h3>
                        <p className="text-muted-foreground text-sm">Category : {video.category} | Duration : {video.duration} Minutes</p>
                      </div>
                      <div>
                        <Button
                          onClick={(e) => handleDeleteVideo(video._id, e)}
                          className='bg-red-500 hover:bg-red-500 hover:opacity-80'> Remove </Button>
                      </div>
                    </CardContent>
                  </Card>
                )).reverse()
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;