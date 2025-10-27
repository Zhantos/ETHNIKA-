import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface AddProductFormProps {
  onProductAdded: () => void;
}

export function AddProductForm({ onProductAdded }: AddProductFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('products').insert([
        {
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          image_url: 'placeholder',
          category: formData.category,
          stock: parseInt(formData.stock)
        }
      ]);

      if (error) throw error;

      setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: ''
      });
      setIsOpen(false);
      onProductAdded();
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error al agregar el producto');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#ED7014] to-[#FA8128] hover:from-[#FA8128] hover:to-[#FCAE1E] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-10"
      >
        <Plus size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-[#ED7014] to-[#FA8128] border-b px-6 py-4 flex items-center justify-between rounded-t-lg">
              <h2 className="text-2xl font-bold text-white">Agregar Producto</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-orange-100 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#893101] mb-1">
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-[#FCAE1E] rounded-lg focus:ring-2 focus:ring-[#ED7014] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#893101] mb-1">
                  Descripción
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border-2 border-[#FCAE1E] rounded-lg focus:ring-2 focus:ring-[#ED7014] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#893101] mb-1">
                    Precio
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-2 border-2 border-[#FCAE1E] rounded-lg focus:ring-2 focus:ring-[#ED7014] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#893101] mb-1">
                    Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full px-4 py-2 border-2 border-[#FCAE1E] rounded-lg focus:ring-2 focus:ring-[#ED7014] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#893101] mb-1">
                  Categoría
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-[#FCAE1E] rounded-lg focus:ring-2 focus:ring-[#ED7014] focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-[#ED7014] to-[#FA8128] hover:from-[#FA8128] hover:to-[#FCAE1E] disabled:from-gray-400 disabled:to-gray-400 text-white py-2 rounded-lg font-medium transition-all"
                >
                  {loading ? 'Guardando...' : 'Agregar Producto'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 border-2 border-[#ED7014] text-[#893101] rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
