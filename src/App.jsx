import { SearchBar } from "./components/SearchBar";
import { RepoList } from "./components/RepoList";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
function App() {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedQuery = useDebounce(query, 500);
  useEffect(() => {
    const cleanQuery = debouncedQuery.trim();
    if (!cleanQuery) {
      setRepos([]);
      return;
    }
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${encodeURIComponent(cleanQuery)}`
        );

        if (!response.ok) {
          throw new Error(`GitHub API Error: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data.items || []);
      } catch (err) {
        setError(err.message || "Error fetching repositories");
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [debouncedQuery]);

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
          {error && (
            <div className="rounded-xl border border-red-800/50 bg-red-950/30 p-4 text-center text-red-400">
              <p>{error}</p>
            </div>
          )}

          {loading ? <LoadingSpinner /> : <RepoList repos={repos} />}
        </main>
      </div>
    </div>
  );
}

export default App;
