import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Camera,
  User,
  Sparkles,
  Smartphone,
  Palette,
  Target,
  Zap,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import arTryOn from "@assets/generated_images/virtual_try-on_before_after.png";
import avatarGen from "@assets/generated_images/3d_body_scan_visualization.png";
import aiRecommend from "@assets/generated_images/ai_outfit_recommendations_ui.png";
import phoneMockup from "@assets/generated_images/phone_ar_app_mockup.png";

const services = [
  {
    id: "ar-tryon",
    icon: Smartphone,
    title: "AR Virtual Try-On",
    subtitle: "See Clothes on You in Real-Time",
    description: "Use your device's camera to try on clothes instantly with our augmented reality technology. Works on any smartphone or tablet.",
    features: [
      "Real-time body tracking",
      "Accurate fabric simulation",
      "Works in any lighting",
      "Multi-angle viewing",
    ],
    image: phoneMockup,
    gradient: "from-neon-blue to-cyan-500",
    reverse: false,
  },
  {
    id: "avatar",
    icon: User,
    title: "3D Avatar Generation",
    subtitle: "Your Digital Twin in Seconds",
    description: "Upload a single photo and our AI creates an accurate 3D model of your body with precise measurements.",
    features: [
      "99.5% measurement accuracy",
      "Single photo required",
      "Privacy-first processing",
      "Updates as you change",
    ],
    image: avatarGen,
    gradient: "from-violet-500 to-neon-purple",
    reverse: true,
  },
  {
    id: "ai-style",
    icon: Sparkles,
    title: "AI Style Recommendations",
    subtitle: "Personalized Fashion Intelligence",
    description: "Our AI learns your style preferences and recommends outfits that match your taste and body type perfectly.",
    features: [
      "Style profile learning",
      "Occasion-based suggestions",
      "Color matching algorithms",
      "Trend-aware updates",
    ],
    image: aiRecommend,
    gradient: "from-pink-500 to-rose-500",
    reverse: false,
  },
  {
    id: "photo-tryon",
    icon: Camera,
    title: "Photo Try-On Technology",
    subtitle: "Upload Any Photo, Try Any Outfit",
    description: "See how clothes would look on you using any full-body photo. Perfect for planning outfits or sharing with friends.",
    features: [
      "Works with any photo",
      "Realistic rendering",
      "Share with friends",
      "Save to collections",
    ],
    image: arTryOn,
    gradient: "from-amber-500 to-orange-500",
    reverse: true,
  },
];

const additionalFeatures = [
  {
    icon: Palette,
    title: "Clothing Rendering Engine",
    description: "Advanced fabric physics and texture simulation for realistic draping and movement.",
  },
  {
    icon: Target,
    title: "Fit Prediction",
    description: "AI-powered size recommendations that reduce returns by up to 40%.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "See results in under 3 seconds thanks to our optimized AI pipeline.",
  },
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Photos are processed securely and never stored without permission.",
  },
  {
    icon: Globe,
    title: "Global Catalog",
    description: "Access to 10,000+ items from 500+ brands worldwide.",
  },
];

export default function Services() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="pt-16 md:pt-20">
      <section ref={heroRef} className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-background to-neon-purple/10" />
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-neon-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 text-neon-blue text-sm font-medium mb-4"
            >
              Our Services
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Offer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A complete suite of AI-powered virtual fitting room solutions designed 
              to transform how people shop for clothes online.
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => {
        const sectionRef = useRef(null);
        const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

        return (
          <section
            key={service.id}
            ref={sectionRef}
            className={`py-24 md:py-32 ${index % 2 === 1 ? "bg-card/50" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${service.reverse ? "lg:flex-row-reverse" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: service.reverse ? 30 : -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className={service.reverse ? "lg:order-2" : ""}
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 mb-4`}>
                    <service.icon className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">{service.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`bg-gradient-to-r ${service.gradient} text-white border-0 group`}
                    data-testid={`button-learn-more-${service.id}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: service.reverse ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={service.reverse ? "lg:order-1" : ""}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, rotate: service.reverse ? -1 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-4 bg-gradient-to-r ${service.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                    <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 md:py-32 bg-gradient-to-br from-neon-blue/5 via-background to-neon-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a complete virtual fitting experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-neon-purple" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
