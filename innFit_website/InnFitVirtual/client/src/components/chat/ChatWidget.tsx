import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Minimize2, Sparkles, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isTypewriting?: boolean;
}

const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content: "Hi! How can I assist you?",
  timestamp: new Date(),
  isTypewriting: true,
};

const quickReplies = [
  "How does virtual try-on work?",
  "Tell me about pricing plans",
  "What's the return rate impact?",
  "Can we integrate InnFit?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false);
  const [displayedText, setDisplayedText] = useState<{ [key: string]: string }>({});
  const [showGreeting, setShowGreeting] = useState(true);
  const [greetingText, setGreetingText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const greetingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
  scrollToBottom();
}, [messages, displayedText]);

// Greeting typewriter effect on mount (repeats every 5 seconds)
useEffect(() => {
  if (showGreeting && !isOpen) {
    const greetingMessage = "Hi! How can I help you?";
    const fullDuration = 5000; // 5 seconds loop
    const intervalDuration = 3500 / greetingMessage.length;

    let currentIndex = 0;

    const runTyping = () => {
      currentIndex = 0;
      setGreetingText("");

      if (greetingIntervalRef.current) clearInterval(greetingIntervalRef.current);

      greetingIntervalRef.current = setInterval(() => {
        if (currentIndex <= greetingMessage.length) {
          setGreetingText(greetingMessage.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(greetingIntervalRef.current);
        }
      }, intervalDuration);
    };

    // Start typing immediately
    runTyping();

    // Restart typing every 5 seconds
    const loop = setInterval(() => {
      runTyping();
    }, fullDuration);

    return () => {
      if (greetingIntervalRef.current) clearInterval(greetingIntervalRef.current);
      clearInterval(loop);
    };
  }
}, [showGreeting, isOpen]);

useEffect(() => {
  // Typewriter effect for messages with isTypewriting flag
  messages.forEach((msg) => {
    if (msg.isTypewriting && !displayedText[msg.id]) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= msg.content.length) {
          setDisplayedText((prev) => ({
            ...prev,
            [msg.id]: msg.content.substring(0, currentIndex),
          }));
          currentIndex++;
        } else {
          clearInterval(interval);
          // Remove typewriting flag after animation completes
          setMessages((prev) =>
            prev.map((m) => (m.id === msg.id ? { ...m, isTypewriting: false } : m))
          );
        }
      }, 30); // Faster response rate
      return () => clearInterval(interval);
    }
  });
}, [messages, displayedText]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || message;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setMessage("");
    setIsTyping(true);

    try {
      const chatHistory = updatedMessages
        .filter(msg => msg.id !== "welcome")
        .map(msg => ({
          role: msg.role,
          content: msg.content,
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message || "Thanks for your message! Our AI-powered virtual fitting room helps you find the perfect fit every time.",
        timestamp: new Date(),
        isTypewriting: true,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (!isOpen) {
        setHasUnreadMessages(true);
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm having a bit of trouble connecting right now. Please try again in a moment, or feel free to explore our website for more information about InnFit!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasUnreadMessages(false);
    setShowGreeting(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-4 md:right-6 w-[calc(100%-2rem)] md:w-96 h-[500px] bg-card rounded-2xl border border-border shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">InnFit Assistant</h3>
                  <p className="text-xs text-muted-foreground">
                    {isTyping ? "Typing..." : "Online"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsMinimized(true)}
                  data-testid="button-minimize-chat"
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsOpen(false)}
                  data-testid="button-close-chat"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      msg.role === "user"
                        ? "bg-neon-purple/20"
                        : "bg-gradient-to-br from-neon-blue to-neon-purple"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-4 h-4 text-neon-purple" />
                    ) : (
                      <Bot className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                        : "bg-accent"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      {msg.isTypewriting ? displayedText[msg.id] || "" : msg.content}
                      {msg.isTypewriting && displayedText[msg.id] && displayedText[msg.id].length < msg.content.length && (
                        <span className="animate-pulse">▍</span>
                      )}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-accent rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSendMessage(reply)}
                      className="text-xs bg-accent hover:bg-accent/80 rounded-full px-3 py-1.5 transition-colors"
                      data-testid={`button-quick-reply-${reply.slice(0, 10)}`}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  data-testid="input-chat-message"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-gradient-to-r from-neon-blue to-neon-purple text-white border-0"
                  disabled={!message.trim() || isTyping}
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Greeting Tooltip */}
      <AnimatePresence>
        {showGreeting && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-24 right-4 md:right-6 bg-card border border-border rounded-2xl shadow-xl p-4 w-64 z-50"
          >
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold mb-1">InnFit Assistant</p>
                <p className="text-xs text-muted-foreground min-h-[18px]">
                  {greetingText}
                  {greetingText.length < 23 && <span className="animate-pulse">▍</span>}
                </p>
              </div>
              <button
                onClick={() => setShowGreeting(false)}
                className="flex-shrink-0 p-1 hover:bg-accent rounded-lg transition-colors"
                aria-label="Dismiss assistant greeting"
                data-testid="button-dismiss-greeting"
              >
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={showGreeting && !isOpen ? { scale: [1, 1.1, 1] } : {}}
        transition={showGreeting && !isOpen ? { duration: 2, repeat: Infinity } : {}}
        className="fixed bottom-6 right-4 md:right-6 w-14 h-14 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-xl z-50 flex items-center justify-center ring-4 ring-neon-blue/20"
        data-testid="button-open-chat"
      >
        <AnimatePresence mode="wait">
          {isOpen && isMinimized ? (
            <motion.div
              key="expand"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          ) : isOpen ? (
            <motion.div
              key="close"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {hasUnreadMessages && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          </span>
        )}

        {/* Pulsing ring animation */}
        {showGreeting && !isOpen && (
          <>
            <motion.div
              animate={{ scale: [1, 1.3], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border-2 border-neon-blue"
            />
            <motion.div
              animate={{ scale: [1, 1.5], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 rounded-full border-2 border-neon-purple"
            />
          </>
        )}
      </motion.button>
    </>
  );
}

