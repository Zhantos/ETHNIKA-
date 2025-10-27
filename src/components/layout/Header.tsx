import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';

interface HeaderProps {
  totalItems: number;
  onCartClick: () => void;
}

export function Header({ totalItems, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-[#ED7014] to-[#FA8128] rounded-lg p-2 shadow-md">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 4L4 10V22L16 28L28 22V10L16 4Z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M16 8L8 12V20L16 24L24 20V12L16 8Z"
                  fill="currentColor"
                  className="text-amber-100"
                />
                <circle cx="16" cy="16" r="4" fill="white" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#893101] leading-none">ETHNIKA</h1>
              <p className="text-xs text-[#ED7014] tracking-wide">Esencia que conecta</p>
            </div>
          </div>

          <button
            onClick={onCartClick}
            className="relative bg-gradient-to-r from-[#ED7014] to-[#FA8128] hover:from-[#FA8128] hover:to-[#FCAE1E] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <ShoppingCartIcon size={20} />
            <span className="font-medium">Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#893101] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
