import React, { useEffect, useState } from 'react';

const Login = () => {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get('access_token');
      if (token) {
        setAccessToken(token);
        localStorage.setItem('access_token', token);
        window.location.hash = ''; // Clean up the URL
      }
    }
  }, []);

  const handleLogin = () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = `${window.location.origin}/gallery`;
    const scope = encodeURIComponent('https://www.googleapis.com/auth/photoslibrary.readonly');
    const responseType = 'token';
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;

    window.location.href = authUrl;
  };

  return (
    <div>
      <h2>Welcome to the Oma Gallery App</h2>
      <p>Please log in to view the gallery.</p>
      <button onClick={handleLogin}>Log in with Google</button>
      {accessToken && (
        <div>
          <h3>Your Access Token:</h3>
          <textarea
            style={{ width: '100%', height: '100px' }}
            readOnly
            value={accessToken}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
















