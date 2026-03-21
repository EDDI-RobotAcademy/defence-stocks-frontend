export const boardPageStyles = {
  container:
    "min-h-[calc(100vh-4rem)] bg-zinc-50 px-4 py-8 dark:bg-black sm:px-6 lg:px-8",
  content:
    "mx-auto max-w-5xl",
  header: {
    wrapper:
      "flex items-center justify-between",
    title:
      "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
    badge:
      "inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-400",
    badgeDot:
      "h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse",
  },
  loading:
    "flex min-h-[400px] items-center justify-center text-sm text-zinc-400 dark:text-zinc-500",
  error:
    "flex min-h-[400px] flex-col items-center justify-center gap-3 rounded-lg border border-red-200 bg-red-50 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400",
  empty:
    "flex min-h-[400px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-zinc-300 text-sm text-zinc-400 dark:border-zinc-700 dark:text-zinc-500",
  table: {
    wrapper:
      "mt-6 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
    header:
      "hidden border-b border-zinc-200 bg-zinc-50 text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-500 sm:grid sm:grid-cols-[60px_1fr_100px_110px_70px] sm:gap-4 sm:px-5 sm:py-2.5",
    row:
      "group flex flex-col gap-2 border-b border-zinc-100 px-4 py-4 transition-colors hover:bg-blue-50/50 dark:border-zinc-800/60 dark:hover:bg-blue-950/20 sm:grid sm:grid-cols-[60px_1fr_100px_110px_70px] sm:items-center sm:gap-4 sm:px-5 sm:py-3",
    rowNumber:
      "hidden text-sm tabular-nums text-zinc-400 dark:text-zinc-500 sm:block",
    rowTitle:
      "font-medium text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400",
    rowMeta:
      "text-sm tabular-nums text-zinc-500 dark:text-zinc-400",
    rowMetaLabel:
      "mr-1.5 text-xs text-zinc-300 dark:text-zinc-600 sm:hidden",
    mobileHeader:
      "flex items-center gap-3 sm:hidden",
    mobileNumber:
      "flex h-6 w-6 items-center justify-center rounded bg-zinc-100 text-xs font-medium tabular-nums text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 sm:hidden",
    mobileMetaRow:
      "flex flex-wrap gap-x-4 gap-y-1 sm:hidden",
  },
  pagination: {
    wrapper:
      "mt-8 flex items-center justify-center gap-1",
    button:
      "rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm tabular-nums text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800",
    buttonActive:
      "rounded-md border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-semibold tabular-nums text-white shadow-sm shadow-blue-500/25",
    buttonDisabled:
      "rounded-md border border-zinc-100 bg-zinc-50 px-3 py-1.5 text-sm tabular-nums text-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-600",
  },
} as const;
