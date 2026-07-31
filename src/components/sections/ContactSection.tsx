import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Reveal from "@/components/Reveal";

const ContactSection = () => {
  const contactLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/breno-pereira-985a49140/",
      description: "Conecte-se profissionalmente",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/BrenoPF",
      description: "Veja meu código",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:dev@email.com",
      description: "Resposta em até 24h",
    },
  ];

  return (
    <section id="contato" className="py-24 lg:py-32 border-t border-foreground/20 bg-foreground text-background">
      <div className="container">
        <Reveal>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] opacity-60 block mb-5">
            § Contato
          </span>
          <h2 className="font-display uppercase text-[13vw] sm:text-[9vw] lg:text-[7vw] leading-[0.85] mb-10">
            Vamos construir
            <br />
            algo juntos
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 border-t border-background/25 pt-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-lg leading-relaxed opacity-80 max-w-md">
                Estou aberto a novas oportunidades e sempre animado para discutir projetos
                desafiadores. Entre em contato.
              </p>
              <div className="mt-8">
                <Button variant="secondary" size="xl" asChild>
                  <a
                    href="https://api.whatsapp.com/send/?phone=61983440402&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Send className="mr-2" />
                    Enviar mensagem
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 divide-y divide-background/20 border-y border-background/20">
            {contactLinks.map((link, i) => (
              <Reveal key={link.name} delay={i * 90}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 py-6 transition-colors duration-500 hover:bg-background hover:text-foreground hover:px-5"
                >
                  <div className="flex items-center gap-5">
                    <link.icon size={20} />
                    <div>
                      <h3 className="font-display text-xl">{link.name}</h3>
                      <p className="text-sm opacity-70">{link.description}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Abrir →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
