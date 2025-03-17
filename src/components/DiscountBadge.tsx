
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface DiscountBadgeProps {
  discountPercentage: number;
  className?: string;
}

const DiscountBadge = ({ discountPercentage, className }: DiscountBadgeProps) => {
  return (
    <motion.div
      className={cn(
        "absolute top-4 right-4 bg-discount text-discount-foreground font-bold px-2 py-1 rounded-md z-10 shadow-md",
        className
      )}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      -{discountPercentage}%
    </motion.div>
  );
};

export default DiscountBadge;
