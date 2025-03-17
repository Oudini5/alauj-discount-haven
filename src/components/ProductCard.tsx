
import { Product } from "@/lib/types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DiscountBadge from "./DiscountBadge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { currentUser } from "@/lib/data";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMember = currentUser?.isMember;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  };

  return (
    <motion.div
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        )}
        <motion.img
          src={`${product.imageUrl}?w=600&auto=format&q=75`}
          alt={product.name}
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <DiscountBadge discountPercentage={product.discountPercentage} />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{product.brand}</p>
          <h3 className="mt-1 font-medium text-card-foreground">{product.name}</h3>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-sm line-through text-muted-foreground">
              {formatPrice(product.originalPrice)}
            </p>
            <p className="text-lg font-bold text-card-foreground">
              {formatPrice(product.discountPrice)}
            </p>
          </div>
          
          {isMember ? (
            <Button 
              size="sm" 
              className="button-transition"
            >
              Acheter
            </Button>
          ) : (
            <Button 
              size="sm" 
              variant="outline" 
              className="button-transition"
              onClick={() => navigate('/devenir-membre')}
            >
              Devenir Membre
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
