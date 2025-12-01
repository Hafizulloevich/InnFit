import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Copy,
  Check,
  Terminal,
  Zap,
  Lock,
  Globe,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const endpoints = [
  {
    method: "POST",
    path: "/api/v1/avatar/create",
    description: "Create a 3D avatar from a photo",
    params: ["image_url: string", "options?: AvatarOptions"],
  },
  {
    method: "GET",
    path: "/api/v1/avatar/{id}",
    description: "Retrieve avatar by ID",
    params: ["id: string"],
  },
  {
    method: "POST",
    path: "/api/v1/tryon",
    description: "Try on a clothing item",
    params: ["avatar_id: string", "item_id: string", "options?: TryOnOptions"],
  },
  {
    method: "GET",
    path: "/api/v1/recommendations",
    description: "Get AI style recommendations",
    params: ["avatar_id: string", "category?: string", "limit?: number"],
  },
  {
    method: "POST",
    path: "/api/v1/measurements",
    description: "Extract body measurements",
    params: ["avatar_id: string"],
  },
];

const codeExamples = {
  javascript: `import InnFit from '@innfit/sdk';

const client = new InnFit({
  apiKey: process.env.INNFIT_API_KEY,
});

// Create avatar from photo
const avatar = await client.avatars.create({
  imageUrl: 'https://example.com/photo.jpg',
  options: {
    quality: 'high',
    measurements: true,
  }
});

// Try on a clothing item
const result = await client.tryOn({
  avatarId: avatar.id,
  itemId: 'item_123',
  options: {
    renderQuality: '4k',
    angles: ['front', 'side', 'back'],
  }
});

console.log(result.images);`,
  python: `from innfit import InnFit
import os

client = InnFit(api_key=os.environ.get("INNFIT_API_KEY"))

# Create avatar from photo
avatar = client.avatars.create(
    image_url="https://example.com/photo.jpg",
    options={
        "quality": "high",
        "measurements": True,
    }
)

# Try on a clothing item
result = client.try_on(
    avatar_id=avatar.id,
    item_id="item_123",
    options={
        "render_quality": "4k",
        "angles": ["front", "side", "back"],
    }
)

print(result.images)`,
  curl: `# Create avatar from photo
curl -X POST https://api.innfit.io/v1/avatar/create \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://example.com/photo.jpg",
    "options": {
      "quality": "high",
      "measurements": true
    }
  }'

# Try on a clothing item
curl -X POST https://api.innfit.io/v1/tryon \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "avatar_id": "avt_abc123",
    "item_id": "item_123",
    "options": {
      "render_quality": "4k",
      "angles": ["front", "side", "back"]
    }
  }'`,
};

const features = [
  {
    icon: Zap,
    title: "Fast Response Times",
    description: "Average response time under 200ms for most endpoints.",
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "OAuth 2.0 authentication with rate limiting and encryption.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Servers in 12 regions for low-latency worldwide access.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Docs",
    description: "Detailed documentation with examples in multiple languages.",
  },
];

export default function API() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [expandedEndpoint, setExpandedEndpoint] = useState<number | null>(null);
  const { toast } = useToast();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const copyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(type);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
              Developer API
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build with the{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                InnFit API
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Integrate virtual try-on, 3D avatars, and AI recommendations into your 
              applications with our powerful RESTful API.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0"
                data-testid="button-get-api-key"
              >
                <Terminal className="w-5 h-5 mr-2" />
                Get API Key
              </Button>
              <Link href="/documentation">
                <Button
                  size="lg"
                  variant="outline"
                  data-testid="button-view-docs"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
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
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quick Start{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Examples
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our SDKs for popular languages.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <Tabs defaultValue="javascript" className="w-full">
                <div className="border-b border-border px-4">
                  <TabsList className="bg-transparent h-12">
                    <TabsTrigger value="javascript" className="data-[state=active]:bg-accent">
                      JavaScript
                    </TabsTrigger>
                    <TabsTrigger value="python" className="data-[state=active]:bg-accent">
                      Python
                    </TabsTrigger>
                    <TabsTrigger value="curl" className="data-[state=active]:bg-accent">
                      cURL
                    </TabsTrigger>
                  </TabsList>
                </div>

                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang} className="m-0">
                    <div className="relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 z-10"
                        onClick={() => copyCode(code, lang)}
                        data-testid={`button-copy-${lang}`}
                      >
                        {copiedCode === lang ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                      <pre className="p-6 overflow-x-auto bg-[#1e1e2e] text-gray-300 text-sm font-mono">
                        <code>{code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              API{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Endpoints
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our available API endpoints and their parameters.
            </p>
          </motion.div>

          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <button
                    className="w-full p-4 text-left flex items-center justify-between gap-4"
                    onClick={() => setExpandedEndpoint(expandedEndpoint === index ? null : index)}
                    data-testid={`button-endpoint-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold ${
                        endpoint.method === "GET" 
                          ? "bg-green-500/10 text-green-500" 
                          : "bg-blue-500/10 text-blue-500"
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono">{endpoint.path}</code>
                    </div>
                    {expandedEndpoint === index ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                  
                  {expandedEndpoint === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-4 pb-4 border-t border-border"
                    >
                      <div className="pt-4">
                        <p className="text-muted-foreground mb-4">{endpoint.description}</p>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Parameters:</h4>
                          <ul className="space-y-1">
                            {endpoint.params.map((param) => (
                              <li key={param} className="flex items-center gap-2">
                                <Code className="w-4 h-4 text-neon-purple" />
                                <code className="text-sm font-mono text-muted-foreground">{param}</code>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-br from-neon-blue/5 via-background to-neon-purple/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get your API key and start integrating InnFit into your application today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0"
                data-testid="button-get-started-api"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                data-testid="button-api-reference"
              >
                Full API Reference
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
