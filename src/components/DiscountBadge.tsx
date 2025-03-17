
import { motion } from "framer-motion";

interface DiscountBadgeProps {
  discountPercentage: number;
}

const DiscountBadge = ({ discountPercentage }: DiscountBadgeProps) => {
  if (!discountPercentage || discountPercentage <= 0) return null;

  return (
    <motion.div
      className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      -{discountPercentage}%
    </motion.div>
  );
};

export default DiscountBadge;
