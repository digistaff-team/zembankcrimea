
export interface LandListing {
  id: number;
  title: string;
  location: string;
  price: number;
  area: string;
  type: 'IJS' | 'SNT' | 'Prom'; // ИЖС, СНТ, Промназначение
  imageUrl: string;
  features: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

// Request schema based on OpenAPI
export interface ProTalkRequest {
  bot_id: number;     // integer, required
  chat_id: string;    // string, required
  message: string;    // string, required
}

// Response schema based on OpenAPI
export interface ProTalkResponse {
  done: string;       // string, answer from bot
}

export enum ServiceType {
  SALES = 'SALES',
  VERIFICATION = 'VERIFICATION',
  RISK_MINIMIZATION = 'RISK_MINIMIZATION'
}
