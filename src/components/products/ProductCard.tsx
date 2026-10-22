// src/components/products/ProductCard.tsx
import type { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { title, price, rating, thumbnail } = product;

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="h-48 w-full bg-gray-100 object-contain p-2"
      />

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 font-semibold text-gray-800">{title}</h3>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          <span className="text-sm text-yellow-600">⭐ {rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;