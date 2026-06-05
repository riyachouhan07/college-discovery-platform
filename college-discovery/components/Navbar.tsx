import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/college">College Details</Link>
      <Link href="/compare">Compare</Link>
      <Link href="/favorites">Favorites</Link>
    </nav>
  );
}