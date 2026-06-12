import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import towTruckBg from "@/assets/tow-truck-bg.jpg";

const WHATSAPP = "https://wa.me/5538999865609";
const PHONE = "tel:+5538999865609";
const INSTAGRAM = "https://www.instagram.com/piturismo.autosocorro";
const EMAIL = "guincho@autosocorropiturismo.com.br";
const ADDRESS = "Rua José Ferreira, 64 - Bairro São José, Itacarambi - MG, CEP 39470-000";

const TITLE = "Guincho em Itacarambi MG | Auto Socorro Pi Turismo — 24 Horas";
const DESC = "Guincho e auto socorro em Itacarambi MG e região do Norte de Minas. Atendimento 24h para reboque, pane seca, destombamento e mais. Chame no WhatsApp!";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "guincho itacarambi, auto socorro itacarambi, reboque norte de minas, guincho 24 horas, pane seca, cavernas do peruaçu" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Auto Socorro Pi Turismo",
          image: "",
          telephone: "+5538999865609",
          email: EMAIL,
          url: "https://autosocorropiturismo.com.br",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua José Ferreira, 64 - Bairro São José",
            addressLocality: "Itacarambi",
            addressRegion: "MG",
            postalCode: "39470-000",
            addressCountry: "BR",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
          areaServed: "Norte de Minas Gerais",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Index,
});

const mainServices = [
  { icon: "🏍️", title: "Reboque de Moto", desc: "Transporte seguro para motos de todos os modelos." },
  { icon: "🚗", title: "Reboque de Carro", desc: "Guincho ágil para veículos de passeio em qualquer situação." },
  { icon: "🛻", title: "Reboque de Camionete", desc: "Plataforma reforçada para camionetes e SUVs." },
  { icon: "🚛", title: "Reboque de Veículo Pesado", desc: "Estrutura preparada para caminhões e carga pesada." },
  { icon: "📦", title: "Transporte de Materiais", desc: "Levamos materiais e cargas com segurança até o destino." },
];

const auxServices = [
  { icon: "🔋", title: "Recarga de Bateria" },
  { icon: "🛞", title: "Troca de Pneu" },
  { icon: "⛽", title: "Entrega de Combustível" },
  { icon: "🔑", title: "Chaveiro Automotivo" },
  { icon: "🔧", title: "Socorro Mecânico" },
  { icon: "⚡", title: "Socorro Elétrico" },
  { icon: "🚜", title: "Destombamento" },
];

const cities = [
  "Itacarambi", "Manga", "São Francisco", "Januária", "Montalvânia",
  "Jaíba", "Montes Claros", "Mirabela", "Pandeiros", "São João das Missões",
  "Fabião I", "Fabião II", "Mocambinho", "Parque Nacional Cavernas do Peruaçu e região",
];

const testimonials = [
  { name: "Carlos Oliveira", city: "Itacarambi", text: "Pane de madrugada e chegaram rapidinho. Atendimento nota 10!" },
  { name: "Ana Paula Souza", city: "Januária", text: "Pneu furado perto do Parque das Cavernas e me salvaram! Rápido e preço justo." },
  { name: "Rodrigo Mendes", city: "Manga", text: "Reboque da camionete na rodovia. Chegaram antes do prometido. Empresa séria!" },
  { name: "Fernanda Lima", city: "Montes Claros", text: "Bateria descarregada longe de casa. Resolveram tudo no local. Recomendo!" },
];

const cityWhats = (c: string) =>
  `https://wa.me/5538999865609?text=${encodeURIComponent(`Olá! Preciso de guincho em ${c}.`)}`;

