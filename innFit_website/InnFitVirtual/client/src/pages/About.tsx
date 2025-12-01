import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Mail,
  Phone,
  MapPin,
  Send,
  Briefcase,
  Clock,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import ashikPhoto from "@assets/founder_photos/ashik.jpg";
import hasibPhoto from "@assets/founder_photos/hasib.jpg";
import samandarPhoto from "@assets/founder_photos/samandar.jpg";
import ceoPhoto from "@assets/founder_photos/hoshimov.jpg";

const teamMembers = [
  {
    name: "Hoshimov Mirzohamidullo",
    role: "CEO & Co-Founder",
    bio: "Visionary leader driving InnFit's mission to revolutionize fashion technology. 10+ years of experience in AI and retail innovation.",
    image: ceoPhoto,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ashik Rana Magar",
    role: "Chief Operations Officer (COO)",
    bio: "Operations expert ensuring seamless execution of InnFit's ambitious vision. Proven track record scaling tech startups.",
    image: ashikPhoto,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Hasib Ullah",
    role: "VP of Product",
    bio: "Product strategist focused on delivering exceptional user experiences. Passionate about democratizing fashion technology.",
    image: hasibPhoto,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Samandar Shadmanov",
    role: "Chief Technical Officer (CTO)",
    bio: "3D and AR technology pioneer. Expert in computer vision and immersive tech that powers InnFit's virtual fitting room.",
    image: samandarPhoto,
    linkedin: "#",
    twitter: "#",
  },
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push the boundaries of what's possible in fashion technology.",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description: "Every decision we make starts with our users' needs.",
  },
  {
    icon: Users,
    title: "Inclusive Design",
    description: "Building technology that works for every body type.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication with our team, partners, and customers.",
  },
];

const careers = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$180k - $250k",
    description: "Join our AI team to develop cutting-edge computer vision models for virtual try-on technology.",
    requirements: ["5+ years ML experience", "PyTorch/TensorFlow expertise", "Computer vision background"],
  },
  {
    id: 2,
    title: "3D Graphics Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$150k - $200k",
    description: "Build real-time 3D rendering systems for our avatar and clothing simulation engine.",
    requirements: ["WebGL/Three.js mastery", "Shader programming", "Performance optimization"],
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    department: "Engineering",
    location: "Remote / NYC",
    type: "Full-time",
    salary: "$140k - $190k",
    description: "Develop and scale our platform infrastructure and user-facing applications.",
    requirements: ["React/Node.js", "PostgreSQL/MongoDB", "AWS/GCP experience"],
  },
  {
    id: 4,
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $170k",
    description: "Shape the future of virtual fitting experiences with intuitive, beautiful interfaces.",
    requirements: ["5+ years product design", "Figma expertise", "Motion design skills"],
  },
  {
    id: 5,
    title: "UX Researcher",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Conduct user research to inform product decisions and improve customer experience.",
    requirements: ["User research methods", "Data analysis", "Cross-functional collaboration"],
  },
  {
    id: 6,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote / LA",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Drive user acquisition and retention through data-driven marketing strategies.",
    requirements: ["B2B/B2C marketing", "Analytics tools", "Content marketing"],
  },
  {
    id: 7,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$140k - $180k",
    description: "Build and maintain our cloud infrastructure for scale and reliability.",
    requirements: ["Kubernetes/Docker", "CI/CD pipelines", "Infrastructure as code"],
  },
];

export default function About() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const careersRef = useRef(null);
  const contactRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const isCareersInView = useInView(careersRef, { once: true, margin: "-100px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleApply = (jobTitle: string) => {
    toast({
      title: "Application Started",
      description: `Opening application for ${jobTitle}...`,
    });
  };

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
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4"
            >
              About InnFit
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Revolutionizing{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Fashion Technology
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to eliminate the guesswork from online shopping, 
              making it possible for everyone to find clothes that fit perfectly, every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A world where everyone can shop for clothes with complete confidence, 
                knowing exactly how each item will look and fit before making a purchase.
              </p>
              <blockquote className="border-l-4 border-neon-blue pl-6 italic text-xl text-muted-foreground">
                "Fashion should be accessible, personal, and frustration-free for everyone."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To build the most accurate and accessible virtual try-on technology, 
                powered by AI that understands every body type and style preference.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-neon-blue/10 text-neon-blue rounded-full text-sm font-medium">
                  AI-Powered
                </span>
                <span className="px-4 py-2 bg-neon-purple/10 text-neon-purple rounded-full text-sm font-medium">
                  Body-Positive
                </span>
                <span className="px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-medium">
                  Sustainable
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-neon-purple" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={teamRef} className="py-24 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 text-neon-blue text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Founders
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate team of engineers, designers, and fashion enthusiasts 
              building the future of online shopping.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <Card className="overflow-hidden">
                    <div className="relative aspect-square overflow-hidden">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Twitter className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                      <p className="text-sm text-neon-purple mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" ref={careersRef} className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCareersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">
              Careers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Growing Team
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion 
              for innovation and want to shape the future of fashion technology.
            </p>
          </motion.div>

          <div className="space-y-4">
            {careers.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isCareersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="w-full p-6 flex items-center justify-between gap-4">
                    <div 
                      className="flex-1 cursor-pointer"
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      data-testid={`button-job-${job.id}`}
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <span className="px-2 py-1 bg-neon-blue/10 text-neon-blue text-xs rounded-full">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0 hidden sm:flex"
                        onClick={() => handleApply(job.title)}
                        data-testid={`button-apply-${job.id}`}
                      >
                        Apply Now
                      </Button>
                      <div 
                        className="cursor-pointer p-2 hover-elevate rounded-md"
                        onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                      >
                        {expandedJob === job.id ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 border-t border-border"
                    >
                      <div className="pt-6">
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req) => (
                              <li key={req} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 bg-neon-purple rounded-full" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button
                          className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0 sm:hidden"
                          onClick={() => handleApply(job.title)}
                        >
                          Apply Now
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className="py-24 md:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-neon-blue/10 text-neon-blue text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our platform? Want to partner with us? 
              We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Your name"
                        required
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Select
                      value={contactForm.subject}
                      onValueChange={(value) => setContactForm({ ...contactForm, subject: value })}
                    >
                      <SelectTrigger data-testid="select-contact-subject">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      required
                      data-testid="input-contact-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0"
                    data-testid="button-contact-submit"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      For general inquiries and support
                    </p>
                    <a href="mailto:hello@innfit.io" className="text-neon-blue hover:underline">
                      hello@innfit.io
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Mon-Fri from 9am to 6pm PST
                    </p>
                    <a href="tel:+1-555-123-4567" className="text-neon-purple hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Our headquarters
                    </p>
                    <p className="text-sm">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Partnership Inquiries</h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Interested in integrating InnFit?
                    </p>
                    <a href="mailto:partners@innfit.io" className="text-amber-500 hover:underline">
                      partners@innfit.io
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
