import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, ExternalLink, Award, Newspaper, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import pressImg1 from "@assets/stock_images/modern_startup_offic_26966f43.jpg";
import pressImg2 from "@assets/stock_images/modern_startup_offic_83cb7e2c.jpg";
import pressImg3 from "@assets/stock_images/modern_startup_offic_1569a3a6.jpg";

const pressReleases = [
  {
    id: 1,
    title: "InnFit Raises $50M Series B to Revolutionize Virtual Fashion",
    date: "March 20, 2024",
    image: pressImg1,
  },
  {
    id: 2,
    title: "TechCrunch: InnFit's AI Virtual Try-On Technology Wins Best Innovation Award",
    date: "March 15, 2024",
    image: pressImg2,
  },
  {
    id: 3,
    title: "Forbes Feature: How InnFit is Changing E-Commerce Returns",
    date: "March 10, 2024",
    image: pressImg3,
  },
];

const mediaKit = [
  { name: "Company Logo - Light", size: "2.4 MB", icon: "📄" },
  { name: "Company Logo - Dark", size: "2.1 MB", icon: "📄" },
  { name: "Product Screenshots", size: "8.5 MB", icon: "📦" },
  { name: "Executive Bios", size: "1.2 MB", icon: "📄" },
  { name: "Brand Guidelines", size: "5.3 MB", icon: "📄" },
  { name: "Press Kit PDF", size: "12.8 MB", icon: "📦" },
];

const awards = [
  { year: 2024, title: "Best Innovation in Fashion Tech", source: "TechCrunch Disrupt" },
  { year: 2024, title: "Top 10 AI Startups to Watch", source: "Forbes" },
  { year: 2023, title: "Best E-Commerce Solution", source: "Retail Technology Innovation Awards" },
];

export default function Press() {
  const heroRef = useRef(null);
  const pressRef = useRef(null);
  const mediaRef = useRef(null);
  const awardsRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isPressInView = useInView(pressRef, { once: true, margin: "-100px" });
  const isMediaInView = useInView(mediaRef, { once: true, margin: "-100px" });
  const isAwardsInView = useInView(awardsRef, { once: true, margin: "-100px" });

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
              Media Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              InnFit in the{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                News
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Press releases, media coverage, and resources for journalists and media professionals.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={pressRef} className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isPressInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover-elevate flex items-center gap-6">
                  <div className="h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={release.image} alt={release.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">{release.date}</p>
                    <h3 className="text-lg font-semibold mb-2">{release.title}</h3>
                    <Button variant="outline" size="sm">
                      Read More
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={mediaRef} className="py-16 md:py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Media Kit</h2>
          <p className="text-muted-foreground mb-8">
            Download high-resolution assets, logos, and brand materials for your publication.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isMediaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover-elevate cursor-pointer text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.size}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={awardsRef} className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Awards & Recognition</h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <motion.div
                key={award.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isAwardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover-elevate">
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-neon-purple flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{award.year}</p>
                      <h3 className="font-semibold mb-1">{award.title}</h3>
                      <p className="text-sm text-muted-foreground">{award.source}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 text-neon-purple mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            For press inquiries, interviews, or media requests, please contact our PR team.
          </p>
          <a href="/about#contact">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0">
              Contact Press Team
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
