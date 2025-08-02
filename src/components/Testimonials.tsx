import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    designation: "Business Owner",
    content: "I Tag Financials has been instrumental in growing my business through strategic financial planning. Their mutual fund recommendations have given excellent returns, and their loan services helped me expand my operations seamlessly.",
    rating: 5,
    avatar: "RK"
  },
  {
    name: "Priya Sharma",
    designation: "Software Engineer",
    content: "The team at I Tag Financials provided excellent guidance for my SIP investments and insurance planning. Their professional approach and transparent communication made my financial journey much easier to navigate.",
    rating: 5,
    avatar: "PS"
  },
  {
    name: "Amit Patel",
    designation: "Chartered Accountant",
    content: "Outstanding service quality! I Tag Financial's tax planning strategies saved me significant money, and their IPO guidance helped me make profitable investments. Highly recommend their comprehensive financial services.",
    rating: 5,
    avatar: "AP"
  },
  {
    name: "Sneha Gupta",
    designation: "Marketing Manager",
    content: "Very impressed with their personalized approach to financial planning. The insurance coverage they recommended was perfect for my family's needs, and their investment advisory services are top-notch.",
    rating: 5,
    avatar: "SG"
  },
  {
    name: "Vikram Singh",
    designation: "Entrepreneur",
    content: "I Tag Financial's expertise in equity trading and financial planning has been invaluable. Their timely advice and market insights have consistently helped me make profitable investment decisions.",
    rating: 5,
    avatar: "VS"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by thousands of satisfied clients across India
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="card-finance text-center p-12 relative overflow-hidden">
              <div className="absolute top-6 left-6 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="relative z-10">
                {/* Avatar */}
                <div className="mx-auto w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">
                    {currentTestimonial.avatar}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg text-foreground mb-8 leading-relaxed font-medium italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {currentTestimonial.designation}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;