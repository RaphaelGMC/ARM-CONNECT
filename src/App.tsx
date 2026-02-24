import { motion } from 'motion/react';
import { 
  Rocket, 
  Target, 
  TrendingUp, 
  Zap, 
  BarChart3, 
  Layout, 
  Users, 
  MessageSquare, 
  ArrowRight,
  Play,
  CheckCircle2,
  Instagram,
  Youtube,
  Brain
} from 'lucide-react';
import { useState, FormEvent } from 'react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="/LOGO_VETOR_BRANCA.png" 
            alt="ARM Connect Logo" 
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback to Lucide Brain icon if image is missing
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const icon = document.createElement('div');
                icon.className = 'text-brand-primary';
                parent.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 5.886 3 3 0 1 0 5.202.999 3 3 0 1 0 5.6 0 3 3 0 1 0 5.202-.999 4 4 0 0 0 .52-5.886 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5z"/><path d="M9 13a4.5 4.5 0 0 0 3 4"/><path d="M15 13a4.5 4.5 0 0 1-3 4"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>';
              }
            }}
          />
        </div>
        <span className="font-display font-bold text-xl tracking-tighter">ARM CONNECT</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
        <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
        <a href="#depoimentos" className="hover:text-white transition-colors">Resultados</a>
      </div>
      <a 
        href="https://wa.me/5521983864135?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20ARM%20Connect." 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:block px-6 py-2 bg-white text-bg-dark rounded-full text-sm font-bold hover:bg-brand-primary transition-all"
      >
        Falar com Especialista
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
          <Zap size={14} /> Agência de Performance & Branding
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-gradient">
          Conectamos sua marca ao <span className="text-brand-primary">crescimento real.</span>
        </h1>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl leading-relaxed">
          Transformamos negócios através de estratégias digitais de alta performance, branding sofisticado e funis de vendas que realmente convertem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contato" className="btn-primary px-8 py-4 flex items-center justify-center gap-2">
            Quero crescer minha marca <ArrowRight size={20} />
          </a>
          <a href="#portfolio" className="btn-secondary px-8 py-4 flex items-center justify-center gap-2">
            Ver portfólio <Play size={18} />
          </a>
        </div>
      </motion.div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5521983864135" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 hover:scale-110 transition-transform group"
      >
        <MessageSquare className="text-white w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-bg-dark px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Falar no WhatsApp
        </span>
      </a>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://picsum.photos/seed/marketing/800/600" 
            alt="Marketing Strategy" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-xl">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-bg-dark" alt="User" />
                ))}
              </div>
              <p className="text-xs font-medium text-zinc-300">
                +150 empresas escaladas com nossas estratégias.
              </p>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-primary/20 blur-2xl rounded-full animate-pulse" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/20 blur-2xl rounded-full animate-pulse" />
      </motion.div>
    </div>
  </section>
);

