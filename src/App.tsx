import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  Phone, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Verified, 
  Star, 
  AlertTriangle, 
  Wind, 
  Pipette, 
  Flame,
  CheckCircle2,
  Rocket,
  Award,
  DollarSign,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Usluge', href: '#services' },
    { name: 'Zašto mi', href: '#why-us' },
    { name: 'O nama', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>PRO<span className="text-brand-gold">VODOINSTALATER</span></span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-brand-navy' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+15551234567" className={`flex items-center gap-2 text-sm font-semibold transition-colors ${isScrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white hover:text-brand-gold'}`}>
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg bg-white/10 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-brand-navy' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-slate-900 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-brand-navy font-bold">
                <Phone className="w-5 h-5" />
                (555) 123-4567
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-brand-navy/80 via-brand-navy to-brand-navy"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 md:mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold text-white tracking-widest uppercase">Hitne intervencije dostupne 24/7</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8 font-display leading-[1.1] md:leading-[0.9]"
          >
            Vrhunske usluge za <span className="text-brand-gold">Moderne Domove</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-xl font-light leading-relaxed"
          >
            Brzo, pouzdano i transparentno. Pružamo vodoinstalaterske usluge svetske klase uz posvećenost savršenstvu i trajnim rezultatima.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5"
          >
            <Button asChild size="lg" className="rounded-full bg-brand-gold hover:bg-white text-brand-navy font-bold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg transition-all duration-300 shadow-xl hover:shadow-brand-gold/30">
              <a href="tel:+15551234567" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Pozovite odmah
              </a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/10 flex flex-wrap gap-6 md:gap-16"
          >
            <div className="flex items-center gap-2 md:gap-3 text-white">
              <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" />
              <span className="text-[10px] md:text-sm font-semibold tracking-wide uppercase">Potpuno licencirani</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-white">
              <Verified className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" />
              <span className="text-[10px] md:text-sm font-semibold tracking-wide uppercase">Osigurani</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-white">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" />
              <span className="text-[10px] md:text-sm font-semibold tracking-wide uppercase">Vrhunski ocenjeni</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: AlertTriangle,
      title: 'Hitne intervencije',
      desc: 'Brz odgovor na pucanje cevi, ozbiljna curenja i kritične kvarove kada vam je najpotrebnije.',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Droplets,
      title: 'Popravka curenja',
      desc: 'Precizna detekcija i popravka curenja radi sprečavanja strukturnih oštećenja i gubitka vode.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Wind,
      title: 'Odgušenje kanalizacije',
      desc: 'Napredne tehnike čišćenja i ispiranja pod pritiskom za vraćanje optimalnog protoka.',
      color: 'bg-cyan-50 text-cyan-600'
    },
    {
      icon: Pipette,
      title: 'Instalacija cevi',
      desc: 'Stručna zamena cevi i nove instalacije uz korišćenje najkvalitetnijih materijala.',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: Flame,
      title: 'Bojleri',
      desc: 'Održavanje, popravka i instalacija klasičnih i protočnih bojlera.',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: CheckCircle2,
      title: 'Održavanje',
      desc: 'Sveobuhvatni pregledi i preventivna nega za održavanje vašeg sistema u vrhunskom stanju.',
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 border-brand-gold text-brand-gold px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">Naša stručnost</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy mb-6 font-display">Premium Rešenja</h2>
          <p className="text-lg text-slate-500 font-light">Sveobuhvatne usluge dizajnirane za dugovečnost, efikasnost i vaš potpuni mir.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="group h-full border-slate-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-10">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 font-display">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8 font-light">{service.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                    Zakažite uslugu
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Munjevit odgovor',
      desc: 'Cenimo vaše vreme. Naš sistem osigurava da tehničar bude na vašim vratima tačno kada je obećano.'
    },
    {
      icon: Award,
      title: 'Sertifikovani majstori',
      desc: 'Svaki član našeg tima je potpuno licenciran, rigorozno obučen i proveren.'
    },
    {
      icon: DollarSign,
      title: 'Transparentne cene',
      desc: 'Bez skrivenih troškova. Odobravate preciznu cenu pre početka radova. Bez iznenađenja.'
    }
  ];

  return (
    <section id="why-us" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 border-brand-gold text-brand-gold px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">Zašto mi</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy mb-8 font-display">Standard u Izvrsnosti</h2>
          <p className="text-lg text-slate-500 mb-12 font-light leading-relaxed">Mi ne popravljamo samo cevi; mi projektujemo rešenja. Naš pristup kombinuje tradicionalno zanatstvo sa modernom tehnologijom za neuporedivu pouzdanost vašeg doma.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {features.map((feature, idx) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-navy flex-shrink-0 flex items-center justify-center shadow-lg shadow-brand-navy/20">
                  <feature.icon className="text-white w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-navy mb-2 font-display">{feature.title}</h4>
                  <p className="text-slate-500 font-light leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EmergencyCTA = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 font-display">Imate hitan vodoinstalaterski problem?</h2>
          <p className="text-xl text-slate-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed">Naš elitni tim za brze intervencije je dostupan 24/7. Ne dozvolite da voda ošteti vaš dom. Jedan poziv, potpuno rešenje.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button asChild size="lg" className="rounded-full bg-brand-gold hover:bg-white text-brand-navy font-bold px-12 py-8 text-xl transition-all duration-300 shadow-2xl hover:shadow-brand-gold/40">
              <a href="tel:+15551234567" className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                Pozovite (555) 123-4567
              </a>
            </Button>
            <p className="text-white/50 font-medium uppercase tracking-widest text-xs">Prosečno vreme odgovora: 30 min</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { text: "Najbolja usluga u gradu! Došli su za 20 minuta.", author: "Marko P." },
    { text: "Veoma profesionalni i čisti. Topla preporuka.", author: "Jelena S." },
    { text: "Cena je bila tačno onakva kako su rekli. Bez skrivenih troškova.", author: "Nikola D." },
    { text: "Rešili su problem koji niko drugi nije mogao.", author: "Milica R." },
    { text: "Ljubazni majstori i vrhunska oprema.", author: "Dragan T." },
    { text: "Brza i efikasna popravka bojlera. Hvala!", author: "Slobodan M." },
  ];

  // Duplicate the list to create a seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-white overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <Badge variant="outline" className="mb-4 border-brand-gold text-brand-gold px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">Utisci klijenata</Badge>
        <h2 className="text-3xl font-bold text-brand-navy font-display">Šta kažu o nama</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-8 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 30, 
            repeat: Infinity 
          }}
        >
          {doubledTestimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="inline-flex flex-col gap-4 p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 min-w-[280px] md:min-w-[350px]"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-slate-600 italic font-light whitespace-normal">"{t.text}"</p>
              <p className="text-brand-navy font-bold text-sm">— {t.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Badge variant="outline" className="mb-4 border-brand-gold text-brand-gold px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">Kontaktirajte nas</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy mb-8 font-display">Spremni da započnete projekat?</h2>
            <p className="text-lg text-slate-500 mb-12 font-light leading-relaxed">Popunite formular ispod i naš majstor će vas kontaktirati u roku od 2 sata kako bismo razgovarali o vašim potrebama i pružili preliminarnu procenu.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <Phone className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Pozovite nas 24/7</p>
                  <p className="text-xl font-bold text-brand-navy">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <Mail className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Pišite nam</p>
                  <p className="text-xl font-bold text-brand-navy">service@proplumbing.elite</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <MapPin className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Naša kancelarija</p>
                  <p className="text-xl font-bold text-brand-navy">123 Elite Way, Metro City</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="rounded-[2.5rem] border-none shadow-2xl overflow-hidden">
            <CardContent className="p-10 sm:p-16">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Ime i prezime</label>
                    <Input placeholder="Marko Marković" className="rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Broj telefona</label>
                    <Input placeholder="(555) 000-0000" className="rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Vrsta usluge</label>
                  <select className="w-full rounded-xl border border-slate-100 bg-slate-50/50 focus:bg-white transition-all h-12 px-4 text-sm outline-none">
                    <option>Hitna popravka</option>
                    <option>Detekcija curenja</option>
                    <option>Odgušenje kanalizacije</option>
                    <option>Servis bojlera</option>
                    <option>Nova instalacija</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Poruka</label>
                  <Textarea placeholder="Recite nam nešto o vašim potrebama..." className="rounded-xl border-slate-100 bg-slate-50/50 focus:bg-white transition-all min-h-[150px]" />
                </div>
                <Button className="w-full rounded-xl bg-brand-navy hover:bg-brand-gold text-white font-bold py-8 text-lg transition-all duration-300 shadow-xl shadow-brand-navy/20">
                  Pošaljite zahtev
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-navy pt-32 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">PRO<span className="text-brand-gold">VODOINSTALATER</span></span>
            </a>
            <p className="text-slate-400 font-light leading-relaxed">Standard u vrhunskim vodoinstalaterskim rešenjima. Kombinujemo zanatstvo sa modernom tehnologijom kako bismo zaštitili vaš dom.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-display">Brzi linkovi</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Naše usluge</a></li>
              <li><a href="#why-us" className="hover:text-brand-gold transition-colors">Zašto mi</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">O nama</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Dobijte procenu</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-display">Usluge</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              <li>Hitne popravke</li>
              <li>Detekcija curenja</li>
              <li>Odgušenje kanalizacije</li>
              <li>Bojleri</li>
              <li>Instalacija cevi</li>
              <li>Kanalizacione usluge</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-display">Vesti</h4>
            <p className="text-slate-400 font-light mb-6">Dobijajte savete i ekskluzivne sezonske ponude.</p>
            <div className="flex gap-2">
              <Input placeholder="Email adresa" className="rounded-xl bg-white/5 border-white/10 focus:bg-white/10 transition-all" />
              <Button className="rounded-xl bg-brand-gold hover:bg-white text-brand-navy">
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-light">
          <p>© 2024 Pro Vodoinstalater Elite. Sva prava zadržana.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Politika privatnosti</a>
            <a href="#" className="hover:text-white transition-colors">Uslovi korišćenja</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Koliko brzo možete odgovoriti na hitan poziv?",
      a: "Naše prosečno vreme odgovora na hitne pozive je ispod 30 minuta. Imamo tehničare raspoređene širom grada kako bismo osigurali da stignemo do vas što je brže moguće."
    },
    {
      q: "Da li su vaši vodoinstalateri licencirani i osigurani?",
      a: "Da, 100%. Svaki tehničar u našem timu je sertifikovani majstor vodoinstalater, potpuno licenciran i osiguran za vašu zaštitu."
    },
    {
      q: "Da li dajete cene unapred?",
      a: "Apsolutno. Verujemo u potpunu transparentnost. Nakon kratkog pregleda, dajemo detaljnu, pisanu procenu. Radove počinjemo tek kada odobrite tačnu cenu."
    },
    {
      q: "Da li nudite garanciju na svoj rad?",
      a: "Stojimo iza našeg rada. Većina naših popravki dolazi sa garancijom od godinu dana na rad, a nove instalacije često imaju produžene garancije proizvođača."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-gold text-brand-gold px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">Česta pitanja</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-brand-navy font-display">Česta pitanja</h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-slate-100 rounded-2xl px-6">
              <AccordionTrigger className="text-left font-bold text-brand-navy hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 font-light leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <EmergencyCTA />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
