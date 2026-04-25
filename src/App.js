import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- BRAND DATA: CHAPTER NARRATIVES ---
const chapters = [
  { 
    id: "01",
    title: "Chapter I: Ignite", 
    sub: "The Spark", 
    notes: "Cedarwood • Black Pepper • Grapefruit • Lavender",
    desc: "The sudden surge of ambition that sets the journey in motion.",
    fullStory: "Ignite is the burst of energy that propels one forward, embodying the sudden surge of inspiration or ambition that sets the journey in motion. The warm, earthy cedarwood and spicy black pepper spark excitement, while the fresh grapefruit offers a burst of clarity. Lavender brings balance, symbolizing the beginning of a transformative path. This scent is for those who feel a quiet fire beginning to burn within them, igniting the desire to evolve.",
    image: "/chapter1.jpg" 
  },
  { 
    id: "02",
    title: "Chapter II: Horizon", 
    sub: "The Trail", 
    notes: "Amber • Honey • Vetiver • Lemon Peel",
    desc: "The long trail through challenges and growth.",
    fullStory: "Horizon captures the journey—the long trail that leads through challenges and growth. The amber and honey create a grounded sweetness, evoking a sense of perseverance and warmth, while vetiver symbolizes resilience and stability. The lemon peel adds a touch of brightness, signaling the promise of something new on the horizon. This fragrance is for those walking their path with unwavering determination, ready to overcome whatever lies ahead.",
    image: "/chapter2.jpg"
  },
  { 
    id: "03",
    title: "Chapter III: Lumen", 
    sub: "The Light", 
    notes: "Musk • White Amber • Sandalwood • Violet",
    desc: "The essence of inner peace and the clarity of transformation.",
    fullStory: "Lumen is the essence of inner peace and the clarity that comes with transformation. It’s the fragrance of reaching the light after navigating the darkness—an aura of calm, understanding, and fulfillment. The musk and sandalwood ground the scent, while the white amber radiates warmth and serenity. Violet adds a delicate, floral touch, representing purity and wisdom. This fragrance is for those who have walked their journey and arrived at a place of peace, their inner light shining through.",
    image: "/chapter3.jpg"
  }
];

function App() {
  const [email, setEmail] = useState("");
  const [activeStory, setActiveStory] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`The ritual has begun. ${email} is now part of the Founding Circle.`);
    setEmail("");
  };

  const scrollToCollection = () => {
    document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-obsidian text-bone min-h-screen font-sans selection:bg-gold selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 4 }}
          className="absolute inset-0 bg-gradient-to-b from-transparent to-obsidian z-0"
        />
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="z-10"
        >
          <p className="text-gold tracking-[.5em] uppercase text-[10px] mb-8 font-light">
            SomkayLumière
          </p>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8">
            Light, Forged <br/>
            <span className="italic text-gold font-light">in the Dark.</span>
          </h1>
          <div className="h-px w-12 bg-gold/40 mx-auto mb-12"></div>
          <button 
            onClick={scrollToCollection}
            className="px-12 py-4 border border-gold/30 text-gold text-[10px] tracking-[.3em] uppercase hover:bg-gold hover:text-black transition-all duration-1000"
          >
            Begin the Ritual
          </button>
        </motion.div>
      </section>

      {/* 2. THE PHILOSOPHY */}
      <section className="py-40 px-6 text-center bg-[#080808]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-serif italic text-3xl mb-6">Strength is forged in silence.</h2>
          <p className="text-neutral-500 font-light leading-relaxed tracking-wide italic">
            We are not trend-chasers. We are memory-keepers. <br/>
            Our fragrances are vessels of transformation for those <br/>
            who carry depth and emerge with grace.
          </p>
        </motion.div>
      </section>

      {/* 3. THE ALCHEMY COLLECTION */}
      <section id="collection" className="py-40 px-6 max-w-6xl mx-auto">
        <p className="text-center text-gold uppercase tracking-[.4em] text-[10px] mb-32">The Alchemy Collection</p>
        
        {chapters.map((ch, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className={`mb-60 flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}
          >
            <div className="w-full md:w-1/2 aspect-video bg-neutral-900 relative border border-white/5 overflow-hidden group">
              <img 
                src={process.env.PUBLIC_URL + ch.image} 
                alt={ch.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 z-10 relative"
                onError={(e) => e.target.style.display='none'} 
              />
              <div className="absolute inset-0 flex items-center justify-center text-gold/10 font-serif text-9xl z-0">
                {ch.id}
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-2">
                <p className="font-serif italic text-gold text-3xl">{ch.sub}</p>
                <h3 className="text-5xl font-serif tracking-tight">{ch.title}</h3>
              </div>
              <p className="text-gold text-[11px] tracking-widest uppercase">{ch.notes}</p>
              <p className="text-neutral-400 font-light leading-relaxed max-w-md">
                {ch.desc}
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setActiveStory(ch)}
                  className="text-bone text-[10px] tracking-widest uppercase border-b border-gold/50 pb-2 hover:text-gold transition-colors"
                >
                  Explore the Narrative
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 4. THE NARRATIVE VAULT (Removed parentheses) */}
      <AnimatePresence>
        {activeStory && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-obsidian/98 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-3xl w-full text-center space-y-12"
            >
              <p className="text-gold tracking-[.4em] uppercase text-[10px] font-light">{activeStory.title}</p>
              <h2 className="text-5xl md:text-7xl font-serif italic text-bone">{activeStory.sub}</h2>
              <div className="h-px w-24 bg-gold/20 mx-auto"></div>
              <p className="text-lg md:text-2xl text-neutral-200 font-light leading-relaxed font-serif italic px-4">
                {activeStory.fullStory}
              </p>
              <button 
                onClick={() => setActiveStory(null)}
                className="mt-12 text-gold text-[10px] tracking-[.4em] uppercase border border-gold/20 px-10 py-4 hover:bg-gold hover:text-black transition-all duration-500"
              >
                Close Ritual
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. THE FOUNDING CIRCLE */}
      <footer className="py-32 border-t border-white/5 bg-black text-center px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
          <h2 className="font-serif text-4xl mb-4 text-bone">Join the Founding Circle</h2>
          <p className="text-neutral-500 text-sm font-light mb-12 italic">Be the first to step into the light.</p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col md:flex-row gap-4 items-center">
            <input 
              required
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL" 
              className="bg-transparent border-b border-white/20 w-full py-3 outline-none focus:border-gold transition-colors font-light text-[11px] tracking-widest uppercase" 
            />
            <button type="submit" className="text-gold uppercase tracking-[.3em] text-[11px] whitespace-nowrap hover:text-white transition-colors">
              Subscribe
            </button>
          </form>
          
          <div className="mt-40 space-y-6">
            <div className="flex justify-center gap-8 mb-8">
              <a href="https://www.instagram.com/somkaylumiere" target="_blank" rel="noopener noreferrer" className="text-gold text-[10px] tracking-widest uppercase hover:text-white transition-colors">
                Instagram
              </a>
            </div>
            
            <p className="text-[9px] text-neutral-700 tracking-[.5em] uppercase">
              SomkayLumière • United States
            </p>
            <p className="text-[8px] text-neutral-800 tracking-widest uppercase">
              © 2026 Lumière Group. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </footer>

    </div>
  );
}

export default App;