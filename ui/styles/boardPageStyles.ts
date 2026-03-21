export const boardPageStyles = {
  container:
    "min-h-[calc(100vh-4rem)] bg-zinc-50 px-4 py-8 dark:bg-black sm:px-6 lg:px-8",
  content:
    "mx-auto max-w-4xl",
  title:
    "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
  loading:
    "flex min-h-[300px] items-center justify-center text-zinc-500 dark:text-zinc-400",
  error:
    "flex min-h-[300px] flex-col items-center justify-center gap-2 text-red-500 dark:text-red-400",
  empty:
    "flex min-h-[300px] items-center justify-center text-zinc-500 dark:text-zinc-400",
  table: {
    wrapper:
      "mt-6 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
    header:
      "hidden border-b border-zinc-200 bg-zinc-100 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 sm:grid sm:grid-cols-[1fr_120px_120px_80px] sm:gap-4 sm:px-6 sm:py-3",
    row:
      "flex flex-col gap-1 border-b border-zinc-100 px-4 py-3 transition-colors hover:bg-zinc-50 dark:border-zinc-800/50 dark:hover:bg-zinc-900/50 sm:grid sm:grid-cols-[1fr_120px_120px_80px] sm:items-center sm:gap-4 sm:px-6",
    rowTitle:
      "font-medium text-zinc-900 dark:text-zinc-100",
    rowMeta:
      "text-sm text-zinc-500 dark:text-zinc-400",
    rowMetaLabel:
      "mr-1 text-zinc-400 dark:text-zinc-500 sm:hidden",
  },
  pagination: {
    wrapper:
      "mt-6 flex items-center justify-center gap-1",
    button:
      "rounded-md border border-zinc-200 px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
    buttonActive:
      "rounded-md border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-semibold text-white",
    buttonDisabled:
      "rounded-md border border-zinc-100 px-3 py-1.5 text-sm text-zinc-300 dark:border-zinc-800 dark:text-zinc-600",
  },
} as const;
