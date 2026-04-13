export const newsPageStyles = {
  container:
    "min-h-[calc(100vh-4rem)] bg-zinc-50 px-4 py-8 dark:bg-black sm:px-6 lg:px-8",
  content:
    "mx-auto max-w-4xl",
  header: {
    wrapper:
      "flex items-center justify-between",
    title:
      "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
    badge:
      "inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-400",
    badgeDot:
      "h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse",
  },
  loading:
    "mt-6 flex min-h-[400px] items-center justify-center text-sm text-zinc-400 dark:text-zinc-500",
  error:
    "mt-6 flex min-h-[400px] flex-col items-center justify-center gap-3 rounded-lg border border-red-200 bg-red-50 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400",
  empty:
    "mt-6 flex min-h-[400px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-zinc-300 text-sm text-zinc-400 dark:border-zinc-700 dark:text-zinc-500",
  list:
    "mt-6 flex flex-col gap-4",
  card: {
    wrapper:
      "group block overflow-hidden rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950",
    body:
      "flex min-w-0 flex-col gap-2",
    title:
      "line-clamp-2 text-base font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400",
    summary:
      "line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400",
    meta:
      "mt-auto flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400",
    source:
      "truncate font-medium",
    publishedAt:
      "shrink-0 tabular-nums",
    actions:
      "mt-3 flex items-center justify-end gap-2",
    saveButton:
      "inline-flex items-center gap-1 rounded-md border border-blue-500 bg-blue-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-blue-500/25 transition-colors hover:bg-blue-600 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600",
    saveButtonDisabled:
      "inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
    saveError:
      "text-xs text-red-600 dark:text-red-400",
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
    ellipsis:
      "px-2 py-1.5 text-sm text-zinc-400 dark:text-zinc-500",
  },
} as const;
