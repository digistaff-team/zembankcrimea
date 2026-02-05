
import { PRO_TALK_API_URL, PRO_TALK_BOT_ID, PRO_TALK_BOT_TOKEN } from '../constants';
import { ProTalkRequest, ProTalkResponse } from '../types';

/**
 * Generates a random session ID for the chat to maintain context.
 */
export const generateChatId = (): string => {
  return 'user_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now();
};

/**
 * Sends a message to the Pro-Talk Bot API.
 * Endpoint: POST /ask/{bot_token}
 */
export const sendMessageToBot = async (message: string, chatId: string): Promise<string> => {
  // Construct URL with bot_token in path
  const url = `${PRO_TALK_API_URL}/ask/${PRO_TALK_BOT_TOKEN}`;
  
  const payload: ProTalkRequest = {
    bot_id: PRO_TALK_BOT_ID,
    chat_id: chatId,
    message: message
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      if (response.status === 401) {
         console.error('ProTalk API: Unauthorized. Please check the BOT_TOKEN.');
         throw new Error('Ошибка авторизации. Проверьте настройки бота.');
      }
      if (response.status === 400) {
        console.error('ProTalk API: Bad Request. Check bot_id or message content.');
        throw new Error('Некорректный запрос к серверу.');
      }
      throw new Error(`API Error: ${response.status}`);
    }

    const data: ProTalkResponse = await response.json();
    
    if (!data.done) {
      // Fallback in case the structure differs unexpectedly
      console.warn('ProTalk API: Response did not contain "done" field', data);
      return "Извините, я получил пустой ответ от сервера.";
    }

    return data.done;
  } catch (error) {
    console.error('ProTalk Service Error:', error);
    throw error; // Re-throw to be handled by the UI component
  }
};
