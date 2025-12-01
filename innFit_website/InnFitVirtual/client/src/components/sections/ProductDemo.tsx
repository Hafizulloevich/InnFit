import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, User, Shirt, ArrowRight, CheckCircle2 } from "lucide-react";

import bodyScan from "@assets/generated_images/3d_body_scan_visualization.png";
import tryOn from "@assets/generated_images/virtual_try-on_before_after.png";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Photo",
    description: "Simply take or upload a full-body photo. Our AI works with any lighting and background.",
    color: "from-neon-blue to-cyan-500",
    features: ["Any photo works", "Privacy protected", "Instant processing"],
  },
  {
    number: "02",
    icon: User,
    title: "Generate 3D Avatar",
    description: "Our AI creates an accurate 3D body model with precise measurements in seconds.",
    color: "from-violet-500 to-neon-purple",
    features: ["99.5% accuracy", "Body measurements", "Real-time render"],
  },
  {
    number: "03",
    icon: Shirt,
    title: "Try Outfits Instantly",
    description: "Browse thousands of items and see exactly how they look and fit on your avatar.",
    color: "from-neon-purple to-pink-500",
    features: ["1000+ brands", "Realistic fabric", "Save favorites"],
  },
];

export default function ProductDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4"
          >
            How It Works
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Three Simple Steps to Your{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Perfect Fit
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of online shopping with our AI-powered virtual fitting room technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full bg-card rounded-2xl border border-border p-6 lg:p-8 group"
              >
                <div className="absolute top-0 right-0 p-4 text-6xl font-bold text-muted/20">
                  {step.number}
                </div>
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-6">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-neon-blue flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={bodyScan}
                alt="3D Body Scan Technology"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Body Scan Progress</span>
                    <span className="text-sm text-neon-blue">100%</span>
                  </div>
                  <div className="h-2 bg-accent rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={tryOn}
                alt="Virtual Try-On"
                className="w-full"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-green-500/90 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Perfect Match
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
