
function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-lg">
      
      {/* Photo */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={`https://picsum.photos/id/${photo.id}/500/500`}
          alt={`Photo by ${photo.author}`}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Favourite Button */}
        <button
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? 'Remove from favourites'
              : 'Add to favourites'
          }
          aria-pressed={isFavourite}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isFavourite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            className={`h-5 w-5 ${
              isFavourite ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
            />
          </svg>
        </button>
      </div>

      {/* Author Name */}
      <div className="p-4">
        <p className="truncate text-sm font-medium text-gray-800">
          {photo.author}
        </p>
      </div>

    </div>
  )
}

export default PhotoCard
