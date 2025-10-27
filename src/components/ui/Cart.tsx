import { X, ShoppingBag, Trash2, Package } from 'lucide-react';
import { CartItem } from '../../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export function Cart({ isOpen, onClose, items, onRemoveItem, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div className="bg-white h-full w-full max-w-md flex flex-col shadow-xl">
        <div className="px-6 py-4 border-b bg-gradient-to-r from-[#ED7014] to-[#FA8128] flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <ShoppingBag size={24} />
            <h2 className="text-2xl font-bold">Carrito</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <ShoppingBag size={64} className="mb-4 text-[#FCAE1E]" />
              <p className="text-lg text-[#893101]">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded flex items-center justify-center">
                    <Package size={32} className="text-[#ED7014] opacity-50" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#893101]">{item.name}</h3>
                    <p className="text-sm text-[#ED7014] font-medium">
                      ${item.price.toLocaleString('es-CO')}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-8 h-8 bg-white hover:bg-[#FCAE1E] hover:text-white border border-[#ED7014] text-[#ED7014] rounded flex items-center justify-center transition-colors font-bold"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium text-[#893101]">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                        disabled={item.quantity >= item.stock}
                        className="w-8 h-8 bg-white hover:bg-[#FCAE1E] hover:text-white disabled:bg-gray-100 disabled:cursor-not-allowed border border-[#ED7014] text-[#ED7014] disabled:border-gray-300 disabled:text-gray-400 rounded flex items-center justify-center transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-6 py-4 space-y-4 bg-orange-50">
            <div className="flex justify-between items-center text-xl font-bold text-[#893101]">
              <span>Total:</span>
              <span>${total.toLocaleString('es-CO')}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-[#ED7014] to-[#FA8128] hover:from-[#FA8128] hover:to-[#FCAE1E] text-white py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg">
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
