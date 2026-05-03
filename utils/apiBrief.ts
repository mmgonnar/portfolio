export const sendBriefData = async (data: any) => {
  try {
    const response = await fetch('/api/briefs/web-design', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Failed to send');
    return true;
  } catch (error) {
    console.error('MERN Error:', error);
    return false;
  }
};
