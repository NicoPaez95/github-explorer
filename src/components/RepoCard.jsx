const RepoCard = ({ repo }) => {
  if (!repo) return null;
  return (
    <article className=" flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-800/50 p-5 shadow-md">
      <div>
        <div className="flex items-center gap-3">
          <img
            src={repo.owner?.avatar_url}
            alt={repo.owner?.login}
            className="h-8 w-8 rounded-full border border-slate-700"
          />
          <div>
            <span className="text-xs text-slate-400">@{repo.owner?.login}</span>
            <h2 className="text-lg font-bold text-slate-100">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                {repo.name}
              </a>
            </h2>
          </div>
        </div>
        <p className="mt-3 line-clamp-2 text-sm text-slate-400">
          {repo.description || "No description available"}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
        <span>{repo.language}</span>
        <span>⭐{repo.stargazers_count?.toLocaleString()}</span>
        <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </article>
  );
};

export { RepoCard };
