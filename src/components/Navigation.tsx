import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/2fastt-logo-clean.jpeg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Schedule", href: "/schedule" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-lg border-b border-brand-red/20 shadow-lg shadow-brand-red/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="2FASTT Logo" 
                className="h-10 w-10 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-red/30" 
              />
              <div className="absolute inset-0 rounded-lg bg-brand-red/0 group-hover:bg-brand-red/10 transition-all duration-300" />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-brand-red via-brand-red-light to-brand-red bg-clip-text text-transparent neon-glow-subtle tracking-tight">
              2FASTT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative px-4 py-2 text-base font-semibold text-muted-foreground hover:text-brand-red transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-red-light group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
            <Button variant="brand" size="sm" className="ml-4 font-semibold neon-border" asChild>
              <a href="https://groupme.com/join_group/110452030/TN5hbw4T" target="_blank" rel="noopener noreferrer">
                Join the Club
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-brand-red/10 hover:text-brand-red transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-background/95 backdrop-blur-lg border-t border-brand-red/20 shadow-xl shadow-brand-red/10 rounded-b-xl">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-base font-semibold text-muted-foreground hover:text-brand-red hover:bg-brand-red/5 rounded-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button variant="brand" size="sm" className="w-full font-semibold neon-border" asChild>
                  <a href="https://groupme.com/join_group/110452030/TN5hbw4T" target="_blank" rel="noopener noreferrer">
                    Join the Club
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;