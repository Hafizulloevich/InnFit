import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Demo() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="pt-16 md:pt-20">
      <section ref={heroRef} className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-background to-neon-purple/10" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-blue/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4"
            >
              <Sparkles className="inline w-4 h-4 mr-2" />
              Watch InnFit in Action
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              See the Magic of{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Virtual Try-On
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover how InnFit transforms the way people shop for clothes with AI-powered virtual fitting rooms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative">
              <iframe
                src="https://streamable.com/e/hey9vy"
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen={true}
                className="rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to revolutionize your shopping experience? Try InnFit today and discover the perfect fit every time.
            </p>
            <a href="/pricing">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0 text-lg px-8 py-6">
                <Play className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
