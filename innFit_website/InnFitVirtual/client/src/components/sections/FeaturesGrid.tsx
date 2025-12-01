import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  User,
  Camera,
  Smartphone,
  Sparkles,
  Target,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: User,
    title: "3D Body Avatar Builder",
    description: "Generate accurate 3D avatars from a single photo with precise body measurements and proportions.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0,
  },
  {
    icon: Camera,
    title: "Photo Try-On Technology",
    description: "Upload any photo and see how clothes would look on you with photorealistic rendering.",
    gradient: "from-violet-500 to-purple-500",
    delay: 0.1,
  },
  {
    icon: Smartphone,
    title: "Live AR Camera Try-On",
    description: "Use your device camera for real-time augmented reality try-on experience anywhere.",
    gradient: "from-pink-500 to-rose-500",
    delay: 0.2,
  },
  {
    icon: Sparkles,
    title: "AI Style Recommendations",
    description: "Get personalized outfit suggestions powered by AI that learns your style preferences.",
    gradient: "from-amber-500 to-orange-500",
    delay: 0.3,
  },
  {
    icon: Target,
    title: "High Accuracy Fit Prediction",
    description: "Our AI predicts fit with 99.5% accuracy, reducing returns and improving satisfaction.",
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.4,
  },
  {
    icon: Palette,
    title: "Clothing Rendering Engine",
    description: "Advanced fabric simulation shows realistic draping, textures, and color accuracy.",
    gradient: "from-indigo-500 to-blue-500",
    delay: 0.5,
  },
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
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
            className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 text-neon-blue text-sm font-medium mb-4"
          >
            Key Features
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Powered by{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Cutting-Edge AI
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the most advanced virtual fitting room technology with features designed to revolutionize online shopping.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full bg-card rounded-2xl border border-border p-6 lg:p-8 group overflow-visible"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                </motion.div>
                
                <h3 className="relative text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="relative text-muted-foreground leading-relaxed">{feature.description}</p>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} origin-left rounded-b-2xl`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
