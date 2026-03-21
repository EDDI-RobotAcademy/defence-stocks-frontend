export const homePageStyles = {
  container:
    "min-h-[calc(100vh-4rem)] bg-zinc-50 dark:bg-black",
  hero: {
    section:
      "relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-black dark:via-zinc-900 dark:to-black",
    overlay:
      "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.1),_transparent_50%)]",
    content:
      "relative mx-auto max-w-5xl px-6 py-20 sm:py-28 md:py-36",
    badge:
      "mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm",
    badgeDot:
      "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse",
    title:
      "text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl",
    titleAccent:
      "bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent",
    description:
      "mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg",
    stats:
      "mt-12 flex flex-wrap gap-8 sm:gap-12",
    statItem:
      "flex flex-col",
    statValue:
      "text-2xl font-bold text-white sm:text-3xl",
    statLabel:
      "mt-1 text-sm text-zinc-500",
  },
} as const;
