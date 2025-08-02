
import { Users, BarChart3, FileText, TrendingUp, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowWeWork = () => {
  const steps = [
    {
      icon: <Users className="h-16 w-16 text-finance-blue" />,
      title: 'Understand Your Goals',
      description: 'We begin by listening to your financial aspirations, current situation, and long-term objectives. Our comprehensive consultation helps us understand your unique needs.',
      details: ['Initial consultation', 'Goal assessment', 'Risk tolerance evaluation', 'Timeline planning']
    },
    {
      icon: <BarChart3 className="h-16 w-16 text-finance-blue" />,
      title: 'Analyze Financial Data',
      description: 'Our experts conduct thorough analysis of your financial data, market conditions, and investment opportunities to create a solid foundation for your strategy.',
      details: ['Financial health check', 'Market analysis', 'Risk assessment', 'Opportunity identification']
    },
    {
      icon: <FileText className="h-16 w-16 text-finance-blue" />,
      title: 'Create Customized Plans',
      description: 'Based on our analysis, we develop personalized financial strategies tailored to your specific goals, timeline, and risk preferences.',
      details: ['Strategy development', 'Custom solutions', 'Documentation', 'Action plan creation']
    },
    {
      icon: <TrendingUp className="h-16 w-16 text-finance-blue" />,
      title: 'Monitor & Optimize',
      description: 'We continuously monitor your financial progress and market changes, making strategic adjustments to keep you on track towards your goals.',
      details: ['Performance tracking', 'Regular reviews', 'Strategy adjustments', 'Progress reporting']
    },
    {
      icon: <Headphones className="h-16 w-16 text-finance-blue" />,
      title: 'Ongoing Support',
      description: 'Our relationship doesn\'t end with implementation. We provide continuous support, guidance, and updates to ensure your long-term financial success.',
      details: ['24/7 support', 'Regular check-ins', 'Market updates', 'Strategy refinements']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-finance-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-finance-gray-dark mb-4">
              How We Work
            </h1>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Our proven 5-step process ensures comprehensive financial management tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 animate-fade-in">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-finance-blue bg-opacity-10 rounded-full flex items-center justify-center mr-6">
                      <span className="text-2xl font-bold text-finance-blue">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-finance-gray-dark">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-lg text-finance-gray mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-finance-blue rounded-full mr-3"></div>
                        <span className="text-finance-gray">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 animate-slide-in-left">
                  <Card className="p-8 bg-finance-gray-light border-0 shadow-lg">
                    <CardContent className="p-0 flex justify-center">
                      {step.icon}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-16 bg-finance-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-finance-gray-dark mb-4">
              Your Journey With Us
            </h2>
            <p className="text-lg text-finance-gray">
              From initial consultation to ongoing success
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-finance-blue transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {[
                { time: 'Week 1', title: 'Initial Consultation & Analysis' },
                { time: 'Week 2-3', title: 'Strategy Development' },
                { time: 'Week 4', title: 'Plan Implementation' },
                { time: 'Ongoing', title: 'Monitoring & Support' }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="bg-white border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="text-finance-blue font-semibold mb-1">{item.time}</div>
                        <div className="text-finance-gray-dark font-medium">{item.title}</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex-shrink-0 w-8 h-8 bg-finance-blue rounded-full border-4 border-white shadow-md relative z-10"></div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
