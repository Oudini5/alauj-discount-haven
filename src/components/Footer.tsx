
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
              Alauj
            </Link>
            <p className="text-muted-foreground mt-2 mb-4">
              L'accès à l'électronique et l'électroménager de grandes marques à prix incroyablement bas.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/nos-offres" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Nos Offres
                </Link>
              </li>
              <li>
                <Link 
                  to="/devenir-membre" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Devenir Membre
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/mentions-legales" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link 
                  to="/conditions-generales" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link 
                  to="/politique-confidentialite" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a 
                  href="mailto:contact@alauj.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@alauj.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <a 
                  href="tel:+33123456789" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/devenir-membre">
                <Button className="gap-2 button-transition">
                  Devenir membre
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Alauj. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
