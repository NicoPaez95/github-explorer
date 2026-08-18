import { RepoCard } from "./RepoCard";
const RepoList = ({ repos = [] }) => {
  if (!repos || repos.lenght === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-800 p-8 text-center text-slate-400">
        <p className="text-base font-medium">No repositories found</p>
        <p className="mt-1 text-sm text-slate-500">
          Try searching for something else above.
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export { RepoList };
