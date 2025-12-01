import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Book, Code, Zap, Shield, FileText, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const docs = [
  {
    icon: Code,
    title: "API Reference",
    description: "Complete REST API documentation with interactive examples and SDKs for JavaScript, Python, and more.",
    topics: ["Authentication", "Endpoints", "Error Handling", "Rate Limiting"],
  },
  {
    icon: Book,
    title: "Getting Started",
    description: "Step-by-step guides to integrate InnFit's virtual try-on technology into your application.",
    topics: ["Installation", "Basic Setup", "First Request", "Best Practices"],
  },
  {
    icon: Zap,
    title: "Integration Guide",
    description: "Learn how to integrate InnFit with your e-commerce platform or mobile app.",
    topics: ["Web Integration", "Mobile Apps", "Webhooks", "Real-time Events"],
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Understand our security measures, data encryption, and privacy-first approach.",
    topics: ["Data Protection", "Compliance", "GDPR", "User Privacy"],
  },
  {
    icon: FileText,
    title: "SDK Reference",
    description: "Official SDKs and libraries for popular frameworks and languages.",
    topics: ["JavaScript/TypeScript", "Python", "Java", "Go", "Ruby"],
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues, solutions, and debugging tips for developers.",
    topics: ["FAQs", "Known Issues", "Debug Mode", "Support"],
  },
];

export default function Documentation() {
  const heroRef = useRef(null);
  const docsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isDocsInView = useInView(docsRef, { once: true, margin: "-100px" });

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
            <span className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 text-neon-blue text-sm font-medium mb-4">
              Developer Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to integrate InnFit's powerful virtual try-on technology into your application.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={docsRef} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docs.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isDocsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-4">
                    <doc.icon className="w-6 h-6 text-neon-purple" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doc.topics.map((topic) => (
                      <span key={topic} className="text-xs px-2 py-1 bg-accent rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDocsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 p-8 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl border border-border text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help you succeed.
            </p>
            <a href="/about#contact">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0">
                Contact Support
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
