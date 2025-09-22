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
    <section id="home" className="min-h-screen flex items-center pt-20 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-portfolio-success/20 text-portfolio-success border-portfolio-success/30">
                <div className="w-2 h-2 bg-portfolio-success rounded-full mr-2 animate-pulse"></div>
                Available for work
              </Badge>
              
              <div className="space-y-2">
                <h1 className="text-5xl md:text-7xl font-bold text-portfolio-text-primary">
                  Gokul{" "}
                  <span className="text-portfolio-orange">
                    Arunachalam
                  </span>
                </h1>
                <div className="text-xl text-portfolio-text-secondary flex items-center gap-2 flex-wrap">
                  <span>IT Student |</span>
                  <div className="relative">
                    <span className="text-portfolio-orange font-semibold">
                      {currentText}
                      <span className="typewriter-cursor animate-pulse">|</span>
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-portfolio-text-secondary leading-relaxed max-w-xl">
                BTech Information Technology student at SRM University with a passion for merging technology and creativity. 
                Skilled in full-stack development, machine learning, and AI-driven applications.
              </p>

              <div className="flex items-center space-x-2 text-portfolio-text-muted">
                <MapPin className="w-4 h-4" />
                <span>Chennai, India</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("#projects")}
                className="bg-portfolio-orange hover:bg-portfolio-orange-hover text-portfolio-dark font-semibold"
              >
                View My Work
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("#contact")}
                className="border-portfolio-border text-portfolio-text-secondary hover:text-portfolio-text-primary hover:border-portfolio-orange"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Gokul2027"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-orange transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/gokul-a-413a302ab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text-muted hover:text-portfolio-orange transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:gokula2k20@gmail.com"
                className="text-portfolio-text-muted hover:text-portfolio-orange transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-orange rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img
                src="https://i.postimg.cc/HxcG1BqF/Whats-App-Image-2025-09-21-at-19-24-31-91ec140b.jpg"
                alt="Gokul Arunachalam - Profile"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Academic Excellence Badge */}
            <div className="absolute bottom-8 right-8 bg-portfolio-card border border-portfolio-border rounded-xl p-4 shadow-card-hover">
              <div className="text-center">
                <p className="text-portfolio-text-secondary text-sm font-medium">Academic Excellence</p>
                <p className="text-3xl font-bold text-portfolio-orange">CGPA 9.8/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;