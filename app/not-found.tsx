import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-7xl font-bold text-gray-200 mb-6">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-primary text-white px-6 py-3 font-medium hover:bg-primary-dark transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
