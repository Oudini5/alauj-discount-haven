
import { Product, FAQItem, User } from './types';

// Mock products data
export const products: Product[] = [
  {
    id: '1',
    name: 'Chaussures de Sport Premium',
    brand: 'SportElite',
    description: 'Chaussures de sport haut de gamme avec technologie avancée d\'amorti et de soutien.',
    originalPrice: 189.99,
    discountPrice: 94.99,
    discountPercentage: 50,
    category: 'Chaussures',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Veste Imperméable Ultra-Légère',
    brand: 'OutdoorPlus',
    description: 'Veste imperméable légère et compacte, parfaite pour les activités en plein air.',
    originalPrice: 149.99,
    discountPrice: 89.99,
    discountPercentage: 40,
    category: 'Vêtements',
    imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Sac à Dos Nomade',
    brand: 'TravelPro',
    description: 'Sac à dos spacieux avec plusieurs compartiments et protection pour ordinateur portable.',
    originalPrice: 129.99,
    discountPrice: 64.99,
    discountPercentage: 50,
    category: 'Accessoires',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    isFeatured: true
  },
  {
    id: '4',
    name: 'Montre Connectée Series X',
    brand: 'TechStyle',
    description: 'Montre intelligente avec suivi de la santé, notifications et GPS intégré.',
    originalPrice: 299.99,
    discountPrice: 199.99,
    discountPercentage: 33,
    category: 'Électronique',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    isFeatured: true
  },
  {
    id: '5',
    name: 'Lunettes de Soleil Polarisées',
    brand: 'VisionPro',
    description: 'Lunettes de soleil avec verres polarisés offrant une protection UV complète.',
    originalPrice: 159.99,
    discountPrice: 79.99,
    discountPercentage: 50,
    category: 'Accessoires',
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
    isFeatured: false
  },
  {
    id: '6',
    name: 'Écouteurs Sans Fil Pro',
    brand: 'AudioMax',
    description: 'Écouteurs sans fil avec réduction de bruit active et autonomie exceptionnelle.',
    originalPrice: 249.99,
    discountPrice: 174.99,
    discountPercentage: 30,
    category: 'Électronique',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    isFeatured: false
  },
  {
    id: '7',
    name: 'Chemise en Lin Premium',
    brand: 'ElegantWear',
    description: 'Chemise en lin de haute qualité, légère et respirante pour un confort optimal.',
    originalPrice: 89.99,
    discountPrice: 44.99,
    discountPercentage: 50,
    category: 'Vêtements',
    imageUrl: 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d',
    isFeatured: false
  },
  {
    id: '8',
    name: 'Bouteille Isotherme Deluxe',
    brand: 'EcoLife',
    description: 'Bouteille isotherme maintenant vos boissons chaudes ou froides pendant des heures.',
    originalPrice: 39.99,
    discountPrice: 19.99,
    discountPercentage: 50,
    category: 'Accessoires',
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    isFeatured: false
  }
];

// Mock FAQ data
export const faqItems: FAQItem[] = [
  {
    question: "Comment fonctionne l'adhésion Alauj ?",
    answer: "L'adhésion Alauj est un paiement unique qui vous donne accès à vie aux prix réduits sur notre plateforme. Une fois membre, vous pouvez acheter autant d'articles que vous le souhaitez aux prix exclusifs réservés aux membres."
  },
  {
    question: "Quel est le coût de l'adhésion ?",
    answer: "L'adhésion coûte 29,99€ une seule fois. Il n'y a pas d'abonnement mensuel ou annuel, c'est un paiement unique pour un accès à vie."
  },
  {
    question: "D'où proviennent vos produits ?",
    answer: "Nos produits sont des surplus de stock, des fins de séries ou des retours de grandes marques. Tous les articles sont neufs et authentiques, avec leur garantie d'origine."
  },
  {
    question: "Comment sont calculées les réductions ?",
    answer: "Les réductions sont calculées par rapport au prix de vente conseillé par le fabricant. Elles varient généralement entre 30% et 70% selon les produits."
  },
  {
    question: "Quelle est votre politique de retour ?",
    answer: "Nous acceptons les retours dans les 14 jours suivant la réception de votre commande. Les articles doivent être non utilisés et dans leur emballage d'origine. Les frais de retour sont à la charge du client."
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les commandes sont généralement expédiées sous 1-2 jours ouvrables. La livraison prend ensuite 2-5 jours ouvrables selon votre localisation."
  }
];

// Mock user data (simulating a logged-in user or guest)
export const currentUser: User | null = null; // Set to null by default (guest)

// Mock membership benefits
export const membershipBenefits = [
  {
    title: "Accès Exclusif",
    description: "Accédez à des réductions exceptionnelles sur des produits de grandes marques."
  },
  {
    title: "Prix Cassés",
    description: "Profitez de remises allant jusqu'à 70% sur le prix de vente conseillé."
  },
  {
    title: "Nouveautés Régulières",
    description: "Découvrez chaque semaine de nouveaux produits à prix réduits."
  },
  {
    title: "Garantie d'Authenticité",
    description: "Tous nos produits sont neufs, authentiques et disposent de leur garantie d'origine."
  }
];
