// const API_URL = process.env.NEXT_PUBLIC_RENDER_URI || 'http://127.0.0.1:8000';
const API_URL = 'http://127.0.0.1:8000';
const BRIEF_ENDPOINT = `${API_URL}/api/v1/send-brief`;

export const sendBriefData = async (data: FormData) => {
  const response = await fetch(`${API_URL}/api/v1/send-brief`, {
    method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    body: data,
  });

  if (!response.ok) {
    const errorData = await response.json();
    // Extraemos el mensaje específico para no ver el "[object Object]"
    const errorMessage =
      typeof errorData.detail === 'string' ? errorData.detail : JSON.stringify(errorData.detail);

    throw new Error(errorMessage || 'Error en el servidor');
  }

  return await response.json();
};
