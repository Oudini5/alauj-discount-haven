
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-hidden bg-background pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="absolute inset-0 z-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              Grandes marques à prix cassés
            </p>
          </motion.div>
          
          <motion.h1
            className="heading-1 mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Profitez de réductions exclusives sur des produits de qualité
          </motion.h1>
          
          <motion.p
            className="mb-10 mx-auto max-w-2xl text-lg text-muted-foreground text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Rejoignez Alauj pour accéder à des offres exceptionnelles sur des 
            articles neufs provenant des plus grandes marques, à des prix imbattables.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="button-transition shadow-lg shadow-primary/25"
              onClick={() => navigate("/nos-offres")}
            >
              Découvrir nos offres
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="button-transition"
              onClick={() => navigate("/devenir-membre")}
            >
              Devenir membre
            </Button>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>
  );
};

export default Hero;
