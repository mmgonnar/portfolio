//const API_URL = 'http://127.0.0.1:8000';
const API_URL = process.env.NEXT_PUBLIC_RENDER_URI || 'http://127.0.0.1:8000';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  phone_extension?: string;
}

export const api = {
  sendContact: async (data: ContactMessage) => {
    console.log('📡 API - Contact endpoint:', `${API_URL}/contact`);
    console.log('📡 API - Contact data:', JSON.stringify(data));
    
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('📡 API - Contact response status:', response.status);
    console.log('📡 API - Contact response statusText:', response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API - Contact error response:', errorText);
      throw new Error(`Error sending message: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const json = await response.json();
      console.log('📡 API - Contact JSON response:', json);
      return json;
    }
    return { status: 'success' };
  },
};
