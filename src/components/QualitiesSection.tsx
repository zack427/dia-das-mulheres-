import { motion } from "framer-motion";
import { Heart, Star, Sun, Sparkles, Flower2, Crown } from "lucide-react";

const qualities = [
  { icon: Heart, title: "Amor", text: "Seu coração é a coisa mais bonita que eu já conheci" },
  { icon: Star, title: "Brilho", text: "Você ilumina cada canto por onde passa" },
  { icon: Sun, title: "Alegria", text: "Seu sorriso faz meus dias mais felizes" },
  { icon: Sparkles, title: "Magia", text: "Você transforma o comum em extraordinário" },
  { icon: Flower2, title: "Delicadeza", text: "A sua gentileza inspira todos ao redor" },
  { icon: Crown, title: "Força", text: "Sua determinação me enche de admiração" },
];

const QualitiesSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-rose">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient-rose mb-4">
            O Que Eu Mais Amo em Você
          </h2>
          <p className="text-muted-foreground font-body italic">
            Cada detalhe seu é um presente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((q, i) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-background/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-border shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                <q.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">{q.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{q.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitiesSection;
