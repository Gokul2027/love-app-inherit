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
    },
    {
      title: "Python for Data Science, AI & Development",
      year: "2024",
      issuer: "Coursera",
      type: "Course Certificate",
      description: "Comprehensive Python programming course focused on data science applications, AI development, and practical machine learning implementations.",
      verified: true
    },
    {
      title: "Introduction to Cloud Computing",
      year: "2024",
      issuer: "Coursera",
      type: "Course Certificate",
      description: "Foundational course covering cloud computing concepts, services, deployment models, and practical cloud platform usage.",
      verified: true
    }
  ];

  const stats = [
    { label: "CGPA", value: "9.8/10", description: "Academic Excellence" },
    { label: "Projects", value: "6+", description: "Completed Projects" },
    { label: "Hackathons", value: "3", description: "Participated" },
    { label: "Certificates", value: "6", description: "Professional Certifications" }
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-portfolio-card border-portfolio-border text-center hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-3 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-portfolio-orange mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-portfolio-text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-portfolio-text-muted hidden sm:block">
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
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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

                    <a
                      href={achievement.title === "V-Medithon Participation" ? "https://drive.google.com/file/d/1N0E9BMzNzvwSc7hkfkHaMct4-yQQUqVU/view" : 
                            achievement.title === "NeXathon Participant" ? "https://drive.google.com/file/d/1N-HOQnVEYKdh5a49cFZ1gIfS9mtqZCuP/view" :
                            achievement.title === "Hackerz Thiruvizha" ? "https://drive.google.com/file/d/1My_0NyuaiHT2UrO6hBOJ9oyEXNMbNiNY/view" : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <h4 className="text-lg font-bold text-portfolio-text-primary mb-2 group-hover:text-portfolio-orange transition-colors cursor-pointer">
                        {achievement.title}
                      </h4>
                    </a>

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
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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

                    <a
                      href={cert.title === "NPTEL Python Programming" ? "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs57/Course/NPTEL24CS57S85340245030489484.pdf" :
                            cert.title === "NPTEL Database Management System" ? "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs18/Course/NPTEL25CS18S24330813801277898.pdf" :
                            cert.title === "Introduction to Software Engineering" ? "https://www.coursera.org/account/accomplishments/verify/7IKXTG9R8CWZ" :
                            cert.title === "Web Development Training" ? "https://trainings.internshala.com/view_certificate/eisy3n3v48_/hp4byr7uv4a/" :
                            cert.title === "Python for Data Science, AI & Development" ? "https://www.coursera.org/account/accomplishments/verify/2RS3ULXK6ADN" :
                            cert.title === "Introduction to Cloud Computing" ? "https://www.coursera.org/account/accomplishments/records/V4P6JVH0PHG9" : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <h4 className="text-lg font-bold text-portfolio-text-primary mb-2 group-hover:text-portfolio-orange transition-colors cursor-pointer">
                        {cert.title}
                      </h4>
                    </a>

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