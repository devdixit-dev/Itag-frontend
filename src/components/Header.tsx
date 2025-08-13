import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from '../assets/logo.png'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Menu, 
  X, 
  TrendingUp, 
  Shield, 
  PiggyBank, 
  CreditCard,
  Building,
  Users,
  FileText,
  Calculator
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "IPO Services", href: "/services#ipo", icon: TrendingUp, description: "Initial Public Offering guidance and investment" },
    { name: "Mutual Funds", href: "/services#mutual-funds", icon: PiggyBank, description: "Diversified portfolio management" },
    { name: "Insurance", href: "/services#insurance", icon: Shield, description: "Life, health, and general insurance" },
    { name: "Equity Trading", href: "/services#equity", icon: TrendingUp, description: "Stock market trading and analysis" },
    { name: "Loans", href: "/services#loans", icon: CreditCard, description: "Personal, home, and business loans" },
    { name: "Tax Planning", href: "/services#tax", icon: Calculator, description: "Tax optimization strategies" }
  ];

  return (
    <header className="bg-background border-b border-border shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-full h-20 flex items-center justify-center">
              <img src={logo} alt="logo" className="w-40 h-18" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/about" 
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-[16px] hover:bg-blue-500 hover:text-white font-medium">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-6">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-500 hover:text-white focus:bg-white focus:text-white"
                      >
                        <div className="flex items-center space-x-2">
                          <service.icon className="w-4 h-4 text-primary" />
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-black">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/financial-plans" 
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Financial Plans
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/resources" 
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Study Materials
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/career" 
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Career
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle & Client Login */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <Button variant="outline" asChild>
              <a href="https://client.itagfin.com/pages/auth/login">Client Login</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-2">
              <Link 
                to="/" 
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="py-2">
                <div className="font-medium text-foreground mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link 
                to="/financial-plans" 
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Financial Plans
              </Link>
              <Link 
                to="/career" 
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Career
              </Link>
              <Link 
                to="/blog" 
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-4 border-t border-border flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  {/* <span className="text-sm font-medium">Theme</span> */}
                  {/* <ThemeToggle /> */}
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="#">Client Login</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;