import { ShoppingCart, Package } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-orange-100">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
        <Package size={80} className="text-[#FCAE1E] opacity-30" />
        <div className="absolute inset-0 border-2 border-dashed border-[#ED7014] opacity-20 m-4"></div>
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Agotado</span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="text-sm text-[#ED7014] font-medium bg-orange-50 px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-[#893101] mb-2">{product.name}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[#893101]">
              ${product.price.toLocaleString('es-CO')}
            </span>
            <p className="text-xs text-gray-500 mt-1">Stock: {product.stock}</p>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="bg-gradient-to-r from-[#ED7014] to-[#FA8128] hover:from-[#FA8128] hover:to-[#FCAE1E] disabled:from-gray-400 disabled:to-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            <ShoppingCart size={18} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
