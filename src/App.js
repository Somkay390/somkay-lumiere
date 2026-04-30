import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BRAND DATA ---
const chapters = [
  { 
    id: "01",
    title: "Chapter I: Ignite", 
    sub: "The Spark", 
    notes: "Cedarwood • Black Pepper • Grapefruit • Lavender",
    desc: "The sudden surge of ambition that sets the journey in motion.",
    fullStory: "Ignite is the burst of energy that propels one forward, embodying the sudden surge of inspiration or ambition that sets the journey in motion. The warm, earthy cedarwood and spicy black pepper spark excitement, while the fresh grapefruit offers a burst of clarity. Lavender brings balance, symbolizing the beginning of a transformative path.",
    image: "/chapter1.jpg?v=1" 
  },
  { 
    id: "02", 
    title: "Chapter II: Horizon", 
    sub: "The Trail", 
    notes: "Amber • Honey • Vetiver • Lemon Peel",
    desc: "The long trail through challenges and growth.",
    fullStory: "Horizon captures the journey—the long trail that leads through challenges and growth. The amber and honey create a grounded sweetness, evoking a sense of perseverance and warmth, while vetiver symbolizes resilience and stability. The lemon peel adds a touch of brightness, signaling the promise of something new on the horizon.",
    image: "/chapter2.jpg?v=1"
  },
  { 
    id: "03",
    title: "Chapter III: Lumen", 
    sub: "The Light", 
    notes: "Musk • White Amber • Sandalwood • Violet",
    desc: "The essence of inner peace and the clarity of transformation.",
    fullStory: "Lumen is the essence of inner peace and the clarity that comes with transformation. It’s the fragrance of reaching the light after navigating the darkness—an aura of calm, understanding, and fulfillment. The musk and sandalwood ground the scent, while the white amber radiates warmth and serenity.",
    image: "/chapter3.jpg?v=1"
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [activeStory, setActiveStory] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const mailchimpUrl = "https://somkaylumiere.us10.list-manage.com/subscribe/post?u=eac91ee493f8356103ccc3cc6&id=91fd2d2fb1&f_id=00e34ae4f0";

    const formData = new FormData();
    formData.append('EMAIL', email);

    try {
      await fetch(mailchimpUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      setStatus("success");
      alert(`YOU HAVE BEEN INITIATED.`);
      setEmail("");
    } catch (error) {
      setStatus("error");
      alert("THE RITUAL FAILED. PLEASE TRY AGAIN.");
    }
  };

  return (
    <div className="bg-obsidian text-bone min-h-screen selection:bg-gold selection:text-black overflow-x-hidden relative">
      
      {/* LIGHTNING SYSTEM */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
        <svg width="600" height="100%" preserveAspectRatio="none" className="overflow-visible opacity-30">
          <defs>
            <filter id="lightningGlow">
              <feGaussianBlur stdDeviation="4" result="glow" />
              <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <motion.path
            d="M 300 0 L 280 150 L 320 300 L 270 500 L 340 750 L 290 950 L 310 1200"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
            filter="url(#lightningGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, opacity: [0.1, 0.8, 0.2, 0.6, 0.1] }}
            transition={{ 
              pathLength: { duration: 2.5, ease: "easeIn" },
              opacity: { duration: 0.15, repeat: Infinity } 
            }}
          />
        </svg>
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center"
          >
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
              src="/logo.jpg" 
              className="w-48 mix-blend-screen"
            />
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 1, duration: 1.5 }}
              className="h-px bg-gold/30 mt-8"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={!loading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <img src="/logo.jpg" alt="Logo" className="w-24 md:w-32 mb-12 mix-blend-screen" />
          <p className="font-sans text-gold tracking-[.6em] uppercase text-[9px] mb-6 font-light">Somkay Lumière</p>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8 tracking-tight text-bone">
            Light, Forged <br/>
            <span className="italic text-gold font-extralight font-serif">in the Dark.</span>
          </h1>
          <div className="h-px w-8 bg-gold/40 mb-12"></div>
          <button 
            onClick={() => document.getElementById('philosophy').scrollIntoView({ behavior: 'smooth' })}
            className="font-sans px-10 py-4 border border-gold/20 text-gold text-[9px] tracking-[.4em] uppercase hover:bg-gold hover:text-black transition-all duration-700"
          >
            Begin the Ritual
          </button>
        </motion.div>
      </section>

      {/* 2. PHILOSOPHY & MANIFESTO */}
      <section id="philosophy" className="py-60 px-6 text-center relative z-10 bg-gradient-to-b from-transparent via-black/20 to-transparent">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* PHILOSOPHY IMAGE - Now Always in Color */}
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            src="/philosophy.jpg" 
            className="w-full max-w-xl mb-24 border border-white/5 shadow-2xl"
            alt="The Somkay Lumière Manifesto"
          />

          <div className="space-y-12">
            <h2 className="font-serif italic text-4xl md:text-6xl mb-8 text-bone/90 leading-tight">
              We do not hide the breaks. <br/> 
              <span className="text-gold">We gild them.</span>
            </h2>
            
            <div className="h-px w-12 bg-gold/30 mx-auto mb-10"></div>
            
            <div className="space-y-8 font-serif text-xl md:text-2xl text-neutral-300 font-light leading-relaxed italic max-w-2xl mx-auto">
              <p>
                "SomkayLumière is an identity system forged in the belief that our scars are not flaws, 
                but maps of where we have conquered."
              </p>
              <p>
                "We do not design for the untouched; we design for the resilient. Our scents are olfactory rituals, 
                transforming personal mythology into light."
              </p>
            </div>
            
            <p className="font-sans text-neutral-500 font-light leading-relaxed tracking-[.3em] text-[10px] uppercase pt-8">
              A Signature of Reclamation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ALCHEMY COLLECTION */}
      <section id="collection" className="py-40 px-6 max-w-6xl mx-auto relative z-10">
        {chapters.map((ch, i) => (
          <motion.div 
            key={i} 
            className={`mb-64 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}
          >
            <div className="w-full md:w-1/2 aspect-video bg-neutral-950 relative border border-white/5 overflow-hidden group">
              <img src={process.env.PUBLIC_URL + ch.image} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms]" alt={ch.title} />
              <div className="absolute inset-0 flex items-center justify-center text-gold/[0.03] font-serif text-[15rem] pointer-events-none italic">{ch.id}</div>
            </div>

            <div className="w-full md:w-1/2 space-y-10">
              <div>
                <p className="font-serif italic text-gold text-3xl mb-2">{ch.sub}</p>
                <h3 className="text-5xl font-serif tracking-tight">{ch.title}</h3>
              </div>
              <p className="font-sans text-gold/80 text-[10px] tracking-[.4em] uppercase border-l border-gold/30 pl-4">{ch.notes}</p>
              <p className="font-sans text-neutral-400 font-light leading-relaxed text-sm max-w-sm">
                {ch.desc}
              </p>
              <button 
                onClick={() => setActiveStory(ch)}
                className="font-sans text-bone text-[9px] tracking-[.4em] uppercase border-b border-gold/40 pb-2 hover:text-gold transition-all"
              >
                Explore Narrative
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 4. THE NARRATIVE VAULT */}
      <AnimatePresence>
        {activeStory && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-8 bg-obsidian/98 backdrop-blur-2xl"
          >
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-3xl text-center space-y-12">
              <p className="font-sans text-gold tracking-[.5em] uppercase text-[9px]">{activeStory.title}</p>
              <h2 className="text-6xl font-serif italic text-bone">{activeStory.sub}</h2>
              <p className="text-xl md:text-2xl text-neutral-200 font-serif italic font-light leading-relaxed">
                {activeStory.fullStory}
              </p>
              <button onClick={() => setActiveStory(null)} className="font-sans text-gold text-[9px] tracking-[.5em] uppercase border border-gold/20 px-12 py-4 hover:bg-gold hover:text-black transition-all">
                Close Ritual
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. FOOTER & FOUNDING CIRCLE */}
      <footer className="py-40 bg-black/50 border-t border-white/5 text-center px-6 relative z-10">
        <h2 className="font-serif text-3xl mb-4 text-bone">Join the Founding Circle</h2>
        <p className="font-sans text-neutral-500 text-[10px] tracking-widest uppercase mb-12 italic">Be the first to step into the light.</p>
        
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col md:flex-row gap-6 mb-24">
          <input 
            required 
            type="email" 
            name="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder={status === "sending" ? "TRANSMITTING..." : "YOUR EMAIL"} 
            className="bg-transparent border-b border-white/10 w-full py-4 outline-none focus:border-gold transition-colors font-sans text-[10px] tracking-widest uppercase text-center" 
          />
          <button 
            type="submit" 
            disabled={status === "sending"}
            className="font-sans text-gold uppercase tracking-[.3em] text-[10px] whitespace-nowrap hover:text-white transition-colors disabled:opacity-30"
          >
            {status === "sending" ? "Processing..." : "Subscribe"}
          </button>
        </form>

        <div className="space-y-12">
          <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/somkaylumiere" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-sans text-gold text-[9px] tracking-[.5em] uppercase hover:text-white transition-colors border border-gold/20 px-6 py-2"
            >
              Instagram
            </a>
          </div>
          
          <div className="space-y-4 opacity-30">
            <p className="font-sans text-[8px] tracking-[.6em] uppercase">Somkay Lumière • United States</p>
            <p className="font-sans text-[7px] tracking-widest uppercase italic text-gold">Scars into Light</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;