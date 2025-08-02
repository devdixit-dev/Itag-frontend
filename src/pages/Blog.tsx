import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Input } from "@/components/ui/input";
import { useBlogData } from '@/hooks/useBlogData';
import { 
  Calendar,
  User,
  Clock,
  Search,
  TrendingUp,
  BookOpen,
  Target,
  Shield,
  PiggyBank,
  ArrowRight
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { getPublishedBlogs, getFeaturedBlog } = useBlogData();

  const featuredPost = getFeaturedBlog();
  const blogPosts = getPublishedBlogs().filter(blog => !blog.featured);

  const categories = [
    { name: "All", icon: BookOpen, count: blogPosts.length + 1 },
    { name: "Investment", icon: TrendingUp, count: 15 },
    { name: "Mutual Funds", icon: PiggyBank, count: 12 },
    { name: "Insurance", icon: Shield, count: 8 },
    { name: "Tax Planning", icon: BookOpen, count: 6 },
    { name: "Financial Planning", icon: Target, count: 10 },
    { name: "IPO", icon: TrendingUp, count: 3 }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="section-title mb-6">Finance Blog & Articles</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Stay updated with the latest insights, tips, and strategies in personal finance, 
              investment, and wealth management from our expert team.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 py-3 text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="card-finance">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categories.map((category) => (
                    <div 
                      key={category.name} 
                      className={`flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 cursor-pointer transition-colors ${selectedCategory === category.name ? 'bg-primary/10 border border-primary/20' : ''}`}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <div className="flex items-center">
                        <category.icon className="w-5 h-5 text-primary mr-3" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <Badge variant="outline">{category.count}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="card-finance hover:shadow-lg transition-all duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary/50" />
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <Button asChild variant="ghost" className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Link to={`/blog/${post.id}`}>
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;