import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, MapPin, IndianRupee, Clock, Users, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JobPostData {
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  jobTitle: string;
  department: string;
  jobType: string;
  workMode: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  experience: string;
  skills: string;
  jobDescription: string;
  requirements: string;
  benefits: string;
  applicationDeadline: string;
}

const PostJob = () => {
  const { toast } = useToast();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<JobPostData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: JobPostData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, this would send data to backend
    console.log("Job post data:", data);
    
    toast({
      title: "Job Posted Successfully!",
      description: "Your job posting has been submitted and will be reviewed within 24 hours.",
      duration: 5000,
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title mb-6">Post a Job</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* Job Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Job Details</h3>
                  </div>
                  
                  <div>
                    <Label htmlFor="jobTitle">Job Title *</Label>
                    <Input 
                      {...register("jobTitle", { required: "Job title is required" })}
                      placeholder="e.g., Senior Financial Advisor"
                      className={errors.jobTitle ? "border-red-500" : ""}
                    />
                    {errors.jobTitle && (
                      <p className="text-sm text-red-500 mt-1">{errors.jobTitle.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select onValueChange={(value) => setValue("department", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="investment">Investment Advisory</SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="it">Information Technology</SelectItem>
                        <SelectItem value="legal">Legal & Compliance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="jobType">Job Type *</Label>
                    <Select onValueChange={(value) => setValue("jobType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="consultant">Consultant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="workMode">Work Mode</Label>
                    <Select onValueChange={(value) => setValue("workMode", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="on-site">On-site</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input 
                      {...register("location", { required: "Location is required" })}
                      placeholder="e.g., Mumbai, Maharashtra"
                      className={errors.location ? "border-red-500" : ""}
                    />
                    {errors.location && (
                      <p className="text-sm text-red-500 mt-1">{errors.location.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select onValueChange={(value) => setValue("experience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (5-10 years)</SelectItem>
                        <SelectItem value="lead">Lead/Manager (8+ years)</SelectItem>
                        <SelectItem value="executive">Executive (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Compensation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                      <IndianRupee className="w-5 h-5" />
                      Compensation
                    </h3>
                  </div>
                  
                  <div>
                    <Label htmlFor="salaryMin">Minimum Salary (₹/year)</Label>
                    <Input 
                      {...register("salaryMin", { valueAsNumber: true })}
                      type="number"
                      placeholder="300000"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="salaryMax">Maximum Salary (₹/year)</Label>
                    <Input 
                      {...register("salaryMax", { valueAsNumber: true })}
                      type="number"
                      placeholder="800000"
                    />
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Detailed Information</h3>
                  
                  <div>
                    <Label htmlFor="skills">Required Skills *</Label>
                    <Textarea 
                      {...register("skills", { required: "Skills are required" })}
                      placeholder="List the key skills required for this position (e.g., Financial Planning, Investment Analysis, Risk Management)"
                      className={errors.skills ? "border-red-500" : ""}
                      rows={3}
                    />
                    {errors.skills && (
                      <p className="text-sm text-red-500 mt-1">{errors.skills.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="jobDescription">Job Description *</Label>
                    <Textarea 
                      {...register("jobDescription", { required: "Job description is required" })}
                      placeholder="Provide a detailed description of the role, responsibilities, and what the candidate will be doing"
                      className={errors.jobDescription ? "border-red-500" : ""}
                      rows={5}
                    />
                    {errors.jobDescription && (
                      <p className="text-sm text-red-500 mt-1">{errors.jobDescription.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="requirements">Requirements & Qualifications</Label>
                    <Textarea 
                      {...register("requirements")}
                      placeholder="List education requirements, certifications, experience, and other qualifications"
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="benefits">Benefits & Perks</Label>
                    <Textarea 
                      {...register("benefits")}
                      placeholder="Describe the benefits, perks, and what makes this opportunity attractive"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="applicationDeadline">Application Deadline</Label>
                    <Input 
                      {...register("applicationDeadline")}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="btn-finance flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                        Posting Job...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Post Job Opening
                      </>
                    )}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    className="flex-1"
                    onClick={() => window.history.back()}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostJob;