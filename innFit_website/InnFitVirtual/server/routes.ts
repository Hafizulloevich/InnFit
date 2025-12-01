import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { findRelevantResponse } from "./knowledge";
const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { findRelevantResponse } from "./knowledge";

async function callHuggingFaceAPI(messages: any[]): Promise<string> {
  if (!HUGGINGFACE_API_KEY) {
    throw new Error("Hugging Face API key not configured");
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1/v1/messages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/Mistral-7B-Instruct-v0.1",
        messages: messages,
        max_tokens: 300,
        temperature: 0.7,
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Hugging Face API error: ${JSON.stringify(errorData)}`);
    }
    const data = await response.json();
    return data.choices[0]?.message?.content || "I couldn't generate a response at this moment.";
  } catch (error) {
    clearTimeout(timeout);
    throw error;
  }
}
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
      // If no knowledge base match, try Hugging Face API
      try {
        const hfResponse = await callHuggingFaceAPI(messages);
        return res.json({ message: hfResponse });
      } catch (hfError) {
        console.error("Hugging Face API error:", hfError);
        
        // Fallback to a helpful message
        return res.json({ 
          message: "I'm here to help! Feel free to ask me about InnFit's features, pricing plans, how virtual try-on works, integration options, or anything else about our platform. You can also visit our documentation page or contact our support team at support@innfit.com for more detailed information!"
        });
      }
