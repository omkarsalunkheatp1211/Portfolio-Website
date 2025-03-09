import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4EBD0] px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#122620] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-[#122620] mb-6">Page Not Found</h2>
        <p className="text-lg text-[#122620] mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-[#122620] text-[#F4EBD0] rounded-md hover:bg-[#B68D40] transition-colors duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 