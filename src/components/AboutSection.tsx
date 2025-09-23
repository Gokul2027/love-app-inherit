import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Mountain, Lightbulb, Zap } from "lucide-react";

const AboutSection = () => {
  const interests = [
    { name: "Football", icon: Trophy },
    { name: "Adventure Sports", icon: Mountain },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Innovation", icon: Zap },
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-primary mb-4">
              About Me
            </h2>
          </div>

          <div className="space-y-12">
            {/* Main About Content */}
            <Card className="bg-portfolio-card border-portfolio-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-portfolio-text-primary mb-6">
                  Passionate Tech Innovator
                </h3>
                <div className="space-y-4 text-portfolio-text-secondary">
                  <p className="leading-relaxed">
                    I am a BTech IT student at SRM IST, passionate about blending creativity with technology 
                    to create meaningful digital solutions.
                  </p>
                  <p className="leading-relaxed">
                    With expertise in full-stack development, machine learning, and AI-driven applications, 
                    I've worked on projects ranging from intelligent chatbots to comprehensive web platforms.
                  </p>
                  <p className="leading-relaxed">
                    My strong analytical thinking and leadership qualities drive me to contribute impactful 
                    digital solutions that solve real-world problems and enhance user experiences.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-portfolio-text-primary mb-4">
                    Beyond Technology
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {interests.map((interest) => (
                      <Badge 
                        key={interest.name}
                        variant="secondary" 
                        className="bg-portfolio-orange/10 text-portfolio-orange border-portfolio-orange/30 px-3 py-1"
                      >
                        <interest.icon className="w-4 h-4 mr-2" />
                        {interest.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Educational Journey */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text-primary mb-6 sm:mb-8 text-center">
                Educational Journey
              </h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="bg-portfolio-card border-portfolio-border">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-portfolio-text-primary mb-2">
                      BTech in Information Technology
                    </h4>
                    <p className="text-portfolio-orange font-semibold mb-2">
                      SRM University, Ramapuram
                    </p>
                    <p className="text-portfolio-text-muted mb-4">
                      2023 - 2027 (Expected)
                    </p>
                    <div className="bg-portfolio-orange/10 rounded-lg p-3">
                      <p className="text-portfolio-orange font-bold text-lg">
                        CGPA: 9.8/10
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-portfolio-card border-portfolio-border">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-portfolio-text-primary mb-2">
                      Higher Secondary (Computer Science)
                    </h4>
                    <p className="text-portfolio-orange font-semibold mb-2">
                      The TVS School, Madurai
                    </p>
                    <p className="text-portfolio-text-muted mb-4">
                      2021 - 2023
                    </p>
                    <div className="bg-portfolio-success/10 rounded-lg p-3">
                      <p className="text-portfolio-success font-bold">
                        93/100 (CS), 85.83% Overall
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;