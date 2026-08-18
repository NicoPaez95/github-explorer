import { SearchBar } from "./components/SearchBar";
import { RepoList } from "./components/RepoList";
import { useState } from "react";
//Mock data de prueba
const mockRepo = {
  id: 1,
  name: "react",
  owner: {
    login: "facebook",
    avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
  },
  html_url: "https://github.com/facebook/react",
  description: "The library for web and native user interfaces.",
  stargazers_count: 228000,
  language: "JavaScript",
  updated_at: "2026-08-15T10:00:00Z",
};
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
          <RepoList repo={mockRepo} />
        </main>
      </div>
    </div>
  );
}

export default App;