const Authority = () => (
  <section className="py-24 px-6 bg-zinc-900/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl mb-6">Não somos apenas uma agência, somos seu <span className="text-brand-primary italic">braço estratégico.</span></h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Na ARM Connect, acreditamos que o marketing digital vai além de posts bonitos. Focamos na interseção entre dados, criatividade e psicologia de consumo para gerar resultados previsíveis e escaláveis.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: BarChart3, title: "Data-Driven", desc: "Decisões baseadas em números, não em achismos." },
              { icon: Target, title: "Branding", desc: "Posicionamento que gera autoridade imediata." },
              { icon: TrendingUp, title: "ROI Focus", desc: "Campanhas orientadas a ROI." },
              { icon: Zap, title: "Agilidade", desc: "Execução rápida e melhoria contínua." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 text-brand-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all">
              <img src="https://picsum.photos/seed/office1/400/600" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8 glass rounded-2xl">
              <p className="text-4xl font-display font-bold text-brand-primary">+85%</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-2">Média de Crescimento</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-8 glass rounded-2xl">
              <p className="text-4xl font-display font-bold text-white">12M+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold mt-2">Investidos em Ads</p>
            </div>
            <div className="h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all">
              <img src="https://picsum.photos/seed/office2/400/600" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="servicos" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Ecossistema de <span className="text-brand-primary">Alta Conversão</span></h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">Soluções completas para dominar o mercado digital e escalar seu faturamento.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Branding & Posicionamento", desc: "Construímos marcas desejadas que se destacam da concorrência." },
          { icon: TrendingUp, title: "Tráfego Pago (Ads)", desc: "Gestão profissional em Meta, Google e TikTok Ads com foco em ROI." },
          { icon: Users, title: "Social Media Estratégico", desc: "Conteúdo que engaja, educa e prepara o público para a compra." },
          { icon: Zap, title: "Funis & Automação", desc: "Sistemas inteligentes que vendem para você 24 horas por dia." },
          { icon: MessageSquare, title: "Criação de Conteúdo", desc: "Copywriting e design de alto impacto para todas as etapas do funil." },
          { icon: Layout, title: "Landing Pages", desc: "Páginas otimizadas com foco total em conversão de leads." }
        ].map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 bg-bg-card border border-white/5 rounded-3xl hover:border-brand-primary/30 transition-all group"
          >
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-bg-dark transition-colors">
              <service.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-6 bg-zinc-900/30">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl mb-4">Resultados que <span className="text-brand-primary">falam por si</span></h2>
          <p className="text-zinc-500 max-w-xl">Veja como transformamos a realidade de nossos parceiros através de estratégias validadas.</p>
        </div>
        <a href="#contato" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
          Quero ser o próximo case <ArrowRight size={20} />
        </a>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { id: "SCexhQcJHpw", title: "Estratégia de Escala", desc: "Como estruturamos o crescimento acelerado para nossos parceiros." },
          { id: "ZaMjWn8Ohro", title: "Performance & ROI", desc: "Resultados reais medidos através de dados e otimização contínua." },
          { id: "6zW2QS8f2TA", title: "Branding de Impacto", desc: "Posicionamento de marca que gera desejo e autoridade no mercado." }
        ].map((video, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-bg-dark/20 group-hover:bg-transparent transition-colors pointer-events-none" />
            </div>
            <h4 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{video.title}</h4>
            <p className="text-zinc-500 text-sm">{video.desc}</p>
            <button className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors">
              <Play size={14} className="fill-current" /> Assistir Case Completo
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section id="depoimentos" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl mb-4">Aprovado por <span className="text-brand-primary">Líderes de Mercado</span></h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          { name: "Ricardo Silva", role: "CEO, TechFlow", text: "A ARM Connect mudou nossa percepção sobre marketing. Hoje temos previsibilidade de caixa e uma marca forte." },
          { name: "Mariana Costa", role: "Founder, Glow Up", text: "O trabalho de branding deles é impecável. Nossa conversão aumentou absurdamente após o novo posicionamento." },
          { name: "André Santos", role: "Diretor, Solar Energy", text: "Tráfego pago com inteligência. O ROI que alcançamos com a ARM foi o maior da nossa história." }
        ].map((item, i) => (
          <div key={i} className="p-8 glass rounded-3xl relative">
            <MessageSquare className="absolute top-8 right-8 text-brand-primary/20" size={40} />
            <div className="flex gap-1 text-brand-primary mb-4">
              {[1,2,3,4,5].map(s => <Zap key={s} size={14} className="fill-current" />)}
            </div>
            <p className="text-zinc-300 italic mb-6 leading-relaxed">"{item.text}"</p>
            <div className="flex items-center gap-4">
              <img src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-12 h-12 rounded-full grayscale" alt={item.name} />
              <div>
                <p className="font-bold text-sm">{item.name}</p>
                <p className="text-xs text-zinc-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LeadForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    orcamento: '',
    desafio: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `🚀 *Novo Lead - ARM Connect*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Empresa:* ${formData.empresa}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Orçamento:* ${formData.orcamento}\n` +
      `*Desafio:* ${formData.desafio}`
    );
    
    const whatsappUrl = `https://wa.me/5521983864135?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-primary/5 blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto bg-bg-card border border-white/10 rounded-[40px] overflow-hidden shadow-2xl grid lg:grid-cols-5">
        <div className="lg:col-span-2 p-12 bg-brand-primary text-bg-dark flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6 leading-tight">Pronto para escalar sua marca?</h2>
            <p className="font-medium mb-8 opacity-80">Preencha o formulário e receba uma análise estratégica personalizada do seu negócio.</p>
            
            <ul className="space-y-4">
              {[
                "Diagnóstico Gratuito",
                "Plano de Ação Personalizado",
                "Análise de Concorrência",
                "Projeção de Resultados"
              ].map(item => (
                <li key={item} className="flex items-center gap-3 font-bold text-sm">
                  <CheckCircle2 size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12">
            <p className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">Fale conosco</p>
            <p className="font-display font-bold text-lg">contato@armconnect.com.br</p>
          </div>
        </div>

        <div className="lg:col-span-3 p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-all"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={e => setFormData({...formData, nome: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">E-mail Corporativo</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-all"
                  placeholder="email@empresa.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">WhatsApp</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-all"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={e => setFormData({...formData, telefone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Nome da Empresa</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-all"
                  placeholder="Sua Empresa"
                  value={formData.empresa}
                  onChange={e => setFormData({...formData, empresa: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Orçamento Mensal Estimado</label>
              <select 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-all appearance-none"
                value={formData.orcamento}
                onChange={e => setFormData({...formData, orcamento: e.target.value})}
              >
                <option value="" className="bg-bg-card">Selecione uma faixa</option>
                <option value="5k-10k" className="bg-bg-card">R$ 5.000 - R$ 10.000</option>
                <option value="10k-50k" className="bg-bg-card">R$ 10.000 - R$ 50.000</option>
                <option value="50k+" className="bg-bg-card">Acima de R$ 50.000</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Principal Desafio de Marketing</label>
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary outline-none transition-all h-32 resize-none"
                placeholder="Conte-nos um pouco sobre o que você precisa..."
                value={formData.desafio}
                onChange={e => setFormData({...formData, desafio: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-primary py-5 text-lg">
              Quero uma estratégia personalizada <ArrowRight size={20} />
            </button>
            <p className="text-[10px] text-center text-zinc-600 uppercase tracking-widest font-bold">
              Seus dados estão seguros conosco. Política de Privacidade aplicada.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="/LOGO_VETOR_BRANCA.png" 
                    alt="ARM Connect Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <span className="font-display font-bold text-2xl tracking-tighter text-white">ARM CONNECT</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-primary font-bold mt-2 ml-1">O Marketing que te conecta</span>
            </div>
          </div>
          <p className="text-zinc-500 max-w-sm mb-8">
            Estratégia, performance e branding para marcas que não aceitam o comum. O parceiro ideal para o seu próximo nível.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/agencia.armconnect/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark transition-all"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.youtube.com/@ARMCONNECT" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark transition-all"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Navegação</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#servicos" className="hover:text-brand-primary transition-colors">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-brand-primary transition-colors">Portfólio</a></li>
            <li><a href="#depoimentos" className="hover:text-brand-primary transition-colors">Resultados</a></li>
            <li><a href="#contato" className="hover:text-brand-primary transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-zinc-400">Legal</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-brand-primary transition-colors">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-brand-primary transition-colors">Termos de Uso</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-zinc-600">© 2024 ARM Connect. Todos os direitos reservados.</p>
        <p className="text-xs text-zinc-600 flex items-center gap-1">Desenvolvido com <Zap size={10} className="text-brand-primary" /> para alta performance.</p>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Authority />
      <Services />
      <Portfolio />
      <SocialProof />
      <LeadForm />
      <Footer />
    </div>
  );
}
