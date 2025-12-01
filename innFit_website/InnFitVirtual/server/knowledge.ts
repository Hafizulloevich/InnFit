// Local knowledge base for chatbot responses
export const knowledgeBase = {
  "how.*work": {
    keywords: ["how does", "how it works", "how do", "how can"],
    response: "InnFit's virtual try-on works in 3 simple steps:\n\n1. **Upload Photo**: Users upload a full-body photo to create an accurate 3D digital avatar in seconds\n2. **Browse Items**: Browse thousands of clothing items from partner brands\n3. **Try On**: See exactly how each item looks and fits using real-time 3D and AR previews\n\nOur AI technology analyzes body measurements (neck, shoulder, chest, waist, hip, inseam) with 95%+ accuracy and shows realistic fit predictions. This reduces returns by 30-40% and helps customers make confident purchases!"
  },
  "pricing": {
    keywords: ["pricing", "plans", "cost", "price", "how much"],
    response: "InnFit offers flexible pricing for everyone:\n\n**Freemium** - Free forever, 10 items/month\n**Pro** - 1-2% commission per item sold, unlimited try-ons, analytics dashboard, priority support\n**Business** - $535/month, unlimited items, custom branding, advanced analytics, dedicated support\n**Enterprise** - Custom pricing, dedicated account manager, API access, white-label solutions\n\nWe also offer B2B solutions for fashion retailers and e-commerce platforms. Would you like to know more about any specific plan?"
  },
  "return": {
    keywords: ["return", "reduce", "impact", "rate", "reduce returns"],
    response: "InnFit's virtual try-on significantly reduces returns:\n\n**Key Metrics:**\n- 30-40% reduction in return rates for our customers\n- 95%+ accuracy in body measurements using AI computer vision\n- Customers see exactly how items fit before purchasing\n- Reduced fit-related returns and exchanges\n\n**Why It Works:**\nWhen customers try on clothes virtually before buying, they have much higher confidence in their purchase. This eliminates the guess-and-check cycle that leads to expensive returns. For retailers, this means lower logistics costs and happier customers!"
  },
  "integration": {
    keywords: ["integrate", "api", "integration", "connect", "plugin"],
    response: "Yes! InnFit provides full API integration for Business and Enterprise plans:\n\n**What You Get:**\n- Comprehensive REST API documentation\n- SDKs for popular e-commerce platforms\n- White-label solutions\n- Seamless integration with inventory systems\n- Custom implementation support\n\n**Use Cases:**\n- Fashion retailers and e-commerce stores\n- Marketplace platforms\n- Custom fashion applications\n\nFor detailed API documentation and integration guides, visit our API documentation page. Would you like to schedule a demo with our technical team?"
  },
  "features": {
    keywords: ["feature", "what can", "capabilities", "does it"],
    response: "InnFit's core features include:\n\n**3D Avatar Creation** - Upload a photo, get an accurate digital twin\n**Virtual Try-On** - Browse and try thousands of items in real-time\n**AI Body Measurements** - Automatic detection of neck, shoulder, chest, waist, hip, inseam\n**AR Integration** - See clothes on yourself using augmented reality\n**Size Matching** - Accurate fit predictions\n**AI Style Recommendations** - Personalized suggestions based on preferences\n**Analytics Dashboard** - Track engagement and return metrics (Pro/Business plans)\n**Custom Branding** - White-label solutions available\n\nAll features are designed to reduce returns and boost customer confidence!"
  },
  "free": {
    keywords: ["free", "freemium", "trial"],
    response: "Yes, InnFit is free forever!\n\nOur **Freemium plan** includes:\n- Free account creation\n- 10 virtual try-ons per month\n- 3D avatar creation\n- Basic style recommendations\n\n**Upgrade to Pro or Business** for unlimited try-ons, analytics, priority support, and more.\n\nThere's no credit card required to get started. Just sign up and begin trying on clothes today!"
  },
  "measurement": {
    keywords: ["measurement", "accurate", "size", "fit"],
    response: "InnFit uses advanced AI computer vision to detect body measurements with 95%+ accuracy:\n\n**Measurements Detected:**\n- Neck size\n- Shoulder width\n- Chest circumference\n- Waist size\n- Hip circumference\n- Inseam length\n\n**How It Works:**\nOur AI analyzes your uploaded photo to detect these measurements without manual input. The system then uses these dimensions to predict how clothing items will fit on your body, showing you accurate size recommendations before you buy.\n\nThis eliminates fit-related returns and helps you find clothes that actually fit!"
  },
  "demo": {
    keywords: ["demo", "see", "show", "demonstration"],
    response: "We'd love to show you InnFit in action!\n\n**Request a Demo:**\nVisit our demo page to schedule a personalized walkthrough with our team. We'll show you:\n- How 3D avatar creation works\n- Real-time virtual try-on technology\n- AR features in action\n- Business case studies and ROI metrics\n\nOur demo takes about 15 minutes and you'll see exactly how InnFit can transform your shopping or retail experience."
  },
  "ar": {
    keywords: ["ar", "augmented reality", "reality"],
    response: "InnFit includes AR (Augmented Reality) integration:\n\n**What You Can Do:**\n- See clothes on yourself in real-time using your camera\n- Try on items using mobile or desktop AR\n- Rotate and view from different angles\n- Share AR try-on experiences with friends\n\n**Benefits:**\n- More immersive shopping experience\n- Higher customer confidence\n- Better fit verification\n- Social sharing capabilities\n\nAR is available on both iOS and Android platforms!"
  },
  "support": {
    keywords: ["support", "help", "contact", "help me"],
    response: "We're here to help! InnFit provides comprehensive support:\n\n**Support Channels:**\n- Email: support@innfit.com\n- Documentation: Visit our docs page\n- Blog: Latest fashion tech insights\n- Demo: Schedule a personalized walkthrough\n\n**Support Levels:**\n- Freemium: Community support\n- Pro: Priority email support\n- Business & Enterprise: Dedicated support team\n\nFeel free to reach out anytime with questions!"
  }
};

export function findRelevantResponse(userMessage: string): string | null {
  const lowerMessage = userMessage.toLowerCase();
  
  for (const [pattern, data] of Object.entries(knowledgeBase)) {
    // Check if any keyword matches
    for (const keyword of data.keywords) {
      if (lowerMessage.includes(keyword)) {
        return data.response;
      }
    }
    
    // Check pattern matching
    try {
      const regex = new RegExp(pattern, "i");
      if (regex.test(userMessage)) {
        return data.response;
      }
    } catch (e) {
      // Invalid regex, skip
    }
  }
  
  return null;
}
