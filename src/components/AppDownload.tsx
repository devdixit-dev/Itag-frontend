import { Button } from "@/components/ui/button";
import { Apple, Play, Star, Download, Smartphone } from "lucide-react";
import mobileApp from "@/assets/mobile-app.png";

const AppDownload = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone className="w-8 h-8" />
              <span className="text-xl font-semibold">ITagFin Mobile</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Manage Your Finances On The Go
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience seamless financial management with our powerful mobile app. 
              Track investments, apply for loans, manage insurance, and access expert 
              advice - all from your smartphone.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">Real-time portfolio tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">One-click SIP investments</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">Instant loan applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">Expert financial advice</span>
              </div>
            </div>

            {/* App Rating */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white/90">4.8/5 Rating</span>
              <span className="text-white/70">•</span>
              <span className="text-white/90">50K+ Downloads</span>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 h-auto"
              >
                <Apple className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 h-auto"
              >
                <Play className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </Button>
            </div>

            {/* Download Stats */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm text-white/70">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.8★</div>
                  <div className="text-sm text-white/70">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-sm text-white/70">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile App Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-white/20 rounded-[3rem] blur-3xl scale-110"></div>
              
              {/* Mobile App Image */}
              <div className="relative z-19">
                <img 
                  src={mobileApp} 
                  alt="ITagFin Mobile App" 
                  className="w-80 h-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating Elements
              <div className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Download className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Star className="w-6 h-6 text-yellow-400" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;