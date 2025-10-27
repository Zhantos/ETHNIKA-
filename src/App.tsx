import { Package } from 'lucide-react';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';
import { useProductFilters } from './hooks/useProductFilters';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ProductCard } from './components/ui/ProductCard';
import { Cart } from './components/ui/Cart';
import { AddProductForm } from './components/ui/AddProductForm';
import { ProductFilters } from './components/ui/ProductFilters';

function App() {
  const { products, loading, refetch } = useProducts();
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
  } = useCart();
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
    categories,
  } = useProductFilters(products);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header totalItems={totalItems} onCartClick={() => setIsCartOpen(true)} />

      <Hero />

      <section id="sobre-nosotros">
        <About />
      </section>

      <main id="productos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#893101] mb-4">
            Nuestros Productos Artesanales
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada producto cuenta una historia única de tradición, cultura y maestría artesanal
          </p>
        </div>

        <ProductFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#FCAE1E] border-t-[#ED7014]"></div>
            <p className="mt-4 text-[#893101] font-medium">Cargando productos...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block bg-gradient-to-br from-[#ED7014] to-[#FA8128] rounded-2xl p-6 shadow-lg mb-4 opacity-30">
              <Package size={64} className="text-white" />
            </div>
            <p className="text-xl text-[#893101] font-medium">
              {searchTerm || selectedCategory !== 'all'
                ? 'No se encontraron productos'
                : 'No hay productos disponibles'}
            </p>
            <p className="text-gray-600 mt-2">
              {searchTerm || selectedCategory !== 'all'
                ? 'Intenta con otros términos de búsqueda'
                : 'Pronto agregaremos más productos artesanales'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      <AddProductForm onProductAdded={refetch} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;
