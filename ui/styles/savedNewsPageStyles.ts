export const savedNewsPageStyles = {
  container:
    "min-h-[calc(100vh-4rem)] bg-zinc-50 px-4 py-8 dark:bg-black sm:px-6 lg:px-8",
  content:
    "mx-auto max-w-3xl",
  backLink:
    "inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
  card:
    "mt-4 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
  title:
    "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
  meta:
    "mt-3 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400",
  source:
    "font-medium",
  publishedAt:
    "tabular-nums",
  link:
    "mt-3 inline-block text-sm text-blue-600 hover:underline dark:text-blue-400",
  divider:
    "my-6 border-t border-zinc-200 dark:border-zinc-800",
  content_:
    "whitespace-pre-wrap text-sm leading-relaxed text-zinc-800 dark:text-zinc-200",
  notFound:
    "mx-auto mt-12 max-w-md rounded-lg border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400",
  notFoundButton:
    "mt-4 inline-flex items-center rounded-md border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600",
} as const;
