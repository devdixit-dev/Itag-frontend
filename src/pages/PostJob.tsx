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
import axios from "axios";

interface JobPostData {
  title: string;
  department: string;
  location: string;
  experience: string;
  requirements: string;
  responsibilities: string;
}

const PostJob = () => {
  const { toast } = useToast();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<JobPostData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: JobPostData) => {
    setIsSubmitting(true);
    
    const response = await axios.post(`${import.meta.env.VITE_DEV_URL}/admin/post-job`,
      {
        title: data.title,
        department: data.department,
        location: data.location,
        experience: data.experience,
        requirements: data.requirements,
        responsibilities: data.responsibilities
      },
      { withCredentials: true }
    );
    const sentData = response.data;
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real application, this would send data to backend
    console.log("Job post frontend data:", sentData);
    
    toast({
      title: "Job Posted Successfully!",
      description: "Your job posting has been submitted",
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
                    <Label htmlFor="title">Job Title *</Label>
                    <Input 
                      {...register("title", { required: "Job title is required" })}
                      placeholder="e.g., Senior Financial Advisor"
                      className={errors.title ? "border-red-500" : ""}
                    />
                    {errors.title && (
                      <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
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

                {/* Detailed Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">Detailed Information</h3>

                  <div>
                    <Label htmlFor="requirements">Requirements & Qualifications</Label>
                    <Textarea 
                      {...register("requirements")}
                      placeholder="List education requirements, certifications, experience, and other qualifications"
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="responsibilities">Job Responsibilities *</Label>
                    <Textarea 
                      {...register("responsibilities", { required: "Job responsibilities is required" })}
                      placeholder="Provide a detailed description of the role, responsibilities, and what the candidate will be doing"
                      className={errors.responsibilities ? "border-red-500" : ""}
                      rows={5}
                    />
                    {errors.responsibilities && (
                      <p className="text-sm text-red-500 mt-1">{errors.responsibilities.message}</p>
                    )}
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