function Carousel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="carousel-wrap">
      <button className="car-btn left" aria-label="Anterior" onClick={() => ref.current?.scrollBy({ left: -280, behavior: "smooth" })}>‹</button>
      <div className="carousel" ref={ref}>{children}</div>
      <button className="car-btn right" aria-label="Próximo" onClick={() => ref.current?.scrollBy({ left: 280, behavior: "smooth" })}>›</button>
    </div>
  );
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <style>{CSS}</style>

      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#top" className="brand">
          <span className="brand-mark">PI</span>
          <span className="brand-name">Auto Socorro<br/><b>Pi Turismo</b></span>
        </a>
        <a href={PHONE} className="nav-phone">📞 (38) 99986-5609</a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="badge-24h"><span className="dot" /> Disponível 24 horas, todos os dias</div>
            <h1>Guincho e Auto Socorro em Itacarambi MG — 24 Horas</h1>
            <p>Atendimento rápido para Itacarambi, Norte de Minas e visitantes do Parque Nacional Cavernas do Peruaçu. Chame agora — estamos disponíveis 24 horas.</p>
            <div className="cta-row">
              <a className="btn btn-whats" href={WHATSAPP} target="_blank" rel="noopener noreferrer">💬 Chamar no WhatsApp</a>
              <a className="btn btn-dark" href={PHONE}>📞 Ligue Agora</a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">Serviços</span>
            <h2>Nossos Serviços em Itacarambi MG</h2>
            <p className="lead">Estrutura completa para qualquer emergência veicular, de motos a veículos pesados.</p>

            <div className="grid-services">
              {mainServices.map((s) => (
                <article className="card-service" key={s.title}>
                  <div className="card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </article>
              ))}
            </div>

            <h3 className="sub-h">Serviços auxiliares</h3>
            <Carousel>
              {auxServices.map((s) => (
                <a key={s.title} href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="aux-card">
                  <span className="aux-icon">{s.icon}</span>
                  <span>{s.title}</span>
                </a>
              ))}
            </Carousel>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section section-alt">
          <div className="container">
            <span className="eyebrow">Sobre nós</span>
            <h2>Sobre a Auto Socorro Pi Turismo</h2>
            <p className="lead">
              A Auto Socorro Pi Turismo é referência em guincho e auto socorro em Itacarambi - MG e toda a região do Norte de Minas Gerais. Atendemos veículos de todos os portes — de motos a caminhões — com equipe treinada, frota preparada e agilidade que só quem é da região tem. Disponíveis 24 horas por dia, 7 dias por semana, inclusive para visitantes do Parque Nacional Cavernas do Peruaçu.
            </p>

            <div className="diffs">
              <div className="diff"><span>⚡</span><b>Atendimento Rápido</b></div>
              <div className="diff"><span>🕐</span><b>24 Horas por Dia</b></div>
              <div className="diff"><span>🚛</span><b>Leves a Pesados</b></div>
              <div className="diff"><span>📍</span><b>Todo o Norte de Minas</b></div>
            </div>

            <h2 style={{ marginTop: "3rem" }}>Cidades Atendidas</h2>
            <p className="lead">Clique em uma cidade e fale com a gente agora mesmo.</p>
            <div className="tags">
              {cities.map((c, i) => (
                <a
                  key={c}
                  href={cityWhats(c)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`tag ${i === 0 ? "tag-primary" : ""}`}
                >
                  {c}
                </a>
              ))}
              <span className="tag tag-muted">e demais cidades do Norte de Minas</span>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">Depoimentos</span>
            <h2>O que nossos clientes dizem</h2>
            <Carousel>
              {testimonials.map((t) => (
                <article key={t.name} className="testimonial">
                  <div className="t-head">
                    <div className="avatar">{t.name.split(" ").map(n => n[0]).slice(0,2).join("")}</div>
                    <div>
                      <b>{t.name}</b>
                      <span className="muted">{t.city}</span>
                    </div>
                  </div>
                  <div className="stars">★★★★★</div>
                  <p>"{t.text}"</p>
                </article>
              ))}
            </Carousel>
          </div>
        </section>

        {/* CONTATO */}
        <section className="section section-alt">
          <div className="container">
            <span className="eyebrow">Localização</span>
            <h2>Como nos Encontrar</h2>
            <div className="contact-grid">
              <div>
                <div className="map">
                  <iframe
                    title="Mapa Auto Socorro Pi Turismo"
                    src="https://www.google.com/maps?q=Rua%20Jos%C3%A9%20Ferreira%2C%2064%2C%20Itacarambi%20-%20MG&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="addr">📍 {ADDRESS}</p>
              </div>
              <div className="contact-buttons">
                <a className="cbtn cbtn-whats" href={WHATSAPP} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
                <a className="cbtn cbtn-ig" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">📷 Instagram</a>
                <a className="cbtn cbtn-mail" href={`mailto:${EMAIL}`}>📧 E-mail</a>
                <a className="cbtn cbtn-phone" href={PHONE}>📞 Telefone</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final">
          <div className="container">
            <h2>Está em apuros? Chame agora!</h2>
            <a className="btn btn-white" href={WHATSAPP} target="_blank" rel="noopener noreferrer">💬 Falar no WhatsApp</a>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <b>Auto Socorro Pi Turismo</b>
              <p>{ADDRESS}</p>
              <p>Atendimento 24 horas — Itacarambi MG</p>
            </div>
            <div className="foot-social">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            </div>
          </div>
          <p className="copy">© 2025 Auto Socorro Pi Turismo — Todos os direitos reservados</p>
        </footer>
      </main>

      <a className="float-whats" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <span>💬</span>
      </a>
    </>
  );
}

