# Celebrare Photo Gallery

A responsive photo gallery built with React, Vite, and Tailwind CSS. Browse photos, search by author, and save your favourite photos.

## Features

- Fetches 30 photos from the Picsum Photos API.
- Responsive gallery layout for mobile, tablet, and desktop.
- Search photos by author name in real time.
- Add or remove photos from favourites.
- Favourites persist using localStorage.
- Custom React hook for fetching photos.
- Loading spinner and error handling.
- Uses React hooks including useState, useEffect, useReducer, useCallback, and useMemo.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API
- Browser localStorage

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/2812shweta/PhotoGallary.git
   ```

2. Navigate to the project directory:

   ```bash
   cd PhotoGallary
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

## API

Photos are fetched from:

https://picsum.photos/v2/list?limit=30

## Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   ├── PhotoCard.jsx
│   └── SearchBar.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducer/
│   └── favouritesReducer.js
├── App.jsx
├── index.css
└── main.jsx
```

## Author

Shweta Singh

GitHub: [2812shweta](https://github.com/2812shweta)