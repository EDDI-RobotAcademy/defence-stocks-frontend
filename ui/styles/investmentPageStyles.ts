export const investmentPageStyles = {
  container:
    "min-h-[calc(100vh-4rem)] bg-zinc-50 px-4 py-8 dark:bg-black sm:px-6 lg:px-8",
  content:
    "mx-auto max-w-3xl",
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
  prompt: {
    wrapper:
      "mt-6 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
    label:
      "mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300",
    input:
      "w-full resize-none rounded-md border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400",
    footer:
      "mt-3 flex items-center justify-end",
    button:
      "inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/25 transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-blue-600 dark:hover:bg-blue-500",
    buttonDisabled:
      "inline-flex items-center gap-2 rounded-lg bg-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500",
  },
  answer: {
    wrapper:
      "mt-6 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
    label:
      "mb-3 block text-sm font-medium text-zinc-700 dark:text-zinc-300",
    body:
      "whitespace-pre-wrap text-sm leading-relaxed text-zinc-800 dark:text-zinc-200",
  },
  loading:
    "mt-6 flex min-h-[120px] items-center justify-center text-sm text-zinc-400 dark:text-zinc-500",
  error:
    "mt-6 flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-lg border border-red-200 bg-red-50 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400",
} as const;
