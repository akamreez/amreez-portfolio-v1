export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="font-bold text-lg">
          AK
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-400">

          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#skills" className="hover:text-white">
            Skills
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#experience" className="hover:text-white">
            Experience
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}