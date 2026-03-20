import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-black">
      <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Defence Stocks
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          Home
        </Link>
        <Link
          href="/login"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
