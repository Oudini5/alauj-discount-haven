
import { useState } from "react";
import { membershipBenefits } from "@/lib/data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ShieldCheck, Unlock } from "lucide-react";
import { toast } from "sonner";

const Membership = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Inscription réussie ! Vous êtes maintenant membre d'Alauj.", {
        description: "Vous allez être redirigé vers la page d'accueil.",
      });
      // In a real app, we would redirect or update state after successful payment
    }, 1500);
  };

  return (
    <div className="w-full pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-1 mb-4">Devenir Membre</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Rejoignez Alauj dès aujourd'hui et accédez à vie à des produits électroniques et d'électroménager avec des réductions allant jusqu'à 70%.
            </p>

            <div className="space-y-6 mb-8">
              {membershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 bg-secondary/50 p-4 rounded-lg mb-8">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-medium">Garantie satisfait ou remboursé</h3>
                <p className="text-sm text-muted-foreground">
                  Si vous n'êtes pas satisfait de votre adhésion dans les 30 jours, nous vous remboursons intégralement.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-xl border bg-card shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Votre adhésion</h2>
              
              <div className="flex justify-between items-center mb-6 pb-6 border-b">
                <div>
                  <h3 className="font-medium text-lg">Adhésion Alauj à vie</h3>
                  <p className="text-muted-foreground text-sm">Accès illimité à tous les produits</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">290€</p>
                  <p className="text-sm text-muted-foreground">Paiement unique</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input 
                    id="name" 
                    placeholder="Votre nom" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="votre@email.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full gap-2 shadow-lg shadow-primary/25 button-transition" 
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                        Traitement...
                      </>
                    ) : (
                      <>
                        <Unlock className="h-4 w-4" />
                        Devenir membre - 290€ à vie
                      </>
                    )}
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground mt-2">
                    En procédant au paiement, vous acceptez nos{" "}
                    <a href="/cgv" className="underline hover:text-foreground transition-colors">
                      Conditions Générales de Vente
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
