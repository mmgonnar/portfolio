const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URI || 'http://127.0.0.1:8000';

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

    if (!response.ok) throw new Error('Error sending message');

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }
    return { status: 'success' };
  },
};
