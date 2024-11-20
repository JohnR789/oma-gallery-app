import axios from 'axios';
import { useEffect, useState } from 'react';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.error("Access token not found.");
        return;
      }

      try {
        const response = await axios.post(
          'https://photoslibrary.googleapis.com/v1/mediaItems:search',
          { albumId: 'your_album_id_here' }, // Replace with your actual albumId
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        setPhotos(response.data.mediaItems || []);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  // Function to cycle through photos every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div>
      {photos.length > 0 ? (
        <img src={photos[currentIndex].baseUrl} alt="Gallery item" />
      ) : (
        <p>Loading gallery...</p>
      )}
    </div>
  );
};

export default Gallery;




























