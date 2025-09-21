import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, CheckCircle } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hospital Email Classifier",
      category: "Machine Learning",
      date: "September 2024",
      description: "Built an intelligent spam filtering system specifically designed for healthcare communications using Multinomial Naive Bayes algorithm, achieving 95% accuracy in distinguishing between legitimate and spam emails.",
      features: [
        "95% classification accuracy",
        "Healthcare-specific spam detection",
        "Real-time email processing"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Natural Language Processing", "NLTK"],
      status: "Completed",
      links: {
        github: "https://github.com/Gokul2027/Hospital-Email-Classifier",
        demo: "#"
      }
    },
    {
      title: "NLP Conversational Chatbot",
      category: "AI/NLP",
      date: "October 2024",
      description: "Developed an advanced conversational AI chatbot with intent classification using deep neural networks. Built with PyTorch for model training and Flask for web deployment, featuring NLTK for natural language processing.",
      features: [
        "Intent classification system",
        "Natural conversation flow",
        "REST API integration"
      ],
      technologies: ["Python", "PyTorch", "Flask", "NLTK", "Deep Learning", "REST API"],
      status: "Completed",
      links: {
        github: "https://github.com/Gokul2027/NLP-Conversational-Chatbot",
        demo: "#"
      }
    },
    {
      title: "Sports Registration Portal",
      category: "Web Development",
      date: "August 2024",
      description: "Comprehensive web platform for sports event registration and management, featuring user authentication, event scheduling, team management, and real-time updates with modern responsive design.",
      features: [
        "User registration & authentication",
        "Event management system",
        "Team formation tools"
      ],
      technologies: ["JavaScript", "HTML/CSS", "Node.js", "MongoDB", "Express.js"],
      status: "Completed",
      links: {
        github: "https://github.com/Gokul2027/Sports-Registration-Portal",
        demo: "#"
      }
    },
    {
      title: "eBook Management System",
      category: "Web Development",
      date: "July 2024",
      description: "Digital library platform with advanced search capabilities, user management, book categorization, and reading progress tracking. Features modern UI/UX with responsive design for optimal user experience.",
      features: [
        "Advanced search & filtering",
        "Reading progress tracking",
        "User preference management"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "CSS3"],
      status: "Completed",
      links: {
        github: "https://github.com/Gokul2027/eBook-Management-System",
        demo: "#"
      }
    },
    {
      title: "Hospital Appointment System",
      category: "Web Development",
      date: "June 2024",
      description: "Complete healthcare management solution enabling patients to book appointments, doctors to manage schedules, and administrators to oversee operations with automated notifications and reporting.",
      features: [
        "Appointment scheduling",
        "Doctor availability management",
        "Patient history tracking"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS", "JavaScript"],
      status: "Completed",
      links: {
        github: "https://github.com/Gokul2027/Hospital-Appointment-System",
        demo: "#"
      }
    },
    {
      title: "NGO Website Development",
      category: "Volunteer Work",
      date: "May 2024",
      description: "Volunteer project creating a professional website for a non-governmental organization to improve their online presence, showcase their mission, and facilitate community engagement and donations.",
      features: [
        "Mission & vision showcase",
        "Volunteer registration",
        "Donation integration"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "CSS3", "JavaScript"],
      status: "Live",
      links: {
        github: "https://github.com/Gokul2027/NGO-Website",
        demo: "https://gokul2027.neocities.org/Lions%20Club/"
      }
    },
    {
      title: "AI Phishing Detection Extension",
      category: "AI/ML",
      date: "November 2024",
      description: "Developed an AI-powered browser extension that detects phishing websites in real-time using machine learning algorithms and URL analysis to protect users from malicious websites.",
      features: [
        "Real-time phishing detection",
        "Machine learning classification",
        "Browser extension integration"
      ],
      technologies: ["Python", "Machine Learning", "JavaScript", "Chrome Extension API", "Scikit-learn"],
      status: "Completed",
      links: {
        github: "https://github.com/Gokul2027/AI-Phishing-Detection-Extension",
        demo: "#"
      }
    },
    {
      title: "EBE Foundation Website",
      category: "Web Development",
      date: "September 2024",
      description: "Professional website for EBE Foundation, a construction company, featuring modern design, service showcases, project portfolios, and client testimonials with responsive layout.",
      features: [
        "Modern responsive design",
        "Service portfolio showcase",
        "Client testimonial system"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
      status: "Completed",
      links: {
        github: "https://github.com/Gokul2027/Ebe-Foundation",
        demo: "#"
      }
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Machine Learning":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "AI/NLP":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "Web Development":
        return "bg-green-500/10 text-green-400 border-green-500/30";
      case "Volunteer Work":
        return "bg-pink-500/10 text-pink-400 border-pink-500/30";
      default:
        return "bg-portfolio-orange/10 text-portfolio-orange border-portfolio-orange/30";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-portfolio-success/10 text-portfolio-success border-portfolio-success/30";
      case "Live":
        return "bg-portfolio-orange/10 text-portfolio-orange border-portfolio-orange/30";
      default:
        return "bg-portfolio-text-muted/10 text-portfolio-text-muted border-portfolio-text-muted/30";
    }
  };

  return (
    <section id="projects" className="py-20 bg-portfolio-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto">
              A showcase of my technical projects spanning machine learning, web development, and AI applications. 
              Each project demonstrates practical problem-solving and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="bg-portfolio-card border-portfolio-border hover:shadow-card-hover transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge className={getStatusColor(project.status)}>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-portfolio-text-muted text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-portfolio-text-primary mb-3 group-hover:text-portfolio-orange transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-portfolio-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-portfolio-text-primary mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-portfolio-text-secondary flex items-center">
                          <span className="w-1.5 h-1.5 bg-portfolio-orange rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-portfolio-text-primary mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline" 
                          className="text-xs border-portfolio-border text-portfolio-text-muted hover:border-portfolio-orange hover:text-portfolio-orange transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                   <div className="flex gap-3">
                     <a
                       href={project.links.github}
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <Button 
                         variant="outline" 
                         size="sm"
                         className="border-portfolio-border text-portfolio-text-secondary hover:border-portfolio-orange hover:text-portfolio-orange"
                       >
                         <Github className="w-4 h-4 mr-2" />
                         Code
                       </Button>
                     </a>
                     {project.status === "Live" && (
                       <a
                         href={project.links.demo}
                         target="_blank"
                         rel="noopener noreferrer"
                       >
                         <Button 
                           size="sm"
                           className="bg-portfolio-orange hover:bg-portfolio-orange-hover text-portfolio-dark"
                         >
                           <ExternalLink className="w-4 h-4 mr-2" />
                           View Live
                         </Button>
                       </a>
                     )}
                   </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-portfolio-text-secondary mb-6">
              Want to see more projects and contributions?
            </p>
            <a
              href="https://github.com/Gokul2027"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                className="bg-portfolio-orange hover:bg-portfolio-orange-hover text-portfolio-dark font-semibold"
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;