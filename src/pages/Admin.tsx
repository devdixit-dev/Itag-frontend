import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useBlogData } from '@/hooks/useBlogData';
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
  User2
} from 'lucide-react';
import Insurance from './Insurance';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { blogs, addBlog, updateBlog, deleteBlog } = useBlogData();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('clients');
  const [emailSubscribers, setEmailSubscribers] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);
  const [clients, setClients] = useState([]);

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

      console.log('Login Success:', adminLogin.data);

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

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newBlog = {
      title: formData.get('title') as string,
      excerpt: formData.get('excerpt') as string,
      content: formData.get('content') as string,
      author: formData.get('author') as string,
      readTime: "5 min read",
      category: formData.get('category') as string,
      status: "Published"
    };

    addBlog(newBlog);
    setIsAddBlogOpen(false);
    toast({
      title: "✅ Blog Added Successfully!",
      description: "New blog post has been published and is now live.",
    });
  };

  const handleEditBlog = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const updatedData = {
      title: formData.get('title') as string,
      excerpt: formData.get('excerpt') as string,
      content: formData.get('content') as string,
      author: formData.get('author') as string,
      category: formData.get('category') as string,
    };

    updateBlog(editingBlog.id, updatedData);
    setEditingBlog(null);
    toast({
      title: "📝 Blog Updated Successfully!",
      description: "Blog post has been updated and changes are now live.",
    });
  };

  const handleDeleteBlog = (id: number) => {
    deleteBlog(id);
    toast({
      title: "🗑️ Blog Deleted Successfully!",
      description: "Blog post has been permanently removed.",
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
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate('/')}>
                <Eye className="w-4 h-4 mr-2" />
                View Site
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-4 py-2 font-medium ${activeTab === 'blogs' ? 'border-b-2 border-primary text-primary' : 'text-muted-foreground'}`}
          >
            <BookOpen className="w-4 h-4 inline mr-2" />
            Blog Management
          </button>
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
        </div>

        {/* Blog Management Tab */}
        {activeTab === 'blogs' && (
          <>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Blog Management</h2>
                <p className="text-muted-foreground">Manage your blog posts and content</p>
              </div>
              <Dialog open={isAddBlogOpen} onOpenChange={setIsAddBlogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add New Blog
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add New Blog Post</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddBlog} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" name="title" required />
                    </div>
                    <div>
                      <Label htmlFor="excerpt">Excerpt</Label>
                      <Textarea id="excerpt" name="excerpt" rows={2} required />
                    </div>
                    <div>
                      <Label htmlFor="content">Content</Label>
                      <Textarea id="content" name="content" rows={6} required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="author">Author</Label>
                        <Input id="author" name="author" required />
                      </div>
                      <div>
                        <Label htmlFor="category">Category</Label>
                        <Input id="category" name="category" required />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Publish Blog
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {blogs.map((blog) => (
                <Card key={blog.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{blog.title}</CardTitle>
                        <CardDescription className="mb-3">{blog.excerpt}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {blog.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {blog.date}
                          </div>
                          <Badge variant="secondary">{blog.category}</Badge>
                          <Badge variant={blog.status === 'Published' ? 'default' : 'outline'}>
                            {blog.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingBlog(blog)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteBlog(blog.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Email Subscribers Tab */}
        {activeTab === 'emails' && (
          <div>
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
                      <div className='w-full flex justify-between'>
                        <p className="font-medium">{subscriber.email}</p>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>Source : {subscriber.source}</span>
                        </div>
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
          <div>
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
          <div>
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


        {/* Edit Blog Dialog */}
        <Dialog open={!!editingBlog} onOpenChange={() => setEditingBlog(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Blog Post</DialogTitle>
            </DialogHeader>
            {editingBlog && (
              <form onSubmit={handleEditBlog} className="space-y-4">
                <div>
                  <Label htmlFor="edit-title">Title</Label>
                  <Input id="edit-title" name="title" defaultValue={editingBlog.title} required />
                </div>
                <div>
                  <Label htmlFor="edit-excerpt">Excerpt</Label>
                  <Textarea id="edit-excerpt" name="excerpt" rows={2} defaultValue={editingBlog.excerpt} required />
                </div>
                <div>
                  <Label htmlFor="edit-content">Content</Label>
                  <Textarea id="edit-content" name="content" rows={6} defaultValue={editingBlog.content} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-author">Author</Label>
                    <Input id="edit-author" name="author" defaultValue={editingBlog.author} required />
                  </div>
                  <div>
                    <Label htmlFor="edit-category">Category</Label>
                    <Input id="edit-category" name="category" defaultValue={editingBlog.category} required />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Update Blog
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Admin;