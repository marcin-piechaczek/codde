export const Skeleton = () => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="mx-auto flex w-full max-w-sm flex-col rounded-md p-4 shadow">
        <div className="mb-2 flex animate-pulse space-x-1">
          <div className="h-2 w-2 rounded-full bg-slate-700"></div>
          <div className="h-2 w-2 rounded-full bg-slate-700"></div>
          <div className="h-2 w-2 rounded-full bg-slate-700"></div>
        </div>
        <div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 rounded bg-slate-700"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-slate-700"></div>
                <div className="col-span-1 h-2 rounded bg-slate-700"></div>
              </div>
              <div className="h-2 rounded bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
