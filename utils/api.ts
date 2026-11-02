//const API_URL = 'http://127.0.0.1:8000';

import { API_URL, API_TIMEOUT_MS } from './api-config';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  phone_extension?: string;
}

export const api = {
  sendContact: async (data: ContactMessage) => {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(API_TIMEOUT_MS),
    });

    if (!response.ok) {
      console.error('❌ API - Contact request failed:', response.status, response.statusText);
      throw new Error(`Error sending message: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const json = await response.json();
      return json;
    }
    return { status: 'success' };
  },
};
