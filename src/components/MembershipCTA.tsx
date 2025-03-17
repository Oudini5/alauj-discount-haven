
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { membershipBenefits } from "@/lib/data";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const MembershipCTA = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative w-full py-16 md:py-24 bg-secondary/50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <motion.h2 
            className="heading-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rejoignez Alauj Aujourd'hui
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Un paiement unique de 290€ vous donne accès à vie à des réductions exceptionnelles.
          </motion.p>
        </div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {membershipBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg border p-6 shadow-sm"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button 
            size="lg" 
            className="button-transition gap-2 shadow-lg shadow-primary/25"
            onClick={() => navigate("/devenir-membre")}
          >
            Devenir membre maintenant
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default MembershipCTA;
