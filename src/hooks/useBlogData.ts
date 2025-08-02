import { useState, useEffect } from 'react';

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  status: string;
  featured?: boolean;
  image?: string;
}

// Initial blog data combining both admin and blog page data
const initialBlogs: Blog[] = [
  {
    id: 1,
    title: "Top 10 Investment Strategies for 2024",
    excerpt: "Discover the most effective investment strategies that can help you build wealth in the current market scenario. From SIP to direct equity, we cover everything you need to know.",
    content: "In the ever-evolving world of finance, staying updated with the latest investment strategies is crucial for building long-term wealth. Here are the top 10 strategies every investor should consider in 2024...",
    author: "Rahul Sharma",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Investment",
    status: "Published",
    featured: true,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Understanding Mutual Fund SIP: A Beginner's Guide",
    excerpt: "Learn how Systematic Investment Plans (SIP) can help you build wealth gradually with disciplined investing.",
    content: "Systematic Investment Plan (SIP) is one of the most effective ways to invest in mutual funds. It allows investors to invest a fixed amount regularly in mutual funds, which helps in rupee cost averaging and building wealth over time...",
    author: "Priya Patel",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    category: "Mutual Funds",
    status: "Published",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Tax Planning Strategies to Save Money in FY 2024-25",
    excerpt: "Maximize your tax savings with these proven strategies under Section 80C, 80D, and other provisions.",
    content: "Tax planning is an essential part of financial planning. With proper tax planning strategies, you can save a significant amount of money and maximize your take-home income...",
    author: "Amit Kumar",
    date: "Dec 8, 2024",
    readTime: "6 min read",
    category: "Tax Planning",
    status: "Published",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Life Insurance: Term vs Whole Life - Which is Better?",
    excerpt: "Compare term and whole life insurance policies to make an informed decision for your family's protection.",
    content: "When it comes to life insurance, choosing between term and whole life insurance can be confusing. Both have their advantages and disadvantages...",
    author: "Sneha Gupta",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "Insurance",
    status: "Published",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "How to Create an Emergency Fund: Step-by-Step Guide",
    excerpt: "Build a financial safety net that can protect you from unexpected expenses and job loss.",
    content: "An emergency fund is a crucial component of financial security. It acts as a financial safety net during unexpected situations like job loss, medical emergencies, or major repairs...",
    author: "Vikash Singh",
    date: "Dec 3, 2024",
    readTime: "4 min read",
    category: "Financial Planning",
    status: "Published",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "IPO Investment: What You Need to Know Before Applying",
    excerpt: "Everything about IPO investing - from application process to risk assessment and timing strategies.",
    content: "Initial Public Offerings (IPOs) can be exciting investment opportunities, but they also come with significant risks. Before investing in any IPO, it's important to understand the process and evaluate the company thoroughly...",
    author: "Meera Joshi",
    date: "Nov 30, 2024",
    readTime: "9 min read",
    category: "IPO",
    status: "Published",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Real Estate vs Stock Market: Where Should You Invest?",
    excerpt: "A comprehensive comparison between real estate and stock market investments for different investor profiles.",
    content: "One of the most common investment dilemmas is choosing between real estate and stock market investments. Both asset classes have their unique advantages and can play important roles in a diversified portfolio...",
    author: "Rajesh Agarwal",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    category: "Investment",
    status: "Published",
    image: "/placeholder.svg"
  }
];

export const useBlogData = () => {
  const [blogs, setBlogs] = useState<Blog[]>(() => {
    // Try to load from localStorage first
    const savedBlogs = localStorage.getItem('finance-blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : initialBlogs;
  });

  // Save to localStorage whenever blogs change
  useEffect(() => {
    localStorage.setItem('finance-blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blogData: Omit<Blog, 'id' | 'date'>) => {
    const newBlog: Blog = {
      ...blogData,
      id: Math.max(...blogs.map(b => b.id), 0) + 1,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
    };
    setBlogs(prev => [newBlog, ...prev]);
    return newBlog;
  };

  const updateBlog = (id: number, blogData: Partial<Blog>) => {
    setBlogs(prev => prev.map(blog => 
      blog.id === id ? { ...blog, ...blogData } : blog
    ));
  };

  const deleteBlog = (id: number) => {
    setBlogs(prev => prev.filter(blog => blog.id !== id));
  };

  const getBlogById = (id: number) => {
    return blogs.find(blog => blog.id === id);
  };

  const getFeaturedBlog = () => {
    return blogs.find(blog => blog.featured) || blogs[0];
  };

  const getPublishedBlogs = () => {
    return blogs.filter(blog => blog.status === 'Published');
  };

  return {
    blogs,
    addBlog,
    updateBlog,
    deleteBlog,
    getBlogById,
    getFeaturedBlog,
    getPublishedBlogs
  };
};