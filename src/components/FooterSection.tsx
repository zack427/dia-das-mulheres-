import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-20 px-6 text-center bg-gradient-rose">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto"
      >
        <Heart className="w-10 h-10 mx-auto text-primary mb-6" fill="currentColor" />
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient-rose mb-4">
          Feliz Dia da Mulher!
        </h2>
        <p className="text-muted-foreground font-body italic mb-8">
          Hoje e todos os dias, você merece o mundo. ✨
        </p>
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
          Feito com <Heart className="w-3 h-3 inline text-primary" fill="currentColor" /> para você
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
