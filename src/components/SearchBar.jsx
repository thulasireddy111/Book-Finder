function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books by title..."
        className="p-2 w-2/3 border rounded-l"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 rounded-r"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
