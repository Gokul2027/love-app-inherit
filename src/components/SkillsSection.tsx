import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const programmingLanguages = [
    { name: "Java", level: 90 },
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 88 },
    { name: "C", level: 80 },
    { name: "SQL", level: 85 },
  ];

  const toolsPlatforms = [
    { name: "GitHub", level: 90 },
    { name: "Figma", level: 78 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 88 },
    { name: "Flask", level: 85 },
  ];

  const coreExpertise = [
    { name: "Full-Stack Development", level: 85 },
    { name: "Machine Learning", level: 80 },
    { name: "Data Structures", level: 85 },
    { name: "Database Management", level: 75 },
    { name: "OOP Concepts", level: 90 },
  ];

  const softSkills = [
    { name: "Analytical Thinking", level: 90 },
    { name: "Leadership", level: 85 },
    { name: "Problem Solving", level: 88 },
    { name: "Team Collaboration", level: 80 },
    { name: "Communication", level: 75 },
  ];

  const technologies = [
    "C", "Figma", "SQL", "GitHub", "HTML", "CSS", "JavaScript", "Python", 
    "Java", "Git", "AWS", "PyTorch", "Flask", 
    "Tailwind CSS", "NLTK"
  ];

  const SkillCategory = ({ title, skills, index }: { title: string; skills: { name: string; level: number }[]; index: number }) => {
    const gradients = [
      "bg-gradient-primary",
      "bg-gradient-purple", 
      "bg-gradient-blue",
      "bg-portfolio-green"
    ];
    
    const gradientClass = gradients[index % gradients.length];
    
    return (
      <Card className="bg-gradient-card border-portfolio-border hover:border-portfolio-orange/50 transition-all duration-500 hover-lift group">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className={`w-3 h-8 ${gradientClass} rounded-full`}></div>
            <h3 className="text-2xl font-bold text-portfolio-text-primary group-hover:text-portfolio-orange transition-colors duration-300">{title}</h3>
          </div>
          <div className="space-y-6">
            {skills.map((skill, skillIndex) => (
              <div key={skill.name} className="group/skill">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-portfolio-text-secondary font-semibold text-lg group-hover/skill:text-portfolio-text-primary transition-colors">{skill.name}</span>
                  <span className="text-portfolio-orange font-bold text-lg px-3 py-1 bg-portfolio-orange/10 rounded-lg">{skill.level}%</span>
                </div>
                <div className="relative">
                  <div className="h-3 bg-portfolio-darker rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${gradientClass} rounded-full transition-all duration-1000 ease-out shadow-glow`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="skills" className="py-24 bg-portfolio-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-portfolio-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-portfolio-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-portfolio-text-primary mb-6 text-shadow-lg">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-2xl text-portfolio-text-secondary max-w-4xl mx-auto leading-relaxed font-medium">
              A comprehensive showcase of my technical prowess and professional skills across various domains 
              of modern software development and emerging technologies.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            <SkillCategory title="Programming Languages" skills={programmingLanguages} index={0} />
            <SkillCategory title="Tools & Platforms" skills={toolsPlatforms} index={1} />
            <SkillCategory title="Core Expertise" skills={coreExpertise} index={2} />
            <SkillCategory title="Soft Skills" skills={softSkills} index={3} />
          </div>

          {/* Enhanced Technology Stack */}
          <Card className="bg-gradient-card border-2 border-portfolio-orange/30 hover:border-portfolio-orange/60 transition-all duration-500 hover:shadow-glow-lg">
            <CardContent className="p-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold gradient-text mb-4 text-shadow">
                  Technology Stack
                </h3>
                <p className="text-portfolio-text-secondary text-lg font-medium">
                  The powerful tools and technologies I leverage to build exceptional solutions
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={tech}
                    variant="secondary" 
                    className="bg-portfolio-orange/15 text-portfolio-orange border-portfolio-orange/40 px-6 py-3 text-base font-semibold hover:bg-portfolio-orange/25 hover:border-portfolio-orange hover:scale-105 transition-all duration-300 rounded-xl shadow-premium hover:shadow-glow cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.05}s`
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;