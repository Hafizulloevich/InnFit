import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Sparkles, Zap, Building2, Crown, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    id: "freemium",
    name: "Freemium",
    icon: Sparkles,
    description: "Perfect for individuals exploring virtual try-on technology",
    price: { monthly: 0, yearly: 0 },
    priceLabel: "Free forever",
    highlight: false,
    features: [
      { name: "5 try-ons per month", included: true },
      { name: "Basic 3D avatar", included: true },
      { name: "Standard quality rendering", included: true },
      { name: "Email support", included: true },
      { name: "AI style recommendations", included: false },
      { name: "AR camera try-on", included: false },
      { name: "API access", included: false },
      { name: "Custom branding", included: false },
    ],
    cta: "Get Started Free",
    gradient: "from-gray-500 to-gray-600",
  },
  {
    id: "pro",
    name: "Pro",
    icon: Zap,
    description: "For retailers and brands who want to integrate virtual try-on",
    price: { monthly: "1-2%", yearly: "1-2%" },
    priceLabel: "per item commission",
    highlight: true,
    badge: "Most Popular",
    features: [
      { name: "Unlimited try-ons", included: true },
      { name: "High-quality 3D avatar", included: true },
      { name: "HD rendering", included: true },
      { name: "Priority email support", included: true },
      { name: "AI style recommendations", included: true },
      { name: "AR camera try-on", included: true },
      { name: "Basic API access", included: true },
      { name: "Custom branding", included: false },
    ],
    cta: "Start Pro Trial",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    id: "business",
    name: "Business",
    icon: Building2,
    description: "For growing businesses needing comprehensive solutions",
    price: { monthly: 535, yearly: 5350 },
    priceLabel: "/month",
    highlight: false,
    features: [
      { name: "Unlimited try-ons", included: true },
      { name: "Ultra HD 3D avatar", included: true },
      { name: "4K rendering", included: true },
      { name: "24/7 phone & email support", included: true },
      { name: "Advanced AI recommendations", included: true },
      { name: "AR camera try-on", included: true },
      { name: "Full API access", included: true },
      { name: "Custom branding", included: true },
    ],
    cta: "Start Business Trial",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Crown,
    description: "Custom solutions for large-scale deployments",
    price: { monthly: "Custom", yearly: "Custom" },
    priceLabel: "pricing",
    highlight: false,
    features: [
      { name: "Everything in Business", included: true },
      { name: "Dedicated infrastructure", included: true },
      { name: "Custom AI model training", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "SLA guarantee", included: true },
      { name: "On-premise deployment option", included: true },
      { name: "Custom integrations", included: true },
      { name: "White-label solution", included: true },
    ],
    cta: "Contact Sales",
    gradient: "from-amber-500 to-orange-500",
  },
];

const faqs = [
  {
    question: "How does the commission-based pricing work?",
    answer: "With our Pro plan, you only pay a small percentage (1-2%) when a customer makes a purchase after using our virtual try-on. No upfront costs or monthly fees.",
  },
  {
    question: "Can I switch plans anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payments.",
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "Absolutely. All paid plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What's included in the API access?",
    answer: "Pro plans include basic API access with rate limits. Business and Enterprise plans get full API access with higher rate limits and additional endpoints.",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

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
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4"
            >
              Pricing
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the plan that fits your needs. Start free and scale as you grow.
            </p>

            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${!isYearly ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                data-testid="switch-billing-cycle"
              />
              <span className={`text-sm ${isYearly ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                Yearly
                <span className="ml-2 px-2 py-0.5 bg-green-500/10 text-green-500 text-xs rounded-full">
                  Save 17%
                </span>
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full"
                >
                  <Card className={`relative h-full flex flex-col p-6 ${plan.highlight ? "border-2 border-neon-purple" : ""}`}>
                    {plan.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple text-white text-xs font-medium rounded-full">
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

                    <div className="mb-6">
                      {typeof plan.price.monthly === "number" ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold">
                            ${isYearly && typeof plan.price.yearly === "number" ? Math.round(plan.price.yearly / 12) : plan.price.monthly}
                          </span>
                          <span className="text-sm text-muted-foreground whitespace-nowrap">{plan.priceLabel}</span>
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <span className="text-4xl font-bold whitespace-nowrap leading-tight">{plan.price.monthly}</span>
                          <span className="text-sm text-muted-foreground mt-1">{plan.priceLabel}</span>
                        </div>
                      )}
                      {isYearly && typeof plan.price.yearly === "number" && plan.price.yearly > 0 && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Billed annually (${plan.price.yearly}/year)
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-start gap-3">
                          {feature.included ? (
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                              <X className="w-3 h-3 text-muted-foreground" />
                            </div>
                          )}
                          <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${plan.highlight ? `bg-gradient-to-r ${plan.gradient} text-white border-0` : ""}`}
                      variant={plan.highlight ? "default" : "outline"}
                      data-testid={`button-select-${plan.id}`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-neon-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help you find the perfect plan for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0"
                data-testid="button-contact-sales"
              >
                Contact Sales
              </Button>
              <Button
                size="lg"
                variant="outline"
                data-testid="button-schedule-demo"
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
