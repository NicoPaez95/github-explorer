const SearchBar = ({ query, onQueryChange }) => {
  return (
    <>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            onQueryChange(e.target.value);
          }}
          placeholder="which repository do you want to search?"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 py-3 pl-10 pr-4 text-slate-100 placeholder-slate-400 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 "
        />
      </div>
    </>
  );
};

export { SearchBar };
