
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ title, price, image, category }: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-gray-500 uppercase">
          {category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-xl font-bold text-primary">
          R$ {price.toFixed(2)}
        </p>
      </div>
      <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="p-2 bg-primary rounded-full shadow-md hover:bg-primary/90 transition-colors"
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
