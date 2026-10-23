
import { useState, useReducer, useEffect, useCallback, useMemo } from 'react'

import useFetchPhotos from '../hooks/useFetchPhotos'
import PhotoCard from './PhotoCard'
import SearchBar from './SearchBar'
import favouritesReducer, { loadFavourites } from '../reducer/favouritesReducer'

function Gallery() {
  // Fetch photos from API
  const { photos, loading, error } = useFetchPhotos()

  // Search state
  const [searchTerm, setSearchTerm] = useState('')

  // Favourites state using useReducer
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    loadFavourites
  )

  // Save favourites to localStorage
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  // Search handler
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value)
  }, [])

  // Toggle favourite
  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({
      type: 'TOGGLE_FAVOURITE',
      payload: photoId,
    })
  }, [])

  // Filter photos by author
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [photos, searchTerm])

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600"></div>

          <p className="text-sm font-medium text-gray-600">
            Loading photos...
          </p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="rounded-xl bg-white p-8 text-center shadow-sm">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Something went wrong
          </h2>

          <p className="text-sm text-red-500">
            {error}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                Photo Gallery
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Discover and save your favourite photos
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2">
              <span className="text-sm font-medium text-purple-700">
                ♥ {favourites.length} Favourites
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search */}
        <div className="mb-8">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </div>

        {/* Photo Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Showing {filteredPhotos.length} of {photos.length} photos
          </p>
        </div>

        {/* Gallery Grid */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isFavourite={favourites.includes(photo.id)}
                onToggleFavourite={handleToggleFavourite}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white px-6 py-16 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">
              No photos found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with a different author name.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default Gallery
