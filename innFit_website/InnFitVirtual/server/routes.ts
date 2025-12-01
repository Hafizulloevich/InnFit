import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { findRelevantResponse } from "./knowledge";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;

      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required" });
      }

      // Get the last user message
      const lastMessage = messages[messages.length - 1];
      const userQuery = lastMessage?.content || "";

      // Find a response from the local knowledge base
      const knowledgeResponse = findRelevantResponse(userQuery);
      
      if (knowledgeResponse) {
        return res.json({ message: knowledgeResponse });
      }

      // If no knowledge base match, return a helpful message
      return res.json({ 
        message: "I'm not sure about that specific question, but I'd be happy to help! Feel free to ask me about InnFit's features, pricing plans, how virtual try-on works, integration options, or anything else about our platform. You can also visit our documentation page or contact our support team at support@innfit.com for more detailed information!"
      });
    } catch (error) {
      console.error("Chat endpoint error:", error);
      res.status(500).json({ 
        error: "Failed to process chat",
        message: "I'm experiencing a temporary issue. Please try again in a moment!"
      });
    }
  });

  return httpServer;
}
