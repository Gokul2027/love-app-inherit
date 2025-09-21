import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Target, Calendar, ExternalLink } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "3rd Prize - Department Project Day",
      year: "2024",
      category: "Academic Excellence",
      rank: "Top 3",
      description: "Secured third position in the departmental project competition, showcasing innovative solutions and technical excellence among peers.",
      icon: Trophy,
      color: "text-yellow-400"
    },
    {
      title: "V-Medithon Participation",
      year: "2024",
      category: "Hackathon",
      rank: "Healthcare Tech",
      description: "Participated in V-Medithon 2024, a healthcare-focused hackathon developing technological solutions for medical challenges.",
      icon: Target,
      color: "text-blue-400"
    },
    {
      title: "NeXathon Participant",
      year: "2025",
      category: "Hackathon",
      rank: "Innovation",
      description: "Competed in NeXathon 2025, demonstrating problem-solving skills and innovative thinking in a competitive coding environment.",
      icon: Target,
      color: "text-purple-400"
    },
    {
      title: "Hackerz Thiruvizha",
      year: "2025",
      category: "Hackathon",
      rank: "Team Work",
      description: "Participated in Hackerz Thiruvizha 2025, showcasing technical skills and collaborative development in team-based challenges.",
      icon: Users,
      color: "text-green-400"
    }
  ];

  const certifications = [
    {
      title: "NPTEL Python Programming",
      year: "2024",
      issuer: "NPTEL (IIT/IISc)",
      type: "Verified Certificate",
      description: "Comprehensive certification in Python programming covering advanced concepts and practical applications.",
      verified: true
    },
    {
      title: "NPTEL Database Management System",
      year: "2024",
      issuer: "NPTEL (IIT/IISc)",
      type: "Verified Certificate",
      description: "Advanced database management concepts including design, implementation, and optimization techniques.",
      verified: true
    },
    {
      title: "Introduction to Software Engineering",
      year: "2024",
      issuer: "Coursera",
      type: "Course Certificate",
      description: "Fundamental software engineering principles, methodologies, and best practices for professional development.",
      verified: true
    },
    {
      title: "Web Development Training",
      year: "2023",
      issuer: "Internshala",
      type: "Training Certificate",
      description: "Comprehensive web development training covering frontend and backend technologies, frameworks, and deployment.",
      verified: true
    }
  ];

  const stats = [
    { label: "CGPA", value: "9.8/10", description: "Academic Excellence" },
    { label: "Projects", value: "6+", description: "Completed Projects" },
    { label: "Hackathons", value: "3", description: "Participated" },
    { label: "Certificates", value: "4", description: "Professional Certifications" }
  ];

  return (
    <section id="achievements" className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-primary mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto">
              Recognition of academic excellence, competitive achievements, and professional certifications 
              that demonstrate continuous learning and growth.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-portfolio-card border-portfolio-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-portfolio-text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-portfolio-text-muted">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements & Competitions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-portfolio-text-primary mb-8 text-center">
              Achievements & Competitions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-portfolio-card border-portfolio-border hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-portfolio-darker ${achievement.color}`}>
                          <achievement.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <Badge variant="outline" className="border-portfolio-border text-portfolio-text-muted text-xs">
                            {achievement.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center text-portfolio-text-muted text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {achievement.year}
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-portfolio-text-primary mb-2 group-hover:text-portfolio-orange transition-colors">
                      {achievement.title}
                    </h4>

                    <Badge className="bg-portfolio-orange/10 text-portfolio-orange border-portfolio-orange/30 mb-3">
                      {achievement.rank}
                    </Badge>

                    <p className="text-portfolio-text-secondary text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-portfolio-text-primary mb-8 text-center">
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-portfolio-card border-portfolio-border hover:shadow-card-hover transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-portfolio-orange" />
                        <Badge variant="outline" className="border-portfolio-border text-portfolio-text-muted text-xs">
                          {cert.type}
                        </Badge>
                        {cert.verified && (
                          <Badge className="bg-portfolio-success/10 text-portfolio-success border-portfolio-success/30 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-portfolio-text-muted text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.year}
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-portfolio-text-primary mb-2 group-hover:text-portfolio-orange transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-portfolio-orange font-semibold text-sm mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-portfolio-text-secondary text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;