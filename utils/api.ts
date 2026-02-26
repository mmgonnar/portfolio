const API_URL = process.env.SUPABASE_URI || 'http://127.0.0.1:8000';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export const api = {
  sendContact: async (data: ContactMessage) => {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Error sending message');
    }
    return response.json();
  },
};
