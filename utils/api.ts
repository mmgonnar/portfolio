const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
