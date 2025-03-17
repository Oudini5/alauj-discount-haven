
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import MembershipCTA from "@/components/MembershipCTA";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Hero />
      
      <FeaturedProducts />
      
      <section className="w-full py-16 md:py-24">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&q=75" 
                  alt="Électronique et électroménager" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="heading-2 mb-4">Comment ça fonctionne</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Alauj propose un concept unique : l'accès à des produits électroniques et d'électroménager à prix cassés moyennant une adhésion unique. 
                Contrairement aux sites de vente classiques, nous vous proposons des réductions allant jusqu'à 70% sur des articles neufs et authentiques.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Inscrivez-vous</h3>
                    <p className="text-muted-foreground">
                      Créez votre compte et devenez membre en quelques clics.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Payez une seule fois</h3>
                    <p className="text-muted-foreground">
                      Un paiement unique de 290€ pour un accès à vie à nos offres.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">Profitez des réductions</h3>
                    <p className="text-muted-foreground">
                      Accédez à des milliers de produits à prix cassés, livrés directement chez vous.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/devenir-membre">
                  <Button className="button-transition gap-2">
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <MembershipCTA />
    </>
  );
};

export default Index;
