import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/breno-pereira-985a49140/",
      description: "Conecte-se profissionalmente",
      color: "hover:bg-[#0077B5]/10 hover:border-[#0077B5]/50 hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/BrenoPF",
      description: "Veja meu código",
      color: "hover:bg-foreground/10 hover:border-foreground/50",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:dev@email.com",
      description: "dev@email.com",
      color: "hover:bg-primary/10 hover:border-primary/50 hover:text-primary",
    },
  ];

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full mb-4">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Vamos construir algo{" "}
            <span className="text-gradient">incrível</span>{" "}
            juntos?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Estou aberto a novas oportunidades e sempre animado para discutir 
            projetos desafiadores. Entre em contato!
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover-lift ${link.color}`}
              >
                <link.icon size={32} className="mx-auto mb-4 transition-colors" />
                <h3 className="font-semibold mb-1">{link.name}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
                <ArrowUpRight size={16} className="mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Primary CTA */}
          <Button variant="glow" size="xl" asChild>
            <a href="https://api.whatsapp.com/send/?phone=61983440402&text&type=phone_number&app_absent=0">
              <Send className="mr-2" />
              Enviar mensagem
            </a>
          </Button>

          {/* Response Time */}
          <p className="mt-6 text-sm text-muted-foreground">
            ⚡ Normalmente respondo em menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
