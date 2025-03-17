
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t py-12 md:py-16">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-display font-bold tracking-tight">Alauj</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Des produits de grandes marques à prix cassés, accessibles uniquement aux membres.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/nos-offres" className="text-muted-foreground hover:text-foreground transition-colors">
                  Nos Offres
                </Link>
              </li>
              <li>
                <Link to="/devenir-membre" className="text-muted-foreground hover:text-foreground transition-colors">
                  Devenir Membre
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cgv" className="text-muted-foreground hover:text-foreground transition-colors">
                  Conditions Générales de Vente
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-muted-foreground hover:text-foreground transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/retours" className="text-muted-foreground hover:text-foreground transition-colors">
                  Politique de Retour
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                contact@alauj.fr
              </li>
              <li className="text-muted-foreground">
                01 23 45 67 89
              </li>
              <li className="text-muted-foreground">
                123 Avenue des Bonnes Affaires<br />
                75000 Paris, France
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Alauj. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
