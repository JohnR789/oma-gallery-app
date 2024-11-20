# Oma Gallery App

The **Oma Gallery App** is a personalized photo gallery application that retrieves and displays photos from a specific Google Photos album. Built with React, the app provides seamless functionality to view photos in a gallery that cycles through images every 15 seconds.

## Features

- **Google OAuth 2.0 Login**: Secure login using Google to fetch and display photos.
- **Album Integration**: Retrieves images from a specified Google Photos album.
- **Photo Cycling**: Automatically cycles through photos every 15 seconds.
- **Responsive Design**: Optimized for viewing on all devices.

---

## Prerequisites

### Tools and Accounts
1. **Node.js**: Ensure you have Node.js (version 16 or higher) installed on your system.
2. **Google Cloud Account**: Set up a project in [Google Cloud Console](https://console.cloud.google.com/).

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/YourUsername/oma-gallery-app.git
cd oma-gallery-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Google Cloud
1. Enable the **Google Photos Library API** in the [Google API Console](https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com).
2. Create an OAuth 2.0 Client ID:
   - Go to **Credentials** → **Create Credentials** → **OAuth Client ID**.
   - Add `http://localhost:3000` under **Authorized JavaScript origins**.
   - Add `http://localhost:3000/gallery` under **Authorized redirect URIs**.
3. Download the OAuth credentials JSON and store the `Client ID` in your `.env` file.

---

### 4. Configure Environment Variables
Create a `.env` file in the project root:
```env
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
REACT_APP_GOOGLE_PHOTOS_ALBUM_ID=your_album_id_here
```

- Replace `your_google_client_id_here` with your OAuth 2.0 Client ID.
- Replace `your_album_id_here` with the ID of the Google Photos album you want to fetch photos from.

---

### 5. Run the App
```bash
npm start
```

- Open your browser and navigate to `http://localhost:3000`.
- Log in with your Google account and grant the app permissions.
- Enjoy your personalized gallery!

---

## File Structure

```
src/
├── components/
│   ├── App.js          # Main app component
│   ├── Gallery.js      # Displays and cycles through photos
│   ├── Login.js        # Handles Google OAuth login
│   ├── Header.js       # Optional app header component
├── utils/
│   ├── auth.js         # Authentication helper functions
│   ├── googlePhotosApi.js # Google Photos API calls
├── App.css             # Main styles
├── index.js            # React entry point
.env                    # Environment variables
```

---

## Troubleshooting

1. **Access Token Issues**:
   - Ensure the access token is saved in the browser's `localStorage`.
   - Verify the OAuth client settings (JavaScript origins and redirect URIs).

2. **Error 400 (Bad Request)**:
   - Double-check your `albumId` in the `.env` file.
   - Ensure the selected Google Photos album is shared and accessible.

3. **Gallery Not Loading**:
   - Confirm the Google Photos Library API is enabled.
   - Check for errors in the developer console.

---

## Future Improvements

- Add support for selecting albums dynamically.
- Enable photo upload functionality to the album.
- Implement a user-friendly photo navigation system.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

- **John Rollins**
