
import { useRef, useState } from "react";
import { products } from "../lib/data";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.isFeatured);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      
      if (direction === "left") {
        container.scrollTo({
          left: container.scrollLeft - scrollAmount,
          behavior: "smooth"
        });
      } else {
        container.scrollTo({
          left: container.scrollLeft + scrollAmount,
          behavior: "smooth"
        });
      }
    }
  };
  
  const handleScrollUpdate = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setScrollPosition(container.scrollLeft);
    }
  };

  const showLeftButton = scrollPosition > 10;
  const showRightButton = scrollContainerRef.current ? 
    scrollPosition < scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - 10 : 
    true;

  return (
    <div className="relative w-full py-12">
      <div className="container-custom">
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-2">Meilleures Offres</h2>
          <div className="flex gap-2">
            <Button 
              size="icon" 
              variant="outline" 
              className={`rounded-full transition-opacity ${showLeftButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onClick={() => handleScroll("left")}
              aria-label="Produits précédents"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              className={`rounded-full transition-opacity ${showRightButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onClick={() => handleScroll("right")}
              aria-label="Produits suivants"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pb-8 px-4 md:px-8"
        onScroll={handleScrollUpdate}
      >
        {featuredProducts.map((product, index) => (
          <div key={product.id} className="min-w-[280px] md:min-w-[320px] flex-shrink-0">
            <ProductCard product={product} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
