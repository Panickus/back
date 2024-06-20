import axios from 'axios';

export const getVideoUrl = async (videoId: string) => {
  const response = await axios.get(`https://example.com/videos/${videoId}`);
  return response.data.url;
};