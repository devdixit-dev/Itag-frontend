
import { Award, Eye, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Mission = () => {
  const certificates = [
    {
      name: 'CFA Institute',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=150&fit=crop',
      description: 'Chartered Financial Analyst Certification'
    },
    {
      name: 'Financial Planning Association',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=200&h=150&fit=crop',
      description: 'Certified Financial Planning Professional'
    },
    {
      name: 'Investment Management',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=200&h=150&fit=crop',
      description: 'Investment Management Excellence Award'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-finance-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-finance-gray-dark mb-4">
              Our Certificates, Mission & Vision
            </h1>
            <p className="text-xl text-finance-gray max-w-3xl mx-auto">
              Built on trust, certified excellence, and unwavering commitment to your financial success
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-finance-gray-dark mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-finance-gray">
              Recognized expertise and professional credentials that ensure quality service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-finance-gray-dark mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-finance-gray text-sm">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-finance-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-finance-blue mr-4" />
                  <h2 className="text-3xl font-bold text-finance-gray-dark">Our Mission</h2>
                </div>
                <p className="text-finance-gray leading-relaxed text-lg">
                  To deliver reliable, transparent, and personalized financial services that empower 
                  our clients to achieve their financial goals. We are committed to providing innovative 
                  solutions, expert guidance, and exceptional service that builds lasting relationships 
                  and creates sustainable wealth for individuals and businesses.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-finance-blue rounded-full mr-3"></div>
                    <span className="text-finance-gray">Reliable financial guidance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-finance-blue rounded-full mr-3"></div>
                    <span className="text-finance-gray">Transparent communication</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-finance-blue rounded-full mr-3"></div>
                    <span className="text-finance-gray">Personalized solutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-finance-blue mr-4" />
                  <h2 className="text-3xl font-bold text-finance-gray-dark">Our Vision</h2>
                </div>
                <p className="text-finance-gray leading-relaxed text-lg">
                  To be a trusted partner in every client's financial journey, recognized as the leading 
                  financial management company that combines cutting-edge technology with personalized service. 
                  We envision a future where financial security and prosperity are accessible to all through 
                  our innovative approach and unwavering commitment to excellence.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-finance-blue rounded-full mr-3"></div>
                    <span className="text-finance-gray">Trusted financial partnership</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-finance-blue rounded-full mr-3"></div>
                    <span className="text-finance-gray">Innovation in finance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-finance-blue rounded-full mr-3"></div>
                    <span className="text-finance-gray">Accessible prosperity</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-finance-gray-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-finance-gray">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Integrity', description: 'Honest and ethical in all our dealings' },
              { title: 'Excellence', description: 'Committed to delivering exceptional service' },
              { title: 'Innovation', description: 'Embracing new technologies and approaches' },
              { title: 'Partnership', description: 'Building lasting relationships with clients' }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-finance-gray-light">
                <h3 className="text-xl font-semibold text-finance-gray-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-finance-gray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
