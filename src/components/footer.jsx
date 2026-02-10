
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-gray-950">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 text-sm text-slate-400">
        <span className="mb-4 md:mb-0">© {new Date().getFullYear()} Git Guide</span>
        <span>Made with React & Tailwind</span>
      </div>
    </footer>
  )
}
