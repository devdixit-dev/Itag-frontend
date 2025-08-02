import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import {
  Plus,
  Trash2,
  User,
  Target,
  CreditCard,
  TrendingUp,
  Shield,
  Mail,
  Calculator,
  IndianRupee,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PersonalDetails {
  fullName: string;
  email: string;
  mobileNumber: string;
  finalGoalAmount: number;
  employmentType: string;
  sourceOfIncome: string; 
  monthlyIncome: number;
  annualDividendIncome: number;
  annualRentInterestIncome: number;
  annualBonusGiftIncome: number;
  npsScheme: string;
  annualNpsAmount: number;
}

interface Liability {
  id: string;
  loanType: string;
  loanAmount: number;
  emi: number;
  durationLeft: number;
  interestRate: number;
}

interface Investment {
  id: string;
  investmentType: string;
  amount: number;
}

interface Insurance {
  id: string;
  insuranceType: string;
  premium: number;
  coverage: number;
  details: string;
}

const FinancialJourney = () => {
  const { toast } = useToast();
  const { register, handleSubmit, watch, setValue } = useForm<PersonalDetails>();
  const [npsAmount, setNpsAmount] = useState<any>([]);
  const [liabilities, setLiabilities] = useState<Liability[]>([]);
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [insurances, setInsurances] = useState<Insurance[]>([]);
  const [showLiabilityForm, setShowLiabilityForm] = useState(false);
  const [showInvestmentForm, setShowInvestmentForm] = useState(false);
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);

  const personalDetails = watch();

  // Calculate totals
  const totalIncome = (personalDetails?.monthlyIncome || 0) * 12 +
    (personalDetails?.annualDividendIncome || 0) +
    (personalDetails?.annualRentInterestIncome || 0) +
    (personalDetails?.annualBonusGiftIncome || 0);

  const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.emi * 12, 0);
  const totalInvestments = investments.reduce((sum, investment) => sum + investment.amount, 0);
  const totalInsurance = insurances.reduce((sum, insurance) => sum + insurance.premium, 0);
  const bufferAmount = totalIncome - totalLiabilities - totalInsurance - npsAmount;

  const pieChartData = [
    { name: 'Available Income', value: Math.max(bufferAmount, 0), color: '#22c55e' },
    { name: 'Liabilities', value: totalLiabilities, color: '#ef4444' },
    { name: 'Insurance', value: totalInsurance, color: '#3b82f6' },
  ];

  const barChartData = [
    { name: 'Total Income', amount: totalIncome },
    { name: 'Liabilities', amount: totalLiabilities },
    { name: 'Investments', amount: totalInvestments },
    { name: 'Insurance', amount: totalInsurance },
    { name: 'Buffer', amount: Math.max(bufferAmount, 0) },
  ];

  const addLiability = (data: any) => {
    const newLiability: Liability = {
      id: Date.now().toString(),
      ...data
    };
    setLiabilities([...liabilities, newLiability]);
    setShowLiabilityForm(false);
    toast({
      title: "Liability Added",
      description: "Your liability has been successfully added.",
    });
  };

  const addInvestment = (data: any) => {
    const newInvestment: Investment = {
      id: Date.now().toString(),
      ...data
    };
    setInvestments([...investments, newInvestment]);
    setShowInvestmentForm(false);
    toast({
      title: "Investment Added",
      description: "Your investment has been successfully added.",
    });
  };

  const addInsurance = (data: any) => {
    const newInsurance: Insurance = {
      id: Date.now().toString(),
      ...data
    };
    setInsurances([...insurances, newInsurance]);
    setShowInsuranceForm(false);
    toast({
      title: "Insurance Added",
      description: "Your insurance has been successfully added.",
    });
  };

  const removeLiability = (id: string) => {
    setLiabilities(liabilities.filter(l => l.id !== id));
    toast({
      title: "Liability Removed",
      description: "Liability has been removed from your profile.",
    });
  };

  const removeInvestment = (id: string) => {
    setInvestments(investments.filter(i => i.id !== id));
    toast({
      title: "Investment Removed",
      description: "Investment has been removed from your profile.",
    });
  };

  const removeInsurance = (id: string) => {
    setInsurances(insurances.filter(i => i.id !== id));
    toast({
      title: "Insurance Removed",
      description: "Insurance has been removed from your profile.",
    });
  };

  const onSubmit = async (data: PersonalDetails) => {
    const financialData = {
      personalDetails: data,
      liabilities,
      investments,
      insurances,
      summary: {
        totalIncome,
        totalLiabilities,
        totalInvestments,
        totalInsurance,
        bufferAmount: Math.max(bufferAmount, 0)
      },
      timestamp: new Date().toISOString()
    };

    // Save email to localStorage for admin to view
    const emails = JSON.parse(localStorage.getItem('financial_journey_emails') || '[]');
    if (!emails.find((e: any) => e.email === data.email)) {
      emails.push({
        email: data.email,
        source: 'financial_journey',
        timestamp: new Date().toISOString(),
        name: data.fullName,
        phone: data.mobileNumber
      });
      localStorage.setItem('financial_journey_emails', JSON.stringify(emails));
    }

    try {
      const res = await fetch("http://localhost:5000/client-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalDetails: financialData.personalDetails,
          liabilities: liabilities,
          investments: investments,
          insurances: insurances,
          summary: financialData.summary
        }),
      });

      const result = await res.json();

      if (res.ok) {
        toast({
          title: "Financial Profile Submitted!",
          description: "Your financial data has been submitted successfully.",
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "Something went wrong while submitting your financial profile.",
        variant: "destructive"
      });
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title mb-6">Your Financial Journey</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete your financial profile to get personalized recommendations and planning
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Personal & Income Details
                </CardTitle>
                <CardDescription>
                  Provide your basic information and income sources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input {...register("fullName", { required: true })} placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input {...register("email", { required: true })} type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input {...register("mobileNumber", { required: true })} placeholder="+91 9876543210" />
                    </div>
                    <div>
                      <Label htmlFor="finalGoalAmount">Final Goal Amount (₹)</Label>
                      <Input {...register("finalGoalAmount", { valueAsNumber: true })} type="number" placeholder="10000000" />
                    </div>
                    <div>
                      <Label htmlFor="employmentType">Employment Type</Label>
                      <Select onValueChange={(value) => setValue("employmentType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select employment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salaried">Salaried</SelectItem>
                          <SelectItem value="business">Business Owner</SelectItem>
                          <SelectItem value="freelancer">Freelancer</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="sourceOfIncome">Primary Source of Income</Label>
                      <Input {...register("sourceOfIncome")} placeholder="Job, Business, etc." />
                    </div>
                    <div>
                      <Label htmlFor="monthlyIncome">Monthly Income (₹)</Label>
                      <Input {...register("monthlyIncome", { valueAsNumber: true })} type="number" placeholder="50000" />
                    </div>
                    <div>
                      <Label htmlFor="dividendIncome">Annual Dividend Income (₹)</Label>
                      <Input {...register("annualDividendIncome", { valueAsNumber: true })} type="number" placeholder="25000" />
                    </div>
                    <div>
                      <Label htmlFor="rentIncome">Annual Rent/Interest Income (₹)</Label>
                      <Input {...register("annualRentInterestIncome", { valueAsNumber: true })} type="number" placeholder="120000" />
                    </div>
                    <div>
                      <Label htmlFor="bonusIncome">Annual Bonus/Gift Income (₹)</Label>
                      <Input {...register("annualBonusGiftIncome", { valueAsNumber: true })} type="number" placeholder="100000" />
                    </div>
                    <div>
                      <Label htmlFor="npsScheme">NPS/Pension Scheme</Label>
                      <Input {...register("npsScheme")} placeholder="NPS Tier I, EPF, etc." />
                    </div>
                    <div>
                      <Label htmlFor="npsAmount">Annual NPS Amount (₹)</Label>
                      <Input {...register("annualNpsAmount", { valueAsNumber: true })} onChange={(e) => { setNpsAmount(e.target.value) }} type="number" placeholder="50000" />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Liabilities */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-red-500" />
                    Liabilities
                  </CardTitle>
                  <CardDescription>Manage your loans and debts</CardDescription>
                </div>
                <Button onClick={() => setShowLiabilityForm(true)} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Liability
                </Button>
              </CardHeader>
              <CardContent>
                {liabilities.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">No liabilities added yet</p>
                ) : (
                  <div className="space-y-3">
                    {liabilities.map((liability) => (
                      <div key={liability.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{liability.loanType}</h4>
                          <p className="text-sm text-muted-foreground">
                            Amount: ₹{liability.loanAmount.toLocaleString()} | EMI: ₹{liability.emi} |
                            Duration: {liability.durationLeft} years | Rate: {liability.interestRate}%
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => removeLiability(liability.id)}>
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Investments */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    Investments
                  </CardTitle>
                  <CardDescription>Track your investment portfolio</CardDescription>
                </div>
                <Button onClick={() => setShowInvestmentForm(true)} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Investment
                </Button>
              </CardHeader>
              <CardContent>
                {investments.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">No investments added yet</p>
                ) : (
                  <div className="space-y-3">
                    {investments.map((investment) => (
                      <div key={investment.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{investment.investmentType}</h4>
                          <p className="text-sm text-muted-foreground">Amount: ₹{investment.amount.toLocaleString()}</p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => removeInvestment(investment.id)}>
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    Insurance
                  </CardTitle>
                  <CardDescription>Manage your insurance policies</CardDescription>
                </div>
                <Button onClick={() => setShowInsuranceForm(true)} size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Insurance
                </Button>
              </CardHeader>
              <CardContent>
                {insurances.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">No insurance policies added yet</p>
                ) : (
                  <div className="space-y-3">
                    {insurances.map((insurance) => (
                      <div key={insurance.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{insurance.insuranceType}</h4>
                          <p className="text-sm text-muted-foreground">
                            Premium: ₹{insurance.premium.toLocaleString()}/year | Coverage: ₹{insurance.coverage.toLocaleString()}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => removeInsurance(insurance.id)}>
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button onClick={handleSubmit(onSubmit)} size="lg" className="btn-finance flex-1">
                <Mail className="w-5 h-5 mr-2" />
                Submit Financial Profile
              </Button>
            </div>
          </div>

          {/* Right Column - Live Calculations */}
          <div className="space-y-6">
            {/* Financial Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Financial Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Income</p>
                    <p className="text-lg font-bold text-green-600">₹{totalIncome.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Liabilities</p>
                    <p className="text-lg font-bold text-red-600">₹{totalLiabilities.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Investments</p>
                    <p className="text-lg font-bold text-blue-600">₹{totalInvestments.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Insurance</p>
                    <p className="text-lg font-bold text-purple-600">₹{totalInsurance.toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Buffer Amount</p>
                  <p className="text-2xl font-bold text-primary">₹{Math.max(bufferAmount, 0).toLocaleString()}</p>
                  <Badge variant={bufferAmount > 0 ? "default" : "destructive"}>
                    {bufferAmount > 0 ? "Positive Cash Flow" : "Negative Cash Flow"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Income Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ₹${value.toLocaleString()}`}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Bar Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                    <YAxis tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
                    <Tooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} />
                    <Bar dataKey="amount" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Liability Form Modal */}
      {showLiabilityForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Add Liability</CardTitle>
              <CardDescription>Enter your loan or debt details</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                addLiability({
                  loanType: formData.get('loanType'),
                  loanAmount: Number(formData.get('loanAmount')),
                  emi: Number(formData.get('emi')),
                  durationLeft: Number(formData.get('durationLeft')),
                  interestRate: Number(formData.get('interestRate'))
                });
              }} className="space-y-4">
                <div>
                  <Label htmlFor="loanType">Loan Type</Label>
                  <Select name="loanType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home-loan">Home Loan</SelectItem>
                      <SelectItem value="car-loan">Car Loan</SelectItem>
                      <SelectItem value="personal-loan">Personal Loan</SelectItem>
                      <SelectItem value="education-loan">Education Loan</SelectItem>
                      <SelectItem value="credit-card">Credit Card</SelectItem>
                      <SelectItem value="business-loan">Business Loan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                  <Input name="loanAmount" type="number" required placeholder="1000000" />
                </div>
                <div>
                  <Label htmlFor="emi">Monthly EMI (₹)</Label>
                  <Input name="emi" type="number" required placeholder="15000" />
                </div>
                <div>
                  <Label htmlFor="durationLeft">Duration Left (Years)</Label>
                  <Input name="durationLeft" type="number" required placeholder="15" />
                </div>
                <div>
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input name="interestRate" type="number" step="0.1" required placeholder="8.5" />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">Add Liability</Button>
                  <Button type="button" variant="outline" onClick={() => setShowLiabilityForm(false)}>Cancel</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Investment Form Modal */}
      {showInvestmentForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Add Investment</CardTitle>
              <CardDescription>Enter your investment details</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                addInvestment({
                  investmentType: formData.get('investmentType'),
                  amount: Number(formData.get('amount'))
                });
              }} className="space-y-4">
                <div>
                  <Label htmlFor="investmentType">Investment Type</Label>
                  <Select name="investmentType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select investment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mutual-funds">Mutual Funds</SelectItem>
                      <SelectItem value="stocks">Stocks</SelectItem>
                      <SelectItem value="bonds">Bonds</SelectItem>
                      <SelectItem value="fd">Fixed Deposit</SelectItem>
                      <SelectItem value="ppf">PPF</SelectItem>
                      <SelectItem value="elss">ELSS</SelectItem>
                      <SelectItem value="nps">NPS</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="gold">Gold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="amount">Current Value (₹)</Label>
                  <Input name="amount" type="number" required placeholder="500000" />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">Add Investment</Button>
                  <Button type="button" variant="outline" onClick={() => setShowInvestmentForm(false)}>Cancel</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Insurance Form Modal */}
      {showInsuranceForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Add Insurance</CardTitle>
              <CardDescription>Enter your insurance policy details</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                addInsurance({
                  insuranceType: formData.get('insuranceType'),
                  premium: Number(formData.get('premium')),
                  coverage: Number(formData.get('coverage')),
                  details: formData.get('details')
                });
              }} className="space-y-4">
                <div>
                  <Label htmlFor="insuranceType">Insurance Type</Label>
                  <Select name="insuranceType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select insurance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="life-insurance">Life Insurance</SelectItem>
                      <SelectItem value="health-insurance">Health Insurance</SelectItem>
                      <SelectItem value="motor-insurance">Motor Insurance</SelectItem>
                      <SelectItem value="home-insurance">Home Insurance</SelectItem>
                      <SelectItem value="travel-insurance">Travel Insurance</SelectItem>
                      <SelectItem value="term-insurance">Term Insurance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="premium">Annual Premium (₹)</Label>
                  <Input name="premium" type="number" required placeholder="25000" />
                </div>
                <div>
                  <Label htmlFor="coverage">Coverage Amount (₹)</Label>
                  <Input name="coverage" type="number" required placeholder="1000000" />
                </div>
                <div>
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea name="details" placeholder="Policy details, provider, etc." />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">Add Insurance</Button>
                  <Button type="button" variant="outline" onClick={() => setShowInsuranceForm(false)}>Cancel</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FinancialJourney;