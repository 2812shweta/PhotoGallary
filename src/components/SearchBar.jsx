
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
      >
        <circle cx="11" cy="11" r="8" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-4.35-4.35"
        />
      </svg>

      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search photos by author..."
        aria-label="Search photos by author"
        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
      />
    </div>
  )
}

export default SearchBar
