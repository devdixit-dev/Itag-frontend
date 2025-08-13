import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import FinancialPlans from "./pages/FinancialPlans";
import FinancialJourney from "./pages/FinancialJourney";
import PostJob from "./pages/PostJob";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Admin from "./pages/Admin";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import MutualFund from "./pages/MutualFund";
import InsuranceServices from "./pages/InsuranceServices";
import StockMarket from "./pages/StockMarket";
import LoanServices from "./pages/LoanServices";
import IPOServices from "./pages/IpoServices";
import TaxPlanning from "./pages/TaxPlanning";
import FinancialPlanning from "./pages/FinancialPlanning";
import InvestmentAdvisory from "./pages/InvestmentAdvisory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/financial-plans" element={<FinancialPlans />} />
            <Route path="/financial-journey" element={<FinancialJourney />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/mutual-funds" element={<MutualFund />} />
            <Route path="/insurance-services" element={<InsuranceServices />} />
            <Route path="/stock-market" element={<StockMarket />} />
            <Route path="/loan-services" element={<LoanServices />} />
            <Route path="/ipo-services" element={<IPOServices />} />
            <Route path="/tax-planning" element={<TaxPlanning />} />
            <Route path="/financial-planning" element={<FinancialPlanning />} />
            <Route path="/investment-advisory" element={<InvestmentAdvisory />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
