// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-3">404 — Page not found</h1>
      <p className="text-gray-600 mb-5">Looks like you took a wrong turn.</p>
      <Link href="/" className="px-4 py-2 bg-indigo-600 text-white rounded">Back to home</Link>
    </div>
  );
}
//Custom not-found just keeps the demo tidy.