import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blogImg1 from "@assets/stock_images/fashion_technology_a_987a65fa.jpg";
import blogImg2 from "@assets/stock_images/fashion_technology_a_b2e62d65.jpg";
import blogImg3 from "@assets/stock_images/fashion_technology_a_de55e194.jpg";
import blogImg4 from "@assets/stock_images/fashion_technology_a_e1ca1a19.jpg";
import blogImg5 from "@assets/stock_images/fashion_technology_a_3f0918d6.jpg";
import blogImg6 from "@assets/stock_images/fashion_technology_a_6001b1fd.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Fashion: How AI is Revolutionizing Virtual Try-On",
    excerpt: "Discover how machine learning and computer vision are transforming the way people shop online and reducing return rates.",
    author: "Sarah Chen",
    date: "March 15, 2024",
    category: "Technology",
    image: blogImg1,
  },
  {
    id: 2,
    title: "Reducing Returns by 40%: The InnFit Case Study",
    excerpt: "Learn how major retailers have used our virtual try-on technology to drastically reduce return rates and increase customer satisfaction.",
    author: "James Mitchell",
    date: "March 10, 2024",
    category: "Case Study",
    image: blogImg2,
  },
  {
    id: 3,
    title: "Privacy First: How We Protect Your Fashion Data",
    excerpt: "An in-depth look at our security measures, data encryption, and commitment to protecting user privacy.",
    author: "Elena Rodriguez",
    date: "March 5, 2024",
    category: "Security",
    image: blogImg3,
  },
  {
    id: 4,
    title: "Body Positivity in Fashion Tech: Our Mission",
    excerpt: "How InnFit celebrates all body types and ensures our AI works beautifully for everyone.",
    author: "Michael Zhang",
    date: "February 28, 2024",
    category: "Culture",
    image: blogImg4,
  },
  {
    id: 5,
    title: "Integration Tips: Getting Started with InnFit API",
    excerpt: "A practical guide for developers implementing InnFit's virtual try-on technology in their e-commerce platform.",
    author: "Alex Thompson",
    date: "February 20, 2024",
    category: "Developer",
    image: blogImg5,
  },
  {
    id: 6,
    title: "2024 Fashion Tech Trends: What's Next?",
    excerpt: "Predictions for the future of fashion technology, from AI-powered styling to immersive shopping experiences.",
    author: "Lisa Anderson",
    date: "February 15, 2024",
    category: "Trends",
    image: blogImg6,
  },
];

export default function Blog() {
  const heroRef = useRef(null);
  const postsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isPostsInView = useInView(postsRef, { once: true, margin: "-100px" });

  return (
    <main className="pt-16 md:pt-20">
      <section ref={heroRef} className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-background to-neon-purple/10" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">
              Latest Updates
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              InnFit{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights into fashion technology, virtual try-on innovation, and industry trends shaping the future of retail.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={postsRef} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isPostsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover-elevate flex flex-col">
                  <div className="h-40 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-3">
                      <span className="text-xs px-2 py-1 bg-accent rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 flex-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      Read Article
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
