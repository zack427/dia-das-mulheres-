import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import heartRoses from "@/assets/heart-roses.jpg";

const LoveLetterSection = () => {
  return (
    <section id="carta" className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={heartRoses}
              alt="Coração de rosas"
              className="rounded-3xl shadow-2xl w-full animate-float"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-lg"
          >
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-primary" fill="currentColor" />
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Uma carta pra você
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Wendy meu amor,
            </h2>

            <div className="space-y-4 text-muted-foreground font-body text-sm md:text-base leading-relaxed italic">
              <p>
                Neste dia tão especial, quero que você saiba o quanto vc é
                importante na minha vida. Você é a razão dos meus sorrisos.
              </p>
              <p>
                Ser mulher é ter a força de um furacão e a delicadeza de uma
                flor. E você, meu amor, é a combinação perfeita de tudo isso.
              </p>
              <p>
                Obrigado por ser quem você é. Por me fazer querer ser alguém
                melhor a cada dia. Por transformar a minha vida em algo mágico.
              </p>
              <p className="text-foreground font-semibold not-italic">
                Te amo mais do que as palavras podem dizer. 💕
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-right font-display text-lg text-foreground italic">
                uma carta feita com todo o meu amor,
                <br />
                <span className="text-gradient-rose font-bold text-xl">
                  Isaac ❤️
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
