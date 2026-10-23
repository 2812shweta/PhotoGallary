
export function loadFavourites() {
  try {
    const savedFavourites = localStorage.getItem('favourites')

    return savedFavourites
      ? JSON.parse(savedFavourites)
      : []
  } catch (error) {
    console.error('Error loading favourites:', error)
    return []
  }
}

function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const photoId = action.payload

      const isFavourite = state.includes(photoId)

      if (isFavourite) {
        return state.filter((id) => id !== photoId)
      }

      return [...state, photoId]
    }

    default:
      return state
  }
}

export default favouritesReducer
