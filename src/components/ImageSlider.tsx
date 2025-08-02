
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=800&fit=crop',
      title: 'Empowering Your Financial Future',
      subtitle: 'Professional wealth management solutions tailored for your success'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=800&fit=crop',
      title: 'Trusted Finance Management Experts',
      subtitle: 'Over a decade of experience in financial planning and investment strategies'
    },
    {
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=800&fit=crop',
      title: 'Secure. Smart. Seamless.',
      subtitle: 'Advanced technology meets personalized financial guidance'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=800&fit=crop',
      title: 'Your Success is Our Priority',
      subtitle: 'Comprehensive financial solutions for individuals and businesses'
    },
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=800&fit=crop',
      title: 'Innovation in Finance',
      subtitle: 'Cutting-edge tools and strategies for modern financial management'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[97vh] p-2 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {slide.subtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-finance-blue hover:bg-finance-blue-dark text-white px-8 py-3 text-lg"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
        onClick={prevSlide}
      >
        <ChevronLeft size={32} />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
        onClick={nextSlide}
      >
        <ChevronRight size={32} />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
