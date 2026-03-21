export const textFieldStyles = {
  container: "flex w-full flex-col gap-1.5",
  label: "text-sm font-medium text-zinc-700 dark:text-zinc-300",
  input: "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-400",
  inputError: "w-full rounded-md border border-red-500 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 dark:border-red-500 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-red-400 dark:focus:ring-red-400",
  errorMessage: "text-xs text-red-600 dark:text-red-400",
} as const;
