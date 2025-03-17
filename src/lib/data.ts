import { Product, FAQItem, User } from './types';

// Mock products data
export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone Premium Ultra HD',
    brand: 'TechElite',
    description: 'Smartphone haut de gamme avec écran OLED, processeur ultra-rapide et appareil photo professionnel.',
    originalPrice: 1299.99,
    discountPrice: 649.99,
    discountPercentage: 50,
    category: 'Smartphones',
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Ordinateur Portable Ultra-Fin',
    brand: 'ComputerPlus',
    description: 'Ordinateur portable léger et puissant avec écran haute résolution et autonomie exceptionnelle.',
    originalPrice: 1599.99,
    discountPrice: 959.99,
    discountPercentage: 40,
    category: 'Ordinateurs',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Téléviseur Smart 4K 55"',
    brand: 'ViewPro',
    description: 'Téléviseur 4K avec technologie HDR, son Dolby Atmos et applications de streaming intégrées.',
    originalPrice: 999.99,
    discountPrice: 499.99,
    discountPercentage: 50,
    category: 'Téléviseurs',
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1',
    isFeatured: true
  },
  {
    id: '4',
    name: 'Casque Audio Sans Fil Premium',
    brand: 'SoundStyle',
    description: 'Casque audio sans fil avec réduction de bruit active, son haute-fidélité et autonomie de 30 heures.',
    originalPrice: 349.99,
    discountPrice: 234.99,
    discountPercentage: 33,
    category: 'Audio',
    imageUrl: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b',
    isFeatured: true
  },
  {
    id: '5',
    name: 'Réfrigérateur Américain Smart',
    brand: 'CoolTech',
    description: 'Réfrigérateur américain avec distributeur d\'eau, écran tactile et technologie de conservation avancée.',
    originalPrice: 2499.99,
    discountPrice: 1249.99,
    discountPercentage: 50,
    category: 'Électroménager',
    imageUrl: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5',
    isFeatured: false
  },
  {
    id: '6',
    name: 'Machine à Café Automatique',
    brand: 'CaféMax',
    description: 'Machine à café entièrement automatique avec broyeur à grains et système de mousse de lait.',
    originalPrice: 899.99,
    discountPrice: 629.99,
    discountPercentage: 30,
    category: 'Petit Électroménager',
    imageUrl: 'https://images.unsplash.com/photo-1570087655281-46de78ad8d46',
    isFeatured: false
  },
  {
    id: '7',
    name: 'Aspirateur Robot Intelligent',
    brand: 'CleanTech',
    description: 'Aspirateur robot avec cartographie laser, contrôle via application et autonomie de 180 minutes.',
    originalPrice: 599.99,
    discountPrice: 299.99,
    discountPercentage: 50,
    category: 'Petit Électroménager',
    imageUrl: 'https://images.unsplash.com/photo-1576611606841-61a8a2c5e7a0',
    isFeatured: false
  },
  {
    id: '8',
    name: 'Tablette Tactile Pro 11"',
    brand: 'TabElite',
    description: 'Tablette tactile haute performance avec écran Retina et puce ultra-rapide pour les professionnels.',
    originalPrice: 899.99,
    discountPrice: 449.99,
    discountPercentage: 50,
    category: 'Tablettes',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
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
