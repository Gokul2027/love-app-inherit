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

  const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; level: number }[] }) => (
    <Card className="bg-portfolio-card border-portfolio-border">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-portfolio-text-primary mb-6">{title}</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-portfolio-text-secondary font-medium">{skill.name}</span>
                <span className="text-portfolio-orange font-bold">{skill.level}%</span>
              </div>
              <Progress 
                value={skill.level} 
                className="h-2 bg-portfolio-darker"
                style={{
                  '--progress-foreground': 'hsl(var(--portfolio-orange))'
                } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-primary mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and expertise across various domains 
              of software development and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <SkillCategory title="Programming Languages" skills={programmingLanguages} />
            <SkillCategory title="Tools & Platforms" skills={toolsPlatforms} />
            <SkillCategory title="Core Expertise" skills={coreExpertise} />
            <SkillCategory title="Soft Skills" skills={softSkills} />
          </div>

          {/* Technology Stack */}
          <Card className="bg-portfolio-card border-portfolio-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-portfolio-text-primary mb-6 text-center">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="secondary" 
                    className="bg-portfolio-orange/10 text-portfolio-orange border-portfolio-orange/30 px-4 py-2 text-sm font-medium hover:bg-portfolio-orange/20 transition-colors"
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