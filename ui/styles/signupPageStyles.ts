export const signupPageStyles = {
  container: "flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 dark:bg-black py-8",
  card: "flex w-full max-w-lg flex-col items-center gap-8 rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950",
  title: "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
  description: "text-sm text-zinc-500 dark:text-zinc-400",
  form: "flex w-full flex-col gap-4",
  submitButton: "w-full rounded-md bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
  submitButtonDisabled: "w-full rounded-md bg-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-500 cursor-not-allowed dark:bg-zinc-700 dark:text-zinc-500",
  errorMessage: "text-sm text-center text-red-600 dark:text-red-400",
} as const;
