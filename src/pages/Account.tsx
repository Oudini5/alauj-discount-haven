
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { toast } from "sonner";

const Account = () => {
  const [name, setName] = useState("Jean Dupont");
  const [email, setEmail] = useState("jean.dupont@example.com");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Profil mis à jour avec succès !", {
        description: "Vos informations ont été enregistrées.",
      });
    }, 1000);
  };

  const memberSince = new Date("2023-06-15").toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-secondary mb-4">
              <span className="text-3xl font-medium">JD</span>
            </div>
            <h1 className="heading-2 mb-2">Jean Dupont</h1>
            <p className="text-muted-foreground">
              Membre depuis {memberSince}
            </p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="w-full mb-8">
              <TabsTrigger value="profile" className="flex-1">Profil</TabsTrigger>
              <TabsTrigger value="orders" className="flex-1">Commandes</TabsTrigger>
              <TabsTrigger value="settings" className="flex-1">Paramètres</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="space-y-8">
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Informations personnelles</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="account-name">Nom complet</Label>
                    <Input 
                      id="account-name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="account-email">Email</Label>
                    <Input 
                      id="account-email" 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                          Enregistrement...
                        </>
                      ) : "Enregistrer les modifications"}
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">Adhésion</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Statut</p>
                    <p className="text-sm text-muted-foreground">Membre à vie</p>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Actif
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="orders">
              <div className="bg-card border rounded-lg p-6 text-center py-12">
                <h2 className="text-xl font-semibold mb-2">Aucune commande</h2>
                <p className="text-muted-foreground mb-6">
                  Vous n'avez pas encore passé de commande.
                </p>
                <Button variant="outline" onClick={() => window.location.href = '/nos-offres'}>
                  Découvrir nos produits
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="settings">
              <div className="bg-card border rounded-lg p-6 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-6">Préférences de notification</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Emails de nouveaux produits</p>
                        <p className="text-sm text-muted-foreground">Recevez des notifications lorsque de nouveaux produits sont ajoutés</p>
                      </div>
                      <div>
                        {/* Using a div since we can't modify the Switch component */}
                        <div className="h-6 w-11 rounded-full bg-primary flex items-center p-1 cursor-pointer">
                          <div className="h-4 w-4 rounded-full bg-white transform translate-x-5"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Emails de promotion</p>
                        <p className="text-sm text-muted-foreground">Recevez des emails concernant nos offres spéciales</p>
                      </div>
                      <div>
                        <div className="h-6 w-11 rounded-full bg-primary flex items-center p-1 cursor-pointer">
                          <div className="h-4 w-4 rounded-full bg-white transform translate-x-5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant="destructive"
                    className="w-full"
                    onClick={() => {
                      toast.error("Cette fonctionnalité n'est pas disponible", {
                        description: "Il s'agit d'une démo",
                      });
                    }}
                  >
                    Se déconnecter
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Account;
