import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_5zpamg6', // Service ID
          'template_3cpzlek', // Template ID
          form.current,
          'eoW-TxYMYIw5LB5Rm' // Public Key
        );
        
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gokula2k20@gmail.com",
      description: "Best way to reach me",
      href: "mailto:gokula2k20@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8248523526",
      description: "Available 9 AM - 8 PM",
      href: "tel:+918248523526"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      description: "SRM University, Ramapuram",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@Gokul2027",
      href: "https://github.com/Gokul2027"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "gokul-a-413a302ab",
      href: "https://linkedin.com/in/gokul-a-413a302ab"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-darker">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text-primary mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto">
              Let's collaborate on exciting projects or discuss opportunities in technology and innovation. 
              I'm always open to connecting with fellow developers and tech enthusiasts.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-portfolio-text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-portfolio-card border-portfolio-border hover:shadow-card-hover transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-portfolio-orange/10 text-portfolio-orange group-hover:bg-portfolio-orange group-hover:text-portfolio-dark transition-all duration-300">
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-portfolio-text-primary mb-1">
                            {info.label}
                          </h4>
                          <a 
                            href={info.href}
                            className="text-portfolio-orange font-medium hover:underline"
                          >
                            {info.value}
                          </a>
                          <p className="text-portfolio-text-muted text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-portfolio-text-primary mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="bg-portfolio-card border-portfolio-border hover:shadow-card-hover transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <social.icon className="w-5 h-5 text-portfolio-orange group-hover:scale-110 transition-transform" />
                            <div>
                              <div className="text-portfolio-text-primary font-medium text-sm">
                                {social.label}
                              </div>
                              <div className="text-portfolio-text-muted text-xs">
                                {social.username}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <Card className="bg-portfolio-orange/10 border-portfolio-orange/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-portfolio-orange" />
                    <h4 className="text-lg font-semibold text-portfolio-text-primary">
                      Quick Response
                    </h4>
                  </div>
                  <p className="text-portfolio-text-secondary">
                    I typically respond to messages within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-portfolio-text-primary mb-6">
                Send Me a Message
              </h3>
              <p className="text-portfolio-text-secondary mb-6">
                Have a project in mind or want to collaborate? Drop me a message and let's create something amazing together.
              </p>

                <Card className="bg-portfolio-card border-portfolio-border">
                  <CardContent className="p-6">
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-portfolio-text-primary font-medium mb-2 block">
                          Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-portfolio-darker border-portfolio-border text-portfolio-text-primary focus:border-portfolio-orange"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="text-portfolio-text-primary font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-portfolio-darker border-portfolio-border text-portfolio-text-primary focus:border-portfolio-orange"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-portfolio-text-primary font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-portfolio-darker border-portfolio-border text-portfolio-text-primary focus:border-portfolio-orange"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="text-portfolio-text-primary font-medium mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-portfolio-darker border-portfolio-border text-portfolio-text-primary focus:border-portfolio-orange resize-none"
                        placeholder="Tell me about your project or how we can collaborate..."
                      />
                    </div>

                      <Button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-portfolio-orange hover:bg-portfolio-orange-hover text-portfolio-dark font-semibold disabled:opacity-50"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {isLoading ? "Sending..." : "Send Message"}
                      </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;