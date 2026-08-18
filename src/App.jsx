import { SearchBar } from "./components/SearchBar";
import { RepoList } from "./components/RepoList";
import { useState } from "react";
function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 border-b border-slate-800 pb-6 text-center sm:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-blue-400">
            Github Explorer
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Search for repositories on GitHub and explore their metrics in real
            time.
          </p>
        </header>
        <main className="space-y-6">
          <SearchBar query={query} onQueryChange={setQuery} />
          <RepoList />
        </main>
      </div>
    </div>
  );
}

export default App;
