import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-portfolio-dark/95 backdrop-blur-sm border-b border-portfolio-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-portfolio-text-primary">
            Gokul<span className="text-portfolio-orange">.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-portfolio-text-secondary hover:text-portfolio-orange transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://drive.google.com/file/d/1AXQmM2IZCr16UFa1AMaZsY0TXa9WhVBf/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" className="bg-portfolio-orange hover:bg-portfolio-orange-hover text-portfolio-dark font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-portfolio-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-portfolio-dark/95 backdrop-blur-sm border-b border-portfolio-border md:hidden z-40 shadow-2xl">
              <div className="flex flex-col space-y-3 p-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-portfolio-text-secondary hover:text-portfolio-orange transition-all duration-300 text-left py-3 px-4 rounded-lg hover:bg-portfolio-card/50 active:scale-95 font-medium"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: "fade-in 0.3s ease-out forwards"
                    }}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-2">
                  <a
                    href="https://drive.google.com/file/d/1AXQmM2IZCr16UFa1AMaZsY0TXa9WhVBf/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button 
                      variant="default" 
                      className="bg-portfolio-orange hover:bg-portfolio-orange-hover text-portfolio-dark font-semibold w-full py-3 px-6 shadow-glow hover:shadow-glow-lg transition-all duration-300 active:scale-95"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;