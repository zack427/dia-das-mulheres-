import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import heroFlowers from "@/assets/hero-flowers.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroFlowers}
          alt="Flores românticas"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <Heart className="w-12 h-12 md:w-16 md:h-16 mx-auto text-primary animate-pulse-glow rounded-full p-2" fill="currentColor" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          8 de Março — Dia Internacional da Mulher
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-rose leading-tight mb-6"
        >
          Para a Mulher
          <br />
          Mais Especial
          <br />
          da Minha Vida
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-body italic max-w-lg mx-auto"
        >
          "Você é a poesia que eu nunca soube escrever, a música que eu sempre quis ouvir."
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#carta"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body text-sm tracking-wide hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            <Heart className="w-4 h-4" fill="currentColor" />
            Ler minha carta
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
