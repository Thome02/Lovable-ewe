
import { useEffect, useState } from "react";
import { Menu, ShoppingCart, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              CarPart Hub
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Produtos
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Sobre Nós
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out",
            isMenuOpen ? "top-16" : "-top-full"
          )}
        >
          <nav className="flex flex-col p-4 space-y-4">
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Produtos
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Sobre Nós
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
