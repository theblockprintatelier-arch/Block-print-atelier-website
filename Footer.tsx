export default function Footer() {
  return (
    <footer className="border-t py-10 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500">© {new Date().getFullYear()} Block Print Atelier Collective</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-indigo-800">Instagram</a>
          <a href="#" className="hover:text-indigo-800">Pinterest</a>
          <a href="#" className="hover:text-indigo-800">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
