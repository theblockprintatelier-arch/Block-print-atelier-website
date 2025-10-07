import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide">
          <span className="font-bold">BPAC</span>
          <span className="ml-2 text-neutral-500">Block Print Atelier Collective</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#collections" className="hover:text-indigo-700">Collections</a>
          <a href="#provenance" className="hover:text-indigo-700">Provenance</a>
          <a href="#atelier" className="hover:text-indigo-700">Atelier</a>
          <a href="#journal" className="hover:text-indigo-700">Journal</a>
          <Link href="/investors" className="hover:text-indigo-700">Investors</Link>
          <a href="#patrons" className="hover:text-indigo-700">Patrons</a>
          <a href="#contact" className="hover:text-indigo-700">Contact</a>
        </nav>
        <a href="#shop" className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium hover:bg-neutral-50">Shop</a>
      </div>
    </header>
  );
}
