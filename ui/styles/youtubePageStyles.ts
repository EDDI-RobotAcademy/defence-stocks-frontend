export const youtubePageStyles = {
  container:
    "min-h-[calc(100vh-4rem)] bg-zinc-50 px-4 py-8 dark:bg-black sm:px-6 lg:px-8",
  content:
    "mx-auto max-w-6xl",
  header: {
    wrapper:
      "flex items-center justify-between",
    title:
      "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
    badge:
      "inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400",
    badgeDot:
      "h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse",
  },
  loading:
    "mt-6 flex min-h-[400px] items-center justify-center text-sm text-zinc-400 dark:text-zinc-500",
  error:
    "mt-6 flex min-h-[400px] flex-col items-center justify-center gap-3 rounded-lg border border-red-200 bg-red-50 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400",
  empty:
    "mt-6 flex min-h-[400px] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-zinc-300 text-sm text-zinc-400 dark:border-zinc-700 dark:text-zinc-500",
  grid:
    "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
  card: {
    wrapper:
      "group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950",
    thumbnailWrapper:
      "relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900",
    thumbnail:
      "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
    body:
      "flex flex-col gap-2 p-4",
    title:
      "line-clamp-2 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400",
    meta:
      "flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400",
    channelName:
      "truncate",
    publishedAt:
      "shrink-0 tabular-nums",
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
