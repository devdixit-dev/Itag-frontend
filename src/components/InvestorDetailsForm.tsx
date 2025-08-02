import { useState } from 'react';
import { Plus, Trash2, Save, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface PersonalDetails {
  name: string;
  mobile: string;
  email: string;
  finalGoal: string;
  employmentType: string;
  sourceOfIncome: string;
  monthlyIncome: string;
  dividend: string;
  rentInterestIncome: string;
  bonusGiftCommission: string;
  npsScheme: string;
  npsAmount: string;
  npsFrequency: string;
}

interface Liability {
  id: string;
  type: string;
  loanAmount: string;
  emi: string;
  durationLeft: string;
  rateOfInterest: string;
}

interface Investment {
  id: string;
  type: string;
  amount: string;
  frequency?: string;
}

interface Insurance {
  id: string;
  type: 'life' | 'general';
  company: string;
  sumAssured?: string;
  premium: string;
  tenure?: string;
  startDate?: string;
  endDate?: string;
  insuranceType?: string;
  renewalDate?: string;
}

const InvestorDetailsForm = () => {
  const { toast } = useToast();
  
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>({
    name: '',
    mobile: '',
    email: '',
    finalGoal: '',
    employmentType: '',
    sourceOfIncome: '',
    monthlyIncome: '',
    dividend: '',
    rentInterestIncome: '',
    bonusGiftCommission: '',
    npsScheme: '',
    npsAmount: '',
    npsFrequency: ''
  });

  const [liabilities, setLiabilities] = useState<Liability[]>([]);
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [insurances, setInsurances] = useState<Insurance[]>([]);
  const [showLiabilityForm, setShowLiabilityForm] = useState(false);
  const [showInvestmentForm, setShowInvestmentForm] = useState(false);

  const handlePersonalDetailsChange = (field: keyof PersonalDetails, value: string) => {
    setPersonalDetails(prev => ({ ...prev, [field]: value }));
  };

  const addLiability = () => {
    const newLiability: Liability = {
      id: Date.now().toString(),
      type: '',
      loanAmount: '',
      emi: '',
      durationLeft: '',
      rateOfInterest: ''
    };
    setLiabilities(prev => [...prev, newLiability]);
    setShowLiabilityForm(true);
  };

  const updateLiability = (id: string, field: keyof Liability, value: string) => {
    setLiabilities(prev => prev.map(liability => 
      liability.id === id ? { ...liability, [field]: value } : liability
    ));
  };

  const removeLiability = (id: string) => {
    setLiabilities(prev => prev.filter(liability => liability.id !== id));
  };

  const addInvestment = () => {
    const newInvestment: Investment = {
      id: Date.now().toString(),
      type: '',
      amount: ''
    };
    setInvestments(prev => [...prev, newInvestment]);
    setShowInvestmentForm(true);
  };

  const updateInvestment = (id: string, field: keyof Investment, value: string) => {
    setInvestments(prev => prev.map(investment => 
      investment.id === id ? { ...investment, [field]: value } : investment
    ));
  };

  const removeInvestment = (id: string) => {
    setInvestments(prev => prev.filter(investment => investment.id !== id));
  };

  const addLifeInsurance = () => {
    const newInsurance: Insurance = {
      id: Date.now().toString(),
      type: 'life',
      company: '',
      sumAssured: '',
      premium: '',
      tenure: '',
      startDate: '',
      endDate: ''
    };
    setInsurances(prev => [...prev, newInsurance]);
  };

  const addGeneralInsurance = () => {
    const newInsurance: Insurance = {
      id: Date.now().toString(),
      type: 'general',
      company: '',
      insuranceType: '',
      premium: '',
      renewalDate: ''
    };
    setInsurances(prev => [...prev, newInsurance]);
  };

  const updateInsurance = (id: string, field: keyof Insurance, value: string) => {
    setInsurances(prev => prev.map(insurance => 
      insurance.id === id ? { ...insurance, [field]: value } : insurance
    ));
  };

  const removeInsurance = (id: string) => {
    setInsurances(prev => prev.filter(insurance => insurance.id !== id));
  };

  const savePersonalDetails = () => {
    toast({
      title: "Personal Details Saved",
      description: "Your personal and income details have been saved successfully.",
    });
  };

  const saveLiabilities = () => {
    toast({
      title: "Liabilities Saved",
      description: "Your liability information has been saved successfully.",
    });
  };

  const saveInvestments = () => {
    toast({
      title: "Investments Saved",
      description: "Your investment details have been saved successfully.",
    });
  };

  const saveInsurances = () => {
    toast({
      title: "Insurance Details Saved",
      description: "Your insurance information has been saved successfully.",
    });
  };

  const submitAllDetails = () => {
    // Here you would typically send all data to your backend
    const allData = {
      personalDetails,
      liabilities,
      investments,
      insurances
    };
    
    console.log('Submitting all investor details:', allData);
    
    toast({
      title: "All Details Submitted",
      description: "Your complete investor profile has been submitted successfully. Our team will review and contact you soon.",
    });
  };

  return (
    <div className="space-y-8">
      {/* Personal Details Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-finance-blue">Personal & Income Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name *</label>
              <Input
                value={personalDetails.name}
                onChange={(e) => handlePersonalDetailsChange('name', e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Mobile *</label>
              <Input
                value={personalDetails.mobile}
                onChange={(e) => handlePersonalDetailsChange('mobile', e.target.value)}
                placeholder="Enter mobile number"
                type="tel"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email ID *</label>
              <Input
                value={personalDetails.email}
                onChange={(e) => handlePersonalDetailsChange('email', e.target.value)}
                placeholder="Enter email address"
                type="email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Final Goal (Amount) *</label>
              <Input
                value={personalDetails.finalGoal}
                onChange={(e) => handlePersonalDetailsChange('finalGoal', e.target.value)}
                placeholder="Enter target amount (₹)"
                type="number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Employment Type *</label>
              <Select onValueChange={(value) => handlePersonalDetailsChange('employmentType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salaried-private">Salaried - Private</SelectItem>
                  <SelectItem value="salaried-government">Salaried - Government</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="self-employed">Self Employed</SelectItem>
                  <SelectItem value="freelancer">Freelancer</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Source of Income</label>
              <Input
                value={personalDetails.sourceOfIncome}
                onChange={(e) => handlePersonalDetailsChange('sourceOfIncome', e.target.value)}
                placeholder="Primary source of income"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Monthly Income (₹)</label>
              <Input
                value={personalDetails.monthlyIncome}
                onChange={(e) => handlePersonalDetailsChange('monthlyIncome', e.target.value)}
                placeholder="Enter monthly income"
                type="number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Dividend Income (₹)</label>
              <Input
                value={personalDetails.dividend}
                onChange={(e) => handlePersonalDetailsChange('dividend', e.target.value)}
                placeholder="Annual dividend income"
                type="number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Rent/Interest Income (₹)</label>
              <Input
                value={personalDetails.rentInterestIncome}
                onChange={(e) => handlePersonalDetailsChange('rentInterestIncome', e.target.value)}
                placeholder="Monthly rent/interest income"
                type="number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Bonus/Gift/Commission (₹)</label>
              <Input
                value={personalDetails.bonusGiftCommission}
                onChange={(e) => handlePersonalDetailsChange('bonusGiftCommission', e.target.value)}
                placeholder="Annual bonus/gift/commission"
                type="number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">NPS/Pension Scheme</label>
              <Select onValueChange={(value) => handlePersonalDetailsChange('npsScheme', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select scheme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nps">NPS</SelectItem>
                  <SelectItem value="eps">EPS</SelectItem>
                  <SelectItem value="ppf">PPF</SelectItem>
                  <SelectItem value="other-pension">Other Pension Scheme</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">NPS/Pension Amount (₹)</label>
              <Input
                value={personalDetails.npsAmount}
                onChange={(e) => handlePersonalDetailsChange('npsAmount', e.target.value)}
                placeholder="Enter amount"
                type="number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Payment Frequency</label>
              <Select onValueChange={(value) => handlePersonalDetailsChange('npsFrequency', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button onClick={savePersonalDetails} className="bg-finance-blue hover:bg-finance-blue/90">
            <Save className="h-4 w-4 mr-2" />
            Save Personal Details
          </Button>
        </CardContent>
      </Card>

      {/* Liabilities Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-finance-blue">Liabilities</CardTitle>
          <Button onClick={addLiability} className="bg-finance-blue hover:bg-finance-blue/90 w-fit">
            <Plus className="h-4 w-4 mr-2" />
            Add Liability
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {liabilities.map((liability) => (
            <div key={liability.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Liability Details</h4>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => removeLiability(liability.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Type</label>
                  <Select onValueChange={(value) => updateLiability(liability.id, 'type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home-loan">Home Loan</SelectItem>
                      <SelectItem value="car-loan">Car Loan</SelectItem>
                      <SelectItem value="credit-card">Credit Card</SelectItem>
                      <SelectItem value="gold-loan">Gold Loan</SelectItem>
                      <SelectItem value="education-loan">Education Loan</SelectItem>
                      <SelectItem value="business-loan">Business Loan</SelectItem>
                      <SelectItem value="personal-loan">Personal Loan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Amount (₹)</label>
                  <Input
                    value={liability.loanAmount}
                    onChange={(e) => updateLiability(liability.id, 'loanAmount', e.target.value)}
                    placeholder="Enter loan amount"
                    type="number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">EMI (₹)</label>
                  <Input
                    value={liability.emi}
                    onChange={(e) => updateLiability(liability.id, 'emi', e.target.value)}
                    placeholder="Monthly EMI"
                    type="number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Duration Left</label>
                  <Input
                    value={liability.durationLeft}
                    onChange={(e) => updateLiability(liability.id, 'durationLeft', e.target.value)}
                    placeholder="Years/Months left"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Rate of Interest (%)</label>
                  <Input
                    value={liability.rateOfInterest}
                    onChange={(e) => updateLiability(liability.id, 'rateOfInterest', e.target.value)}
                    placeholder="Interest rate"
                    type="number"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
          ))}
          
          {liabilities.length > 0 && (
            <Button onClick={saveLiabilities} className="bg-finance-blue hover:bg-finance-blue/90">
              <Save className="h-4 w-4 mr-2" />
              Save Liabilities
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Investments Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-finance-blue">Investments</CardTitle>
          <Button onClick={addInvestment} className="bg-finance-blue hover:bg-finance-blue/90 w-fit">
            <Plus className="h-4 w-4 mr-2" />
            Add Investment
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {investments.map((investment) => (
            <div key={investment.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Investment Details</h4>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => removeInvestment(investment.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Investment Type</label>
                  <Select onValueChange={(value) => updateInvestment(investment.id, 'type', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select investment type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mutual-funds">Mutual Funds</SelectItem>
                      <SelectItem value="stocks">Stocks</SelectItem>
                      <SelectItem value="bonds">Bonds</SelectItem>
                      <SelectItem value="fixed-deposits">Fixed Deposits</SelectItem>
                      <SelectItem value="gold">Gold</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="ppf">PPF</SelectItem>
                      <SelectItem value="nsc">NSC</SelectItem>
                      <SelectItem value="ulip">ULIP</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Amount (₹)</label>
                  <Input
                    value={investment.amount}
                    onChange={(e) => updateInvestment(investment.id, 'amount', e.target.value)}
                    placeholder="Enter investment amount"
                    type="number"
                  />
                </div>
                
                {investment.type === 'mutual-funds' && (
                  <div>
                    <label className="block text-sm font-medium mb-2">Investment Frequency</label>
                    <Select onValueChange={(value) => updateInvestment(investment.id, 'frequency', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="annually">Annually</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {investments.length > 0 && (
            <Button onClick={saveInvestments} className="bg-finance-blue hover:bg-finance-blue/90">
              <Save className="h-4 w-4 mr-2" />
              Save Investments
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Insurance Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-finance-blue">Insurance</CardTitle>
          <div className="flex gap-4">
            <Button onClick={addLifeInsurance} className="bg-finance-blue hover:bg-finance-blue/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Life Insurance
            </Button>
            <Button onClick={addGeneralInsurance} variant="outline" className="border-finance-blue text-finance-blue hover:bg-finance-blue hover:text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add General Insurance
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {insurances.map((insurance) => (
            <div key={insurance.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium capitalize">{insurance.type} Insurance</h4>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => removeInsurance(insurance.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Insurance Company</label>
                  <Input
                    value={insurance.company}
                    onChange={(e) => updateInsurance(insurance.id, 'company', e.target.value)}
                    placeholder="Enter company name"
                  />
                </div>
                
                {insurance.type === 'life' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2">Sum Assured (₹)</label>
                      <Input
                        value={insurance.sumAssured || ''}
                        onChange={(e) => updateInsurance(insurance.id, 'sumAssured', e.target.value)}
                        placeholder="Enter sum assured"
                        type="number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Yearly Premium (₹)</label>
                      <Input
                        value={insurance.premium}
                        onChange={(e) => updateInsurance(insurance.id, 'premium', e.target.value)}
                        placeholder="Enter yearly premium"
                        type="number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Tenure (Years)</label>
                      <Input
                        value={insurance.tenure || ''}
                        onChange={(e) => updateInsurance(insurance.id, 'tenure', e.target.value)}
                        placeholder="Enter tenure"
                        type="number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Date</label>
                      <Input
                        value={insurance.startDate || ''}
                        onChange={(e) => updateInsurance(insurance.id, 'startDate', e.target.value)}
                        type="date"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">End Date</label>
                      <Input
                        value={insurance.endDate || ''}
                        onChange={(e) => updateInsurance(insurance.id, 'endDate', e.target.value)}
                        type="date"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-2">Insurance Type</label>
                      <Select onValueChange={(value) => updateInsurance(insurance.id, 'insuranceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select insurance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="motor">Motor Insurance</SelectItem>
                          <SelectItem value="health">Health Insurance</SelectItem>
                          <SelectItem value="travel">Travel Insurance</SelectItem>
                          <SelectItem value="home">Home Insurance</SelectItem>
                          <SelectItem value="fire">Fire Insurance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Premium Amount (₹)</label>
                      <Input
                        value={insurance.premium}
                        onChange={(e) => updateInsurance(insurance.id, 'premium', e.target.value)}
                        placeholder="Enter premium amount"
                        type="number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Renewal Date</label>
                      <Input
                        value={insurance.renewalDate || ''}
                        onChange={(e) => updateInsurance(insurance.id, 'renewalDate', e.target.value)}
                        type="date"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          
          {insurances.length > 0 && (
            <Button onClick={saveInsurances} className="bg-finance-blue hover:bg-finance-blue/90">
              <Save className="h-4 w-4 mr-2" />
              Save Insurance Details
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Submit All Button */}
      <div className="text-center">
        <Button 
          onClick={submitAllDetails} 
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
          size="lg"
        >
          <Send className="h-5 w-5 mr-2" />
          Submit All Details
        </Button>
      </div>
    </div>
  );
};

export default InvestorDetailsForm;