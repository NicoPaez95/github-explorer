const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-3">
      <div className="h-8 w-8 animate-spin  rounded-full border-4 border-slate-700 border-t-blue-500"></div>
      <p className="animate-pulse text-sm text-slate-400">
        Loading repositories...
      </p>
    </div>
  );
};

export { LoadingSpinner };
