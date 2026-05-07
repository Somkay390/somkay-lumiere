import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";

// --- BRAND DATA: THE ALCHEMY TRILOGY ---
const chapters = [
  { 
    id: "01",
    title: "Chapter I: Ignite", 
    sub: "The Spark", 
    notes: "Cedarwood • Black Pepper • Grapefruit",
    desc: "The sudden surge of ambition that sets the journey in motion.",
    fullStory: "Ignite is the burst of energy that propels one forward, embodying the sudden surge of inspiration or ambition that sets the journey in motion. The warm, earthy cedarwood and spicy black pepper spark excitement, while the fresh grapefruit offers a burst of clarity.",
    image: "/chapter1.jpg" 
  },
  { 
    id: "02", 
    title: "Chapter II: Horizon", 
    sub: "The Trail", 
    notes: "Amber • Honey • Vetiver",
    desc: "The long trail through challenges and growth.",
    fullStory: "Horizon captures the journey—the long trail that leads through challenges and growth. The amber and honey create a grounded sweetness, evoking a sense of perseverance and warmth, while vetiver symbolizes resilience and stability.",
    image: "/chapter2.jpg"
  },
  { 
    id: "03",
    title: "Chapter III: Lumen", 
    sub: "The Light", 
    notes: "Musk • White Amber • Sandalwood",
    desc: "The essence of inner peace and the clarity of transformation.",
    fullStory: "Lumen is the essence of inner peace and the clarity that comes with transformation. It’s the fragrance of reaching the light after navigating the darkness—an aura of calm, understanding, and fulfillment.",
    image: "/chapter3.jpg"
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [activeStory, setActiveStory] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    // Initialize Google Analytics (Kay's ID)
    ReactGA.initialize("G-WC35KK5TEN");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("sending");
    ReactGA.event({ category: "Conversion", action: "Joined Founding Circle" });

    const mailchimpUrl = "https://somkaylumiere.us10.list-manage.com/subscribe/post?u=eac91ee493f8356103ccc3cc6&id=91fd2d2fb1&f_id=00e34ae4f0";
    const formData = new FormData();
    formData.append('EMAIL', email);

    try {
      await fetch(mailchimpUrl, { method: 'POST', body: formData, mode: 'no-cors' });
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
            Identity, Forged <br/>
            <span className="italic text-gold font-extralight font-serif">in the Dark.</span>
          </h1>
          <button 
            onClick={() => document.getElementById('pillars').scrollIntoView({ behavior: 'smooth' })}
            className="font-sans px-10 py-4 border border-gold/20 text-gold text-[9px] tracking-[.4em] uppercase hover:bg-gold hover:text-black transition-all duration-700"
          >
            Explore the Architecture
          </button>
        </motion.div>
      </section>

      {/* 2. THE THREE PILLARS (Core Identity) */}
      <section id="pillars" className="py-40 px-6 bg-black relative z-10 border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-32">
          <div className="max-w-3xl">
            <p className="font-sans text-gold tracking-[.6em] uppercase text-[9px] mb-6">The Design House</p>
            <h2 className="text-4xl md:text-6xl font-serif text-bone leading-tight">
              A Design House of <br/>
              <span className="italic text-gold/80">Olfactory Artifacts.</span>
            </h2>
            <p className="font-serif text-xl text-neutral-400 italic mt-8 leading-relaxed">
              "We represent the intersection of brutalist minimalism and narrative identity. 
              We are the architects for those who see their presence as a series of deliberate chapters."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
            {/* Pillar 1 */}
            <div className="space-y-6">
              <h3 className="text-gold font-sans text-[10px] tracking-[.4em] uppercase border-l border-gold/30 pl-4">I. Identity System</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Fragrance is the invisible layer of your architecture. We don't follow seasonal trends; 
                we build a permanent library of self-expression. Each release is a narrative chapter.
              </p>
            </div>
            {/* Pillar 2 */}
            <div className="space-y-6">
              <h3 className="text-gold font-sans text-[10px] tracking-[.4em] uppercase border-l border-gold/30 pl-4">II. Technical Intimacy</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                We have rejected alcohol-based sprays. Our high-concentration oil extraits 
                sit on the skin rather than in the air. Tactile, intimate, and evolving.
              </p>
            </div>
            {/* Pillar 3 */}
            <div className="space-y-6">
              <h3 className="text-gold font-sans text-[10px] tracking-[.4em] uppercase border-l border-gold/30 pl-4">III. Brutalist Aesthetic</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Raw concrete. Heavy shadows. Unyielding weight. We strip away the fluff 
                to reveal the raw power of the material and the beauty in the shadow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KICKSTARTER & MANIFESTO */}
      <section className="py-40 px-6 bg-neutral-950 text-center relative z-10 border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="font-sans text-gold tracking-[.6em] uppercase text-[10px]">The Genesis</p>
          <h2 className="text-4xl md:text-6xl font-serif text-bone leading-tight">
            "We don't release products. <br/> 
            <span className="italic font-extralight text-gold/80 text-3xl md:text-5xl">We release Chapters."</span>
          </h2>
          
          <p className="font-serif text-lg text-neutral-500 italic max-w-2xl mx-auto leading-relaxed">
            Somkay Lumière is the quiet, heavy alternative for the observer and the architect. 
            Join the Founding Circle on Kickstarter to help us anchor our next Chapter.
          </p>

          <a 
            href="https://www.kickstarter.com/projects/somkaylumiere/somkay-lumiere-fragrance-as-identity"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => ReactGA.event({ category: "Conversion", action: "Clicked Kickstarter Link" })}
            className="inline-block font-sans px-12 py-5 border border-gold/30 text-gold text-[10px] tracking-[.4em] uppercase hover:bg-gold hover:text-black transition-all duration-700"
          >
            Enter the Campaign
          </a>
        </div>
      </section>

      {/* 4. ALCHEMY COLLECTION (CHAPTERS) */}
      <section id="collection" className="py-40 px-6 max-w-6xl mx-auto relative z-10">
        {chapters.map((ch, i) => (
          <motion.div 
            key={i} 
            className={`mb-64 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}
          >
            <div className="w-full md:w-1/2 aspect-video bg-neutral-950 relative border border-white/5 overflow-hidden group">
              <img src={ch.image} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms]" alt={ch.title} />
              <div className="absolute inset-0 flex items-center justify-center text-gold/[0.03] font-serif text-[15rem] pointer-events-none italic">{ch.id}</div>
            </div>
            <div className="w-full md:w-1/2 space-y-10 text-left">
              <div>
                <p className="font-serif italic text-gold text-3xl mb-2">{ch.sub}</p>
                <h3 className="text-5xl font-serif tracking-tight">{ch.title}</h3>
              </div>
              <p className="font-sans text-gold/80 text-[10px] tracking-[.4em] uppercase border-l border-gold/30 pl-4">{ch.notes}</p>
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

      {/* 5. MODAL: NARRATIVE VAULT */}
      <AnimatePresence>
        {activeStory && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-8 bg-obsidian/98 backdrop-blur-2xl"
          >
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-3xl text-center space-y-12">
              <p className="font-sans text-gold tracking-[.5em] uppercase text-[9px]">{activeStory.title}</p>
              <h2 className="text-6xl font-serif italic text-bone">{activeStory.sub}</h2>
              <p className="text-xl md:text-2xl text-neutral-200 font-serif italic font-light leading-relaxed">{activeStory.fullStory}</p>
              <button onClick={() => setActiveStory(null)} className="font-sans text-gold text-[9px] tracking-[.5em] uppercase border border-gold/20 px-12 py-4 hover:bg-gold hover:text-black transition-all">Close Ritual</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. FOOTER & FOUNDING CIRCLE */}
      <footer className="py-40 bg-black text-center px-6 relative z-10 border-t border-white/5">
        <p className="font-serif italic text-gold text-2xl mb-12">We are the light in the raw concrete.</p>
        
        <h2 className="font-serif text-3xl mb-12 text-bone">Join the Founding Circle</h2>
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col md:flex-row gap-6 mb-24">
          <input 
            required type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
            placeholder="YOUR EMAIL" 
            className="bg-transparent border-b border-white/10 w-full py-4 outline-none focus:border-gold transition-colors font-sans text-[10px] tracking-widest uppercase text-center text-bone" 
          />
          <button type="submit" className="font-sans text-gold uppercase tracking-[.3em] text-[10px] whitespace-nowrap hover:text-white transition-colors">
            Subscribe
          </button>
        </form>

        <div className="flex flex-col items-center space-y-6">
          <a href="https://www.instagram.com/somkaylumiere" target="_blank" rel="noopener noreferrer" className="font-sans text-gold text-[9px] tracking-[.5em] uppercase border border-gold/20 px-6 py-2 hover:bg-gold hover:text-black transition-all duration-500">Instagram</a>
          <p className="font-sans text-[8px] tracking-[.6em] uppercase opacity-30 mt-12">Somkay Lumière • United States</p>
        </div>
      </footer>

      {/* Vercel Analytics */}
      <Analytics /> 
    </div>
  );
}

export default App;