export const signupPageStyles = {
  container: "flex min-h-[calc(100vh-4rem)] items-center justify-center bg-zinc-50 dark:bg-black py-8",
  card: "flex w-full max-w-lg flex-col items-center gap-8 rounded-lg border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950",
  title: "text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50",
  description: "text-sm text-zinc-500 dark:text-zinc-400",
  profileInfo: "flex w-full flex-col gap-1 rounded-md bg-zinc-100 px-4 py-3 dark:bg-zinc-900",
  profileText: "text-sm text-zinc-700 dark:text-zinc-300",
} as const;