const CSS = `
:root{
  --green:#0f8a3a; --green-deep:#0a6b2c; --green-glow:#16b34a;
  --red:#dc2626; --red-deep:#991b1b;
  --black:#0a0a0a; --ink:#111;
  --bg:#fafafa; --bg-alt:#f3f4f3;
  --text:#1a1a1a; --muted:#6b7280; --border:#e5e7eb;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:var(--text);background:var(--bg);line-height:1.55;-webkit-font-smoothing:antialiased}
img,iframe{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.container{width:100%;max-width:1180px;margin:0 auto;padding:0 1.25rem}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:.75rem 1.25rem;transition:.3s background,.3s box-shadow;color:#fff}
.nav-scrolled{background:rgba(10,10,10,.92);backdrop-filter:blur(8px);box-shadow:0 4px 16px rgba(0,0,0,.2)}
.brand{display:flex;align-items:center;gap:.6rem}
.brand-mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--green),var(--green-glow));display:grid;place-items:center;font-weight:900;color:#fff;font-size:.95rem;box-shadow:0 4px 14px rgba(15,138,58,.5)}
.brand-name{font-size:.78rem;line-height:1.1}
.brand-name b{font-size:.95rem}
.nav-phone{font-weight:600;font-size:.9rem;padding:.55rem .9rem;border-radius:999px;background:var(--red);color:#fff;box-shadow:0 4px 14px rgba(220,38,38,.45)}

/* HERO */
.hero{position:relative;min-height:100vh;display:flex;align-items:center;color:#fff;overflow:hidden;
  background:linear-gradient(135deg,#0a0a0a 0%,#111 60%,#0a1a10 100%);
}
.hero::before{content:"";position:absolute;inset:0;
  background-image:linear-gradient(180deg,rgba(10,10,10,.78) 0%,rgba(10,10,10,.65) 50%,rgba(10,10,10,.85) 100%),url("${towTruckBg}");
  background-size:cover;background-position:center;background-repeat:no-repeat;
  opacity:.95;
}
.hero::after{content:"";position:absolute;inset:0;background-image:
  repeating-linear-gradient(90deg,transparent 0 40px,rgba(255,255,255,.03) 40px 41px),
  linear-gradient(180deg,transparent 60%,rgba(0,0,0,.6) 100%);
  pointer-events:none;
}
.hero-inner{position:relative;z-index:2;padding:7rem 1.25rem 4rem;max-width:900px;margin:0 auto;text-align:center}
.badge-24h{display:inline-flex;align-items:center;gap:.5rem;padding:.5rem 1rem;border-radius:999px;background:rgba(15,138,58,.15);border:1px solid rgba(22,179,74,.4);color:#bbf7d0;font-size:.8rem;font-weight:600;margin-bottom:1.5rem}
.dot{width:8px;height:8px;border-radius:50%;background:var(--green-glow);box-shadow:0 0 12px var(--green-glow);animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.hero h1{font-size:clamp(1.85rem,5.5vw,3.4rem);font-weight:900;line-height:1.1;letter-spacing:-.02em;margin-bottom:1rem;text-shadow:0 4px 20px rgba(0,0,0,.7)}
.hero p{font-size:clamp(1rem,2vw,1.15rem);color:#e5e7eb;max-width:680px;margin:0 auto 2rem;text-shadow:0 2px 10px rgba(0,0,0,.6)}
.cta-row{display:flex;flex-wrap:wrap;gap:.85rem;justify-content:center}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:1rem 1.6rem;border-radius:14px;font-weight:700;font-size:1rem;transition:.25s transform,.25s box-shadow,.25s filter;border:none;cursor:pointer;letter-spacing:.01em}
.btn:hover{transform:translateY(-2px)}
.btn-whats{background:linear-gradient(135deg,var(--green),var(--green-glow));color:#fff;box-shadow:0 10px 30px rgba(15,138,58,.5)}
.btn-whats:hover{box-shadow:0 14px 40px rgba(15,138,58,.7)}
.btn-dark{background:#000;color:#fff;border:1px solid rgba(255,255,255,.15);box-shadow:0 10px 30px rgba(0,0,0,.4)}
.btn-dark:hover{background:#111}
.btn-white{background:#fff;color:var(--green-deep);box-shadow:0 10px 30px rgba(0,0,0,.2)}

/* SECTIONS */
.section{padding:5rem 0}
.section-alt{background:var(--bg-alt)}
.eyebrow{display:inline-block;padding:.35rem .85rem;border-radius:999px;background:rgba(15,138,58,.1);color:var(--green-deep);font-weight:700;font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.85rem}
h2{font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:900;letter-spacing:-.02em;line-height:1.15;margin-bottom:.6rem;color:var(--ink)}
.lead{color:var(--muted);max-width:680px;margin-bottom:2.5rem;font-size:1.02rem}
.sub-h{margin:3rem 0 1.25rem;font-size:1.15rem;font-weight:800;color:var(--ink)}

/* SERVICES GRID */
.grid-services{display:grid;grid-template-columns:1fr;gap:1rem}
@media (min-width:640px){.grid-services{grid-template-columns:repeat(2,1fr)}}
@media (min-width:1024px){.grid-services{grid-template-columns:repeat(5,1fr)}}
.card-service{background:#fff;border:1px solid var(--border);border-radius:18px;padding:1.5rem;transition:.3s;position:relative;overflow:hidden}
.card-service::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--green),var(--green-glow));transform:scaleX(0);transform-origin:left;transition:.3s}
.card-service:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.08);border-color:transparent}
.card-service:hover::before{transform:scaleX(1)}
.card-icon{width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,rgba(15,138,58,.1),rgba(22,179,74,.05));display:grid;place-items:center;font-size:1.6rem;margin-bottom:1rem}
.card-service h3{font-size:1.05rem;font-weight:800;margin-bottom:.4rem;color:var(--ink)}
.card-service p{color:var(--muted);font-size:.9rem}

/* CAROUSEL */
.carousel-wrap{position:relative}
.carousel{display:flex;gap:1rem;overflow-x:auto;scroll-snap-type:x mandatory;padding:.5rem .25rem 1.5rem;scrollbar-width:thin;scrollbar-color:var(--green) transparent}
.carousel::-webkit-scrollbar{height:6px}
.carousel::-webkit-scrollbar-thumb{background:var(--green);border-radius:3px}
.carousel > *{scroll-snap-align:start;flex:0 0 auto}
.car-btn{position:absolute;top:50%;transform:translateY(-50%);z-index:2;width:42px;height:42px;border-radius:50%;border:1px solid var(--border);background:#fff;font-size:1.5rem;cursor:pointer;display:none;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(0,0,0,.1);color:var(--ink)}
.car-btn:hover{background:var(--green);color:#fff;border-color:var(--green)}
.car-btn.left{left:-8px}.car-btn.right{right:-8px}
@media(min-width:1024px){.car-btn{display:flex}}

.aux-card{min-width:200px;background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.25rem;display:flex;align-items:center;gap:.85rem;font-weight:600;transition:.25s;color:var(--ink)}
.aux-card:hover{border-color:var(--green);background:rgba(15,138,58,.04);transform:translateY(-2px)}
.aux-icon{font-size:1.6rem;width:42px;height:42px;border-radius:10px;background:rgba(15,138,58,.08);display:grid;place-items:center}

/* DIFFS */
.diffs{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-top:2rem}
@media(min-width:768px){.diffs{grid-template-columns:repeat(4,1fr)}}
.diff{background:#fff;border:1px solid var(--border);border-radius:14px;padding:1.25rem;text-align:center;transition:.25s}
.diff:hover{border-color:var(--green);transform:translateY(-2px)}
.diff span{font-size:2rem;display:block;margin-bottom:.5rem}
.diff b{font-size:.92rem;color:var(--ink)}

/* TAGS */
.tags{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1rem}
.tag{padding:.55rem 1rem;border-radius:999px;background:#fff;border:1px solid var(--border);font-size:.88rem;font-weight:600;transition:.2s;cursor:pointer}
.tag:hover{border-color:var(--green);color:var(--green-deep);transform:translateY(-1px)}
.tag-primary{background:linear-gradient(135deg,var(--green),var(--green-glow));color:#fff;border-color:transparent;box-shadow:0 6px 18px rgba(15,138,58,.4)}
.tag-primary:hover{color:#fff}
.tag-muted{background:transparent;border-style:dashed;color:var(--muted);cursor:default}
.tag-muted:hover{transform:none;border-color:var(--border);color:var(--muted)}

/* TESTIMONIALS */
.testimonial{min-width:300px;max-width:340px;background:#fff;border:1px solid var(--border);border-radius:18px;padding:1.5rem;display:flex;flex-direction:column;gap:.85rem}
.t-head{display:flex;align-items:center;gap:.75rem}
.avatar{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--green),var(--green-glow));color:#fff;display:grid;place-items:center;font-weight:800;font-size:.95rem}
.t-head b{display:block;font-size:.95rem;color:var(--ink)}
.muted{font-size:.8rem;color:var(--muted)}
.stars{color:#facc15;letter-spacing:2px;font-size:1rem}
.testimonial p{color:#374151;font-style:italic;font-size:.95rem;line-height:1.6}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-top:1.5rem}
@media(min-width:900px){.contact-grid{grid-template-columns:1.3fr 1fr;gap:2rem}}
.map{border-radius:16px;overflow:hidden;border:1px solid var(--border);aspect-ratio:16/11;background:#eee}
.map iframe{width:100%;height:100%;border:0}
.addr{margin-top:1rem;font-weight:600;color:var(--ink)}
.contact-buttons{display:grid;gap:.75rem;align-content:start}
.cbtn{display:flex;align-items:center;gap:.7rem;padding:1.05rem 1.25rem;border-radius:14px;font-weight:700;color:#fff;transition:.25s}
.cbtn:hover{transform:translateX(4px);filter:brightness(1.05)}
.cbtn-whats{background:linear-gradient(135deg,var(--green),var(--green-glow));box-shadow:0 8px 22px rgba(15,138,58,.4)}
.cbtn-ig{background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)}
.cbtn-mail{background:var(--ink)}
.cbtn-phone{background:var(--red);box-shadow:0 8px 22px rgba(220,38,38,.35)}

/* CTA FINAL */
.cta-final{background:linear-gradient(135deg,var(--green-deep),var(--green) 50%,var(--green-glow));color:#fff;padding:4rem 0;text-align:center;position:relative;overflow:hidden}
.cta-final::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(255,255,255,.15),transparent 70%)}
.cta-final h2{color:#fff;margin-bottom:1.5rem;position:relative;text-shadow:0 4px 18px rgba(0,0,0,.2)}
.cta-final .btn{position:relative}

/* FOOTER */
.footer{background:var(--black);color:#d1d5db;padding:3rem 0 1.5rem}
.footer-grid{display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start}
@media(min-width:768px){.footer-grid{flex-direction:row;justify-content:space-between;align-items:center}}
.footer b{color:#fff;display:block;margin-bottom:.5rem;font-size:1.1rem}
.footer p{font-size:.9rem;margin-bottom:.25rem}
.foot-social{display:flex;gap:.75rem}
.foot-social a{width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.06);display:grid;place-items:center;font-size:1.2rem;transition:.25s;border:1px solid rgba(255,255,255,.1)}
.foot-social a:hover{background:var(--green);border-color:var(--green);transform:translateY(-2px)}
.copy{text-align:center;margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.08);font-size:.82rem;color:#9ca3af}

/* FLOAT WHATS */
.float-whats{position:fixed;bottom:1.25rem;right:1.25rem;z-index:60;width:62px;height:62px;border-radius:50%;background:linear-gradient(135deg,var(--green),var(--green-glow));color:#fff;display:grid;place-items:center;font-size:1.8rem;box-shadow:0 10px 30px rgba(15,138,58,.55);animation:floatPulse 2.2s ease-in-out infinite;transition:.25s}
.float-whats:hover{transform:scale(1.1)}
@keyframes floatPulse{0%,100%{box-shadow:0 10px 30px rgba(15,138,58,.55),0 0 0 0 rgba(22,179,74,.5)}50%{box-shadow:0 10px 30px rgba(15,138,58,.55),0 0 0 18px rgba(22,179,74,0)}}

@media(max-width:480px){
  .hero-inner{padding-top:6rem}
  .btn{width:100%}
  .cta-row{flex-direction:column}
  .nav-phone{font-size:.78rem;padding:.45rem .7rem}
}
`;
