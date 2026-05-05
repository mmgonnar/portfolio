const API_URL = 'http://127.0.0.1:8000';
//const API_URL = process.env.NEXT_PUBLIC_RENDER_URI || 'http://127.0.0.1:8000';

export const sendBriefData = async (data: FormData) => {
  const response = await fetch(`${API_URL}/api/v1/send-brief`, {
    method: 'POST',
    body: data,
  });

  const responseText = await response.text();

  if (!response.ok) {
    let errorMessage = 'Error en el servidor';
    try {
      const errorData = JSON.parse(responseText);
      errorMessage =
        typeof errorData.detail === 'string' ? errorData.detail : JSON.stringify(errorData.detail);
    } catch {
      errorMessage = responseText || `Server error: ${response.status}`;
    }
    throw new Error(errorMessage);
  }

  return responseText ? JSON.parse(responseText) : { success: true };
};
