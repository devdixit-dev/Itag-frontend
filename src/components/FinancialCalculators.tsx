import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, TrendingUp, PiggyBank, Home, Car } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const FinancialCalculators = () => {
  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  const [inflPercent, setInflPercent] = useState(0);
  const [sipResult, setSipResult] = useState(null);

  // Loan Calculator State
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanRate, setLoanRate] = useState(8.5);
  const [loanYears, setLoanYears] = useState(20);
  const [loanResult, setLoanResult] = useState(null);

  // Goal Calculator State
  const [goalAmount, setGoalAmount] = useState(2000000);
  const [goalYears, setGoalYears] = useState(10);
  const [goalRate, setGoalRate] = useState(12);
  const [goalResult, setGoalResult] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = sipRate / 12 / 100;
    const months = sipYears * 12;
    const futureValue = sipAmount * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvestment = sipAmount * months;
    const returns = futureValue - totalInvestment;

    // Adjust for inflation
    const annualInflationRate = inflPercent / 100;
    const inflationAdjustedFV = futureValue / Math.pow(1 + annualInflationRate, sipYears);

    setSipResult({
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      returns: Math.round(returns),
      inflationAdjustedFV: Math.round(inflationAdjustedFV)
    });
  };

  const calculateLoan = () => {
    const monthlyRate = loanRate / 12 / 100;
    const months = loanYears * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    setLoanResult({
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest)
    });
  };

  const calculateGoal = () => {
    const monthlyRate = goalRate / 12 / 100;
    const months = goalYears * 12;
    const monthlyInvestment = goalAmount / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvestment = monthlyInvestment * months;

    setGoalResult({
      monthlyInvestment: Math.round(monthlyInvestment),
      totalInvestment: Math.round(totalInvestment)
    });
  };

  const formatCurrency = (amount: any) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Financial Calculators</h2>
          <p className="section-subtitle">
            Plan your financial future with our comprehensive set of calculators
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="sip" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="sip" className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>SIP Calculator</span>
              </TabsTrigger>
              <TabsTrigger value="loan" className="flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Loan Calculator</span>
              </TabsTrigger>
              <TabsTrigger value="goal" className="flex items-center space-x-2">
                <PiggyBank className="w-4 h-4" />
                <span>Goal Calculator</span>
              </TabsTrigger>
            </TabsList>

            {/* SIP Calculator */}
            <TabsContent value="sip">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="card-finance">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span>SIP Calculator</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="sipAmount">Monthly Investment Amount</Label>
                      <Input
                        id="sipAmount"
                        type="number"
                        value={sipAmount}
                        onChange={(e) => setSipAmount(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sipRate">Expected Annual Return (%)</Label>
                      <Input
                        id="sipRate"
                        type="number"
                        step="0.1"
                        value={sipRate}
                        onChange={(e) => setSipRate(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sipYears">Investment Period (Years)</Label>
                      <Input
                        id="sipYears"
                        type="number"
                        value={sipYears}
                        onChange={(e) => setSipYears(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="infPercent">Adjust Inflation(%)</Label>
                      <Input
                        id="infPercent"
                        type="number"
                        value={inflPercent}
                        onChange={(e) => setInflPercent(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <Button onClick={calculateSIP} className="w-full btn-finance">
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate SIP
                    </Button>
                  </CardContent>
                </Card>

                {sipResult && (
                  <div className="space-y-2">
                    <Card className="card-finance bg-gradient-to-br from-primary/5 to-accent/5">
                      <CardHeader>
                        <CardTitle>SIP Calculation Results</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between">
                          <span>Future Value:</span>
                          <span className="font-semibold text-primary">
                            {formatCurrency(sipResult.inflationAdjustedFV)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Investment:</span>
                          <span className="font-semibold">
                            {formatCurrency(sipResult.totalInvestment)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Returns:</span>
                          <span className="font-semibold text-success">
                            {formatCurrency(sipResult.returns)}
                          </span>
                        </div>
                        <div className="flex justify-center">
                          <p className="text-red-500">Note: Future value adjust inflation</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-finance">
                      <CardHeader>
                        <CardTitle>Investment Breakdown</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={[
                                  { name: 'Total Investment', value: sipResult.totalInvestment, fill: '#8884d8' },
                                  { name: 'Returns Generated', value: sipResult.returns, fill: '#00C49F' }
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                              >
                              </Pie>
                              <Tooltip
                                formatter={(value) => formatCurrency(value)}
                              />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Loan Calculator */}
            <TabsContent value="loan">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="card-finance">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Home className="w-5 h-5 text-primary" />
                      <span>Loan Calculator</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="loanAmount">Loan Amount</Label>
                      <Input
                        id="loanAmount"
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="loanRate">Interest Rate (% per annum)</Label>
                      <Input
                        id="loanRate"
                        type="number"
                        step="0.1"
                        value={loanRate}
                        onChange={(e) => setLoanRate(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="loanYears">Loan Tenure (Years)</Label>
                      <Input
                        id="loanYears"
                        type="number"
                        value={loanYears}
                        onChange={(e) => setLoanYears(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <Button onClick={calculateLoan} className="w-full btn-finance">
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate EMI
                    </Button>
                  </CardContent>
                </Card>

                {loanResult && (
                  <div className="space-y-6">
                    <Card className="card-finance bg-gradient-to-br from-primary/5 to-accent/5">
                      <CardHeader>
                        <CardTitle>Loan Calculation Results</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between">
                          <span>Monthly EMI:</span>
                          <span className="font-semibold text-primary">
                            {formatCurrency(loanResult.emi)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Payment:</span>
                          <span className="font-semibold">
                            {formatCurrency(loanResult.totalPayment)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Interest:</span>
                          <span className="font-semibold text-warning">
                            {formatCurrency(loanResult.totalInterest)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-finance">
                      <CardHeader>
                        <CardTitle>Payment Breakdown</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={[
                                  { name: 'Principal Amount', value: loanAmount, fill: '#8884d8' },
                                  { name: 'Interest Amount', value: loanResult.totalInterest, fill: '#ff8042' }
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                              >
                              </Pie>
                              <Tooltip
                                formatter={(value) => formatCurrency(value)}
                              />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Goal Calculator */}
            <TabsContent value="goal">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="card-finance">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <PiggyBank className="w-5 h-5 text-primary" />
                      <span>Goal Calculator</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="goalAmount">Target Amount</Label>
                      <Input
                        id="goalAmount"
                        type="number"
                        value={goalAmount}
                        onChange={(e) => setGoalAmount(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="goalYears">Time Period (Years)</Label>
                      <Input
                        id="goalYears"
                        type="number"
                        value={goalYears}
                        onChange={(e) => setGoalYears(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="goalRate">Expected Return (% per annum)</Label>
                      <Input
                        id="goalRate"
                        type="number"
                        step="0.1"
                        value={goalRate}
                        onChange={(e) => setGoalRate(Number(e.target.value))}
                        className="mt-2"
                      />
                    </div>
                    <Button onClick={calculateGoal} className="w-full btn-finance">
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate Goal
                    </Button>
                  </CardContent>
                </Card>

                {goalResult && (
                  <div className="space-y-6">
                    <Card className="card-finance bg-gradient-to-br from-primary/5 to-accent/5">
                      <CardHeader>
                        <CardTitle>Goal Calculation Results</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-between">
                          <span>Monthly Investment Required:</span>
                          <span className="font-semibold text-primary">
                            {formatCurrency(goalResult.monthlyInvestment)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Investment:</span>
                          <span className="font-semibold">
                            {formatCurrency(goalResult.totalInvestment)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Target Amount:</span>
                          <span className="font-semibold text-success">
                            {formatCurrency(goalAmount)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="card-finance">
                      <CardHeader>
                        <CardTitle>Investment vs Goal</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={[
                                  { name: 'Your Investment', value: goalResult.totalInvestment, fill: '#8884d8' },
                                  { name: 'Expected Returns', value: goalAmount - goalResult.totalInvestment, fill: '#00C49F' }
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                              >
                              </Pie>
                              <Tooltip
                                formatter={(value) => formatCurrency(value)}
                              />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FinancialCalculators;