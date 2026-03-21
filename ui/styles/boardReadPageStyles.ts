export const boardReadPageStyles = {
  container:
    "min-h-[calc(100vh-4rem)] bg-zinc-50 px-4 py-8 dark:bg-black sm:px-6 lg:px-8",
  content:
    "mx-auto max-w-3xl",
  loading:
    "flex min-h-[400px] items-center justify-center text-sm text-zinc-400 dark:text-zinc-500",
  error:
    "flex min-h-[400px] flex-col items-center justify-center gap-3 rounded-lg border border-red-200 bg-red-50 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400",
  notFound:
    "flex min-h-[400px] flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-zinc-300 text-sm text-zinc-400 dark:border-zinc-700 dark:text-zinc-500",
  article: {
    wrapper:
      "overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
    header:
      "border-b border-zinc-100 px-6 py-5 dark:border-zinc-800",
    title:
      "text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl",
    meta:
      "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400",
    metaLabel:
      "text-zinc-300 dark:text-zinc-600",
    body:
      "whitespace-pre-wrap px-6 py-6 text-base leading-relaxed text-zinc-800 dark:text-zinc-200",
  },
  actions:
    "mt-6 flex items-center justify-between",
  listButton:
    "rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700",
  actionGroup:
    "flex items-center gap-2",
  editButton:
    "rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900",
  deleteButton:
    "rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:border-red-800 dark:bg-red-950 dark:text-red-400 dark:hover:bg-red-900",
} as const;
