import Reveal from "@/components/Reveal";

const AboutSection = () => {
  const facts = [
    { k: "01", title: "1 ano de experiência", desc: "Desenvolvendo soluções web escaláveis" },
    { k: "02", title: "Entrega ágil", desc: "Foco em resultados mensuráveis" },
    { k: "03", title: "IA no workflow", desc: "Produtividade 3x maior com ferramentas de IA" },
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 border-t border-foreground/20">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Sticky label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <span className="eyebrow block mb-3">§ Sobre</span>
                <h2 className="font-display text-3xl leading-[0.9]">
                  Uma linha
                  <br />
                  de código
                  <br />
                  por vez
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Body copy */}
          <div className="lg:col-span-6 lg:border-l lg:border-foreground/20 lg:pl-10 space-y-6">
            <Reveal>
              <p className="text-xl leading-relaxed first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Sou um desenvolvedor fullstack apaixonado por criar experiências digitais
                excepcionais. Com base sólida em React, Node.js e TypeScript, transformo
                requisitos complexos em soluções elegantes e performáticas.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Meu diferencial está na integração de ferramentas de IA ao fluxo de
                desenvolvimento, aumentando a velocidade de entrega sem comprometer a
                qualidade. A combinação de expertise técnica com inteligência artificial é o
                futuro do desenvolvimento de software.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Busco oportunidades onde possa contribuir com impacto real, trabalhando em
                produtos que fazem diferença na vida das pessoas.
              </p>
            </Reveal>
          </div>

          {/* Facts */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-foreground/15 border-y border-foreground/15">
              {facts.map((f, i) => (
                <Reveal key={f.k} delay={i * 100}>
                  <div className="py-5 group">
                    <span className="font-mono text-[0.7rem] text-muted-foreground">{f.k}</span>
                    <h3 className="font-display text-sm mt-1 group-hover:translate-x-1 transition-transform duration-500">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
