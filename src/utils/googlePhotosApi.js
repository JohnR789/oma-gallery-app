import axios from 'axios';

export const fetchPhotos = async (token) => {
  try {
    const response = await axios.get('https://photoslibrary.googleapis.com/v1/mediaItems', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.mediaItems;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};



