import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Music } from "lucide-react";

const moments = [
  {
    icon: Calendar,
    title: "O dia em que começamos a conversar",
    text: "O dia em que tudo mudou pra sempre",
  },
  {
    icon: Heart,
    title: "Nosso primeiro beijo",
    text: "O momento que ficou gravado na minha alma",
  },
  {
    icon: MapPin,
    title: "Nossas aventuras",
    text: "Cada lugar ao seu lado vira o meu favorito",
  },
  {
    icon: Music,
    title: "Nossa música",
    text: "every breath you take de The police",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-gold">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient-rose mb-4">
            Nossos Momentos
          </h2>
          <p className="text-muted-foreground font-body italic">
            Memórias que guardo no coração
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {moments.map((moment, i) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 z-10 shadow-lg" />

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
              >
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                      <moment.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">
                      {moment.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-body text-sm italic">
                    {moment.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
