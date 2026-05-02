import { GoogleGenAI } from "@google/genai";

const WEBSITE_CONTEXT = `
Xtributor Knowledge Base:

1. Overview:
Xtributor is the ultimate subscription billing and marketplace management platform for cloud resellers and SaaS independent software vendors (ISVs). It enables seamless automation of billing and provisioning of cloud services and B2B SaaS applications. It tackles challenges related to management of complicated subscription & billing terms.

2. For Cloud Resellers:
Resellers often manage subscriptions, billing, and provisioning manually, which blocks growth. Xtributor is the industry's first subscription management software specifically for cloud resellers. It simplifies customer experience, increases profits, reduces marketing budgets, and saves time.

3. For B2B SaaS Vendors (ISVs):
Xtributor helps SaaS vendors bill customers at custom pricing, automate billing & provisioning, and manage everything from a unified interface. It reduces billing complexity and helps ISVs grow in the global cloud marketplace.

4. Core Features (Hypergrowth Platform):
- Subscription billing automation
- Automated provisioning
- Support ticket management
- Product & pricing management
- Real-time analytics
- Sales management
- Ready-to-go marketplace
- Smart dashboard

5. Integrations:
Xtributor supports essential "Plug & Play" integrations:
- Cloud Distributors: Crayon, Ingram Micro, SoftwareOne. (Multi disti-connect APIs).
- Tax Compliance: Avalara (seamless tax management, registration, calculation, returns).
- Payment Gateways: PayPal, Stripe (fast checkouts, chargeback prevention, recurring billing).
- Accounting Tools: Quickbooks, Tally (manages financial side without messy records).

6. Careers:
Xtributor is a tight-knit team of enthusiasts. They look for strategists, developers, designers, and marketers.

7. Contact:
Visitors can contact the team for questions, custom solutions, or to scale their cloud business.

8. Design Aesthetic:
The website features a modern, high-tech design with indigo/blue color schemes, fluid animations, and a focus on "hypergrowth" and "orchestration".
`;

export interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export class ChatBotService {
  private ai: GoogleGenAI;
  private history: { role: 'user' | 'model'; parts: { text: string }[] }[] = [];

  constructor() {
    // Standard initialization as per instructions
    this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const userMessage = { role: 'user' as const, parts: [{ text: message }] };
      const response = await this.ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...this.history, userMessage],
        config: {
          systemInstruction: `You are the Xtributor AI Assistant. Your goal is to help visitors understand how Xtributor can help their cloud business.
          
          Guidelines:
          - Use the provided Xtributor Knowledge Base to answer questions.
          - If the information is NOT in the knowledge base, politely say you don't have that specific information and suggest contacting the team via the Contact page.
          - Keep answers professional, helpful, and concise.
          - Format your output clearly using markdown (bolding, lists) to make it easy to read.
          - Language: Respond in the same language as the user.
          
          Knowledge Base:
          ${WEBSITE_CONTEXT}`,
        }
      });

      const responseText = response.text || "I received an empty response. Could you please rephrase your question?";

      // Update history
      this.history.push(userMessage);
      this.history.push({ role: "model", parts: [{ text: responseText }] });
      
      if (this.history.length > 20) {
        this.history = this.history.slice(-20);
      }

      return responseText;
    } catch (error: any) {
      console.error("Gemini API Error Detail:", error);
      
      if (error?.message?.includes("API key not valid")) {
        return "It seems there's an issue with my API key. Please check the environment configuration.";
      }
      
      return "I apologize, but I'm having trouble connecting to my service right now. Please try again in a few moments.";
    }
  }

  clearHistory() {
    this.history = [];
  }
}

export const chatbotService = new ChatBotService();
