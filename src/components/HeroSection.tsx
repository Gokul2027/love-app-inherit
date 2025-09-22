import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import gokulProfile from "@/assets/gokul-profile.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const phrases = [
    "Full-Stack Developer",
    "ML Enthusiast", 
    "Problem Solver",
    "Tech Innovator"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    const typingSpeed = isDeleting ? 100 : 150;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, isPaused, phrases]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-portfolio-orange/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-portfolio-purple/10 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <Badge 
                variant="secondary" 
                className="bg-portfolio-success/20 text-portfolio-success border-portfolio-success/30 px-4 py-2 text-sm font-medium hover:bg-portfolio-success/30 transition-all duration-300 animate-glow"
              >
                <div className="w-2 h-2 bg-portfolio-success rounded-full mr-3 animate-pulse"></div>
                Available for work
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold text-portfolio-text-primary leading-tight">
                  Gokul{" "}
                  <span className="gradient-text">
                    Arunachalam
                  </span>
                </h1>
                <div className="text-2xl text-portfolio-text-secondary flex items-center gap-3 flex-wrap">
                  <span className="font-medium">IT Student |</span>
                  <div className="relative">
                    <span className="text-portfolio-orange font-bold text-shadow">
                      {currentText}
                      <span className="typewriter-cursor">|</span>
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xl text-portfolio-text-secondary leading-relaxed max-w-2xl font-medium">
                BTech Information Technology student at SRM University with a passion for merging technology and creativity. 
                Skilled in full-stack development, machine learning, and AI-driven applications.
              </p>

              <div className="flex items-center space-x-3 text-portfolio-text-muted">
                <MapPin className="w-5 h-5 text-portfolio-orange" />
                <span className="text-lg font-medium">Chennai, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <Button 
                onClick={() => scrollToSection("#projects")}
                className="bg-gradient-primary hover:shadow-glow text-portfolio-dark font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover-lift"
              >
                View My Work
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-portfolio-border glass-effect text-portfolio-text-primary hover:text-portfolio-orange hover:border-portfolio-orange font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover-lift"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/Gokul2027"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-orange transition-all duration-300 hover-scale p-3 rounded-xl glass-effect hover:shadow-glow"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/gokul-a-413a302ab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-blue transition-all duration-300 hover-scale p-3 rounded-xl glass-effect hover:shadow-glow"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="mailto:gokula2k20@gmail.com"
                className="text-portfolio-text-muted hover:text-portfolio-green transition-all duration-300 hover-scale p-3 rounded-xl glass-effect hover:shadow-glow"
              >
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative group">
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-8 bg-gradient-primary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-glow"></div>
              <div className="absolute -inset-4 bg-gradient-purple rounded-3xl blur-xl opacity-10 group-hover:opacity-30 transition-all duration-700" style={{animationDelay: "1s"}}></div>
              
              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-premium group-hover:shadow-glow-lg transition-all duration-500">
                <img
                  src="https://i.postimg.cc/HxcG1BqF/Whats-App-Image-2025-09-21-at-19-24-31-91ec140b.jpg"
                  alt="Gokul Arunachalam - Full-Stack Developer & ML Enthusiast"
                  className="relative w-full max-w-lg mx-auto transform group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Enhanced Academic Excellence Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-card border-2 border-portfolio-orange/30 rounded-2xl p-6 shadow-premium hover:shadow-glow transition-all duration-300 hover-lift">
              <div className="text-center">
                <p className="text-portfolio-text-secondary text-sm font-semibold uppercase tracking-wider mb-1">Academic Excellence</p>
                <p className="text-4xl font-bold gradient-text">9.8/10</p>
                <p className="text-portfolio-text-muted text-xs font-medium">CGPA</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 -left-8 w-20 h-20 bg-portfolio-blue/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -top-4 right-16 w-16 h-16 bg-portfolio-green/20 rounded-full blur-lg animate-float" style={{animationDelay: "3s"}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;